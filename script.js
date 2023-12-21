const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prebBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');    // ** 1 **
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles 
const songs = ['hey', 'summer','uklele'];

// keep track of songs
let songIndex = 2;      // ** 2

// Initially load songs details These Params are all considered as song in the function 
loadSongs(songs[songIndex]);

                                     // ** 3 
function loadSongs(song) {
    title.innerHTML = song;
    audio.src =`music/${song}.mp3`
    cover.src =`images/${song}.jpg`
}


function playSong() {           /// ** 5 After we Did the event listener and the check with if statment 
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play'); // Here we are removing the icon only and not the whole elemnt 
    playBtn.querySelector('i.fas').classList.add('fa-pause'); 
    audio.play(); // This is a play method that makes the audio elemnts start playing 
}


playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSongs();                   // ** 4 
    } else {
        playSong(); // both of these are not defined yet 
    }
})