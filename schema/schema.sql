--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.4
-- Dumped by pg_dump version 9.4.0
-- Started on 2015-11-02 23:20:29

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

--
-- TOC entry 179 (class 1259 OID 32791)
-- Name: family_pkey_sequence; Type: SEQUENCE; Schema: public; Owner: uhrninja
--

CREATE SEQUENCE family_pkey_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE family_pkey_sequence OWNER TO uhrninja;

--
-- TOC entry 180 (class 1259 OID 32794)
-- Name: organization_pkey_sequence; Type: SEQUENCE; Schema: public; Owner: uhrninja
--

CREATE SEQUENCE organization_pkey_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE organization_pkey_sequence OWNER TO uhrninja;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 183 (class 1259 OID 32824)
-- Name: tb_Administrator; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Administrator" (
    id bigint NOT NULL,
    email character varying(64) NOT NULL,
    "organizationId" bigint,
    "firstName" character varying(64) NOT NULL,
    "lastName" character varying(64) NOT NULL,
    password character varying(1024) NOT NULL
);


ALTER TABLE "tb_Administrator" OWNER TO uhrninja;

--
-- TOC entry 208 (class 1259 OID 34367)
-- Name: tb_Appointments; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Appointments" (
    "clientId" bigint NOT NULL,
    "providerId" bigint NOT NULL,
    "dateRequested" timestamp with time zone DEFAULT now() NOT NULL,
    state integer DEFAULT 1 NOT NULL,
    info text,
    comments text
);


ALTER TABLE "tb_Appointments" OWNER TO uhrninja;

--
-- TOC entry 173 (class 1259 OID 16386)
-- Name: tb_Client; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Client" (
    id bigint NOT NULL,
    ssn bigint NOT NULL,
    "familyId" bigint,
    "firstName" character varying(64) NOT NULL,
    "lastName" character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    password character varying(1024) NOT NULL
);


ALTER TABLE "tb_Client" OWNER TO uhrninja;

--
-- TOC entry 3479 (class 0 OID 0)
-- Dependencies: 173
-- Name: COLUMN "tb_Client".ssn; Type: COMMENT; Schema: public; Owner: uhrninja
--

COMMENT ON COLUMN "tb_Client".ssn IS 'Social Security #';


--
-- TOC entry 174 (class 1259 OID 24582)
-- Name: tb_Family; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Family" (
    id bigint DEFAULT nextval('family_pkey_sequence'::regclass) NOT NULL,
    name character varying(128) NOT NULL
);


ALTER TABLE "tb_Family" OWNER TO uhrninja;

--
-- TOC entry 175 (class 1259 OID 24592)
-- Name: tb_FamilyRequests; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_FamilyRequests" (
    "clientId" bigint NOT NULL,
    "familyId" bigint NOT NULL
);


ALTER TABLE "tb_FamilyRequests" OWNER TO uhrninja;

--
-- TOC entry 181 (class 1259 OID 32796)
-- Name: tb_Organization; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Organization" (
    id bigint DEFAULT nextval('organization_pkey_sequence'::regclass) NOT NULL,
    name character varying(1024) NOT NULL,
    state character varying(2) NOT NULL,
    address character varying(1024) NOT NULL,
    zip character varying(5) NOT NULL,
    phone character varying(16) NOT NULL
);


ALTER TABLE "tb_Organization" OWNER TO uhrninja;

--
-- TOC entry 186 (class 1259 OID 32871)
-- Name: tb_OrganizationRequests; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_OrganizationRequests" (
    "userId" bigint NOT NULL,
    "organizationId" bigint NOT NULL,
    "dateRequested" date DEFAULT now() NOT NULL
);


ALTER TABLE "tb_OrganizationRequests" OWNER TO uhrninja;

--
-- TOC entry 182 (class 1259 OID 32809)
-- Name: tb_Provider; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Provider" (
    id bigint NOT NULL,
    ssn bigint NOT NULL,
    npi bigint NOT NULL,
    "firstName" character varying(64) NOT NULL,
    "lastName" character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    password character varying(1024) NOT NULL,
    prefix character varying(16) NOT NULL
);


ALTER TABLE "tb_Provider" OWNER TO uhrninja;

--
-- TOC entry 187 (class 1259 OID 32887)
-- Name: tb_RefProviderTaxonomy; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_RefProviderTaxonomy" (
    "providerId" bigint NOT NULL,
    "taxonomyCode" character varying(16) NOT NULL
);


ALTER TABLE "tb_RefProviderTaxonomy" OWNER TO uhrninja;

--
-- TOC entry 188 (class 1259 OID 32902)
-- Name: tb_RefUserOrganization; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_RefUserOrganization" (
    "userId" bigint NOT NULL,
    "organizationId" bigint NOT NULL,
    "dateJoined" date DEFAULT now() NOT NULL,
    "dateLeft" date
);


ALTER TABLE "tb_RefUserOrganization" OWNER TO uhrninja;

--
-- TOC entry 176 (class 1259 OID 32768)
-- Name: tb_Taxonomy; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_Taxonomy" (
    code character varying(16) NOT NULL,
    type character varying(512) NOT NULL,
    classification character varying(512) NOT NULL,
    specialization character varying(512)
);


ALTER TABLE "tb_Taxonomy" OWNER TO uhrninja;

--
-- TOC entry 185 (class 1259 OID 32852)
-- Name: user_pkey_sequence; Type: SEQUENCE; Schema: public; Owner: uhrninja
--

CREATE SEQUENCE user_pkey_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_pkey_sequence OWNER TO uhrninja;

--
-- TOC entry 184 (class 1259 OID 32842)
-- Name: tb_User; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_User" (
    type_id integer NOT NULL,
    id bigint DEFAULT nextval('user_pkey_sequence'::regclass) NOT NULL
);


ALTER TABLE "tb_User" OWNER TO uhrninja;

--
-- TOC entry 178 (class 1259 OID 32788)
-- Name: usertype_pkey_sequence; Type: SEQUENCE; Schema: public; Owner: uhrninja
--

CREATE SEQUENCE usertype_pkey_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE usertype_pkey_sequence OWNER TO uhrninja;

--
-- TOC entry 177 (class 1259 OID 32780)
-- Name: tb_UserType; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace:
--

CREATE TABLE "tb_UserType" (
    id integer DEFAULT nextval('usertype_pkey_sequence'::regclass) NOT NULL,
    type character varying(16)
);


ALTER TABLE "tb_UserType" OWNER TO uhrninja;

--
-- TOC entry 3328 (class 2606 OID 32831)
-- Name: administrator_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_pkey PRIMARY KEY (id);


--
-- TOC entry 3330 (class 2606 OID 32833)
-- Name: administrator_unique_email; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_unique_email UNIQUE (email);


--
-- TOC entry 3340 (class 2606 OID 34409)
-- Name: appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Appointments"
    ADD CONSTRAINT appointments_pkey PRIMARY KEY ("clientId", "providerId", "dateRequested");


--
-- TOC entry 3306 (class 2606 OID 24579)
-- Name: client_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- TOC entry 3308 (class 2606 OID 24577)
-- Name: client_unique_email; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_unique_email UNIQUE (email);


--
-- TOC entry 3310 (class 2606 OID 24581)
-- Name: client_unique_ssn; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_unique_ssn UNIQUE (ssn);


--
-- TOC entry 3312 (class 2606 OID 24586)
-- Name: family_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Family"
    ADD CONSTRAINT family_pkey PRIMARY KEY (id);


--
-- TOC entry 3314 (class 2606 OID 24596)
-- Name: familyrequests_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_FamilyRequests"
    ADD CONSTRAINT familyrequests_pkey PRIMARY KEY ("clientId");


--
-- TOC entry 3320 (class 2606 OID 32804)
-- Name: organization_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Organization"
    ADD CONSTRAINT organization_pkey PRIMARY KEY (id);


--
-- TOC entry 3322 (class 2606 OID 32806)
-- Name: organization_unique_name; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Organization"
    ADD CONSTRAINT organization_unique_name UNIQUE (name);


--
-- TOC entry 3334 (class 2606 OID 34366)
-- Name: organizationrequests_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_OrganizationRequests"
    ADD CONSTRAINT organizationrequests_pkey PRIMARY KEY ("userId", "organizationId", "dateRequested");


--
-- TOC entry 3324 (class 2606 OID 32814)
-- Name: provider_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Provider"
    ADD CONSTRAINT provider_pkey PRIMARY KEY (id);


--
-- TOC entry 3326 (class 2606 OID 32818)
-- Name: provider_unique_identifier; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Provider"
    ADD CONSTRAINT provider_unique_identifier UNIQUE (ssn, npi);


--
-- TOC entry 3336 (class 2606 OID 32891)
-- Name: refprovidertaxonomy_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_RefProviderTaxonomy"
    ADD CONSTRAINT refprovidertaxonomy_pkey PRIMARY KEY ("providerId", "taxonomyCode");


--
-- TOC entry 3338 (class 2606 OID 32907)
-- Name: refuserorganization_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_RefUserOrganization"
    ADD CONSTRAINT refuserorganization_pkey PRIMARY KEY ("userId", "organizationId", "dateJoined");


--
-- TOC entry 3316 (class 2606 OID 32775)
-- Name: taxonomy_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_Taxonomy"
    ADD CONSTRAINT taxonomy_pkey PRIMARY KEY (code);


--
-- TOC entry 3332 (class 2606 OID 32846)
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_User"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3318 (class 2606 OID 32784)
-- Name: usertype_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace:
--

ALTER TABLE ONLY "tb_UserType"
    ADD CONSTRAINT usertype_pkey PRIMARY KEY (id);


--
-- TOC entry 3346 (class 2606 OID 32834)
-- Name: administrator_fkey_organization; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_fkey_organization FOREIGN KEY ("organizationId") REFERENCES "tb_Organization"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3347 (class 2606 OID 32856)
-- Name: administrator_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_fkey_user FOREIGN KEY (id) REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3355 (class 2606 OID 34377)
-- Name: appointments_client_fkey; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Appointments"
    ADD CONSTRAINT appointments_client_fkey FOREIGN KEY ("clientId") REFERENCES "tb_Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3356 (class 2606 OID 34382)
-- Name: appointments_provider_fkey; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Appointments"
    ADD CONSTRAINT appointments_provider_fkey FOREIGN KEY ("providerId") REFERENCES "tb_Provider"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3341 (class 2606 OID 24587)
-- Name: client_fkey_family; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_fkey_family FOREIGN KEY ("familyId") REFERENCES "tb_Family"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3342 (class 2606 OID 32861)
-- Name: client_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_fkey_user FOREIGN KEY (id) REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3343 (class 2606 OID 24597)
-- Name: familyrequests_fkey_client; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_FamilyRequests"
    ADD CONSTRAINT familyrequests_fkey_client FOREIGN KEY ("clientId") REFERENCES "tb_Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3344 (class 2606 OID 24602)
-- Name: familyrequests_fkey_family; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_FamilyRequests"
    ADD CONSTRAINT familyrequests_fkey_family FOREIGN KEY ("familyId") REFERENCES "tb_Family"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3350 (class 2606 OID 32882)
-- Name: organizationrequests_fkey_organization; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_OrganizationRequests"
    ADD CONSTRAINT organizationrequests_fkey_organization FOREIGN KEY ("organizationId") REFERENCES "tb_Organization"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3349 (class 2606 OID 32877)
-- Name: organizationrequests_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_OrganizationRequests"
    ADD CONSTRAINT organizationrequests_fkey_user FOREIGN KEY ("userId") REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3345 (class 2606 OID 32866)
-- Name: provider_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Provider"
    ADD CONSTRAINT provider_fkey_user FOREIGN KEY (id) REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3351 (class 2606 OID 32892)
-- Name: refprovidertaxonomy_fkey_provider; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefProviderTaxonomy"
    ADD CONSTRAINT refprovidertaxonomy_fkey_provider FOREIGN KEY ("providerId") REFERENCES "tb_Provider"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3352 (class 2606 OID 32897)
-- Name: refprovidertaxonomy_fkey_taxonomy; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefProviderTaxonomy"
    ADD CONSTRAINT refprovidertaxonomy_fkey_taxonomy FOREIGN KEY ("taxonomyCode") REFERENCES "tb_Taxonomy"(code) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3354 (class 2606 OID 32913)
-- Name: refuserorganization_fkey_organization; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefUserOrganization"
    ADD CONSTRAINT refuserorganization_fkey_organization FOREIGN KEY ("organizationId") REFERENCES "tb_Organization"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3353 (class 2606 OID 32908)
-- Name: refuserorganization_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefUserOrganization"
    ADD CONSTRAINT refuserorganization_fkey_user FOREIGN KEY ("userId") REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3348 (class 2606 OID 32847)
-- Name: user_fkey_usertype; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_User"
    ADD CONSTRAINT user_fkey_usertype FOREIGN KEY (type_id) REFERENCES "tb_UserType"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-11-02 23:20:30

--
-- PostgreSQL database dump complete
--
