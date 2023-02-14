document.querySelector(".card").addEventListener("click", ()=> {
    let color1 = getRandom()
    let color2 = getRandom()

    let degRandom = Math.trunc(Math.random() * 360)

    document.body.style.background = `linear-gradient(${degRandom}deg, ${color1} 0%, ${color2} )`
})

function getRandom() {
    let hexCode = "0123456789abcdef"
    let color = "#"
    for(i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color
}
getRandom()