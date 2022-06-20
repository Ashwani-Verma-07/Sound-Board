var sounds = ['Bewafa', 'Brown Rang', 'Dope Shope', 'Khairiyat', 'Lut Gaye', 'Unstoppable', 'BreakUp Party', 'Barbadiyan','Aate jate khubsurat','Arambh hai prachand','Pasoori']
var currentSong = 0;
var len = sounds.length;
sound_call()

function sound_call() {
    sounds.forEach(sound => {
        const btn = document.createElement('button')
        btn.classList.add('btn')

        btn.innerText = sound

        btn.addEventListener('click', () => {

            stopSongs()
            var bgcolor = new Array("#552B21", "#3d2306", "#2e0524", "#11524d ", "#063305 ", "#381b15 ",
                "#1B0203", "#2a064a", "#082a4a", "#121211", "#242626","#471340","#591040","#441059")
            document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)]

            document.getElementById(sound).play()
        })
    
        document.getElementById('buttons').appendChild(btn)
    })
}

function stopSongs() {
    sounds.forEach(sound => {
        var song = document.getElementById(sound)
        // song.addEventListener("ended", sounds)
        song.pause()
        song.currentTime = 0;

    })
}
song.addEventListener('ended', function stopSongs () {
    stopSongs()
    song.load()
    song.play()
})
// // var x = 0;
// // var music = document.getElementById("player");
// // $("#player").bind("ended", function () {
// //     x = x + 1;
// //     music.src = x % 4 + ".mp3";
// //     music.load();
// //     music.play();
// // });

// var musicTracker = 'noMusic';
// //playlist audios
// var audios = [];
// $(".song").each(function () {
//     var load = new Audio($(this).attr("url"));
//     load.load();
//     load.addEventListener('ended', function () {
//         forward();
//     });
//     sounds.push(load);
// });
