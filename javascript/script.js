let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrl1 = document.getElementById("ctrl1");
let ctrl2 = document.getElementById("ctrl2");
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");
let image1  = document.getElementById("image");


song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}
function playPause(){
  if(ctrlIcon.classList.contains("fa-play")){
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }else{
    song.pause();
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
  }
}
if(song.play()){
  setInterval(()=>{
    progress.value =song.currentTime;
  },500);
}
// ! urike urike song
progress.onchange = function(){
  song.play();
  setTimeout(()=>{
    song1.pause();
    song2.pause();
    song3.pause();
    song4.pause();
    song5.pause();
  },1000);

}
// ! ye kannulu chudani chitrame
function next(){
  song1.play();
  image1.src="./images/akannulu.jpeg"
  song.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();
}
// ! Nammavemo kani
function parugu(){
  song3.play();
  image1.src="./images/nammavemo1.jpeg"

  song.pause();
  song1.pause();
  song2.pause();
  song4.pause();
  song5.pause();
}
// song3.onloadedmetadata = function(){
//   progress.max = song3.duration;
//   progress.value = song3.currentTime;
// }
// function parugu(){
//   if(ctrl2.classList.contains("fa-pause")){
//     song3.pause();
//     ctrl2.classList.pause("fa-pause");
//     ctrl2.classList.add("fa-play");
//   }else{
//     song3.play();
//     ctrl2.classList.add("fa-pause");
//     ctrl2.classList.pause("fa-play");
//   }
// }
// if(song3.play()){
//   setInterval(()=>{
//     progress.value =song3.currentTime;
//   },500);
// }
// ! kalki song
function kalki(){
  song2.play();
  image1.src="./images/kalki.jpeg"

  song.pause();
  song1.pause();
  song3.pause();
  song4.pause();
  song5.pause();
}
// song2.onloadedmetadata = function(){
//   progress.max = song2.duration;
//   progress.value = song2.currentTime;
// }
// function playPause(){
//   if(ctrlIcon.classList.contains("fa-pause")){
//     song2.pause();
//     ctrlIcon.classList.pause("fa-pause");
//     ctrlIcon.classList.add("fa-play");
//   }else{
//     song2.play();
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.pause("fa-play");
//   }
// }
// if(song2.play()){
//   setInterval(()=>{
//     progress.value =song2.currentTime;
//   },500);
// }
// ! neeli neeli akasham
function akashan(){
  song4.play();
  image1.src="./images/akasham.jpeg"

  song.pause();
  song1.pause();
  song2.pause();
  song3.pause();
  song5.pause();
}
// song4.onloadedmetadata = function(){
//   progress.max = song4.duration;
//   progress.value = song4.currentTime;
// }
// function playPause(){
//   if(ctrlIcon.classList.contains("fa-pause")){
//     song4.pause();
//     ctrlIcon.classList.pause("fa-pause");
//     ctrlIcon.classList.add("fa-play");
//   }else{
//     song4.play();
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.pause("fa-play");
//   }
// }
// if(song4.play()){
//   setInterval(()=>{
//     progress.value =song4.currentTime;
//   },500);
// }
// ! down
