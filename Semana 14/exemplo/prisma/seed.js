import { prisma } from "../helpers/utils.js";

const users = [
  {
    name: "joao",
    email: "joao@gmail.com",
  },
  {
    name: "guilherme",
    email: "guilherme@gmail.com",
  },
  {
    name: "luka",
    email: "luka@gmail.com",
  },
  {
    name: "yan",
    email: "yan@gmail.com",
  },
  {
    name: "paulo",
    email: "paulo@gmail.com",
  },
  {
    name: "rodrigo",
    email: "rodrigo@gmail.com",
  },
];

async function main() {
  await prisma.user.createMany({ data: users });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
