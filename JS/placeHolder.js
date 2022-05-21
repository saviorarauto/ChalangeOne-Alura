let i = 0;
let editing = false;
let placeholder = "";
const txt = "Digite seu Texto";
const speed = 150;

function type() {

    if (editing == false) {
        placeholder += txt.charAt(i);
        document.getElementById("placeholder-id").setAttribute("placeholder", placeholder);
        i++;
        setTimeout(type, speed);
    }
}

function underline() {
    if (placeholder == "Digite seu Texto") {
        placeholder = "Digite seu Texto_"
    }
    else if (placeholder == "Digite seu Texto_") {
        placeholder = "Digite seu Texto"
    }
    document.getElementById("placeholder-id").setAttribute("placeholder", placeholder);
}

type();
setInterval(underline, 500);

document.getElementById("placeholder-id").addEventListener("focus", function (e) {
    placeholder = ""
    editing = true;
});

document.getElementById("placeholder-id").addEventListener("blur", function (e) {
    i = 0;
    editing = false;
    type();
});