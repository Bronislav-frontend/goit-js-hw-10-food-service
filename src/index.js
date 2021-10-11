import { cardListMarkup } from "./js/card-list"
import { refs } from './js/refs'
import { changeThemeOnClick } from "./js/theme-switcher"
import "./css/styles.css"

refs.menu.insertAdjacentHTML('beforeend', cardListMarkup)

refs.themeSwitcher.addEventListener('change', changeThemeOnClick)