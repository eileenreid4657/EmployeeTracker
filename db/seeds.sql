
INSERT INTO depts (dept_name) VALUES ('Accounting');
INSERT INTO depts (dept_name) VALUES ('Legal');
INSERT INTO depts (dept_name) VALUES ('Finance');
INSERT INTO depts (dept_name) VALUES ('Sales');
INSERT INTO depts (dept_name) VALUES ('HR');

INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Bookeeper', '40000',1);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Senior Accountant', '80000',1);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Paralegal', '30000', 2);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Partner', '90000',2);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Stock Broker', '100000',3);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Senior Advisor', '60000',3);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Manager', '75000',4);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Customer Service', '35000',4);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Manager', '55000',5);
INSERT INTO titles (title_name, salary_cost, depts_id) VALUES ('Personnel', '45000',5);

INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Dan', 'Ackroyd', 1);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Bill', 'Murray',1);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Harold', 'Ramis',2);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Rick', 'Moranus',2);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Ernie', 'Hudson',3);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Sigourney', 'Weaver',3);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Annie', 'Potts',4);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Alice', 'Drummond',4);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('William', 'Atherson',5);
INSERT INTO employees (first_name, last_name, titles_id) VALUES ('Stephen', 'Tash',5);
