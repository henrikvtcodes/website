import { createClient } from "@urql/core";

export const hashnode = createClient({
  url: "https://api.hashnode.com/",
  fetchOptions: () => {
    const token: string = process.env.HASHNODE_TOKEN as string;
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});
