import { prisma } from "../helpers/utils.js";

export const create = async (req, reply) => {
  const { title, content } = req.body;
  const file = req.file;
  console.log(file);
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        cover: file.path,
      },
    });
    return reply.status(201).send(post);
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};
