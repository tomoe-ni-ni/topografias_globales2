import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

function createPrismaClient() {
  const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "production" ? ["error"] : ["query"],
  });

  return prisma.$extends({
    query: {
      $allModels: {
        async create({ args, query }) {
          args.data = {
            ...args.data,
            created_at: new Date(),
            updated_at: new Date(),
          };
          return query(args);
        },
        async update({ args, query }) {
          args.data = {
            ...args.data,
            updated_at: new Date(),
          };
          return query(args);
        },
        async delete({ model, args }) {
          return (prisma as any)[model].update({
            where: args.where,
            data: { deleted_at: new Date() },
          });
        },

        async deleteMany({ model, args }) {
          return (prisma as any)[model].updateMany({
            where: args.where,
            data: { deleted_at: new Date() },
          });
        },
        async findMany({ args, query }) {
          args.where = {
            ...args.where,
            deleted_at: null,
          };
          return query(args);
        },
        /* async findUnique({ args, query }) {
          return (prisma as any).$extends({}).$allModels.findFirst({
            where: { ...args.where, deleted_at: null },
          });
        },*/
      },
    },
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
