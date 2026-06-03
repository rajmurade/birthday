function start(){

    let music = document.getElementById("bgmusic");
    music.volume = 0.3;
    music.play();

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";

    document.getElementById("hbdText").innerText = "Happy Birthday 🎉";
}

function openLetter(){
    document.getElementById("letter").style.display = "block";
}

function gift(){
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "flex";
}