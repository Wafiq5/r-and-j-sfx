function playSFX(SFXName){
    var SFX = document.getElementById(SFXName)
    SFX.currentTime = 0;
    SFX.play();
}

function stopAll() {
    var soundEffects = document.querySelectorAll('.sfx');

    soundEffects.forEach(function(sfx) {
        sfx.pause();
        sfx.currentTime = 0;
    });
}
