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
    var butt = document.querySelector("butt")
    butt.innerHTML = "<section id=block></section>"
}

var section = document.getElementById("block");
for(var i=1; i <= 6; i++){
block.innerHTML += "<article> + 'Новая кнопка' + i + </article>";
}
section.style.display = "flex";
section.style.justifyContent = "center";


var article = document.querySelectorAll("article");
for(var article of article){
    article.style.margin = "10px";
    article.style.background = "#265845";
}



