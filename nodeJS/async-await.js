//ASYNC AWAIT
//Basic

function ambilData() {
    return new promise ((resolve)=> {
        console.log("proses mengambil data...")
        setTimeout(()=>{
            resolve("Data berhasil di ambil")
        }, 3000)
    });
}

async function main() {
    const hasil = await ambilData();
    console.log(hasil)
}

main();

//real case
async function getUser() {
   try{
     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json()
    console.log(data)
   } catch (error) {
    console.log(error);
   }

}

getUser();
