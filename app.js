const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');

const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

const headre = document.querySelector('.header.container');

hamburger.addEventListener('click',()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


// Not working for Header transparent header and change upon scrolling down
document.addEventListener('scroll',() =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 150) {
        header.style.backgroundcolor = "#29323C";
    } else {
        header.style.backgroundcolor = "transparent";
    }
});

