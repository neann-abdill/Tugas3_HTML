//apa itu callback?
//callback adalah proses memanggil function lain di dalam function
//sifat nya asyncronus 

//contoh basic callback
function ambilData(callbacksucces, errorCallback) {
    setTimeout(()=>{
        const sukses = true;

        if(sukses){
            callbacksucces("Data Berhasil");
        }
        else {
            errorCallback("gagal")
        }

    },3000)
}

function sukses (data) {
    console.log(`Sukses: ${data}`)
}

function error (error) {
    console.log(`error: ${error}`)
}

ambilData(sukses, error);


//contoh real case Callback
function getUser(callback, errCallback) {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=>res.json())
    .then((data)=> callback(data))
    .catch((err)=>errCallback(err))
}

function tampilkanUser(data) {
    console.log(`Nama User: ${data.name}`)
}

function handleError(){
    console.log(`ErrorBoss: ${error}`)
}

getUser(tampilkanUser, handleError)