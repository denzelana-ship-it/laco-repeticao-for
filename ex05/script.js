let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let texto = "";
if (n1 == "" || n2 == "") {
    alert("Por favor, preencha os dois números!");
} else {
    let inicio;
    let fim;

    if (n1 < n2) {
        inicio = n1;
        fim = n2;
    } else {
        inicio = n2;
        fim = n1;
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            texto = texto + i + " "; 
        }
    }

    alert("Pares entre " + inicio + " e " + fim + ":\n" + texto);
}