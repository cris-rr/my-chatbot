import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const productRepository = {
  getProduct(productId: number) {
    return prisma.product.findUnique({
      where: { id: productId },
    }); // Implementation to fetch product by ID
  },
};
