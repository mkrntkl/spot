import { json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { getRecipeList } from "~/models/recipe.server";

export async function loader() {
  const recipeList = await getRecipeList();
  return json({ recipeList });
}

const Index = () => {
  const { recipeList } = useLoaderData<typeof loader>();
  const { t } = useTranslation();

  return recipeList.length === 0 ? (
    <div>{t("recipe.recipesNotFound")}</div>
  ) : (
    <div className="flex w-full flex-col space-y-4">
      <div className="w-full p-4 text-center uppercase">
        {t("recipe.recipes")}
      </div>
      <ul className="divide-y px-8">
        {recipeList.map((recipe) => (
          <li key={recipe.id} className="w-full py-1">
            <NavLink to={recipe.id}>
              <div className="flex w-full py-4">
                <img src={recipe.coverImage} alt="" className="max-w-[10rem]" />
                <div className="py-3">{recipe.name}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
