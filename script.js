//initialize the variables
let songIndex = 0;
let progress = 0;
let audioElement = new Audio("songs/9.mp3");
const masterPlay = document.getElementById("masterPlay");
const gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Warriyo - Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Good Goodbye",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "LOST IN THE ECHO",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Ezio's Family",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Warsongs Piercing Light",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "They Don’t Care About Us",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "BURN IT DOWN",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Im Good",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Cancion Del Mariachi",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Blinding Lights",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((song, i) => {
  console.log(song, i);
  song.getElementsByTagName("img")[0].src = songs[i].coverPath;
  song.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = "0";
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seek bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

function makeAllPlay() {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (event) => {
      console.log(event.target);
      makeAllPlay();
      event.target.classList.remove("fa-circle-play");
      event.target.classList.add("fa-circle-pause");
      songIndex = parseInt(event.target.id);
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
