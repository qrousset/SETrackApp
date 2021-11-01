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

\connect mmdb

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

CREATE TABLE cards (
    _id integer NOT NULL,
    market_id integer NOT NULL
);


ALTER TABLE cards OWNER TO mmadmin;

--
-- Name: cards__id_seq; Type: SEQUENCE; Schema: public; Owner: mmadmin
--

CREATE SEQUENCE cards__id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cards__id_seq OWNER TO mmadmin;

--
-- Name: cards__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mmadmin
--

ALTER SEQUENCE cards__id_seq OWNED BY cards._id;


--
-- Name: markets; Type: TABLE; Schema: public; Owner: mmadmin
--

CREATE TABLE markets (
    market_id integer NOT NULL,
    location character varying NOT NULL
);


ALTER TABLE markets OWNER TO mmadmin;

--
-- Name: cards _id; Type: DEFAULT; Schema: public; Owner: mmadmin
--

ALTER TABLE ONLY cards ALTER COLUMN _id SET DEFAULT nextval('cards__id_seq'::regclass);


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: mmadmin
--

COPY cards (_id, market_id) FROM stdin;
1	100001
2	100001
3	100001
4	100001
5	100001
6	100002
7	100002
17	100010
19	100006
20	100006
21	100007
22	100007
23	100011
24	100011
25	100008
26	100008
27	100008
28	100001
29	100001
30	100001
31	100001
32	100001
33	100001
34	100001
35	100001
36	100001
37	100001
38	100001
39	100001
\.


--
-- Data for Name: markets; Type: TABLE DATA; Schema: public; Owner: mmadmin
--

COPY markets (market_id, location) FROM stdin;
100001	Test1
100002	Test2
100003	Test3
100004	Test4
100005	Test5
100006	Test6
100007	Test7
100008	Test8
100009	Test9
100010	Test10
100011	Test11
\.


--
-- Name: cards__id_seq; Type: SEQUENCE SET; Schema: public; Owner: mmadmin
--

SELECT pg_catalog.setval('cards__id_seq', 39, true);


--
-- Name: cards cards_pk; Type: CONSTRAINT; Schema: public; Owner: mmadmin
--

ALTER TABLE ONLY cards
    ADD CONSTRAINT cards_pk PRIMARY KEY (_id);


--
-- Name: markets markets_pk; Type: CONSTRAINT; Schema: public; Owner: mmadmin
--

ALTER TABLE ONLY markets
    ADD CONSTRAINT markets_pk PRIMARY KEY (market_id);


--
-- Name: cards cards_fk0; Type: FK CONSTRAINT; Schema: public; Owner: mmadmin
--

ALTER TABLE ONLY cards
    ADD CONSTRAINT cards_fk0 FOREIGN KEY (market_id) REFERENCES markets(market_id);


--
-- Name: public; Type: ACL; Schema: -; Owner: mmadmin
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM mmadmin;
GRANT ALL ON SCHEMA public TO mmadmin;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- postgreSQL database dump complete
--

