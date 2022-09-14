let i = 1;
let timeout;
document.addEventListener("mousemove", (key)=>{
    i += 0.01;
    document.querySelectorAll(".xWing")[0].style.backgroundImage = "url('media/xWingEngine.png')";
    document.querySelectorAll(".audio")[0].play();
    document.querySelectorAll(".audio")[1].play();
    document.querySelectorAll(".audio")[0].volume = 0.3;
    document.querySelectorAll(".audio")[1].volume = 0.5;
    document.querySelectorAll(".video")[0].playbackRate = i;
    x = key.clientX;
    y = key.clientY;
    document.querySelectorAll(".xWing")[0].style.left = x + "px";
    document.querySelectorAll(".xWing")[0].style.top = y + "px";
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        document.querySelectorAll(".xWing")[0].style.backgroundImage = "url('media/xWing.png')";
        i = 1;
        document.querySelectorAll(".video")[0].playbackRate = i;
        document.querySelectorAll(".audio")[1].pause();
        document.querySelectorAll(".audio")[1].currentTime = 0;
    }, 1000);
})