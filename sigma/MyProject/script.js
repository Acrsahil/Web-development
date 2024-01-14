setInterval(server,300)
sd = new Audio('sound.mp3')
function server(){
    console.log("hello world")
     i = document.getElementsByClassName('enter')[0].value;
    if(i == "google"){
        document.getElementsByClassName('enter')[0].value = "google.com"
        sd.play()
        window.location.replace('https://google.com')
    }
    else if(i == "youtube"){
        document.getElementsByClassName('enter')[0].value = "Youtube.com"
        sd.play()
        window.location.replace('https://Youtube.com')
    }

    else if(i == "codeforces"){
        document.getElementsByClassName('enter')[0].value = "codeforces.com"
        sd.play()
        window.location.replace('https://codeforces.com')
    }
}
