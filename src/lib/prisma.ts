// src/lib/prisma.ts
import { PrismaClient } from '@/generated/prisma';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  process.env.NODE_ENV === 'production'
    ? new PrismaClient({ log: ['error'] }) // Solo errores en producción
    : globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
