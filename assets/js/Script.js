import { agregarMusica } from "./Promesas.js";

window.addEventListener("load", ()=>{  
    console.log("cargado");

    document.getElementById("btnRegistrar").addEventListener("click", ()=>{
        console.log("hizo click"); 
        let eNombre= document.getElementById("nombre");
        let eGenero= document.getElementById("genero");
        let eIntegrantes= document.getElementById("integrantes");
        let eExperiencia= document.getElementById("experiencia");

    })
})

