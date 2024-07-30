const imgEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
    addNewImages()
})

function addNewImages(){
    for (let index = 0; index < 10; index++) {
    
    const newImg=document.createElement("img")
    newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    imgEl.appendChild(newImg)    
    }
}