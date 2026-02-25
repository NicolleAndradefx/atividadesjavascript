//02- Confeitaria (Interpolação)

/* Uma confeitaria vende um bolo por R$ 150,00.
Um cliente recebeu 10% de desconto.

calcule:
O valor do desconto
Valor final do bolo

Mostre o resultado utilizando interpolação */

//valor
let preco = 150;
let desconto = 0.10;

//conta
let valordesconto = preco * (desconto);
let valorfinal = preco - valordesconto;

//resultado
console.log(`Valor do desconto: R$ ${valordesconto}`);
console.log(`Valor final do bolo: R$ ${valorfinal}`);


//04- Psicólogo (Concatenção)

/*Um psicólogo cobra R$120,00 por sessão.
No mês, ele realizou 40 sessões.*/

//conta
const sessao = 120;
const sessoes = 40;

//resultado
const faturamento = 120 * 40;
console.log(120*40);



// Exercício 1 - Bolo de Pote (Cálculo de Lucro)
 
// Pergunta:
 
// Uma empreendedora vende bolo de pote por R$ 12,00 cada.
// O custo de produção por unidade é R$ 5,50.
// Se ela vendeu 30 unidades, calcule:
// O lucro por unidade
// O lucro total
// Exiba o resultado utilizando concatenação, declarando variáveis e constantes e adicionando comentários no código.
 
const VALOR_VENDA_UNIDADE = 12.00;
const CUSTO_PRODUCAO_UNIDADE = 5.50;
 
let unidadesVendidas = 30;
 
// Cálculo do lucro por unidade: Preço de Venda - Custo
let lucroPorUnidade = VALOR_VENDA_UNIDADE - CUSTO_PRODUCAO_UNIDADE;
 
// Cálculo do lucro total: Lucro por Unidade * Quantidade Vendida
let lucroTotal = lucroPorUnidade * unidadesVendidas;
 
// --- Saída de Dados (Exibição dos resultados com concatenação) ---
 
console.log("------------- Exercício 1 -----------------");
console.log("Relatório de Vendas - Bolos (Cáluco de Lucro");
console.log(`---------------------------------------------`);
 
// Exibindo o lucro por unidade
console.log("O lucro por unidade é: R$ " + lucroPorUnidade.toFixed(2));
 
// Exibindo o lucro total das 30 unidades
console.log("O lucro total para " + unidadesVendidas + " unidades vendidas é: R$ " + lucroTotal.toFixed(2));
 
console.log("--------------- Exercício 3 -----------------");
 
// Exercício 3 - Estilista (Comissão)
// Pergunta:
 
// Uma estilista vendeu um vestido por R$ 800,00. Ela recebe 15% de comissão sobre a vende.
// Calcule o valor da comissão e exiba o resultado usando interpolação.
 
const VALOR_VENDA = 800.00; // Valor do vestido vendido
const PERCENTUAL_COMISSAO = 15; // Porcentagem da comissão (15%)
 
// Cálculo da comissão: (Valor * Porcentagem) / 100
let valorComissao = (VALOR_VENDA * PERCENTUAL_COMISSAO) / 100;
 
// Usamos as crases para permitir a interpolação direta das variáveis
console.log(`Relatório de Pagamento - Estilista (Comissão)`);
console.log(`-----------------------------------------------`);
console.log(`O valor da venda foi: R$ ${VALOR_VENDA.toFixed(2)}`);
console.log(`A estilista receberá R$ ${valorComissao.toFixed(2)} de comissão (referente a ${PERCENTUAL_COMISSAO}%).`);