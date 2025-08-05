
// let array = ["java", "phyton"];
// // array.push("name");
// let name = array[0];
// array[0] = "C++";
// console.log(array[0]);
// const bora = {
//     name: "bora",
//     age: 20,
//     colorface: "black",
//     hiscrush: "sreypich",
// };
// delete bora.colorface;
// let pai = 3;

// console.log(pai.toFixed(2));
// for(let i= 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }
// let underfine;
// console.log(typeof underfine);
const animals = [
    {
        name: "tiger",
        age: 2,
        color: "orange"
    },
    {
        name: "lion",
        age: 4,
        color: "yellow"
    },
    {
        name: "elephant",
        age: 10,
        color: "gray"
    }
];

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(`animal name: ${animal.name}, age: ${animal.age}, color: ${animal.color}`);
}