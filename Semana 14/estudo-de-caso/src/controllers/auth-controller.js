import {
  hashPassword,
  prisma,
  comparePassword,
  createAccessToken,
} from "../helpers/utils.js";

export const signup = async (req, reply) => {
  const { email, password: pass } = req.body;
  try {
    const password = await hashPassword(pass);
    const { password: hashPass, ...user } = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    reply.status(400).send({ error: "user already exists" });
  }
};

export const login = async (req, reply) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    const { password: pass, ...rest } = user;
    return reply.send({
      data: {
        user: rest,
        accessToken: await createAccessToken(rest),
      },
    });
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Server Error" });
  }
};
