import client from "../providers/client";

export const listPosts = async (filter) => client.get("posts" + (filter || ""));
