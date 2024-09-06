const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [

    {
        enunciado: " Qual é a importância de incluir uma variedade de alimentos ricos em vitaminas e minerais na dieta diária, como frutas e vegetais frescos, em comparação com a ingestão exclusiva de alimentos processados? ",
        alternativas: [
       {
        texto: "Incluir uma variedade de alimentos frescos garante uma melhor nutrição e fortalece o sistema imunológico.  ",
        afirmacao: [
       " Uma boa alimentação é a base para uma vida saudável e equilibrada. ",
       " Consiste em consumir uma ampla variedade de alimentos que forneçam todos os nutrientes essenciais. "]
      },
       {
        texto: " Focar apenas em alimentos processados pode ser mais conveniente, mas pode não fornecer todos os nutrientes essenciais. ",
        afirmacao: [
       " Frutas e vegetais frescos são ricos em vitaminas, minerais e fibras. ",
       "  Eles devem ser a base de nossa dieta para garantir uma nutrição adequada. "]
      }
      ]
      },
   
       {
        enunciado: " Como a inclusão de grãos integrais, como arroz integral e aveia, contribui para a regulação dos níveis de açúcar no sangue e a energia sustentada, em comparação com o consumo de grãos refinados? ",
        alternativas: [
       {
        texto: " Grãos integrais ajudam a manter níveis de açúcar no sangue estáveis e fornecem energia duradoura. ",
        afirmacao: [
       "  Grãos integrais, como arroz integral e aveia, oferecem energia sustentada. ",
       " Esses grãos ajudam também na digestão, mantendo o trato intestinal saudável. ",
       "  "]
      },
       {
        texto: " Grãos refinados podem causar picos de açúcar no sangue e oferecer energia de curto prazo. ", 
        afirmacao: [
       "  Proteínas magras, como peixes e aves, são importantes para a construção e reparo dos tecidos. ",
       " Leguminosas, como feijão e lentilhas, são ótimas fontes de proteína vegetal. ",
       "  "]
      },
      ]
      },
   
       {
        enunciado: " De que forma as proteínas magras, como peixes e aves, podem influenciar a construção e reparo dos tecidos em comparação com o consumo de proteínas de origem processada ou alta em gordura? ",
        alternativas: [
       {
        texto: " Proteínas magras são essenciais para o crescimento muscular e a recuperação adequada dos tecidos. ",
        afirmacao: [
       " Gorduras saudáveis, encontradas em abacates e nozes, são essenciais para a saúde do coração e do cérebro. ",
       "  Evitar alimentos processados e ricos em açúcares adicionados pode prevenir doenças crônicas. ",
       "  "]
      },
       {
        texto: " Proteínas processadas ou ricas em gordura podem contribuir para problemas de saúde, como doenças cardíacas e ganho de peso. ",
        afirmacao: [
       " Doenças como diabetes e hipertensão podem ser mitigadas com escolhas alimentares mais saudáveis. ",
       " O consumo excessivo de sal deve ser evitado para manter a pressão arterial em níveis saudáveis.",
       "  "]
      },
      ]
      },
   
       {
        enunciado: " Qual é o impacto das gorduras saudáveis, encontradas em alimentos como abacates e nozes, na saúde do coração e do cérebro, em comparação com o consumo de gorduras saturadas e trans? ",
        alternativas: [
       {
        texto: " Gorduras saudáveis apoiam a saúde cardiovascular e cerebral, promovendo uma melhor função cognitiva e proteção cardíaca. ",
        afirmacao: [
       "  Manter-se hidratado é crucial para o funcionamento adequado dos órgãos e a saúde da pele. ",
       "  Beber água ao longo do dia ajuda a manter o equilíbrio hídrico do corpo. "]
     },
       {
        texto: " Gorduras saturadas e trans podem aumentar o risco de doenças cardíacas e prejudicar a função cognitiva. ",
        afirmacao: [
       "  A moderação é a chave; comer porções adequadas ajuda a evitar o ganho de peso. ",
       "  moderação também promove a saciedade e o bem-estar geral. "]
      }
      ]
      },   
     
       {
        enunciado: " Como a redução do consumo de alimentos processados e ricos em açúcares adicionados pode afetar a prevenção de doenças crônicas, como diabetes e hipertensão, em comparação com uma dieta rica em alimentos processados? ",
        alternativas: [
       {
        texto: " Reduzir alimentos processados e açúcares adicionados pode ajudar a prevenir doenças crônicas e manter a pressão arterial saudável. ",
        afirmacao: [
       " Planejar refeições equilibradas e variadas pode tornar a alimentação mais interessante. ",
       "  Isso também torna a dieta mais prazerosa e fácil de seguir. "]
      },
       {
        texto: " Uma dieta rica em alimentos processados e açúcares pode aumentar o risco de desenvolver doenças crônicas e hipertensão. ",
        afirmacao: [
       "  O preparo de alimentos frescos e caseiros é frequentemente mais saudável. ", 
       "  Opções prontas e processadas geralmente contêm mais aditivos e conservantes. ", 
       "  " ]
      },
      ]
      },
   
       {
        enunciado: " Qual é a importância de manter-se adequadamente hidratado ao longo do dia, bebendo água suficiente, em comparação com a ingestão predominante de bebidas açucaradas e cafeinadas? ",
        alternativas: [
      {
        texto: " A hidratação adequada com água ajuda na função dos órgãos e na eliminação de toxinas, promovendo uma saúde ideal. ",
        afirmacao: [
       " Reduzir o consumo de bebidas açucaradas é uma boa prática para a saúde. ",
       " Optar por chás naturais ou água é uma alternativa mais saudável. "]
      },
      {
        texto: "  Bebidas açucaradas e cafeinadas podem causar desidratação e afetar negativamente a saúde geral. ", 
        afirmacao: [
       " A ingestão de alimentos ricos em antioxidantes ajuda a combater o estresse oxidativo. ",
       "  Berries e vegetais de folhas verdes são excelentes fontes de antioxidantes. "]
      },
      ]
      },
   
       {
        enunciado: " Como o planejamento de refeições equilibradas e variadas pode afetar a satisfação e o controle de peso, em comparação com uma dieta monótona e restritiva? ",
        alternativas: [
      {
        texto: " Refeições equilibradas e variadas ajudam a manter a saciedade e a controlar o peso de forma sustentável. ",
        afirmacao: [
       " Comer devagar e prestar atenção aos sinais de fome e saciedade pode melhorar a digestão. ",
       " Isso também ajuda no controle de peso e na satisfação após as refeições. "]
      },
      {
        texto: " Uma dieta monótona e restritiva pode levar a deficiências nutricionais e dificuldades em manter o peso. ",
        afirmacao: [
       " Pequenas mudanças na alimentação podem ter grandes impactos na saúde geral. ",
       "  Adicionar mais legumes às refeições é uma maneira simples de melhorar a dieta. "]
      },
      ]
      },
      
       {
        enunciado: " De que maneira pequenas mudanças na dieta, como adicionar mais legumes às refeições, podem influenciar a saúde geral e a qualidade de vida, em comparação com manter uma dieta rica em alimentos refinados e industrializados? ",
        alternativas: [
      {
        texto: " Adicionar legumes e outros alimentos saudáveis pode melhorar significativamente a saúde geral e a qualidade de vida. ",
        afirmacao: [
       " Uma alimentação saudável deve ser um hábito sustentável e adaptável. ",
       " Consultar um nutricionista pode ajudar a criar um plano alimentar personalizado. "]
      },
      {
        texto: " Manter uma dieta rica em alimentos refinados e industrializados pode ter efeitos negativos na saúde e no bem-estar. ",
        afirmacao: [
       " A educação sobre nutrição contribui para escolhas alimentares mais saudáveis. ",
       " A prática regular de exercícios físicos complementa uma dieta saudável, promovendo um estilo de vida equilibrado. ",
       "  "]
      },
      ]
      }
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
