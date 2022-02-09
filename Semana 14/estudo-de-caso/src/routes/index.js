import * as UsersController from "../controllers/users-controller.js";
import * as AuthController from "../controllers/auth-controller.js";
import { validateRequest } from "../middlewares/auth.js";

const routes = {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UsersController.index,
  },
  signup: {
    method: "POST",
    url: "/signup",
    handler: AuthController.signup,
  },
  login: {
    method: "POST",
    url: "/login",
    handler: AuthController.login,
  },
};

const renderRoutes = Object.values(routes);

export default (fastify, opts, next) => {
  for (const route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
