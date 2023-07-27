const navbarToggler = document.querySelector('.navbar-toggler');
const mainTitle = document.querySelector('.main-title');
const loginArea = document.querySelector('.login-area');

navbarToggler.addEventListener('click', () => {
  mainTitle.classList.toggle('d-none');
  loginArea.classList.toggle('d-none');
});