import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { randomInt } from 'crypto';
import * as dayjs from 'dayjs';

const prisma = new PrismaClient();

async function main() {
  // Regular user
  const testUser1 = await prisma.user.create({
    data: {
      displayName: 'Max Mustermann',
      email: 'max@example.org',
      password: hashSync('1234', 1),
    },
  });

  // Create a streak history for the user
  const dayAsNumber = parseInt(dayjs().format('YYMMDD'));

  for (let i = 0; i < 10; i++) {
    await prisma.points.create({
      data: {
        userId: testUser1.id,
        day: dayAsNumber - i,
        points: randomInt(0, 15),
        streak: 10 - i,
      },
    });
  }
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
