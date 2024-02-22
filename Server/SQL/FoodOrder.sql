CREATE TABLE IF NOT EXISTS public."FoodOrder"
(
    "orderId" bigint NOT NULL,
    "foodId" bigint NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT "FoodOrder_pkey" PRIMARY KEY ("orderId", "foodId")
)

TABLESPACE pg_default;