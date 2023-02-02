// ! for frone-end only
const menu_open_btn: HTMLElement = document.getElementById('menu_open_btn')!;
const menu_close_btn: HTMLElement = document.getElementById('menu_close_btn')!;
const navbar: HTMLElement = document.getElementById('navbar')!;

menu_open_btn.addEventListener('click', () => {
    navbar.style.display = 'flex';
})
menu_close_btn.addEventListener('click', () => {
    navbar.style.display = 'none';
})