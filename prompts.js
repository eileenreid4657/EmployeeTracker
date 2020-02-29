var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./config/connection.js");

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "navigate",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View employees by department",
                "View employees by role",
                "View all employees",
                "Update existing employee roles",
                "Delete a department",
                "Delete a role",
                "Delete an employee",
                "Exit"
            ]
        })
        .then(function(answer) {
            if(answer.navigate === "Add Department") {
                addDept();
            } else if(answer.navigate === "Add Role") {
                addRole();
            } else if(answer.navigate === "Add Employee") {
                addEmployee();
            } else if(answer.navigate === "View employees by department") {
                viewEmpByDept();
            } else if(answer.navigate === "View employees by role") {
                viewEmpByRole();
            } else if(answer.navigate === "View all employees") {
                viewAll();
            } else if(answer.navigate === "Update existing employee roles") {
                updateRole();
            } else if(answer.navigate === "Delete a department") {
                deleteDept();
            } else if(answer.navigate === "Delete a role") {
                deleteRole();
            } else if(answer.navigate === "Delete an employee") {
                deleteEmp();
            } else {
                connection.end();
            }
        });
}

function addDept() {
    inquirer
        .prompt([
            {
                name: "dept",
                type: "list",
                message: "What department would you like to add?",
                choices: [
                    "Accounting",
                    "Legal",
                    "Finance",
                    "Sales",
                    "HR",
                    "IT"
                ]
            }
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO depts SET ?",
                {dept_name: answer.dept},
                function(err) {
                    if(err) throw err
                    console.log("The department was added successfully!")
                    start();
                }
            );
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: "What role would you like to add?",
                choices: [
                    "Bookeeper",
                    "Senior Accountant",
                    "Paralegal",
                    "Partner",
                    "Stock Broker",
                    "Senior Adviser",
                    "Sales Manager",
                    "Customer Service",
                    "Hiring Manager",
                    "Personnel"
                ]
            }
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO titles SET ?",
                {title_name: answer.role},
                function(err) {
                    if(err) throw err;
                    console.log("The role was added successfully!")
                    start();
                }
            );
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first",
                type: "input",
                message: "What is the employee's first name?"
                
            },
            {
                name: "last",
                type: "input",
                message: "What is the employee's last name?"
            },
           
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    first_name: answer.first,
                    last_name: answer.last
                    
                },
                function(err) {
                    if(err) throw err;
                    console.log("The employee was added successfully!")
                    start();
                }
            );
        });
}

function viewEmpByDept(){
    inquirer
        .prompt([
            {
                name: "dept",
                type: "list",
                message: "Which department would you like to view?",
                choices: [
                    "Accounting",
                    "Legal",
                    "Finance",
                    "Sales",
                    "HR",
                    "IT"
                ]
            }
        ])
        .then(function(answer) {
            connection.query('SELECT * FROM dept', function(err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res);
                
              });
        });
        };

function viewRole() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: "What role would you like to view?",
                choices: [
                    "Bookeeper",
                    "Senior Accountant",
                    "Paralegal",
                    "Partner",
                    "Stock Broker",
                    "Senior Adviser",
                    "Sales Manager",
                    "Customer Service",
                    "Hiring Manager",
                    "Personnel"
                ]
            }
        ])
        .then(function(answer) {
            connection.query(
                'SELECT * FROM title',
                {title_name: answer.role},
                function(err) {
                    if(err) throw err;
                    console.log("The role was viewed successfully!")
                    // start();
                }
            );
        });
}

function readEmployees() {
    console.log("Selecting all employees...\n");
    connection.query("SELECT * FROM employees", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      
    });
  }



function deleteRole() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: "What role would you like to delete?",
                choices: [
                    "Bookeeper",
                    "Senior Accountant",
                    "Paralegal",
                    "Partner",
                    "Stock Broker",
                    "Senior Adviser",
                    "Sales Manager",
                    "Customer Service",
                    "Hiring Manager",
                    "Personnel"
                ]
            }
        ])
        .then(function(answer) {
            connection.query(
                "DELETE FROM titles SET ?",
                {title_name: answer.role},
                function(err) {
                    if(err) throw err;
                    console.log("The role was removed successfully!")
                    // start();
                }
            );
        });

function deleteDept() {
    inquirer
        .prompt([
            {
                name: "dept",
                type: "list",
                message: "What department would you like to delete?",
                choices: [
                    "Accounting",
                    "Legal",
                    "Finance",
                    "Sales",
                    "HR",
                    "IT"
                ]
            }
        ])
        .then(function(answer) {
            connection.query(
                "DELETE FROM depts SET ?",
                {dept_name: answer.dept},
                function(err) {
                    if(err) throw err
                    console.log("The department was removed successfully!")
                    start();
                }
            );
        });
}

function deleteRole() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                message: "What role would you like to delete?",
                choices: [
                    "Bookeeper",
                    "Senior Accountant",
                    "Paralegal",
                    "Partner",
                    "Stock Broker",
                    "Senior Adviser",
                    "Sales Manager",
                    "Customer Service",
                    "Hiring Manager",
                    "Personnel"
                ]
            }
        ])
        .then(function(answer) {
            connection.query(
                "DELETE FROM titles SET ?",
                {title_name: answer.role},
                function(err) {
                    if(err) throw err;
                    console.log("The role was removed successfully!")
                    // start();
                }
            );
        });

function deleteEmployee() {
    inquirer
        .prompt([
            {
                name: "first",
                type: "input",
                message: "What is the employee's first name?"
                
            },
            {
                name: "last",
                type: "input",
                message: "What is the employee's last name?"
            },
           
        ])
        .then(function(answer) {
            connection.query(
                "DELETE FROM employees SET ?",
                {
                    first_name: answer.first,
                    last_name: answer.last
                    
                },
                function(err) {
                    if(err) throw err;
                    console.log("The employee was removed successfully!")
                    start();
                }
            );
        });

start();