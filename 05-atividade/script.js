// Empresa de bolo de pote

const sabores = ["Brigadeiro", "Cenoura", "Ninho", "Limão"];

console.log(sabores);
console.log(sabores.length);

//Adicionando um novo sabor 
sabores.push("Baunilha");
console.log(sabores);
console.log(sabores.length);

//Removendo Sabor
sabores.pop();
console.log("Baunilha está fora do estoque " + sabores);
console.log(sabores.length);


//Confeitria

const nomes = ["Grazi", "Thiago", "Maria", "Marcos", "Isabelly"];

console.log(nomes[0]);
console.log(nomes[4]);

//Conferindo clientes
const cliente = nomes.includes("Carlos")
console.log(cliente);

console.log(nomes.lastIndexOf("Maria"));


//Bolo de pote
const pedidosManha = [5, 15, 25];
console.log(pedidosManha.length);

const pedidosTarde = [35, 45, 55];
const todosPedidos = pedidosManha.concat(pedidosTarde);
console.log(todosPedidos);



//Ateliê
const servicos = ["barra de calça ", "ajuste de vestido", "reforma de camisa"];

//adicionando serviço
servicos.unshift("apertar calça folgada ");
console.log(servicos);

//removendo primeiro array
const primeiroServico = servicos.shift();
console.log(servicos);


//Psicólogo
const consulta = [];

consulta.push("Higor");
consulta.push("Cauã");
consulta.push("Vitor");
consulta.push("Eliza");

for(let i = 0; i < consulta.length; i++ ){
    console.log("Ìndice " + i + ": " + consulta[i]);
}


//clínica
let matriz = [
    [9, 13, 15],
    [8, 12, 14]
];

for(let b = 0; b < matriz.length; b++){
    for(let c = 0; c < matriz[b].length; c++){
        console.log("[" + b + "][" + c + "] = " + matriz[b][c] )
    }
}


// 1️ Cadastro de cliente – Empresa de bolo de pote
 
let clienteA = {
    nome: "Maria",
    telefone: "11999999999",
    pedidoFavorito: "Bolo de pote de chocolate"
};
 
console.log(clienteA.nome);
 
clienteA.cidade = "São Paulo";
 
delete clienteA.telefone;
 
console.log(clienteA);
 
 
 
// 2️ Cadastro de produto – Confeitaria
 
let bolo = {
    sabor: "Morango",
    preco: 15
};
 
let ingredientes = {
    massa: "Baunilha",
    recheio: "Creme de morango"
};
 
let produtoFinal = {};
 
Object.assign(produtoFinal, bolo, ingredientes);
console.log(produtoFinal);
 
 
 
// 3️ Serviço do ateliê de costura
 
let servico = {
    tipo: "Ajuste de vestido",
    preco: 50
};
 
servico.preco = 70;
 
servico.p
console.log(servico);
 
 
 
// 4️ Ficha de paciente – Psicólogo
 
let paciente = {
    nome: "João",
    idade: 30,
    problema: "Ansiedade"
};
 
let propriedades = Object.keys(paciente);
 
console.log(propriedades);
 
 
 
// 5️ Cadastro de costureira – Ateliê de costura
 
let costureira = {
    nome: "Ana",
    experiencia: 5,
    especialidade: "Vestidos"
};
 
costureira.experiencia += 1;
 
console.log(costureira);
 
 
 
// 6️ Informações do terapeuta – Clínica de psicologia
 
let terapeuta = {
    nome: "Carlos",
    especialidade: "Terapia Cognitivo-Comportamental",
    cidade: "São Paulo"
};
 
let [nome, especialidade, cidade] = Object.values(terapeuta);
 
console.log(nome);
console.log(especialidade);
console.log(cidade);