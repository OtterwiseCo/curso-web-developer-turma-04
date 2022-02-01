import * as UsersController from "../controllers/users-controller.js";

export default async function routes(fastify) {
  fastify.get("/users", UsersController.index);
  fastify.get("/users/:id", UsersController.show);
  fastify.post("/users", UsersController.create);
}
