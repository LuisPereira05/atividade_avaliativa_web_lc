var catDropdown = document.querySelector("#catDropdown");
var catSubmenu = document.querySelector("#catSubmenu");

catDropdown.onmouseover = function name(params) {
    catSubmenu.style.display = "grid";
}

catDropdown.onmouseout = function name(params) {
    catSubmenu.style.display = "none";
}

catSubmenu.onmouseover = function name(params) {
    catSubmenu.style.display = "grid";
}

catSubmenu.onmouseout = function name(params) {
    catSubmenu.style.display = "none";
}

var menuOn = false;

document.querySelector("#showMenu").onclick = function name(params) {
    if(menuOn) {
        document.querySelector(".menuArea").style.left = "-79px";
        menuOn = false;
        document.querySelector("#showMenu img").style.transform = "scaleX(1)";
    } else {
        document.querySelector(".menuArea").style.left = 0;
        menuOn = true;
        document.querySelector("#showMenu img").style.transform = "scaleX(-1)";
    }
    
}