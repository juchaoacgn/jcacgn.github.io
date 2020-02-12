// JavaScript Document
window.onload = function(){ 
     var audio = document.getElementById('music');
         audio.pause();//打开页面时无音乐
}
function play() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();
        document.getElementById('musicImg').src="images/play.png";
    }else{
        audio.pause();
        audio.currentTime = 0;//音乐从头播放
        document.getElementById('musicImg').src="images/stop.png";
    }
}
