import multer from "fastify-multer";
import path from "path";

import * as PostsController from "../controllers/posts-controller.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = {
  createPost: {
    method: "POST",
    url: "/posts",
    preHandler: upload.single("cover"),
    handler: PostsController.create,
  },
};

const renderRoutes = Object.values(routes);

export default (fastify, _, next) => {
  for (const route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
