DROP USER IF EXISTS cms_user;
DROP DATABASE IF EXISTS cms_db;

CREATE USER cms_user WITH PASSWORD 'password';
CREATE DATABASE cms_db WITH OWNER cms_user;
