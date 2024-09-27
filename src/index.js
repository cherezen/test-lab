import './styles/index.scss'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1220: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    disabledClass: 'button-disabled'
  },
});

const menuButton = document.getElementById('menu__button')
const menu = document.getElementById('menu')
const header = document.getElementById('header')
const menuClose = document.getElementById('menu__close')
const inputName = document.getElementById('name')
const formInputName = document.getElementById('form__input-name')
const inputPhone = document.getElementById('phone')
const formInputPhone = document.getElementById('form__input-phone')
const nameHelper = document.getElementById('form__name-helper')
const phoneHelper = document.getElementById('form__phone-helper')
const checboxText = document.getElementById('checkbox-text')
const accept = document.getElementById('accept')
const submitButton = document.getElementById('submit-button')


menuButton.addEventListener('click', () => {
  menu.classList.add('menu_visible')
  header.classList.add('header_hidden')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu_visible')
  header.classList.remove('header_hidden')
})

inputName.addEventListener('blur', () => {
  if (inputName.value.length === 0) {
    formInputName.classList.remove('error', 'success')
    nameHelper.textContent = ''
    submitButton.disabled = true
  } else if (validateName()) {
    formInputName.classList.remove('error')
    formInputName.classList.add('success')
    nameHelper.textContent = ''
    if (validatePhone() && accept.checked) {
      submitButton.disabled = false
    }
  } else {
    formInputName.classList.remove('success')
    formInputName.classList.add('error')
    nameHelper.textContent = 'Имя должно содержать более 2 букв'
    submitButton.disabled = true
  }
})

inputPhone.addEventListener('blur', () => {
  if (inputPhone.value.length === 0) {
    formInputPhone.classList.remove('error', 'success')
    phoneHelper.textContent = ''
    submitButton.disabled = true
    submitButton.disabled = true
  } else if (validatePhone()) {
    formInputPhone.classList.remove('error')
    formInputPhone.classList.add('success')
    phoneHelper.textContent = ''
    if (validateName() && accept.checked) {
      submitButton.disabled = false
    }
  } else {
    formInputPhone.classList.remove('success')
    formInputPhone.classList.add('error');
    phoneHelper.textContent = 'Некорректный номер телефона'
    submitButton.disabled = true
  }
})

function validateName() {
  if (inputName.value.length > 2) {
    return true
  } else {
    return false
  }
}

function validatePhone() {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (regex.test(inputPhone.value)) {
    return true
  } else {
    return false
  }
}

accept.addEventListener('change', () => {
  if (accept.checked) {
    checboxText.textContent = 'Я согласен'
    if (validateName() && validatePhone()) {
      submitButton.disabled = false
    }
  } else {
    checboxText.textContent = 'Я отказываюсь'
    submitButton.disabled = true
  }
})
