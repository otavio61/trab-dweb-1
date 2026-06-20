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
    if (navigator.cookieEnabled && document.cookie.includes('tema')){

        let theme = document.cookie.split(';')[0].split('=')[1]

        document.body.classList.toggle(theme)
        setThemeIcon(theme)
    }
}

function setThemeIcon(icon){
    if(icon === 'dark-theme')
        img.src = './icons/moon.png'
    else if (icon === 'light-theme')
        img.src = './icons/sun.png'
        
}

//----------------------------------------//

const increaseB = document.getElementById("increase-button");
const decreaseB = document.getElementById("decrease-button");
const em1 = 16

// window.addEventListener('load', setFontSize)

increaseB.addEventListener('click', () => {
    const p = document.getElementsByTagName("p")
    let size

    for (let i = 1; i < p.length - 1; i++) {
        size = parseFloat(window.getComputedStyle(p[i]).fontSize)
        p[i].style.fontSize = `${size + 1.6}px`
    }
    console.log(parseFloat(window.getComputedStyle(p[1]).fontSize));
    
    setCookie(`fonte=${parseFloat(window.getComputedStyle(p[1]).fontSize)}; age=86400; path=/`)
})

decreaseB.addEventListener('click', () => {
    const p = document.getElementsByTagName("p")
    let size

    for (let i = 1; i < p.length - 1; i++) {
        size = parseFloat(window.getComputedStyle(p[i]).fontSize)
        p[i].style.fontSize = `${size - 1.6}px`
    }
    console.log(parseFloat(window.getComputedStyle(p[1]).fontSize));
    
    setCookie(`fonte=${parseFloat(window.getComputedStyle(p[1]).fontSize)}; age=86400; path=/`)
})

function setFontSize(){
    if (navigator.cookieEnabled && document.cookie.includes('fonte')){

        const p = document.getElementsByTagName("p")
        let fontSize = document.cookie.split(';')[1].split('=')[1]

        for (let i = 1; i < p.length - 1; i++) {
            p[i].style.fontSize = `${fontSize}px`
        }
    }
}

/**
 *  for(let i = 0; i < c.length; i++){
        if(c[i].includes('fonte')){
            console.log(i)
        }
        
    }

 */