export function cargarData(page){


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
    
    main.innerHTML=`
        
    
    `
    
    const nube = document.querySelector(".page-nube")
    nube.innerText=`${page}`
    
    
    
    
    
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
                    
                    const {id, name, image, race} = response2

                   
    
                    const main = document.querySelector("#main")
    
                    const col = document.createElement("div")
                    col.classList.add("col")
    
                    const cards = document.createElement("div")
                    cards.classList.add("card")
                    const imagen = document.createElement("div")
    
                    imagen.setAttribute('data-bs-toggle', 'modal');
                    imagen.setAttribute('data-bs-target', '#exampleModal');

                    const modalBody =document.querySelector(".modal-body")
                        modalBody.innerHTML=`

                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                        
        
                        `
               
    
                   imagen.innerHTML = `
                        
                    <img class="card-img-top"  src="${image}" alt="">
                    `
    
                    imagen.addEventListener("click",()=>{
    
                        const tituloModal =document.querySelector(".modal-title")
                        tituloModal.classList.add("fs-3")
                        tituloModal.innerText=`${name}`

                               


                        fetch(`https://dragonball-api.com/api/characters/${id}`)
                        .then((responseModal)=>{

                        return responseModal.json()

                        })
                        .then((responseModal2)=>{
                            
                            
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
        
                        
                        
                       })
    
                    const titulo = document.createElement("h5")
                    titulo.classList.add("text-center")
                    titulo.classList.add("mt-5")
    
    
                    titulo.innerHTML = `
                    <p>${name}</p>
                    <p>${race}</p>
                        
                    `
                   
    
                    
                        
                    cards.appendChild(imagen)
                    cards.appendChild(titulo)
                   
                
                    col.appendChild(cards)
                    
                    main.appendChild(col)
    
                    
                    
            
                })
                .catch((error)=>{
                    console.log(error)
                })
    
                
    
            });
            
          
        })
        .catch((error)=>{
            console.log(error)
        })
    
            
    
    
    
    }