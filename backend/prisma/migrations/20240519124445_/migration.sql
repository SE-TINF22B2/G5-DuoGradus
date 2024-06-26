-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "FitnessProviderCredential" (
    "type" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "accessTokenExpires" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "providerUserId" TEXT NOT NULL,
    CONSTRAINT "FitnessProviderCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FitnessProviderCredential_type_key" ON "FitnessProviderCredential"("type");

-- CreateIndex
CREATE UNIQUE INDEX "FitnessProviderCredential_userId_key" ON "FitnessProviderCredential"("userId");
