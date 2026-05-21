//Event submit
// const formSubmit = document.querySelector("#form");

// formSubmit.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("Data terkirim");
// });

//Event Change
const formSelect = document.querySelector("#select");

formSelect.addEventListener("change", function() {
    alert(`Yang dipilih: ${Select.value}`);
});

//event input
const inp = document.querySelector("#input")
const out = document.querySelector("#output")

inp.addEventListener("input", function(e){
 out.innerText = inp.value

})
