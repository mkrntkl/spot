import { Outlet } from "@remix-run/react";

type RecipesProps = {};

const Recipes = (props: RecipesProps) => {
  return (
    <main className="h-full w-full">
      <Outlet />
    </main>
  );
};

export default Recipes;
