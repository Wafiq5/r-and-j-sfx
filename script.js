function playVineBoom() {
    var vineBoomSFX = document.getElementById("vineBoomSFX");
    vineBoomSFX.currentTime = 0;
    vineBoomSFX.play();
}

function playLegoYodaDeath() {
    var legoYodaDeathSFX = document.getElementById("legoYodaDeathSFX");
    legoYodaDeathSFX.currentTime = 0;
    legoYodaDeathSFX.play();
}

function playThickOfIt(){
    var ksiThickOfItSFX = document.getElementById("ksiThickOfItSFX");
    ksiThickOfItSFX.currentTime = 0;
    ksiThickOfItSFX.play();
}

function playMinecraftXP(){
    var minecraftXPSFX = document.getElementById("minecraftXPSFX")
    minecraftXPSFX.currentTime = 0;
    minecraftXPSFX.play();
}
function stopAll() {
    var soundEffects = [
        document.getElementById("vineBoomSFX"),
        document.getElementById("legoYodaDeathSFX"),
        document.getElementById("ksiThickOfItSFX"),
        document.getElementById("minecraftXPSFX")
    ];
    
    soundEffects.forEach(function(sfx) {
        sfx.pause();
        sfx.currentTime = 0;
    });
}
