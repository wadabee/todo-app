-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
