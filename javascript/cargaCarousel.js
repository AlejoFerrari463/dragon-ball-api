

export function cargarCarousel(id) {

    fetch(`https://dragonball-api.com/api/characters/${id}`)
    .then((responseModal)=>{

    return responseModal.json()

    })
    .then((responseModal2)=>{
        
        const { image } = responseModal2

        const buscandoDivCarousel = document.querySelector(".carousel-inner")
        buscandoDivCarousel.innerHTML = ``
        
        const agregarImagenCarousel = document.createElement("div")
        agregarImagenCarousel.classList.add("carousel-item","active")
                
        agregarImagenCarousel.innerHTML=`
        
        <img class="card-img-top modal-tam-imagen"  src="${image}" alt="">
        
        `
        buscandoDivCarousel.appendChild(agregarImagenCarousel)

        responseModal2.transformations.forEach((element)=>{
            
            const {name} = element

            console.log(name)
            
            const agregarImagenCarousel = document.createElement("div")

            
            agregarImagenCarousel.classList.add("carousel-item")
                                  

            agregarImagenCarousel.innerHTML = `
            
                <img class="card-img-top modal-tam-imagen"  src="${element.image}" alt="">
            
            `

            buscandoDivCarousel.appendChild(agregarImagenCarousel) 

        })
        
    console.log(responseModal2)
    })
    .catch((errorModal)=>{
        console.log(errorModal)
    })

}