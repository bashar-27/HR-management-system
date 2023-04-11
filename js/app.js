"use strict";

let allEmp = [];
function Employee(employeeId, fullName, depatment, level, imageURL, salary) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.depatment = depatment;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  allEmp.push(this);
}
let netSalary;
Employee.prototype.calcSalary = function () {
  let empSalary;
  switch (this.level) {
    case "Senior":
      empSalary = Math.floor(Math.random() * 501) + 1500;
      return (netSalary = parseInt(empSalary - (empSalary * 7.5) / 100));
    case "Mid_Senior":
      empSalary = Math.random() * 501 + 1000;
      return (netSalary = parseInt(empSalary - (empSalary * 7.5) / 100));
    case "Junior":
      empSalary = Math.random() * 501 + 500;
      return (netSalary = parseInt(empSalary - empSalary * (7.5 / 100)));
  }
};

Employee.prototype.generateEmployeeId = function () {
  let employeeId = "";
  const number = "0123456789";
  const numberLength = number.length;

  for (let i = 0; i < 4; i++) {
    employeeId += number.charAt(Math.floor(Math.random() * numberLength));
  }

  return employeeId;
};

// Employee.prototype.render = function () {
//   const employeesContainer = document.getElementById("employees-container");

//   const row = document.createElement("tr");

//   const idCell = document.createElement("td");
//   idCell.textContent = ` ${this.generateEmployeeId()}`;
//   row.appendChild(idCell);

//   const nameCell = document.createElement("td");
//   nameCell.textContent = `${this.fullName}`;
//   row.appendChild(nameCell);

//   const departmentCell = document.createElement("td");
//   departmentCell.textContent = `${this.depatment}`;
//   row.appendChild(departmentCell);

//   const levelCell = document.createElement("td");
//   levelCell.textContent = `${this.level}`;
//   row.appendChild(levelCell);

//   const salaryCell = document.createElement("td");
//   salaryCell.textContent = `${this.calcSalary()}`;
//   row.appendChild(salaryCell);

//   employeesContainer.appendChild(row);
// };

Employee.prototype.renderCard = function () {
  const card = document.getElementById("card");
  const divEl = document.createElement("div");

  let imgEl = document.createElement("img");
  divEl.appendChild(imgEl);
  //imgEl.src = this.imageURL;
  imgEl.src = this.imageURL;

  const h3El = document.createElement("h3");
  h3El.textContent = `Name: ${this.fullName} `;
  divEl.appendChild(h3El);

  const h5El = document.createElement("h5");
  h5El.textContent = `ID: ${this.generateEmployeeId()}`;
  divEl.appendChild(h5El);
  const h5Ell = document.createElement("h5");
  h5Ell.textContent = `Dep: ${this.depatment}`;
  divEl.appendChild(h5Ell);

  const h4El = document.createElement("h4");
  h4El.textContent = `Level: ${this.level}`;
  divEl.appendChild(h4El);

  const salaryEl = document.createElement("p");
  salaryEl.textContent = `Salary = ${this.calcSalary()}JD`;
  divEl.appendChild(salaryEl);

  card.appendChild(divEl);
};

let emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let emp2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let emp3 = new Employee(1002, "Tamara Ayoub	", "Marketing", "Senior","assets/Tamara.jpg");
let emp4 = new Employee(1003, "Safi Walid", "Administration", "Mid_Senior","assets/Safi.jpg");
let emp5 = new Employee(1004, "	Omar Zaid", "Development", "Senior","assets/Omar.jpg");
let emp6 = new Employee(1005, "Rana Saleh", "Development", "Junior","assets/Rana.jpg");
let emp7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid_Senior","assets/Hadi.jpg");

emp1.renderCard();
emp2.renderCard();
emp3.renderCard();
emp4.renderCard();
emp5.renderCard();
emp6.renderCard();
emp7.renderCard();

let form = document.getElementById("signupForm");

form.addEventListener("submit", newEmployee);

function newEmployee(e) {
  e.preventDefault();
  let imgURL = e.target.image.value;
  let name = e.target.FullName.value;
  let dep = e.target.department.value;
  let level = e.target.level.value;
  let salary = 0;
  let empId = 0;

  let addEmp = new Employee(empId, name, dep, level, salary,imgURL);
  //addEmp.render();
  addEmp.renderCard();
}
