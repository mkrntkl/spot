import { json, type LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getRecipe } from "~/models/recipe.server";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export async function loader({ params }: LoaderArgs) {
  invariant(params.recipeId, "recipe id not found");
  const recipe = params.recipeId
    ? await getRecipe({ id: params.recipeId })
    : null;

  if (!recipe) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ recipe });
}

type RecipeDetailsProps = {};

const RecipeDetails = (props: RecipeDetailsProps) => {
  const { recipe } = useLoaderData<typeof loader>();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-evenly space-y-8">
      <div className="w-5/6 border-b p-8">{recipe.name}</div>
      <div className="flex h-full w-full flex-col sm:flex-row">
        <div className="h-[60vh] border-r p-8 sm:sticky sm:left-0 sm:top-0">
          <div className="text-center">{t("recipe.ingredients")}</div>
        </div>
        <div className="h-[2000px] p-8">
          <ul>
            {recipe.recipeSteps.map((recipeStep) => (
              <li className="pb-12" key={recipeStep.step}>
                <div>
                  {recipeStep.step}. {recipeStep.title}
                </div>
                <p className="py-2 text-sm">{recipeStep.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
