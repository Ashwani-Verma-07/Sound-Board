const sounds = ['Bewafa', 'Brown Rang', 'Dope Shope', 'Khairiyat', 'Lut Gaye', 'Unstoppable']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        var bgcolor = new Array("#552B21", "#3d2306", "#2e0524", "#11524d ", "#063305 ", "#381b15 ",
            "#1B0203", "#2a064a", "#082a4a", "#121211", "#5e6161")
        document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)]

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}

