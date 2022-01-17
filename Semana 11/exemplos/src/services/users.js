import client from "../providers/client";

export const listUsers = async () => client.get("users");
