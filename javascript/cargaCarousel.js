

export function cargarCarousel(id,name) {
    
    
    

    fetch(`https://dragonball-api.com/api/characters/${id}`)
    .then((responseModal)=>{

    return responseModal.json()

    })
    .then((responseModal2)=>{


        const buscandoDivCarousel = document.querySelector(".carousel-inner")
        buscandoDivCarousel.innerHTML = ``
               

        const { image } = responseModal2

        const agregarImagenCarousel = document.createElement("div")
        agregarImagenCarousel.classList.add("carousel-item","active")
                
        agregarImagenCarousel.innerHTML=`
        <div class="modal-titulo" >${name}</div>
        <img class="card-img-top modal-tam-imagen"  src="${image}" alt="">
        
        `

        
        buscandoDivCarousel.appendChild(agregarImagenCarousel)

        responseModal2.transformations.forEach((element)=>{
            
            const {name,image} = element

            
            const agregarImagenCarousel = document.createElement("div")

            
            agregarImagenCarousel.classList.add("carousel-item")
                                  

            agregarImagenCarousel.innerHTML = `

                <div class="modal-titulo" >${name}</div>
                <img class="card-img-top modal-tam-imagen"  src="${image}" alt="${name}">
            
            `
            
            buscandoDivCarousel.appendChild(agregarImagenCarousel) 

        })
        
    console.log(responseModal2)
    })
    .catch((errorModal)=>{
        console.log(errorModal)
    })

}