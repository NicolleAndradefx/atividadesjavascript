//Bolo de Pote

for(let i = 1; i <= 10; i++){
    console.log("Produzindo bolo: " + i);
}

//Confeitaria

const sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];

sabores.forEach(function(sabor){
    console.log(sabor);
});

//Ateliê
let valorServico = 200;
let faturamentoTotal = 0;

for(let i = 1; i <= 5; i++){
    faturamentoTotal += valorServico;
    console.log("Serviço Nº: " + i);
    console.log("Valor cobrado: R$ " + valorServico);
}
console.log("Faturamento Total: R$ " + faturamentoTotal);


//Psiócologo

const pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

pacientes.forEach(function(paciente){
    console.log("Paciente Atendido: " + paciente);
});