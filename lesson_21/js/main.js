document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
        e.preventDefault();
    }
})
const input = document.querySelector('.form__input');
const overlay = document.querySelector('.overlay ');
const line = document.querySelector('.form__line ');
if (screen.width < 660) {
    line.style.backgroundSize = 100 + "%";
}

input.addEventListener('click', () => {
    overlay.style.zIndex = 100;
    input.classList.add('active')
    if (screen.width < 660) {
        line.style.backgroundSize = "inherit";
    }
    else {
        line.style.backgroundSize = "inherit";

    }

})

overlay.addEventListener('click', () => {
    overlay.style.zIndex = 0;
    input.classList.remove('active')
    // line.style.backgroundSize = 100 + "%";

    if (screen.width < 660) {
        line.style.backgroundSize = "contain";
    }
    // else {
    //     line.style.backgroundSize = "auto";

    // }
})