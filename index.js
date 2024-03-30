
let page=1

const contenedorButtons = document.querySelector(".contenedor-button-pages")

const btnNext = document.createElement("button")
btnNext.classList.add("button-pages","next")
btnNext.innerText="NEXT"

const btnBack = document.createElement("button")
btnBack.classList.add("button-pages","back")
btnBack.innerText="BACK"

contenedorButtons.appendChild(btnBack)
contenedorButtons.appendChild(btnNext)



function cargarData(page){


if (page==1){
    const back = document.querySelector(".back")
    back.style.display="none"
}
else {
    const back = document.querySelector(".back")
    back.style.display="flex"
}

if (page==6){
    const next = document.querySelector(".next")
    next.style.display="none"
}
else {
    const next = document.querySelector(".next")
    next.style.display="flex"
}

    

const api = `https://dragonball-api.com/api/characters?page=${page}&limit=10`


const main = document.querySelector("#main")

main.classList.add("row", "row-cols-1", "row-cols-md-2")
main.innerHTML=`
    

`

Toastify({
    text: `Pagina actual: ${page}`,
    duration: 1000,
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();



setTimeout(() => {
    


fetch(api)
    .then((info)=>{
        return info.json()
        
    })
    .then((response)=>{

        response.items.forEach(element => {
            const {id} = element

            fetch(`https://dragonball-api.com/api/characters/${id}`)
            
            .then((info2)=>{
                return info2.json()
            })
            .then((response2)=>{
                
                const {name, image, race} = response2

                const col = document.createElement("div")
                col.classList.add("col")

                const cards = document.createElement("div")
                cards.classList.add("card")
                const imagen = document.createElement("div")


               imagen.innerHTML = `
                    
                <img class="card-img-top"  src="${image}" alt="">
                `

                const titulo = document.createElement("h5")
                titulo.classList.add("text-center")
                titulo.classList.add("mt-5")


                titulo.innerHTML = `
                <p>${name}</p>
                <p>${race}</p>
                    
                `
                const mostrar = document.createElement("button")
                mostrar.classList.add("button-pages","muestre","mb-3")
                mostrar.setAttribute('data-bs-toggle', 'modal');
                mostrar.setAttribute('data-bs-target', '#exampleModal');
                mostrar.innerText="MOSTRAR"

                
                    
                cards.appendChild(imagen)
                cards.appendChild(titulo)
                cards.appendChild(mostrar)
            
                col.appendChild(cards)
                
                main.appendChild(col)

                
               mostrar.addEventListener("click",()=>{

                const tituloModal =document.querySelector(".modal-title")
                tituloModal.innerText=`${name}`

                const modalBody =document.querySelector(".modal-body")
                modalBody.innerHTML=`
                
                <img class="card-img-top"  src="${image}" alt="">

                `
                
               })
        
            })

            

        });
        
      
    })
    .catch((error)=>{
        console.log(error)
    })

        
    
   
    .catch((error)=>{
        console.log(error)
    })

},200);


}





cargarData(page)




    
const next = document.querySelector(".next")

next.addEventListener("click",()=>{

    page++

    console.log(page)

    cargarData(page)
   

    

})



const back = document.querySelector(".back")
back.addEventListener("click",()=>{

   
    page--
 
    console.log(page)

    cargarData(page)

   
})



