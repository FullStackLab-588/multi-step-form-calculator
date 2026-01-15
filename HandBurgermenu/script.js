document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-bar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.nav-bar .mobile-menu-items' );

    toggleButton.addEventListener('click' , function(){
        mobileMenu.classList.toggle('active');
    });



});


// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.querySelector('.nav-bar .mobile-menu-toggle');
//     const mobileMenu = document.querySelector('.nav-bar .mobile-menu-items');

//     toggleButton.addEventListener('click', function () {
//         mobileMenu.classList.toggle('active');
//     });
// });
