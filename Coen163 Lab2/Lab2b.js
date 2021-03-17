/*
Evan Chou
Coen 163 Lab2b
*/

function toggleNav() {
    var x = document.getElementById("devicenav");
    var y = document.getElementById("navlist");
    if (x.className === "navigationbar") {
        x.className += " responsive";
        y.src = "Assets/Button-02.png";
    } else {
        x.className = "navigationbar";
        y.src = "Assets/Button-01.png";
    }
}