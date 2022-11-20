/*menu functions*/
function showNav1(){
    document.getElementById("nav1").style.display = "block";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("top").style.display = "none";
    document.getElementById("top-light").style.display = "block";
    event.preventDefault();
}

function showNav2(){
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "block";
    document.getElementById("nav").style.display = "none";
    document.getElementById("top").style.display = "none";
    document.getElementById("top-light").style.display = "block";

    event.preventDefault();
}

function showNav(){
    document.getElementById("nav1").style.display = "none";
    document.getElementById("nav2").style.display = "none";
    document.getElementById("nav").style.display = "block";
    document.getElementById("top").style.display = "block";
    document.getElementById("top-light").style.display ="none";

    event.preventDefault();
}

/*parallax functions*/

let image = document.getElementById('image')
window.addEventListener('scroll', () =>{
  //  let value = window.scrollY;
    //image.style.display = 'none';
})