-- CreateTable
CREATE TABLE "Goal" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "target" REAL NOT NULL,
    "value" REAL NOT NULL,
    "metric" TEXT NOT NULL,
    "synced" DATETIME NOT NULL,

    PRIMARY KEY ("userId", "type"),
    CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
