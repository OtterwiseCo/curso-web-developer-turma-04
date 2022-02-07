import * as UsersController from "../controllers/users-controller.js";
import * as PostsController from "../controllers/posts-controller.js";

const opts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "email"],
      properties: {
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
    },
  },
};

export default async function routes(fastify) {
  fastify.get("/users", UsersController.index);
  fastify.get("/users/:id", UsersController.show);
  fastify.post("/users", opts, UsersController.create);
  fastify.get("/posts", PostsController.index);
}
