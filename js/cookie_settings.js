const themeButton = document.getElementById('theme-button')
const img = document.getElementById('theme-icon')
const increaseB = document.getElementById('increase-button')
const decreaseB = document.getElementById('decrease-button')
const consentBox = document.getElementById('consentBox')
const acceptBtn = document.querySelector('.consentButton')
const rejectBtn = document.querySelector('.rejectButton')

window.addEventListener('load', () => {
    if(!document.cookie.includes('permissao')){
        consentBox.classList.remove('hide')
    }
    
    if(getPermission()){
        setTheme()
        setFontSize()
    }
})

acceptBtn.addEventListener('click', () => {
    consentBox.classList.toggle('hide')
    document.cookie = 'permissao=true; age=86400; path=/'
})

rejectBtn.addEventListener('click', () => {
    consentBox.classList.toggle('hide')
    document.cookie = 'permissao=false; age=86400; path=/'
})

themeButton.addEventListener('click', () => {
    if (document.body.classList[0] != 'dark-theme') {
        document.body.classList.remove('light-theme')
        document.body.classList.toggle('dark-theme')
        setThemeIcon('dark-theme')

        console.log('Set page theme to dark-theme')
        if(getPermission()) document.cookie = 'tema=dark-theme; age=86400; path=/'
    } else {
        document.body.classList.remove('dark-theme')
        document.body.classList.toggle('light-theme')
        setThemeIcon('light-theme')

        console.log('Set page theme to light-theme')
        if(getPermission()) document.cookie = 'tema=light-theme; age=86400; path=/'
    }
})

function setTheme() {
    if (document.cookie.includes('tema')) {
        let c = document.cookie.split(';')

        for (let i = 0; i < c.length; i++) {
            if (c[i].includes('tema')) {
                let theme = c[i].split('=')[1]
                console.log(`Page theme defined to ${theme}`)

                document.body.classList.toggle(theme)
                setThemeIcon(theme)
            }
        }
    } else
        console.log('Cookies not found to change site theme')
}

function setThemeIcon(icon) {
    if (icon === 'dark-theme')
        img.src = './icons/moon.png'
    else if (icon === 'light-theme')
        img.src = './icons/sun.png'
}

//----------------------------------------//

// Aumento e redução do tamanho da fonte é aplicavel apenas nas tags <p> no corpo principal da página
increaseB.addEventListener('click', () => {
    const p = document.getElementsByTagName('p')

    for (let i = 1; i < p.length - 1; i++) {
        let size = parseFloat(window.getComputedStyle(p[i]).fontSize)
        p[i].style.fontSize = `${size + 1.6}px`
    }

    console.log(`Set font size to ${parseFloat(window.getComputedStyle(p[1]).fontSize)}px`)
    if(getPermission()) document.cookie = `fonte=${parseFloat(window.getComputedStyle(p[1]).fontSize)}; age=86400; path=/`
    
})

decreaseB.addEventListener('click', () => {
    const p = document.getElementsByTagName('p')

    for (let i = 1; i < p.length - 1; i++) {
        let size = parseFloat(window.getComputedStyle(p[i]).fontSize)
        p[i].style.fontSize = `${size - 1.6}px`
    }

    console.log(`Set font size to ${parseFloat(window.getComputedStyle(p[1]).fontSize)}px`)
    if(getPermission()) document.cookie = `fonte=${parseFloat(window.getComputedStyle(p[1]).fontSize)}; age=86400; path=/`
})

function setFontSize() {
    if (document.cookie.includes('fonte')) {
        let c = document.cookie.split(';')

        for (let i = 0; i < c.length; i++) {
            if (c[i].includes('fonte')) {
                let fontSize = c[i].split('=')[1]
                console.log(`Font size defined to ${fontSize}px`)

                const p = document.getElementsByTagName('p')
                for (let i = 1; i < p.length - 1; i++)
                    p[i].style.fontSize = `${fontSize}px`
            }
        }
    } else
        console.log('Cookies not found to change font size')
}

function setCookie(data) {
    document.cookie = data
}

function getCookie(name){
    let c = document.cookie.split(';')

    for (let i = 0; i < c.length; i++) {
        if (c[i].includes(name)) 
            return c[i]
    }

    return undefined
}

function getPermission(){
    if(!navigator.cookieEnabled) return false

    const c = document.cookie.split(';')

    for (let i = 0; i < c.length; i++) {
        if (c[i].includes('permissao')) 
            if(c[i].split('=')[1] === 'true')
                return true
    }

    return false
}