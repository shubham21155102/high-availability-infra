window.onload = function(e){
    const countDown = document.getElementById("countDown");
    let now = new Date();
    let publishDate = new Date("01/01/2119");
    let secs = Math.floor((publishDate - now)/1000);
    setInterval(function(){
        countDown.innerHTML =  `Website will be available in ${secs} secs time 🤣🤣🤣`;
        secs--;
    }, 1000)
}