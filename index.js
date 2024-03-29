var steviloPloscic = document.querySelectorAll(".ploscica").length
var kdoJeNaVrsti = 0;


function stopGame(){
    for(var i=0; i<steviloPloscic; i++){
        document.querySelectorAll(".ploscica")[i].removeEventListener("click", krizecKrozecSpremeni);
    }
}

function kdoJeZmagal(zmagovalec) {
    if(document.querySelectorAll(".ploscica")[0].src.slice(-5) === document.querySelectorAll(".ploscica")[1].src.slice(-5) && document.querySelectorAll(".ploscica")[1].src.slice(-5) === document.querySelectorAll(".ploscica")[2].src.slice(-5) && document.querySelectorAll(".ploscica")[0].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[3].src.slice(-5) === document.querySelectorAll(".ploscica")[4].src.slice(-5) && document.querySelectorAll(".ploscica")[4].src.slice(-5) === document.querySelectorAll(".ploscica")[5].src.slice(-5) && document.querySelectorAll(".ploscica")[3].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[6].src.slice(-5) === document.querySelectorAll(".ploscica")[7].src.slice(-5) && document.querySelectorAll(".ploscica")[7].src.slice(-5) === document.querySelectorAll(".ploscica")[8].src.slice(-5) && document.querySelectorAll(".ploscica")[6].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[0].src.slice(-5) === document.querySelectorAll(".ploscica")[3].src.slice(-5) && document.querySelectorAll(".ploscica")[3].src.slice(-5) === document.querySelectorAll(".ploscica")[6].src.slice(-5) && document.querySelectorAll(".ploscica")[6].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[1].src.slice(-5) === document.querySelectorAll(".ploscica")[4].src.slice(-5) && document.querySelectorAll(".ploscica")[4].src.slice(-5) === document.querySelectorAll(".ploscica")[7].src.slice(-5) && document.querySelectorAll(".ploscica")[7].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[2].src.slice(-5) === document.querySelectorAll(".ploscica")[5].src.slice(-5) && document.querySelectorAll(".ploscica")[5].src.slice(-5) === document.querySelectorAll(".ploscica")[8].src.slice(-5) && document.querySelectorAll(".ploscica")[8].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[0].src.slice(-5) === document.querySelectorAll(".ploscica")[4].src.slice(-5) && document.querySelectorAll(".ploscica")[4].src.slice(-5) === document.querySelectorAll(".ploscica")[8].src.slice(-5) && document.querySelectorAll(".ploscica")[8].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
    else if(document.querySelectorAll(".ploscica")[2].src.slice(-5) === document.querySelectorAll(".ploscica")[4].src.slice(-5) && document.querySelectorAll(".ploscica")[4].src.slice(-5) === document.querySelectorAll(".ploscica")[6].src.slice(-5) && document.querySelectorAll(".ploscica")[6].src.slice(-5) != "2.png"){
        document.querySelector("h2").innerHTML = "Zmagal je " + zmagovalec;
        stopGame();
    }
}

function krizecKrozecSpremeni() {
    if (this.src.slice(-12) == "prazna-2.png"){
        if (kdoJeNaVrsti===0){
            this.src = "x.png"
            document.querySelector("h2").innerHTML = "Na vrsti je O";
            kdoJeNaVrsti++
            kdoJeZmagal("X")
        
        }
        else if (kdoJeNaVrsti===1){
            this.src = "o.png"
            document.querySelector("h2").innerHTML = "Na vrsti je X";
            kdoJeNaVrsti--
            kdoJeZmagal("O")
        }}
}


    for(var i=0; i<steviloPloscic; i++){
        document.querySelectorAll(".ploscica")[i].addEventListener("click", krizecKrozecSpremeni);
    }




