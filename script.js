function showPage(id){
    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

/* PAGE 1 */
function start(){

    // 🎵 play music (must be user click)
    let music = document.getElementById("bgmusic");
    music.volume = 0.3;
    music.play();

    document.getElementById("hbdText").innerText = "Happy Birthday 🎉";

    setTimeout(()=>{
        showPage("page2");
    }, 800);
}

/* LETTER */
function openLetter(){
    document.getElementById("letter").style.display = "block";
}

/* GIFT PAGE */
function gift(){
    showPage("page3");
}