
const resultado = document.getElementById("resultado");
const button = document.getElementById("produzir");

button.addEventListener("click", () => {

    resultado.innerHTML = "";

    const quantidade = document.getElementById("quantidade").value;
    let valor = Number(quantidade);

    while(valor > 0){
        resultado.innerHTML += "Produzindo bolo nº " + valor + "<br>" ;
        valor--;
    }

});
