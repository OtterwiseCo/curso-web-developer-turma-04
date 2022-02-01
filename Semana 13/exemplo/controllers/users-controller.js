import { prisma } from "../helpers/utils.js";

export const index = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const create = async (req, reply) => {
  const { name, email, postTitle } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      ...(postTitle && {
        posts: {
          create: { title: postTitle },
        },
      }),
    },
  });
  reply.send(user);
};

export const show = async (req, reply) => {
  const user = await prisma.user.findUnique({
    where: {
      id: +req.params.id,
    },
  });

  if (!user) {
    reply.status(404).send("Usuário não encontrado");
  }
  return user;
};
