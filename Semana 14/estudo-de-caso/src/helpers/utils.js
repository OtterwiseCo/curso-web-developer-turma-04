import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");
import { hash, genSaltSync, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const envs = {
  JWT_SECRET: process.env.JWT_SECRET,
};

export const prisma = new PrismaClient();

export const hashPassword = (password) => {
  const salt = genSaltSync(10);
  return new Promise((resolve, reject) => {
    hash(password, salt, (err, saltedPassword) => {
      resolve(saltedPassword);
    });
  });
};

export const comparePassword = (password, hashedPassword) => {
  return new Promise((res, rej) => {
    compare(password, hashedPassword, (err, same) => {
      if (err) res(false);
      else res(same);
    });
  });
};

export const createAccessToken = (data) => {
  return new Promise((res, rej) => {
    jwt.sign(data, envs.JWT_SECRET, {}, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};

export const verifyToken = (token) => {
  return new Promise((res, rej) => {
    if (!token) {
      rej("Invalid Token");
      return;
    }

    jwt.verify(token, envs.JWT_SECRET, {}, (err, decoded) => {
      if (err) {
        rej("Invalid token");
        return;
      }

      res(decoded);
    });
  });
};
