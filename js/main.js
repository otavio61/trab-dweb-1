const themeButton = document.getElementById('theme-button')
const img = document.getElementById('theme-icon')

window.addEventListener('load', setTheme)

themeButton.addEventListener('click', () => {

    if (document.body.classList[0] != 'dark-theme') {
        document.body.classList.remove('light-theme')
        document.body.classList.toggle('dark-theme')
        setThemeIcon('dark-theme')

        setCookie('tema=dark-theme; age=86400; path=/')
    } else {
        document.body.classList.remove('dark-theme')
        document.body.classList.toggle('light-theme')
        setThemeIcon('light-theme')

        setCookie('tema=light-theme; age=86400; path=/')
    }

})

function setCookie(data){
    if(navigator.cookieEnabled)
        document.cookie = data
}

function setTheme(){
    if (navigator.cookieEnabled && document.cookie !== ''){
        document.body.classList.toggle(document.cookie.split('=')[1])
        setThemeIcon(document.cookie.split('=')[1])
    }
}

function setThemeIcon(icon){
    if(icon === 'dark-theme')
        img.src = './icons/moon.png'
    else if (icon === 'light-theme')
        img.src = './icons/sun.png'
        
}