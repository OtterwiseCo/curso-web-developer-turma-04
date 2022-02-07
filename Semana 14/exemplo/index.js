import Fastify from "fastify";

import routes from "./routes/routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

// Run the server!
fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
