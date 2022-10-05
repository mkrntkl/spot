import type { Recipe, User } from "@prisma/client";
import { prisma } from "~/db.server";

export function getRecipe({ id }: Pick<Recipe, "id">) {
  return prisma.recipe.findFirst({
    select: {
      id: true,
      name: true,
      body: true,
      coverImage: true,
      recipeSteps: true,
      createdAt: true,
      updatedAt: true,
    },
    where: { id },
  });
}

export function getRecipeList({ userId }: { userId?: User["id"] } = {}) {
  const queryArgs = {
    select: {
      id: true,
      name: true,
      coverImage: true,
      recipeSteps: true,
    },
    where: {},
  };

  if (userId) {
    queryArgs.where = userId ? { userId } : {};
  }

  return prisma.recipe.findMany({});
}
