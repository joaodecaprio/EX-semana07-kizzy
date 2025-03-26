
//EX01
//Delacara as variáveis 
let p = 10;
let q = 3;
let r = 6;

// a) se a sobra da divisão de 10 por 3 for igual a 1, e o dobro de 6 for maior que 10, a soma de 3 com 6 
//for menor que 10, então o resultado imprime true   
let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);
//Declara o array e cria a variável produto
const valores = [3, 6, 9, 12, 15];
let produto = 1;
//Multiplica os valores do array e armazena na variável produto
for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


//EX02
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
// armazena o total de compras e incrementa o índice que percorre o array, fazedo a soma de todas as compras.
        totalCompras += compras[i]; 
        i++;
// Enquanto o limite for maior ou igual ao total de compras e o índice for menor que o tamanho do array, o loop continua.
    } while (limite >= totalCompras && i < compras.length);

//Calcula se o saldo disponivel é maior que zero, no caso se o resultado da conta, compras menos o limte.
    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;
//Enquanto o limite for maior ou igual ao total de compras e o índice for menor que o tamanho do array, o loop continua.
totalCompras += compras[i];
    while (limite >= totalCompras && i < compras.length) { 
        i++;
    }
    //Usar while evita somar um valor desnecessário no início.
    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}

//EX03
const idade = 21;
//Verifica se a idade é maior ou igual a 18 e menor que 60, se for imprime "Você é um adulto!"
if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
  //Verifica se a idade é menor que 18, se for imprime "Você é menor de idade!"
} else if (idade < 18) {
  console.log("Você é menor de idade!");
    //Se não for nenhuma das condições acima, imprime "Você está na melhor idade!"
} else {
  console.log("Você está na melhor idade!");
}

//EX04

//Declara as variáveis
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400]; 
for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];
//declara if para verificar se o consumo é menor ou igual a energia disponível, se for imprime "Dispositivo ligado" e subtrai o consumo da energia disponível 
    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
        // declara o else if para verificar se o consumo é menor ou igual a energia disponível mais a bateria extra, se for imprime "Dispositivo ligado com bateria extra" e subtrai o consumo da energia disponível mais a bateria extra
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
        //Se não for nenhuma das condições acima, imprime "Dispositivo não pode ser ligado. Energia insuficiente."
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}


    //EX07  
    

 // Funcao classificarPedido recebe o valor total do pedido como parâmetro
function classificarPedido(valorTotal) { 
    if (valorTotal < 50) {
        console.log("Frete não disponível!");
    }
    //Se o valor total for menor ou igual a 99.99, imprime "Frete com custo adicional!"
    else if (valorTotal <= 199.99) {
        console.log("Frete com custo adicional!");
    }
    //se nenhuma das condições acima for atendida, imprime "Frete grátis!"
    else {
        console.log("Frete grátis!");
    }
} 

//EX08
// Classe base Veiculo
class Veiculo {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }

    calcularConsumo(distancia) {
        return "Consumo não definido para veículo genérico";
    }
}

// Classe derivada Carro
class Carro extends Veiculo {
    constructor(modelo, ano, eficienciaKmPorLitro) {
        super(modelo, ano);
        this.eficienciaKmPorLitro = eficienciaKmPorLitro;
    }

    calcularConsumo(distancia) {
        const consumo = distancia / this.eficienciaKmPorLitro;
        return `O carro consumiu ${consumo.toFixed(2)} litros de combustível`;
    }
}

// Classe derivada Moto
class Moto extends Veiculo {
    constructor(modelo, ano, eficienciaKmPorLitro) {
        super(modelo, ano);
        this.eficienciaKmPorLitro = eficienciaKmPorLitro;
    }

    calcularConsumo(distancia) {
        const consumo = distancia / this.eficienciaKmPorLitro;
        return `A moto consumiu ${consumo.toFixed(2)} litros de combustível`;
    }
}

// Exemplos de uso
const fusca = new Carro("Fusca", 1970, 10);
const honda = new Moto("Honda CG", 2010, 20);

console.log(fusca.calcularConsumo(100)); // O carro consumiu 10 litros de combustível
console.log(honda.calcularConsumo(100)); // A moto consumiu 5 litros de combustível

    //EX09 

// Parâmetros iniciais
const velocidadeInicial = 5000; // m/s
const velocidadeSegura = 5;   // m/s
const desaceleracao = 50;     // m/s²
const tempoMaximo = 120;      // segundos
const desaceleracaoMaxima = 100; // Limite de desaceleração

// Verificação de limite de desaceleração
if (desaceleracao > desaceleracaoMaxima) {
    console.error("Erro: Desaceleração acima do limite permitido.");
    process.exit(1);
}

let tempo = 0;
let velocidade = velocidadeInicial;

console.log("Iniciando simulação de pouso da sonda em Marte...");

// Cálculo do tempo necessário para o pouso seguro
while (velocidade > velocidadeSegura && tempo <= tempoMaximo) {
    tempo++;
    velocidade = velocidadeInicial - (desaceleracao * tempo);
    console.log(`Tempo: ${tempo}s - Velocidade: ${velocidade.toFixed(2)} m/s`);
}

// Verificação de sucesso ou falha
if (velocidade <= velocidadeSegura) {
    console.log(`Pouso seguro alcançado em ${tempo} segundos.`);
} else {
    console.log("Falha: Tempo máximo excedido antes de atingir velocidade segura.");
}

        

        //EX10
        // Função para multiplicar matrizes de investimento
function multiplicarMatrizesInvestimento(matrizA, matrizB) {
    // Verifica se as matrizes podem ser multiplicadas (colunas de A == linhas de B)
    if (matrizA[0].length !== matrizB.length) {
        return "As matrizes não podem ser multiplicadas. Número de colunas de A é diferente do número de linhas de B.";
    }

    let linhasA = matrizA.length;
    let colunasA = matrizA[0].length;
    let colunasB = matrizB[0].length;
    let matrizResultado = Array(linhasA).fill().map(() => Array(colunasB).fill(0));

    // Multiplicação das matrizes
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizResultado;
}

// Função para imprimir a matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Exemplo de uso
const investimentosAno1 = [[1000, 2000], [1500, 2500]];
const investimentosAno2 = [[1.1, 1.2], [1.3, 1.4]];
{
const resultado = multiplicarMatrizesInvestimento(investimentosAno1, investimentosAno2);
console.log("Resultado da multiplicação das matrizes de investimento:");
imprimirMatriz(resultado);
}
    
    