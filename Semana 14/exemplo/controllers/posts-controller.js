import { prisma } from "../helpers/utils.js";

export const index = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    return posts;
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
};
