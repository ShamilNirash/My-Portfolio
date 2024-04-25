const nav_bar_icon = document.querySelector(".fa-solid");
const navbar_options =document.querySelector(".navbar-options");
const navbar = document.querySelector(".navbar");
const navbar_section = document.querySelectorAll(".navbar-section")


var isNavbarOpen = false;
nav_bar_icon.addEventListener("click",()=>{
    isNavbarOpen= !isNavbarOpen;
    if(isNavbarOpen){
        navbar_options.style.display="flex" ;
        navbar.style.height=" 100vh";
        navbar_section.forEach(function(section){
            section.style.display="block";
        })
        }
        
    else{
        navbar_options.style.display="none";
        navbar.style.height=" 0vh";
        navbar_section.forEach(function(section){
            section.style.display="none";
        })
        }
    }
   
)