CREATE TABLE IF NOT EXISTS public."Tokens"
(
    "customerId" bigint NOT NULL,
    "webToken" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("customerId", "webToken")
)

TABLESPACE pg_default;