
var VinhosCadastro = parseInt(prompt("Quantos vinhos serão cadastrados?"))

function CadastroDeVinhos() {
    var nomeDoVinho = prompt("Digite o nome e tipo do vinho que deseja cadastrar: ");
    var tipo = prompt("Qual é o tipo de vinho? (Tinto, Branco, Rosé) ")
    var safra = prompt("Qual é a safra dele? ");
    var valorSafra = parseInt(safra)
    var pais = prompt("Qual é o seu país de origem? ");
    var qntd = parseInt(prompt("Qual é a quantidade atual em estoque?"))

    alert("Cadastro realizado! Veja os detalhes no console.")
    console.log(`O nome do vinho e tipo do vinho são: ${nomeDoVinho} - ${tipo}. Sua safra é ${valorSafra} e é do país ${pais}
    \n Temos ${qntd} em estoque`)
}

for (let n = 0; n < VinhosCadastro; n++){
    CadastroDeVinhos();
}

