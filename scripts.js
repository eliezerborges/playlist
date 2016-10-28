var ctrAudio = document.getElementById("som");
var playAudio = document.getElementById("playAudio");
var pauseAudio = document.getElementById("pauseAudio");
var stopAudio = document.getElementById("stopAudio");
var vmaisAudio = document.getElementById("vMaisAudio");
var vmenosAudio = document.getElementById("vMenosAudio");
var reiniciarAudio = document.getElementById("reiniciarAudio");
var vMudoAudio = document.getElementById("vMudoAudio");




playAudio.addEventListener('click', function(){
	ctrAudio.play();
	ctrAudio.volume = 1;
});

pauseAudio.addEventListener('click', function(){
	ctrAudio.pause();
});

stopAudio.addEventListener('click', function(){
	ctrAudio.pause();
	ctrAudio.currentTime = 0;
});

vmaisAudio.addEventListener('click', function(){
	ctrAudio.volume = ctrAudio.volume + 0.1;
});

vmenosAudio.addEventListener('click', function(){
	ctrAudio.volume -= 0.1;
});

reiniciarAudio.addEventListener('click', function(){
	ctrAudio.currentTime = 0;
});

vMudoAudio.addEventListener('click', function(){
	ctrAudio.volume = 0;
});