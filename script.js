const themeSwitch = document.getElementById('switch');

themeSwitch.addEventListener('click', () => {
    document.body.classList.switch('dark');
});