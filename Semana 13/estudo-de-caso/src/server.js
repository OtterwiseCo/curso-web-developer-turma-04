import fastify from "fastify";
import multer from "fastify-multer";
import helmet from "fastify-helmet";
import fastifyStatic from "fastify-static";
import path from "path";

const __dirname = path.resolve();

import routes from "./routes/index.js";

const app = fastify({
  logger: true,
});

app.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

app.register(multer.contentParser);

app.register(helmet);

app.register(routes);

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`
  🚀 Server ready at: http://localhost:3000
  ⭐️ See sample requests: http://pris.ly/e/ts/rest-fastify#3-using-the-rest-api`);
});
