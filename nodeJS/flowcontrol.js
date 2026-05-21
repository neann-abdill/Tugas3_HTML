//if else
const score = 80;

if (score >= 80) {
    console.log('Selamat, Anda lulus ujian!');
} else {
    console.log('Maaf, Anda belum lulus ujian');
}

//switch case
const fruit = "apple";

switch(fruit){
    case "banana":
        console.log("ini adalah pisang");
        break;
    case "apple":
        console.log("ini adalah apel");
        break;
    case "orange":
        console.log("ini adalah jeruk");
        break;
}


const hari = 100;

switch(hari){
    case 1:
        console.log("senin");
        break;
    case 2:
        console.log("selasa");
        break;
    case 3:
        console.log("rabu");
        break;
    case 4:
        console.log("kamis");
        break;
    case 5:
        console.log("jumat");
        break;
    case 6:
        console.log("sabtu");
        break;
    case 7:
        console.log("minggu");
        break;
    default:
        console.log("sepekan cuma 7 hari paok")
}