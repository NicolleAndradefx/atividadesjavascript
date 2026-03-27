//Psicólogo (Classe)
class Paciente {
    constructor(nome, valorSessao){
        this.nome = nome;
        this.valorSessao = valorSessao;
    }

    calcularFaturamento(qtdSessoes){
        return this.valorSessao * qtdSessoes;
    }
}
const consulta = new Paciente("Juliá", 50);
console.log(consulta.calcularFaturamento(30));

//Ateliê (Herança)
class Servico{
    constructor(tipo, valor){
        this.tipo = tipo;
        this.valor = valor;
    }

    descricao(){
        return `Serviço ${this.tipo} | Valor: R$ ${this.valor}`
    }
}

//classe
class Costura extends Servico{
    constructor(tipo, valor, prazoDias){
        super(tipo, valor);
        this.prazoDias = prazoDias;
    }

    descricao(){
        return `${super.descricao()} | Prazo: ${this.prazoDias} dias`
    }
}

const servico1 = new Costura ("Ajuste de vestido de baile", 80, 5);

console.log(servico1.descricao());