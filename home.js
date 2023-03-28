const btndark = document.querySelector(".imgmodo")
const imgwhite = document.querySelector(".imgnight")
const title = document.querySelectorAll(".text")
const parraf = document.querySelector(".parra")
const imglogo = document.querySelector(".imglogo")

btndark.onclick = ()=>{
    imgwhite.classList.toggle("displayon");
    if(imgwhite.classList.contains("displayon")){
        title.forEach(ele =>{
            ele.style.color = "white"
        })
        parraf.style.color = "rgb(245, 195, 139)"
        btndark.src = "assets/diahover.svg"
        imglogo.src = "assets/Logo/logoblancomejorado.png"
    } else {
        title.forEach(ele =>{
            ele.style.color = "black"
        })
        parraf.style.color = "rgb(104, 69, 48)"
        btndark.src = "assets/noche.svg"
        imglogo.src = "assets/Logo/logonegromejorado.png"
    }
}