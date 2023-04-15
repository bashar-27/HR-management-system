"use strict";
let allEmp = [];
function Employee(employeeId, fullName, depatment, level, salary,imageURL ) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.depatment = depatment;
  this.level = level;
  this.salary = salary;
  this.imageURL = imageURL;
 allEmp.push(this);
}


// function calcSalary() {
//   for (let i = 0; i < allEmp.length; i++) {
  
//       if (allEmp[i].level == "Senior") {
//           allEmp[i].salary = Math.round(Math.floor(Math.random() * (2000 - 1500) + 1500))
//           allEmp[i].salary = parseInt(allEmp[i].salary - (allEmp[i].salary * 7.5 / 100))
//           return allEmp[i].salary;
//       }
//       else if (allEmp[i].level == "Mid-Senior") {
//           allEmp[i].salary = Math.round(Math.floor(Math.random() * (1500 - 1000) + 1000))
//           allEmp[i].salary = parseInt(allEmp[i].salary - (allEmp[i].salary * 7.5 / 100))
//           return allEmp[i].salary;
//       }
//       else {
//           allEmp[i].salary = Math.round(Math.floor(Math.random() * (1000 - 500) + 500))
//           allEmp[i].salary = parseInt(allEmp[i].salary - (allEmp[i].salary * 7.5 / 100))
//           return allEmp[i].salary;
//       }
//   }}
let netSalary;
 function calcSalary(){
    let empSalary;
    for (let i = 0; i< allEmp.length; i++) {
    
    
    switch(allEmp[i].level){
        case 'Senior':
            empSalary=(Math.floor(Math.random()*(501))+1500);
           return netSalary=parseInt(empSalary-(empSalary* 7.5/100));
           
            
        case 'Mid_Senior':
            empSalary=Math.random()*(501)+1000;
            return  netSalary=parseInt(empSalary-(empSalary* 7.5/100));
        case 'Junior':
            empSalary=Math.random()*(501)+500;
            return   netSalary=parseInt(empSalary-(empSalary* (7.5/100)));

    }
  }
}


  function generateEmployeeId () {
  let employeeId = "";
  const number = "0123456789";
  const numberLength = number.length;
  for (let i = 0; i < 4; i++) {
    employeeId += number.charAt(Math.floor(Math.random() * numberLength));
  }
  return employeeId;
};

 function renderCard() {

   getEmpFromStorage();
  if(allEmp == null){
    allEmp = []
  }
  const card = document.getElementById("card");
  for(let i=0 ; i<allEmp.length ; i++){

  const divEl = document.createElement("div");
  card.appendChild(divEl);

  let imgEl = document.createElement("img");
  divEl.appendChild(imgEl);
  //imgEl.src = this.imageURL;
  imgEl.src = allEmp[i].imageURL;
  
  const h3El = document.createElement("h3");
  h3El.textContent = `Name: ${allEmp[i].fullName} `;
  divEl.appendChild(h3El);
  
  const h5El = document.createElement("h5");
  h5El.textContent = `ID: ${allEmp[i].employeeId}`;
  divEl.appendChild(h5El);
  const h5Ell = document.createElement("h5");
  h5Ell.textContent = `Dep: ${allEmp[i].depatment}`;
  divEl.appendChild(h5Ell);
  
  const h4El = document.createElement("h4");
  h4El.textContent = `Level: ${allEmp[i].level}`;
  divEl.appendChild(h4El);
  
  // const salaryEl = document.createElement("p");
  // salaryEl.textContent = `Salary = ${allEmp[i].salary}JD`;
  // divEl.appendChild(salaryEl); 
  
   card.appendChild(divEl);

}};


// let emp1 = new Employee(
//   1000,
//   "Ghazi Samer",
//   "Administration",
//   "Senior",
//   "assets/Ghazi.jpg"
//   );
//   let emp2 = new Employee(
//     1001,
//     "Lana Ali",
//   "Finance",
//   "Senior",
//   "assets/Lana.jpg"
// );
// let emp3 = new Employee(
//   1002,
//   "Tamara Ayoub	",
//   "Marketing",
//   "Senior",
//   "assets/Tamara.jpg"
// );
// let emp4 = new Employee(
//   1003,
//   "Safi Walid",
//   "Administration",
//   "Mid_Senior",
//   "assets/Safi.jpg"
// );
// let emp5 = new Employee(
//   1004,
//   "	Omar Zaid",
//   "Development",
//   "Senior",
//   "assets/Omar.jpg"
// );
// let emp6 = new Employee(
//   1005,
//   "Rana Saleh",
//   "Development",
//   "Junior",
//   "assets/Rana.jpg"
// );
// let emp7 = new Employee(
//   1006,
//   "Hadi Ahmad",
//   "Finance",
//   "Mid_Senior",
//   "assets/Hadi.jpg"
// );


// emp1.renderCard();
// emp2.renderCard();
// emp3.renderCard();
// emp4.renderCard();
// emp5.renderCard();
// emp6.renderCard();
// emp7.renderCard();

// emp1.render();
// emp2.render();
// emp3.render();
// emp4.render();
// emp5.render();
// emp6.render();
// emp7.render();






let form = document.getElementById("empForm");

form.addEventListener("submit", newEmployee);

function newEmployee(e) {
  //e.preventDefault();
  let imgURL = e.target.imag.value;
  let name = e.target.FullName.value;
  let dep = e.target.department.value;
  let level = e.target.level.value;
  let salary = calcSalary()||542;
  let empId = generateEmployeeId();
  let addEmp = new Employee(empId, name, dep, level,salary, imgURL);


   console.log('allEmp Arr',allEmp)
  let jsonArr = JSON.stringify(allEmp);
  localStorage.setItem('allEmp',jsonArr);
  //console.log("allemp ",jsonArr);

}
function getEmpFromStorage(){
  let jsonArr = localStorage.getItem('allEmp');
  let dataFromStorage = JSON.parse(jsonArr);
  allEmp = dataFromStorage;
  // console.log("data storage",dataFromStorage)
}
console.log(allEmp);

getEmpFromStorage();
renderCard();

console.log(allEmp)
