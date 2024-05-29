
let menu = document.getElementById("menu");

function abreFechaMenu() {
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado");
    }
    else{
        menu.classList.add("menu-fechado");
    }
}