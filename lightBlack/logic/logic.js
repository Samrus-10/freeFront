const TIME_TO_TOGGLE_ANIMATION = 5 * 1000;

function changeTheme(event){
    const body = document.getElementById("body")
    const img = event.target
    const div = event.target.parentElement
    animationRotat(img, div)
    animationTheme(body)
}

function animationRotat(img, div){
    const old_div_style = div.className
    div.className = "btns_toggle_rotate"
    setTimeout(() => {
        old_div_style === "btns_toggle_sun"? toggleMoon(img, div) : toggleSun(img, div)
    }, TIME_TO_TOGGLE_ANIMATION)
}

function toggleMoon(img, div){
    div.className = "btns_toggle_moon"
    img.src = './image/moon.png'
}

function toggleSun(img, div){
    div.className = "btns_toggle_sun"
    img.src = './image/sun.png'
}

function animationTheme(body){
    body.className === "body_current_sun" ? toggleThemeMoon(body) : toggleThemeSun(body)
}

function toggleThemeMoon(body){
    body.className = "body_to_moon"
    setTimeout(()=>{
        body.className = "body_current_moon"
    }, TIME_TO_TOGGLE_ANIMATION)
}

function toggleThemeSun(body){
    body.className = "body_to_sun"
    setTimeout(()=>{
        body.className = "body_current_sun"
    }, TIME_TO_TOGGLE_ANIMATION)
}