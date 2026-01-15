document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.humberg');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    toggleButton.classList.toggle('open');
  });

  // Desktop par jaate hi band
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove('active');
      toggleButton.classList.remove('open');
    }
  });
});