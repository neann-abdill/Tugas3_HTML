const form = document.querySelector(`#loginForm`);

form.addEventListener("submit",function(event){
    event.preventDefault();  //agar halaman formulir kita tidak nge refresh

    const username = document.querySelector(`#username`).value;
    const password = document.querySelector(`#password`).value;
    const message = document.querySelector(`#message`);

    if (username === "" || password === ""){
        message.innerText = "Username dan password wajib diisi";
        message.className = "text-red-500 text-center mt-4";
    } else if (username  === "admin" && password === "123"){
        message.innerText = "Login berhasil";
        message.className = "text-green-500 text-center mt-4";
    } else {
        message.innerText = "Username atau password salah";
        message.className = "text-red-500 text-center mt-4";
    }


})