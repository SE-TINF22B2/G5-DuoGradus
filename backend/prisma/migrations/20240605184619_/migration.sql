-- CreateTable
CREATE TABLE "Points" (
    "userId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "streak" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "day"),
    CONSTRAINT "Points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
