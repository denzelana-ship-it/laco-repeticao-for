let total = 0;
for (let contador = 1; contador <= 10; contador++) {
let valor = parseInt(prompt("Digite o " + contador + "º número:"));
total = total + valor;
}
alert("A soma dos 10 números é: " + total);