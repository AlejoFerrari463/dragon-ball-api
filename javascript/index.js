
import * as cargar from './cargaPagina.js'

let page=1


cargar.cargarData(page);


    
const next = document.querySelector(".next")

next.addEventListener("click",()=>{

    page++

    console.log(page)

    cargar.cargarData(page);
   

    

})



const back = document.querySelector(".back")
back.addEventListener("click",()=>{

   
    page--
 
    console.log(page)

    cargar.cargarData(page);
   
})



