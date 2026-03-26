-- CreateTable
CREATE TABLE "suggestions" (
    "suggestion_id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "suggestion_message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "suggestions_title_key" ON "suggestions"("title");
