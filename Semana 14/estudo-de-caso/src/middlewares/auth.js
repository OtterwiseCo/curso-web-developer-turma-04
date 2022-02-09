import { verifyToken } from "../helpers/utils.js";

export const validateRequest = async (req, reply) => {
  try {
    const auth = req.headers["authorization"];
    const token = auth.replace("Bearer ", "");
    const user = await verifyToken(token);
    req.user = user;
  } catch (error) {
    return reply.status(401).send({ error: "Unauthorized" });
  }
};
