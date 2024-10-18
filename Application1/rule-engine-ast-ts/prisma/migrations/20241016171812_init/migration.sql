-- CreateTable
CREATE TABLE "Node" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT,
    "leftId" INTEGER,
    "rightId" INTEGER,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rule" (
    "id" SERIAL NOT NULL,
    "ruleString" TEXT NOT NULL,
    "astId" INTEGER NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Node_leftId_key" ON "Node"("leftId");

-- CreateIndex
CREATE UNIQUE INDEX "Node_rightId_key" ON "Node"("rightId");

-- CreateIndex
CREATE UNIQUE INDEX "Rule_astId_key" ON "Rule"("astId");

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_leftId_fkey" FOREIGN KEY ("leftId") REFERENCES "Node"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_rightId_fkey" FOREIGN KEY ("rightId") REFERENCES "Node"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_astId_fkey" FOREIGN KEY ("astId") REFERENCES "Node"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
