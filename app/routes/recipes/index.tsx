import { json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

import { getRecipeList } from "~/models/recipe.server";

export async function loader() {
  const recipeList = await getRecipeList();
  return json({ recipeList });
}

const Index = () => {
  const { recipeList } = useLoaderData<typeof loader>();

  return recipeList.length === 0 ? (
    <div>No recipes found</div>
  ) : (
    <div className="container flex items-center px-4 py-4">
      <ul>
        {recipeList.map((recipe) => (
          <li key={recipe.id}>
            <NavLink to={recipe.id}>{recipe.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
