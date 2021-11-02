--
-- postgreSQL database dump
--

-- Dumped from database version 9.5.6
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: mmdb; Type: DATABASE; Schema: -; Owner: mmadmin
--

\connect SETrackApp

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: mmadmin
--

CREATE TABLE users (
    id_user integer NOT NULL PRIMARY KEY,
    user_last_name character varying NOT NULL,
    user_first_name character varying NOT NULL,
    oauth character varying NOT NULL,
    jwt character varying NOT NULL
);

ALTER TABLE users OWNER TO ruoikmfq;

CREATE SEQUENCE id_user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE id_user_seq OWNED BY users.id_user;

CREATE TABLE applications (
    app_id integer NOT NULL PRIMARY KEY,
    company_id integer NOT NULL REFERENCES companies (company_id),
    id_user integer NOT NULL REFERENCES users (id_user),
    app_status integer NOT NULL REFERENCES status (status_id),
    job_listing character varying NOT NULL,
    location character varying NOT NULL,
    app_notes character varying NOT NULL,
    app_sent date,
    sifted date,
    phone_screen date,
    interview1 date,
    interview2 date,
    on_site date,
    offer date,
    offer_amount integer NOT NULL,
    offer_amount2 integer NOT NULL,
    accepted date,
    declined date,
    rejected date
)

ALTER TABLE applications OWNER TO ruoikmfq;

CREATE SEQUENCE app_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE app_id_seq OWNED BY applications.app_id;

CREATE TABLE companies (
    company_id integer NOT NULL PRIMARY KEY,
    company_name character varying NOT NULL
)

ALTER TABLE companies OWNER TO ruoikmfq;

CREATE SEQUENCE company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE company_id_seq BY companies.company_id;

CREATE TABLE status (
    status_id integer NOT NULL PRIMARY KEY,
    status_name  character varying NOT NULL
)

ALTER TABLE status OWNER TO ruoikmfq;

CREATE SEQUENCE status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE status_id_seq BY status.status_id;