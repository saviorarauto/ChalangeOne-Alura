let input = document.querySelector("#placeholder-id");
let flipChart = document.querySelector("#img-div");
let flipTexto = document.getElementById("texto-div");

input.onkeyup = function() {
console.log(this.value.length)
    if(this.value.length>0){
        flipChart.style.display = "none";
        flipTexto.style.display = "block";
    }
    else{
        flipChart.style.display = "block";
        flipTexto.style.display = "none";
    }

  for(var i = 0; i < this.value.length; i++){
    flipTexto.textContent = this.value;
  }
}