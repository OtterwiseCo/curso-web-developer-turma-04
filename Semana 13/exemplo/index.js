import Fastify from "fastify";

import usersRoute from "./routes/users-routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(usersRoute);

// Run the server!
fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
