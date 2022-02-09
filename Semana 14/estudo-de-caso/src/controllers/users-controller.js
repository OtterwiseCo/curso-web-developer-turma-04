import { prisma } from "../helpers/utils.js";

export const index = async (req, reply) => {
  console.log("user", req.user);
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
    },
  });
  return users;
};
