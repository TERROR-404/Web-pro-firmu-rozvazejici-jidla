CREATE TABLE IF NOT EXISTS public."Order"
(
    id integer NOT NULL DEFAULT nextval('"Order_id_seq"'::regclass),
    "customerId" bigint NOT NULL,
    CONSTRAINT "Order_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;