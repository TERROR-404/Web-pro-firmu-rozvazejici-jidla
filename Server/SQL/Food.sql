CREATE TABLE IF NOT EXISTS public."Food"
(
    id integer NOT NULL DEFAULT nextval('"Food_id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    price integer NOT NULL,
    type text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Food_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;