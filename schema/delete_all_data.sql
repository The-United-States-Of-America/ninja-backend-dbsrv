ALTER SEQUENCE user_pkey_sequence RESTART WITH 1;
ALTER SEQUENCE family_pkey_sequence RESTART WITH 1;

DELETE from "tb_FamilyRequests";
DELETE from "tb_Family";
DELETE from "tb_Client";
DELETE from "tb_User";
