"use strict";

function Employee(employeeId,fullName,depatment,level,imageURL,salary){
     this.employeeId=employeeId;
     this.fullName=fullName;
     this.depatment=depatment;
     this.level=level;
     this.imageURL=imageURL;
     this.salary=0;
    
};
let netSalary;
 Employee.prototype.calcSalary=function(){
    let empSalary;
    switch(this.level){
        case 'Senior':
            empSalary=(Math.floor(Math.random()*(501))+1500);
           return  netSalary=parseInt(empSalary-(empSalary* 7.5/100));
        case 'Mid_Senior':
            empSalary=Math.random()*(501)+1000;
            return  netSalary=parseInt(empSalary-(empSalary* 7.5/100));
        case 'Junior':
            empSalary=Math.random()*(501)+500;
            return   netSalary=parseInt(empSalary-(empSalary* (7.5/100)));

    }

}

Employee.prototype.render = function() {
    
   // document.write(`Employee Name is : ${this.fullName} and salary is = ${netSalary}<br/>`);
    const employeesContainer = document.getElementById("employees-container");
 
   const row = document.createElement("tr");
 
   const idCell = document.createElement("td");
   idCell.textContent =` ${this.employeeId}`;
   row.appendChild(idCell);
 
   const nameCell = document.createElement("td");
   nameCell.textContent = `${this.fullName}`;
   row.appendChild(nameCell);
 
   const departmentCell = document.createElement("td");
   departmentCell.textContent = `${this.depatment}`;
   row.appendChild(departmentCell);
 
   const levelCell = document.createElement("td");
   levelCell.textContent = `${this.level}`;
   row.appendChild(levelCell);
 
   const salaryCell = document.createElement("td");
   salaryCell.textContent = `${this.calcSalary()}`;
   row.appendChild(salaryCell);
 
   employeesContainer.appendChild(row);
  };

    


let emp1 = new Employee(1000, 'Ghazi Samer', 'Administration',  'Senior','');
let emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
let emp3 = new Employee(1002, 'Tamara Ayoub	', 'Marketing', 'Senior');
let emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid_Senior');
let emp5 = new Employee(1004, '	Omar Zaid', 'Development', 'Senior');
let emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
let emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid_Senior');

emp1.calcSalary();
 emp1.render();

 emp2.calcSalary();
 emp2.render();

 emp3.calcSalary();
 emp3.render();

 emp4.calcSalary();
 emp4.render();

 emp5.calcSalary();
 emp5.render();

 emp6.calcSalary();
 emp6.render();

 emp7.calcSalary();
 emp7.render();

 
 emp7.calcSalary();
 emp7.render();




