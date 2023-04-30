document.addEventListener("click", function (e) {
    const targetElement = e.target;
    const input = document.querySelector('.form__input');
    const line = document.querySelector('.form__line ');
    const windowWidth = window.innerWidth;
    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
        e.preventDefault();
    }
    if (targetElement.closest('.form__line')) {
        input.classList.add('active')
        line.classList.add('active')

    }
    if (!e.target.closest('.form__line')) {
        input.classList.remove('active')
        line.classList.remove('active')

        // line.classList.add('anim')
        if (windowWidth < 660) {
            line.classList.add('anim')
        }
    }
    function del(a) {
        a.classList.remove('anim');
    }
    setTimeout(del, 200, line)
    // del(line)
})
