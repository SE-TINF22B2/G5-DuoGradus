import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Regular user
  await prisma.user.create({
    data: {
      displayName: 'Max Mustermann',
      email: 'max@example.org',
      password: hashSync('1234', 1),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();

    process.exit(1);
  });
