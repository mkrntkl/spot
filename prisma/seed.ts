import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "dickbutt@dr.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("dickbutt", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const recipe = await prisma.recipe.create({
    data: {
      name: "Neapolitan pizza",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.recipeStep.createMany({
    data: [
      {
        step: 1,
        title: "Dough",
        body: "Make dough",
        recipeId: recipe.id,
      },
      {
        step: 2,
        title: "Sauce",
        body: "Make sauce",
        recipeId: recipe.id,
      },
      {
        step: 3,
        title: "Toppings",
        body: "Put on toppings",
        recipeId: recipe.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
