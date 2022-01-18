import client from "../providers/client";

export const listUsers = async () => client.get("users");

export const getUser = async (id) => client.get(`users/${id}`);
