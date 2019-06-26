window.addEventListener("load",iniciar);
function iniciar(){
    document.querySelector(".btnmenu").addEventListener("click",function(){
        document.querySelector(".header__bar__menu").classList.toggle("open-menu");
        console.log("menu depslegado");
    });
}
