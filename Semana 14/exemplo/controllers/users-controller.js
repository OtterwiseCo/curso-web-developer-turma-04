import { prisma } from "../helpers/utils.js";

export const index = async (req, reply) => {
  const { orderBy } = req.query;
  const [field, value] = orderBy.split(".");
  try {
    const allUsers = await prisma.user.findMany({
      where: {
        email: {
          contains: "gmail.com",
        },
      },
      orderBy: [
        {
          [field]: value,
        },
      ],
    });
    return allUsers;
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
};

export const create = async (req, reply) => {
  try {
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
  } catch (error) {
    console.log(error);
    reply.status(500).send("Internal Server Error");
  }
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
