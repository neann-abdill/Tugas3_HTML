//no.1
const buah1 = ["apel", "mangga"];
const buah2 = ["jeruk", "pisang"];
const semuaBuah = [...buah1,...buah2];

console.log(semuaBuah);

//no.2
const dataUser = {
 nama: "Budi",
 umur: 20
}

const dataKontak = {
 email: "budi@gmail.com",
 kota: "Bandung"
}

const dataLengkap = {...dataUser,...dataKontak};

console.log(dataLengkap);