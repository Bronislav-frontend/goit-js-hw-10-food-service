import { refs } from './refs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let mode = localStorage.getItem('mode')

const setTheme = (add, remove) => {
    document.body.classList.add(add)
    document.body.classList.remove(remove)
}

const setDarkTheme = () => {
  setTheme(Theme.DARK, Theme.LIGHT)
  localStorage.setItem('mode', 'dark')
  refs.toggle.checked = true
}

const setLightTheme = () => {
  setTheme(Theme.LIGHT, Theme.DARK)
  localStorage.setItem('mode', 'light')
  refs.toggle.checked
}

if (mode === 'dark') {
  setDarkTheme()
}

export const changeThemeOnClick = () => {
  mode = localStorage.getItem('mode')
  
  mode !== 'dark' ?
    setDarkTheme() :
    setLightTheme()
}

