CREATE TABLE IF NOT EXISTS public."Tokens"
(
    "customerId" bigint NOT NULL,
    "webToken" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("customerId", "webToken"),
    FOREIGN KEY("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
)

TABLESPACE pg_default;