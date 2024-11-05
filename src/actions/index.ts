import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const server = {
  signUp: defineAction({
    accept: "form",
    input: z
      .object({
        name: z.string().trim().min(1).max(200),
        email: z.string().trim().min(1).email().max(200),
        password: z.string().min(8).max(200),
        repeatPassword: z.string().min(8).max(200),
      })
      .refine(({ password, repeatPassword }) => password === repeatPassword, {
        message: "Passwords don't match",
        path: ["repeatPassword"],
      }),
    handler: async (input) => {
      console.log(input);
      return 42;
    },
  }),
};

export { server };
