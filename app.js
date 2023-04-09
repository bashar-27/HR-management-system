"use strict";

function Employee(employeeId,fullName,depatment,level,imageURL,salary){
     this.employeeId=employeeId;
     this.fullName=fullName;
     this.depatment=depatment;
     this.level=level;
     this.imageURL=imageURL;
     this.salary=salary;
};
let netSalary;
 Employee.prototype.calcSalary=function(){
    let empSalary;
    switch(this.level){
        case 'Senior':
            empSalary=Math.floor(Math.random()*(501))+1500;
           return  netSalary=empSalary-(empSalary* 7.5/100);
        case 'Mid_Senior':
            empSalary=Math.random()*(501)+1000;
            return  netSalary=empSalary-(empSalary* 7.5/100);
        case 'Junior':
            empSalary=Math.random()*(501)+500;
            return   netSalary=empSalary-(empSalary* (7.5/100));

    }
}

let emp1 = new Employee(1000, 'Ghazi Samer', 'Administration',  'Senior');
let emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
let emp3 = new Employee(1002, 'Tamara Ayoub	', 'Marketing', 'Senior');
let emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid_Senior');
let emp5 = new Employee(1004, '	Omar Zaid', 'Development', 'Senior');
let emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
let emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid_Senior');

   console.log(emp1);
   console.log(emp1.fullName+" Salary = "+emp1.calcSalary())