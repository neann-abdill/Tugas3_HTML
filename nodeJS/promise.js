//PROMISE
//Basic Promise
function ambilData () {
    return new Promise((resolve, reject) => {
       
        setTimeout(()=>{

            const sukses = true;
            if (sukses){
                resolve("Data Berhasil Di Ambil")//di kirim ke .then()
            }
            else {
                reject("Gagal Ambil Data")//di kirim ke .catch()
            }
        }, 3000)

    })
};

ambilData()
.then((hasil)=>{
    console.log(`hasil: ${hasil}`)
})
.catch((error)=>{
    console.error(`error: ${error}`)
})

//real case promise
function getUser () {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=> res.json(),)//convert ke json //kardus indomie nya dibuka
}

getUser()
.then((data)=>{console.log(`${data.name}`);
})
.catch((err) => {console.log(`${err}`);
})