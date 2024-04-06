CREATE TABLE IF NOT EXISTS public."FoodOrder"
(
    "orderId" bigint NOT NULL,
    "foodId" bigint NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT "FoodOrder_pkey" PRIMARY KEY ("orderId", "foodId")
    FOREIGN KEY("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY("foodId") REFERENCES "Food" ("id") ON DELETE CASCADE ON UPDATE CASCADE
)

TABLESPACE pg_default;