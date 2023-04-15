"use strict";
// getEmpFromStorage();
// let allEmp = [];
// function Employee(employeeId, fullName, depatment, level, imageURL, salary) {
//   this.employeeId = employeeId;
//   this.fullName = fullName;
//   this.depatment = depatment;
//   this.level = level;
//   this.imageURL = imageURL;
//   this.salary = 0;
//   allEmp.push(this);
// }
// let countDev=0,countFin=0,countAdmin=0,countMarket=0;
// function setCount(allEmp){
//     for(let i=0; i<allEmp.length ; i++){
//         if(this.depatment === "Administration")
//         countAdmin++;
//         else if(allEmp[i].depatment ==="Finance")
//         countFin++;
//         else if(allEmp[i].depatment ==="Marketing")
//         countMarket++;
//         else 
//         countDev++;
//     }
// }

// let netSalary;
// Employee.prototype.calcSalary = function () {
//   let empSalary;
//   switch (this.level) {
//     case "Senior":
//       empSalary = Math.floor(Math.random() * 501) + 1500;
//       return (netSalary = parseInt(empSalary - (empSalary * 7.5) / 100));
//     case "Mid_Senior":
//       empSalary = Math.random() * 501 + 1000;
//       return (netSalary = parseInt(empSalary - (empSalary * 7.5) / 100));
//     case "Junior":
//       empSalary = Math.random() * 501 + 500;
//       return (netSalary = parseInt(empSalary - empSalary * (7.5 / 100)));
//   }
// };
// Employee.prototype.render = function() {
    
//     // document.write(`Employee Name is : ${this.fullName} and salary is = ${netSalary}<br/>`);
//      let employeesContainer = document.getElementById("employees-container");
  
//     let row = document.createElement("tr");
  
//     let idCell = document.createElement("td");
//     idCell.textContent =` ${this.depatment}`;
//     row.appendChild(idCell);
  
//     let nameCell = document.createElement("td");
//     nameCell.textContent = `${this.fullName}`;
//     row.appendChild(nameCell);
  
//     let departmentCell = document.createElement("td");
//     departmentCell.textContent = `${this.depatment}`;
//     row.appendChild(departmentCell);
  
//     let levelCell = document.createElement("td");
//     levelCell.textContent = `${this.level}`;
//     row.appendChild(levelCell);
  
//     let salaryCell = document.createElement("td");
//     salaryCell.textContent = `${this.calcSalary()}`;
//     row.appendChild(salaryCell);
  
//     employeesContainer.appendChild(row);
//    };
//    let emp1 = new Employee(
//     1000,
//     "Ghazi Samer",
//     "Administration",
//     "Senior",
//     "assets/Ghazi.jpg"
//   );
//   let emp2 = new Employee(
//     1001,
//     "Lana Ali",
//     "Finance",
//     "Senior",
//     "assets/Lana.jpg"
//   );
//   let emp3 = new Employee(
//     1002,
//     "Tamara Ayoub	",
//     "Marketing",
//     "Senior",
//     "assets/Tamara.jpg"
//   );
//   let emp4 = new Employee(
//     1003,
//     "Safi Walid",
//     "Administration",
//     "Mid_Senior",
//     "assets/Safi.jpg"
//   );
//   let emp5 = new Employee(
//     1004,
//     "	Omar Zaid",
//     "Development",
//     "Senior",
//     "assets/Omar.jpg"
//   );
//   let emp6 = new Employee(
//     1005,
//     "Rana Saleh",
//     "Development",
//     "Junior",
//     "assets/Rana.jpg"
//   );
//   let emp7 = new Employee(
//     1006,
//     "Hadi Ahmad",
//     "Finance",
//     "Mid_Senior",
//     "assets/Hadi.jpg"
//   );
  
//    emp1.render();
//    emp2.render();
//    emp3.render();
//    emp4.render();
//    emp5.render();
//    emp6.render();
//    emp7.render();
     
// let form = document.getElementById("empForm");

// //form.addEventListener("submit", newEmployee);

// function newEmployee(e) {
//   e.preventDefault();
//   let imgURL = e.target.image.value;
//   let name = e.target.FullName.value;
//   let dep = e.target.department.value;
//   let level = e.target.level.value;
//   let salary = 0;
//   let empId = 0;

//   let addEmp = new Employee(empId, name, dep, level, salary, imgURL);

//   addEmp.render();

 
//}


// Get employee data from local storage
let employees = JSON.parse(localStorage.getItem("allEmp"));

// let jsonArr = localStorage.getItem('allEmp');
// let dataFromStorage = JSON.parse(jsonArr);
// allEmp = dataFromStorage;

// Define table elements
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let tfoot = document.createElement("tfoot");

// Define table header row
let headerRow = document.createElement("tr");
let headerDepartment = document.createElement("th");
headerDepartment.textContent = "Department Name";
let headerNumEmployees = document.createElement("th");
headerNumEmployees.textContent = "# of employees";
let headerTotalSalary = document.createElement("th");
headerTotalSalary.textContent = "Total Salary";
let headerAverageSalary = document.createElement("th");
headerAverageSalary.textContent = "Average Salary";
headerRow.appendChild(headerDepartment);
headerRow.appendChild(headerNumEmployees);
headerRow.appendChild(headerTotalSalary);
headerRow.appendChild(headerAverageSalary);
thead.appendChild(headerRow);

// Define table body rows
let depName = {};
employees.forEach(employee => {
  if (!depName[employee.depatment]) {
    depName[employee.depatment] = {
      numEmployees: 0,
      totalSalary: 0,
      averageSalary: 0
    };
  }
  depName[employee.depatment].numEmployees++;
  depName[employee.depatment].totalSalary += employee.salary;
});
Object.keys(depName).forEach(department => {
  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  nameCell.textContent = department;
  let numEmployeesCell = document.createElement("td");
  numEmployeesCell.textContent = depName[department].numEmployees;
  let totalSalaryCell = document.createElement("td");
  totalSalaryCell.textContent = depName[department].totalSalary;
  let averageSalaryCell = document.createElement("td");
  averageSalaryCell.textContent =
    depName[department].totalSalary / depName[department].numEmployees;
  row.appendChild(nameCell);
  row.appendChild(numEmployeesCell);
  row.appendChild(totalSalaryCell);
  row.appendChild(averageSalaryCell);
  tbody.appendChild(row);
});

// Define table footer row
let footerRow = document.createElement("tr");
let footerDepartment = document.createElement("td");
footerDepartment.textContent = "Total";
let footerNumEmployees = document.createElement("td");
footerNumEmployees.textContent = employees.length;
let footerTotalSalary = document.createElement("td");
footerTotalSalary.textContent = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);
let footerAverageSalary = document.createElement("td");
footerAverageSalary.textContent =
  employees.reduce((total, employee) => total + employee.salary, 0) /
  employees.length;
footerRow.appendChild(footerDepartment);
footerRow.appendChild(footerNumEmployees);
footerRow.appendChild(footerTotalSalary);
footerRow.appendChild(footerAverageSalary);
tfoot.appendChild(footerRow);

// Append table elements to document
table.appendChild(thead);
table.appendChild(tbody);
table.appendChild(tfoot);
document.body.appendChild(table);
