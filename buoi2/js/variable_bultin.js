// input, output ------------------------------------
// alert("This is a notification!"); // khong tra ve du lieu
// const isStudent = confirm("Are you a student?"); //=> bool
// console.log(isStudent);
// const age = prompt("How old are you?"); // => string
// console.log(typeof age);
// variable (scope) -------------------------------------
// *** var
// for (var index = 0; index < 10; index++) {
//   console.log(index);
// }
// console.log(index); // 10
// *** let
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
// console.log(index); // error (is not defined)
// *** const
// const a = 10;
// a += 10; // error: assignment to constant
// const object = { name: "abc", age: 10 };
// object.name = "xyz"; // gan thuoc tinh duoc
// console.table(object);
    var firstName = 'dung';
    console.log(typeof firstName)
    var lastName =  new String ('le')
    console.log(typeof lastName)
    console.log('My full name is ${firstnamee} ${lastname}')