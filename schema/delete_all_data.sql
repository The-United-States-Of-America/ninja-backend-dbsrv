ALTER SEQUENCE user_pkey_sequence RESTART WITH 1;
ALTER SEQUENCE family_pkey_sequence RESTART WITH 1;
ALTER SEQUENCE organization_pkey_sequence RESTART WITH 1;

DELETE from "tb_FamilyRequests";
DELETE from "tb_Family";
DELETE from "tb_Client";
DELETE from "tb_Provider";
DELETE from "tb_Administrator";
DELETE from "tb_RefProviderTaxonomy";
DELETE from "tb_User";

DELETE from "tb_Organization";
