import fastify from "fastify";
import helmet from "fastify-helmet";

import routes from "./routes/index.js";

const app = fastify({
  logger: true,
});

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
