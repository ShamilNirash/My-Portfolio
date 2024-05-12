const nav_bar_icon = document.querySelector(".fa-solid");
const navbar_options =document.querySelector(".navbar-options");
const navbar = document.querySelector(".navbar");
const navbar_section = document.querySelectorAll(".navbar-section");
const nav_cv_in_mobile=document.querySelector(".nav-cv-in-mobile");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar-options a");

var isNavbarOpen = false;
nav_bar_icon.addEventListener("click",()=>{
    isNavbarOpen= !isNavbarOpen;
    if(isNavbarOpen){
        navbar_options.style.display="flex" ;
        navbar.style.height=" 100vh";
        navbar_section.forEach(function(section){
            section.style.display="block";
        })
        nav_cv_in_mobile.style.display="flex";
        }
        
    else{
        navbar_options.style.display="none";
        navbar.style.height=" 15vh";
        navbar_section.forEach(function(section){
            section.style.display="none";
        })
        nav_cv_in_mobile.style.display="none";
        }
    }
   
)
    
navLinks.forEach(function(navLink) {
        
      navLink.addEventListener('click', function(e) {
         e.preventDefault();
         if(window.innerWidth < 900){
            navbar_options.style.display="none";
         navbar.style.height=" 15vh";
         navbar_section.forEach(function(section){
             section.style.display="none";
         })
         nav_cv_in_mobile.style.display="none";
         }
         
        var targetId = this.getAttribute('href');
        sections.forEach((section)=>{
            navLinks.forEach((link)=>{
                link.classList.remove('active');
            })
            this.classList.add("active");
            if(section.getAttribute('id')== targetId){
                section.scrollIntoView({ behavior: 'smooth' });                
            }
        })
        
      });
     

    });

    window.onscroll=() =>{
        sections.forEach((section)=>{
            let top =window.scrollY;
            let offset = section.offsetTop -150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if(top >= offset && top<offset+height){
                navLinks.forEach(links=>{
                    links.classList.remove('active');
                    links.classList.add('normal');
                    document.querySelector('.navbar-options a[href*='+ id +']').classList.add('active');
                    document.querySelector('.navbar-options a[href*='+ id +']').classList.remove('normal');

                })
            }
        })
    }
