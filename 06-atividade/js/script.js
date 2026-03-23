//Psicólogo
function avaliarSessao(nomePaciente, quantidadeSessoes) {
    console.log("Paciente:", nomePaciente);
   
    const resultado = quantidadeSessoes >= 10;
    console.log("Pode receber alta:", resultado);
   
    return resultado;
}
let resultado = avaliarSessao("Maria", 20);
console.log(resultado);
 
//Ateliê
function listarMateriais(materiais) {
    console.log(materiais.length);
 
    //array maiúsculas
    const materiaisMaiusculos = materiais.map(material => material.toUpperCase());
 
    return materiaisMaiusculos;
}
 
const lista = ["tintas", "pinceis", "tecidos"];
const resultado2 = listarMateriais(lista);
 
console.log(resultado2);
 
 
//Psicólogo JSON
const paciente = {
  nomeCompleto: "Ana Souza",
  idade: 32,
  planoDeSaude: true,
  queixasPrincipais: [
    "ansiedade",
    "insônia",
    "estresse no trabalho"
  ],
  ultimaSessao: {
    data: "2026-03-15",
    escalaDeHumor: 7,
    houvePrescricaoDeAtividade: true
  }
};
 
 
//Bolo de pote JSON
 
const catalogo = {
  promocaoAtiva: true,
  descontoPercentual: 15,
  sabores: [
    {
      nomeDoSabor: "brigadeiro",
      preco: 8,
      contemLactose: true,
      ingredientes: [
        "leite condensado",
        "chocolate",
        "manteiga",
        "granulado"
      ]
    },
    {
      nomeDoSabor: "morango",
      preco: 7,
      contemLactose: true,
      ingredientes: [
        "massa de baunilha",
        "creme",
        "morangos",
        "leite condensado"
      ]
    },
    {
      nomeDoSabor: "maracujá",
      preco: 9,
      contemLactose: false,
      ingredientes: [
        "polpa de maracujá",
        "leite vegetal",
        "açúcar",
        "massa sem lactose"
      ]
    }
  ]
};


// Atividade 2
 
const calcularValorPedido = (quantidadedeBolos, valorUnitario) => {
let total = quantidadedeBolos * valorUnitario;
if (quantidadedeBolos >= 10)  {
total = total - (total * 0.10);
}
return total;
}
 
// atividade 4
 
const filtrarSaboresDisponiveis = (sabores, letra) => {
let resultado = sabores.filter(sabor => sabor.startsWith(letra));
return resultado;
}
 
//atividade 6
 
`{
  "cliente": {
  "nome": "Mariana Souza,
  "telefone": "11987654321"
  },
  "tipoPeca": "Vestido",
  "medidas": {
  "busto": 90,
  "cintura": 70,
  "quadril": 98
  },
  "tecido": "Seda",
  "prazoDias": 7,
  "status": "em produção"
}`
 
//atividade 8
 
`{
"idPedido": 1001,
"dataPedido": "2026-03=23",
"cliente": {
 "nome": "João Silva",
 "email": "joao@email.com"
},
"itens": [
{
  "produto": "Bolo de Chocolate",
  "quantidade": 2,
  "observacoes": "Sem cobertura"
},
{
  "produto": "Bolo de Morango",
  "quantidade": 1,
  "observacoes": "Com morangos extras"
}
],
"enderecoEntrega": {
"rua": "Rua das Flores",
"numero": 123",
"bairro": "Centro",
"cidade": "São Paulo",
"cep": 01000-000"
},
"formaPagamento: "pix"
"totalCalculado": 75.50"
}`
 