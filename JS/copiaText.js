document.getElementById('copiar-btn').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector(".p-back-div").textContent;
  await navigator.clipboard.writeText(text);
  alert("Texto copiado com sucesso!")
}