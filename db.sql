-- create extension if not exists "uuid-ossp";
-- the above command will enable postgres to auto generate a uuid.

CREATE DATABASE "Crud";

CREATE TABLE  movie_review (
    profile_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    movie_name VARCHAR(255) NOT NULL,
    movie_review VARCHAR(500) NOT NULL 
);
