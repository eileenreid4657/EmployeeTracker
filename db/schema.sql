DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE depts
(
	id int NOT NULL AUTO_INCREMENT,
	dept_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE titles
(
	id int NOT NULL AUTO_INCREMENT,
	title_name varchar(30) NOT NULL,
	salary_cost decimal(30,2) NOT NULL,
	depts_id INT not null,
    PRIMARY KEY (id),
	FOREIGN KEY (depts_id) REFERENCES depts(id)
);
CREATE TABLE employees
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	PRIMARY KEY (id),
	titles_id INT NOT NULL,
	FOREIGN KEY (titles_id) REFERENCES titles(id)
);




