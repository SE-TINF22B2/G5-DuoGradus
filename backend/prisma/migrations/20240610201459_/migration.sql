-- CreateTable
CREATE TABLE "TaskLog" (
    "userId" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME,
    "status" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,

    PRIMARY KEY ("userId", "task")
);
