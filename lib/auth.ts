import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  url: process.env.BETTER_AUTH_URL!,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
      tenantId: "common",
      requireSelectAccount: true,
    },
  },
});
