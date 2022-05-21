botaoCriptografar = document.querySelector("#criptografar-btn");
botaoCriptografar.addEventListener("click", function (event) {
    event.preventDefault();
    let flipContainer = document.querySelector("#flip-container-bt"); // uso apenas para rodar

    let textoFrente = document.getElementById("texto-div");
    console.log(textoFrente.textContent)
    let textoAtras = document.querySelector(".p-back-div"); // esse será o resultado
    let palavra = textoFrente.textContent;
    let statusCriptografado = true;
    var mapObj = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" }
    rotateFlip(statusCriptografado, flipContainer);
    let result= criptografar(palavra, mapObj)
    textoAtras.textContent = result;
})

function criptografar(str, mapObj) {
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

    return str.replace(re, function (matched) {
        return mapObj[matched.toLowerCase()];
    });
}

function rotateFlip(status, flipChart) {
    if (status == true) {
        flipChart.classList.add("invisivel");
    } else {
        flipChart.classList.remove("invisivel");
    }
}
