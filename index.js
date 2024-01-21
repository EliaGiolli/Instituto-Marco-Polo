//HOVER

const bottone = document.getElementById("btn");
const navLinks = document.querySelectorAll(".nav-link-hover");
const links = document.querySelectorAll(".custom-hover");

bottone.addEventListener("mouseover", (e) => {
    bottone.style.backgroundColor = "#bc2532";
});

bottone.addEventListener("mouseout", () => {
    bottone.style.backgroundColor = ""; 
  });

//link nella navbar
navLinks.forEach(navLink=>{
    navLink.addEventListener("mouseover", (e) => {
        navLink.style.backgroundColor = "#bc2532";
    });

    navLink.addEventListener("mouseout", () => {
        navLink.style.backgroundColor = "";
    })
})

 //links nella card Tempio del Cielo 
links.forEach(link => {
    link.addEventListener("mouseover", (e) => {
        link.style.backgroundColor = "#f2eff0";
    });
    
    link.addEventListener("mouseout", () => {
        link.style.backgroundColor = ""; 
      });    
});
