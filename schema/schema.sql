--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: topology; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA topology;


ALTER SCHEMA topology OWNER TO postgres;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';


--
-- Name: postgis_topology; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS postgis_topology WITH SCHEMA topology;


--
-- Name: EXTENSION postgis_topology; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis_topology IS 'PostGIS topology spatial types and functions';


SET search_path = public, pg_catalog;

--
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
-- Name: COLUMN "tb_Client".ssn; Type: COMMENT; Schema: public; Owner: uhrninja
--

COMMENT ON COLUMN "tb_Client".ssn IS 'Social Security #';


--
-- Name: tb_Family; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace: 
--

CREATE TABLE "tb_Family" (
    id bigint DEFAULT nextval('family_pkey_sequence'::regclass) NOT NULL,
    name character varying(128) NOT NULL
);


ALTER TABLE "tb_Family" OWNER TO uhrninja;

--
-- Name: tb_FamilyRequests; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace: 
--

CREATE TABLE "tb_FamilyRequests" (
    "clientId" bigint NOT NULL,
    "familyId" bigint NOT NULL
);


ALTER TABLE "tb_FamilyRequests" OWNER TO uhrninja;

--
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
-- Name: tb_OrganizationRequests; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace: 
--

CREATE TABLE "tb_OrganizationRequests" (
    "userId" bigint NOT NULL,
    "organizationId" bigint NOT NULL,
    "dateRequested" date DEFAULT now() NOT NULL
);


ALTER TABLE "tb_OrganizationRequests" OWNER TO uhrninja;

--
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
-- Name: tb_RefProviderTaxonomy; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace: 
--

CREATE TABLE "tb_RefProviderTaxonomy" (
    "providerId" bigint NOT NULL,
    "taxonomyCode" character varying(16) NOT NULL
);


ALTER TABLE "tb_RefProviderTaxonomy" OWNER TO uhrninja;

--
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
-- Name: tb_User; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace: 
--

CREATE TABLE "tb_User" (
    type_id integer NOT NULL,
    id bigint DEFAULT nextval('user_pkey_sequence'::regclass) NOT NULL
);


ALTER TABLE "tb_User" OWNER TO uhrninja;

--
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
-- Name: tb_UserType; Type: TABLE; Schema: public; Owner: uhrninja; Tablespace: 
--

CREATE TABLE "tb_UserType" (
    id integer DEFAULT nextval('usertype_pkey_sequence'::regclass) NOT NULL,
    type character varying(16)
);


ALTER TABLE "tb_UserType" OWNER TO uhrninja;

--
-- Name: administrator_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_pkey PRIMARY KEY (id);


--
-- Name: administrator_unique_email; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_unique_email UNIQUE (email);


--
-- Name: client_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- Name: client_unique_email; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_unique_email UNIQUE (email);


--
-- Name: client_unique_ssn; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_unique_ssn UNIQUE (ssn);


--
-- Name: family_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Family"
    ADD CONSTRAINT family_pkey PRIMARY KEY (id);


--
-- Name: familyrequests_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_FamilyRequests"
    ADD CONSTRAINT familyrequests_pkey PRIMARY KEY ("clientId");


--
-- Name: organization_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Organization"
    ADD CONSTRAINT organization_pkey PRIMARY KEY (id);


--
-- Name: organization_unique_name; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Organization"
    ADD CONSTRAINT organization_unique_name UNIQUE (name);


--
-- Name: organizationrequests_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_OrganizationRequests"
    ADD CONSTRAINT organizationrequests_pkey PRIMARY KEY ("userId", "organizationId");


--
-- Name: provider_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Provider"
    ADD CONSTRAINT provider_pkey PRIMARY KEY (id);


--
-- Name: provider_unique_identifier; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Provider"
    ADD CONSTRAINT provider_unique_identifier UNIQUE (ssn, npi);


--
-- Name: refprovidertaxonomy_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_RefProviderTaxonomy"
    ADD CONSTRAINT refprovidertaxonomy_pkey PRIMARY KEY ("providerId", "taxonomyCode");


--
-- Name: refuserorganization_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_RefUserOrganization"
    ADD CONSTRAINT refuserorganization_pkey PRIMARY KEY ("userId", "organizationId", "dateJoined");


--
-- Name: taxonomy_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_Taxonomy"
    ADD CONSTRAINT taxonomy_pkey PRIMARY KEY (code);


--
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_User"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: usertype_pkey; Type: CONSTRAINT; Schema: public; Owner: uhrninja; Tablespace: 
--

ALTER TABLE ONLY "tb_UserType"
    ADD CONSTRAINT usertype_pkey PRIMARY KEY (id);


--
-- Name: administrator_fkey_organization; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_fkey_organization FOREIGN KEY ("organizationId") REFERENCES "tb_Organization"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: administrator_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Administrator"
    ADD CONSTRAINT administrator_fkey_user FOREIGN KEY (id) REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: client_fkey_family; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_fkey_family FOREIGN KEY ("familyId") REFERENCES "tb_Family"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: client_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Client"
    ADD CONSTRAINT client_fkey_user FOREIGN KEY (id) REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: familyrequests_fkey_client; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_FamilyRequests"
    ADD CONSTRAINT familyrequests_fkey_client FOREIGN KEY ("clientId") REFERENCES "tb_Client"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: familyrequests_fkey_family; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_FamilyRequests"
    ADD CONSTRAINT familyrequests_fkey_family FOREIGN KEY ("familyId") REFERENCES "tb_Family"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: organizationrequests_fkey_organization; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_OrganizationRequests"
    ADD CONSTRAINT organizationrequests_fkey_organization FOREIGN KEY ("organizationId") REFERENCES "tb_Organization"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: organizationrequests_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_OrganizationRequests"
    ADD CONSTRAINT organizationrequests_fkey_user FOREIGN KEY ("userId") REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: provider_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_Provider"
    ADD CONSTRAINT provider_fkey_user FOREIGN KEY (id) REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: refprovidertaxonomy_fkey_provider; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefProviderTaxonomy"
    ADD CONSTRAINT refprovidertaxonomy_fkey_provider FOREIGN KEY ("providerId") REFERENCES "tb_Provider"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: refprovidertaxonomy_fkey_taxonomy; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefProviderTaxonomy"
    ADD CONSTRAINT refprovidertaxonomy_fkey_taxonomy FOREIGN KEY ("taxonomyCode") REFERENCES "tb_Taxonomy"(code) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: refuserorganization_fkey_organization; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefUserOrganization"
    ADD CONSTRAINT refuserorganization_fkey_organization FOREIGN KEY ("organizationId") REFERENCES "tb_Organization"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: refuserorganization_fkey_user; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_RefUserOrganization"
    ADD CONSTRAINT refuserorganization_fkey_user FOREIGN KEY ("userId") REFERENCES "tb_User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_fkey_usertype; Type: FK CONSTRAINT; Schema: public; Owner: uhrninja
--

ALTER TABLE ONLY "tb_User"
    ADD CONSTRAINT user_fkey_usertype FOREIGN KEY (type_id) REFERENCES "tb_UserType"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

