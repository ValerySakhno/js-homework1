function button1(){
    document.location.href = "https://www.youtube.com/";
}

function button2(){
    var button = document.querySelectorAll("button")
        for(var button of button){
            button.style.backgroundColor = "#565859";
        }
    
}

function button3(){
    var butt1 = document.getElementsByClassName("butt")
    for(butt1 of butt1){
        butt1.classList.add("fade")
    }
}