const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [

    {
        enunciado: "Uma alimentação saudável é fundamental para sustentar o corpo e a mente em suas atividades diárias. Consumir uma variedade de alimentos ricos em nutrientes essenciais como vitaminas, minerais e antioxidantes não só fornece energia, mas também fortalece o sistema imunológico, melhora a concentração e o humor, além de reduzir o risco de várias doenças crônicas. Como você descreveria sua alimentação regularmente? ",
        alternativas: [
            {
                texto: " Balanceada, com uma variedade de frutas, vegetais, proteínas e grãos integrais.",
                afirmacao: "Uma boa alimentação é fundamental para manter a saúde e o bem-estar.  "
            },
            {
                texto: " Irregular, com muitos alimentos processados e fast food.",
                afirmacao: "A má alimentação pode ter sérias consequências para a saúde. "
            }
        ]
    },
    {
        enunciado: "Qual é a importância de consumir frutas e vegetais diariamente? ",
        alternativas: [
            {
                texto: ") Fornecem vitaminas, minerais e fibras essenciais para o corpo. ",
                afirmacao: " Incluir uma variedade de alimentos frescos, como frutas, vegetais, grãos integrais e proteínas magras, fornece os nutrientes necessários para o corpo funcionar adequadamente."
            },
            {
                texto: "Não têm impacto significativo na saúde se consumidos esporadicamente.",
                afirmacao: " Dietas ricas em alimentos processados, açúcares refinados e gorduras saturadas aumentam o risco de obesidade, diabetes tipo 2 e doenças cardiovasculares. "
            }
        ]
    },
    {
        enunciado: "Você costuma ler os rótulos dos alimentos antes de comprá-los? ",
        alternativas: [
            {
                texto: " Sim, para verificar os ingredientes e o valor nutricional. ",
                afirmacao: "Além de prevenir doenças crônicas, como diabetes e doenças cardíacas, uma dieta equilibrada promove energia ao longo do dia e melhora a qualidade de vida. "
            },
            {
                texto: "Não, normalmente escolho alimentos com base no preço ou na embalagem atrativa.",
                afirmacao: " Além disso, a falta de nutrientes essenciais pode comprometer o funcionamento adequado do corpo e a capacidade de combater doenças.  "
            }
        ]
    },
    {
        enunciado: "Como você se sente após uma refeição nutritiva comparado a uma refeição pouco saudável? ",
        alternativas: [
            {
                texto: " Mais energizado e satisfeito por mais tempo. ",
                afirmacao: "  É importante também beber bastante água "
            },
            {
                texto: " Sem muita diferença em como me sinto fisicamente. ",
                afirmacao: " Uma dieta desequilibrada também pode levar a problemas digestivos "
            }
        ]
    },
    {
        enunciado: " Quais são os benefícios adicionais de uma alimentação equilibrada além da saúde física?",
        alternativas: [
            {
                texto: " Melhora do sono e da saúde mental.",
                afirmacao: "e limitar o consumo de alimentos processados e ricos em açúcares e gorduras saturadas para manter um estilo de vida saudável. "
            },
            {
                texto: "Aumento da ingestão de alimentos ricos em açúcar e gorduras saturadas. ",
                afirmacao: " Uma dieta desequilibrada também pode levar a problemas digestivos "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();

return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "alimentacao";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();