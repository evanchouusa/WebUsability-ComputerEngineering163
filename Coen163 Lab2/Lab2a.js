/*
Evan Chou
Coen 163 Lab2a
*/

function openNav() {
    document.getElementById("rightsidenav").style.width = "250px";

    document.getElementById("Button2").style.visibility = "visible";


    if (document.getElementById("Button1").src == "Assets/Button-01.png") {
        document.getElementById("Button1").style.right = "15px";
        document.getElementById("rightsidenav").style.visibility = "hidden";
    } else {
        document.getElementById("Button1").src = "Assets/Button-01.png";
    }
}

function closeNav() {
    document.getElementById("rightsidenav").style.width = "0";
    document.getElementById("Button2").style.visibility = "hidden";

}