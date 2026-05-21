//Variable
//Data Collection (Object dan Array)
//Object {}
//Array []
//Object
const dataNehan = {
    name: "Nehan",
    age: 18,
    address: "Jalan Belimbing"
};

//Cara 1 mengakses data object menggunakan dot(.)
console.log(dataNehan.name);
console.log(dataNehan.age);
console.log(dataNehan.address);

//Cara 2 mengakses data menggunakan object destructuring
const {name ,age, address} = dataNehan;
console.log(age);

//Array
const fruits = ["Apel", "Jeruk", "Strawberry"];
const spekLaptop = ["Asus", 8, 256];

//Index Array selalu dimulai dari 0
//Cara mengakses data di Array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Lanjutan
//Array of Object
const dataSiswa = [
    {
        name: "Nehan",
        age: 18,
        username: "nean"
},
  {
        name: "Farros",
        age: 18,
        username: "farosss"
},
  {
        name: "Fardan",
        age: 18,
        username: "purdun"
},
];

//Cara mengakses array of object
console.log(dataSiswa[0])
console.log(dataSiswa[0].name)
console.log(dataSiswa[0].age)
console.log(dataSiswa[0].username)



//Array of Array
const data1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(data1[0][0]);
console.log(data1[2][1]);
