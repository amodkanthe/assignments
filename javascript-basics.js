let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

console.log(shoppingList[0])
shoppingList.push("Carrots")
console.log(shoppingList)
shoppingList.pop();
console.log(shoppingList);
shoppingList[4].splice(1, 2);
shoppingList[4].push("Cucumbers")
shoppingList[4].push("Bell Peppers")
console.log(shoppingList);

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

console.log(student.name);
student.phone = "123-456-7890";
console.log(student);
delete student.grade;
console.log(student);
student.age = 21;
console.log(student);

function determineNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(determineNumber(5));
console.log(determineNumber(-3));
console.log(determineNumber(0));

function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(85));
console.log(calculateGrade(72));
console.log(calculateGrade(55));

function truthyOrFalsy(value) {
    if (value) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(truthyOrFalsy(0));
console.log(truthyOrFalsy(""));
console.log(truthyOrFalsy(null));
console.log(truthyOrFalsy(undefined));
console.log(truthyOrFalsy(NaN));
console.log(truthyOrFalsy(false));
console.log(truthyOrFalsy(1));
console.log(truthyOrFalsy("Hello"));
console.log(truthyOrFalsy([]));
console.log(truthyOrFalsy({}));