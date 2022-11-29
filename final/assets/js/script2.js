
let cavs = document.getElementById("C1");
let lakers = document.getElementById("L1");
let miami = document.getElementById("M1");
let divTeam = document.querySelector("teams");


 
function display(input) {
    let div = document.getElementById(input);
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}

function hide(current) {
    list = ["C", "L", "M"];
    for (i=0; i< list.length; i++) {
        if (list[i] !== current) {
            let div = document.getElementsByClassName(list[i]);
            for (j=0; j < div.length; j++) {
                let comp = document.getElementById(div[j].id);
                comp.style.display = "none";
            }
        }
    }
}

cavs.onclick = function() { 
    let photos = document.getElementsByClassName("C");
    hide("C")
    for (i=0; i < photos.length; i++){
        let dis = document.getElementById(photos[i].id)
        dis.style.display = "block";
    }

}

lakers.onclick = function() {
    let photos = document.getElementsByClassName("L");
    hide("L")
    for (i=0; i < photos.length; i++){
        let dis = document.getElementById(photos[i].id)
        dis.style.display = "block";
    }
}

miami.onclick = function() {
    let photos = document.getElementsByClassName("M");
    hide("M")
    for (i=0; i < photos.length; i++){
        let dis = document.getElementById(photos[i].id)
        dis.style.display = "block";
    }
}