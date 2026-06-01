// Lista de curiosidades para exibir no site
const curiosidades = [
    "A agricultura digital usa drones e sensores para proteger plantações e economizar água!",
    "O Agrinho incentiva a sustentabilidade e a preservação das florestas e rios.",
    "Cuidar do solo é essencial para garantir alimentos saudáveis para todo o planeta.",
    "Pequenas atitudes, como economizar água e reciclar o lixo, ajudam a mudar o mundo!",
    "O programa Agrinho existe há mais de 25 anos transformando a educação no campo."
];

// Selecionando os elementos da página
const botao = document.getElementById("btn-curiosidade");
const textoCuriosidade = document.getElementById("texto-curiosidade");

// Função para mudar a curiosidade de forma aleatória
botao.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    textoCuriosidade.textContent = curiosidades[indiceAleatorio];
});
