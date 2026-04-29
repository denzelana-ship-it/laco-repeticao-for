let numTabuada = prompt("Deseja ver a tabuada de qual número?");
let tabela = "";
for (let i = 1; i <= 10; i++) {
    tabela += `${numTabuada} x ${i} = ${numTabuada * i}\n`;
}
alert(`Tabuada do ${numTabuada}:\n${tabela}`);