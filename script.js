const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');    // ** 1 **
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song titles 
const songs = ['hey', 'summer','ukulele'];

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


function pauseSongs() {
    musicContainer.classList.remove('play'); // This class is very importent to look at since it allowes the whole function to run 
    playBtn.querySelector('i.fas').classList.add('fa-play'); 
    playBtn.querySelector('i.fas').classList.remove('fa-pause'); 
    audio.pause(); 
}

// Next and Prevouis btns

function prevSong() {
    songIndex--;

    if (songIndex < 0 ){
        songIndex = songs.length - 1
    }
    loadSongs(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length -1 ){
        songIndex = 0
    }
    loadSongs(songs[songIndex]);
    playSong();
}

// now setting up the duration bar to control
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement; // This refering to the bar
    const progressPercent = (currentTime / duration) * 100; // This will give u the percent 
    progress.style.width = `${progressPercent}%`; // Here you are setting the style value for the bar

}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration ;
}

playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSongs();                   // ** 4 
    } else {
        playSong(); // both of these are not defined yet 
    }
})


prevBtn.addEventListener('click',prevSong); // dont call up the function with parentheses 
nextBtn.addEventListener('click',nextSong);
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)