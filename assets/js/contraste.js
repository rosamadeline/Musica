const btnContraste = document.getElementById("btnContraste");
btnContraste.addEventListener("click", ()=>{
    document.body.classList.toggle("inverContraste");
});

const btnFuente = document.getElementById("btnFuente");
let fuenteBig = false;
btnFuente.addEventListener("click",()=>{
    fuenteBig = !fuenteBig;
    document.body.classList.toggle("fuenteBig", fuenteBig);
});