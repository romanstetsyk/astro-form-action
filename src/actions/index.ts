import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const server = {
  testAction: defineAction({
    accept: "form",
    input: z.object({}),
    handler: async () => 42,
  }),
};

export { server };
