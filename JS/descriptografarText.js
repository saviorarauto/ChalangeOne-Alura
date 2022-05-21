let botaoDescriptografar = document.querySelector("#descriptografar-btn");
botaoDescriptografar.addEventListener("click", function (event) {
    event.preventDefault();
    let flipChart = document.querySelector("#flip-container-bt");
    console.log(flipChart);
    let input = document.querySelector("#placeholder-id");
    let palavra = input.value;
    let statusCriptografado = false;
    var result2 = descriptografar(palavra);
    console.log(result2);
    rotateFlip(statusCriptografado, flipChart);
    let textoFrente = document.getElementById("texto-div");
    textoFrente.textContent = result2;
})

function descriptografar(texto){
    let palavraAjustada = texto
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    return palavraAjustada
}

function rotateFlip(status, flipChart) {
    if (status == true) {
        flipChart.classList.add("invisivel");
    } else {
        flipChart.classList.remove("invisivel");
    }
}