-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Points" (
    "userId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "streak" INTEGER NOT NULL,
    "goalReached" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("userId", "day"),
    CONSTRAINT "Points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Points" ("day", "points", "streak", "userId") SELECT "day", "points", "streak", "userId" FROM "Points";
DROP TABLE "Points";
ALTER TABLE "new_Points" RENAME TO "Points";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
