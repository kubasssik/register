const $FORMS = document.querySelectorAll('.auth__form')
const $BTN = document.querySelector('.boxes__btn')
const $INPUT = document.querySelectorAll('.input__auth')
const $BOX = document.querySelectorAll('.box')
const $EYE = document.querySelectorAll('.auth__form_image')

$BTN.addEventListener('click', changeAuth)

//Переключить плитки
function switchBox() {
    $BOX.forEach((e, i) => {
        if (i % 2 === 0) e.classList.toggle('box__active_even');
        else setTimeout(() => { e.classList.toggle('box__active_odd') }, 200);
    });
}

//Переключить название кнопки
function switchBtn() {
    if ($BTN.textContent === 'Пройти регистрацию') $BTN.textContent = 'Войти в кабинет'
    else $BTN.textContent = 'Пройти регистрацию'
}

//Переключить форму
function changeForms() {
    $FORMS.forEach(e => {
        e.classList.toggle('form__none')
        e.classList.toggle('form__active')
    })
}


//Старт программы
function changeAuth() {
    switchBox()//Переключить плитки
    switchBtn()//Переключить название кнопки
    changeForms()//Переключить форму
}

//Переключить placeholder
function changePlaceholder() {
    let placeholder
    $INPUT.forEach(input => {
        input.addEventListener('focus', showPlaceholder)
    })
    $INPUT.forEach(input => {
        input.addEventListener('blur', hidePlaceholder)
    })

    function showPlaceholder() {
        placeholder = this.placeholder
        this.placeholder = ''
        this.previousElementSibling.textContent = placeholder
        this.previousElementSibling.style.display = 'block'
    }

    function hidePlaceholder() {
        this.placeholder = placeholder
        this.previousElementSibling.style.display = 'none'
    }
}
changePlaceholder()

//Показать пароль
$EYE.forEach(e => {
    e.addEventListener('click', showEye)
})

function showEye() {
    let input = this.previousElementSibling
    if (input.type === 'password') {
        input.type = 'text'
        this.src = 'img/png/eye-open.png'
    }
    else {
        input.type = 'password'
        this.src = 'img/png/not-close.png'
    }
}