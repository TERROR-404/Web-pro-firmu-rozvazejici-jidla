CREATE TABLE IF NOT EXISTS public."Customer"
(
    id integer NOT NULL DEFAULT nextval('"Customer_id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    "passwordHash" text COLLATE pg_catalog."default" NOT NULL,
    "phoneNumber" text COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Customer_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;