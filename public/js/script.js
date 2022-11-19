function showNav1(){
    document.getElementById("nav1").style.display = "block";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav").style.display = "none";
    event.preventDefault();
}

function showNav2(){
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "block";
    document.getElementById("nav").style.display = "none";
    event.preventDefault();
}

function showNav(){
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav").style.display = "block";
    event.preventDefault();
}