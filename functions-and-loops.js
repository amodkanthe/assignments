let numbers = [2, 4, 6, 8, 10, 12];
 for(let i=0;i<numbers.length;i++) {
    console.log(numbers[i]*numbers[i])
 }

 let prices = [500, 1200, 999, 2500, 750];

 const calculateDiscount = (price)=> {
    return price - (price * 15 / 100);
 }

 prices.forEach((price)=>{
    console.log(calculateDiscount(price))
 })

 let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 }
];

users.forEach((user)=>{
    if(user.age>=18) {
     console.log(user.name)
    }
 })


 let employees = [
  { name: "Aman", salary: 50000 },
  { name: "Priya", salary: 75000 },
  { name: "Rahul", salary: 62000 },
  { name: "Neha", salary: 48000 },
  { name: "Karan", salary: 90000 }
];

const calculateNetSalary = (name, salary)=> {
    let tds = salary * 10 / 100;
    let pf = salary * 5 / 100;

    return salary - tds - pf;
}

employees.forEach((emp)=>{
    console.log(`name: ${emp.name} ${calculateDiscount(emp.name, emp.salary)}`)

 })


 let users1 = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 }
];

console.log(users1.length)

console.log(users1.filter((user)=> user.age>=18).length)


console.log(users1.filter((user)=> user.age<18).length)

const oldestUser = users1.reduce((oldest, user) =>
    user.age > oldest.age ? user : oldest
);

console.log(oldestUser.name);

const totalAge = users.reduce((sum, user) =>
    sum + user.age, 0
);

console.log(totalAge);
console.log(totalAge / users.length); 