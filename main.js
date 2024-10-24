const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual a marca de carro você prefere?",
        alternativas: [
            {
                texto: " Toyota",
                afirmacao: " È uma otíma escolha poís tem a melhor qualidade e a confiabilidade do mercado, e são conhecidos por durabilidade e baixo custo da manutenção. ",
            },
            {
                texto: " Honda ",
                afirmacao: " Bela escolha, a honda conta com confiabilidade, desempenho, inovação tecnologica e seu valor de revenda, essas qualidades fazem a honda ser popular entre os consumidores. ",
            }
        ]
    },
    {
        enunciado: " Você é uma pessoa que prefere carros do tipo: ",
        alternativas: [
            {
                texto: " Esportivo ",
                afirmacao: " O carro possuí mais velocidade quando esportivo que é a melhor opção para a escolha de hoje em dia. ",
            },
            {
                texto: " Road dynamic ",
                afirmacao: " Esse modo de condução é para gastar menos combustível e andar tranquilamente carros assim geralmente são mais confortáveis que os esportivos ",
            }
        ]
    },
    {
        enunciado: " Qual carro da marca que mais atrai você para ultilizalo? ",
        alternativas: [
            {
                texto: " Peugeot ",
                afirmacao: "Conforto e Qualidade de Condução ele oferece para seus ultilizadores.",
            },
            {
                texto: "fiat",
                afirmacao: " Pioneirismo e inovação como características marcantes, produtos de alta qualidade e tecnologia, design admirado, respeito ao consumidor e responsabilidade socioambiental ela tem de garantia coisas muito interessantes para os condutores. ",
            }
        ]
    },
    {
        enunciado: " qual das marcas de carros acima tem a melhor durabilidade e conforto? ",
        alternativas: [
            {
                texto: "Fiat",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: "peugeot é a masrca mais confiável e confortavel",
            }
        ]
    },
    {
        enunciado: "Qual o problema cronico de cada marca?",
        alternativas: [
            {
                texto: " peugeot",
                afirmacao: "o ar condicionado apresente um problema cronico, segunda paete dos donos dos automóveis",
            },
            {
                texto: "fiat",
                afirmacao: "barulhos na suspensão, vazamentos de liquidos de arrefecimento e consumo anormal de óleo do motor ",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas ();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
        botaoAlternativas.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049 ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();