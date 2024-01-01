// #1. (It's an error because identifier name 1 has already been declared)
// const name1 = "Ram"
// const name1 = "ritika"
// console.log(name1, name1)

// #2
// const name1 = "Ram"
// const name2 = "Ritika"
// console.log(name1, name2)

// #3 (it's an error because identifier has already been  declared)
// let name1 = "Ram"
// let name1 ="Ritika"
// console.log(name1, name2)

// #4
// let name1 = "Ram"
// let name2 = "Ritika"
// console.log(name1, name2)

// #5
// let name1 = "ritika", name2 = "Ram", name3 = "Krishna"
// console.log(name1, name2, name3)

// #6
// let name1 = "Ram"
// name1 = "Ritika"
// console.log(name1)

// #7
// var name1 = "Ram"
// console.log(name1)

// #8
// var name1 = "Ram"
// name1 = "Ritika"
// console.log(name1)

// #9
// var name1 = "Ram"
// var name2 = "Ritika"
// var name3 = "Shyam"
// console.log(name1, name2, name3)

// #10
// var name1 = "Ram", name2 = "Ritika", name3 = "Shyam"
// console.log(name1,name2,name3)

// #11 (in this name1 = undefined. Do here's an output is undefined Ritika)
// let name1, name2 = "Ritika"
// console.log(name1, name2)

//#12 variable Scope( Scope means how a variable will be visible after it is Declared)
// Global Scope
// var firstName = "Tina"
// let parentName = "Tamana"
// const lastName = "Tarun"
// console.log(firstName, parentName, lastName )

// #13
// let firstName = "Tina"
// let lastName = "Tarun"
// console.log(firstName, lastName)

// #14
// let firstName = "Piyush"
// let lastName = "kumar"
// console.log(firstName)
// console.log(lastName)

// #15 ( if we put variable without keywords they all are in the global scope)
// {
//     firstName = "Ritika"
//     lastName = "Bhatia"
//     console.log(firstName, lastName)

// }

// #16 Block Scope(Block scope when we declared a variable inside a {} is called block scope.Only let, const keywords are used in block scope. if we use var keywords are inside {} is not in block scope)
// 17
// {
//     let firstName = "Ritika"
//     console.log(firstName)
// }

// #18 (it's a reference error because we invoke it outside the bracket's)
// {
//     let firstName = "Ritika"
// }
// console.log(firstName)

// #19 Functional Scope(means when a variable is declared inside a functio.when a variable is in functioanl scope we can call / invoke it only in that function. when we call/invoke outside that function, then we got an error)

// #20
// function sayHello(){
//     var firstName = "Ritika"
//     console.log(firstName)
// }
// sayHello()

// #21 ( in this we got a reference error because we call /invoke outside the function)
// function sayHello() {
//     var firstName = "Ritika"
// }
// sayHello();
// console.log(firstName)

// #22
// function sayHello(){
//    let firstName = "Ritika"
//    let parentName = "Tina"
//    let  lastName = "Tarun"
//     console.log(firstName, parentName, lastName)
// }
// sayHello();

// #23(in this we got a reference error beacuse we call / invoke outside the function)
// function sayHello() {
//   let firstName = "Ritika";
//   let parentName = "Tina";
//   let lastName = "Tarun";
// }
// sayHello();
// console.log(firstName, parentName, lastName)

