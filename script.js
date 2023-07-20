const perguntas = [
  { 
    pergunta: "Qual era o nome de nascimento de Marie Curie?",
    respostas: [
      {text: "Marie Salomee Sklodowska", correct: false},
      {text: "Manya Salomee Sklodowska", correct: true},
      {text: "Marie Curie Sklodowska", correct: false},
      {text: "Manya Curie Sklodowska", correct:false}
    ]},

  { 
    pergunta: "Em que cidade Marie Curie nasceu?",
    respostas: [
      {text: "Varsóvia", correct: true},
      {text: "Paris", correct: false},
      {text: "Sallanches", correct: false},
      {text: "Petrogrado", correct: false}
    ]},

  {
  pergunta: "Em que ano Marie Curie ganhou sua primeira medalha de ouro",
  respostas: [
    {text: "1867 ", correct: false},
    {text: "1883 ", correct: true},
    {text: "1891 ", correct: false},
    {text: "1895", correct:false}
  ]},

{
pergunta: "Qual dos seguintes elementos foi descoberto por Marie Curie?",
respostas: [
  {text: "Urânio", correct: false},
  {text: "Tório ", correct: false},
  {text: "Polônio ", correct: true},
  {text: "Rádio", correct: false}
]},

{
  pergunta: "Qual prêmio Nobel Marie Curie recebeu em 1903?",
  respostas: [
    {text: "Prêmio Nobel de Física", correct: true},
    {text: "Prêmio Nobel de Química", correct: false},
    {text: "Prêmio Nobel de Medicina", correct: false},
    {text: "Prêmio Nobel da Paz", correct: false}
  ]},
  
{
  pergunta: "Como Marie Curie faleceu?",
  respostas: [
    {text: "Em um acidente de atropelamento", correct: false},
    {text: "Devido a uma doença hematológica", correct: true},
    {text: "Em um acidente de laboratório", correct: false},
    {text: "Em um incêndio", correct: false}
  ]},

  {
    pergunta: "Por que Marie foi proibida de estudar em seu país natal?",
    respostas: [
      {text: "Por causa de sua nacionalidade", correct: false},
      {text: "Porque era mulher", correct: true},
      {text: "Por falta de recursos financeiros", correct: false},
      {text: "Por causa de seu histórico acadêmico", correct: false}
    ]},

    {
      pergunta: "Em que país Marie Curie se mudou aos 24 anos para continuar suas pesquisas?",
      respostas: [
        {text: "Alemanha ", correct: false},
        {text: "Polônia ", correct: false},
        {text: "França ", correct: true},
        {text: "Estados Unidos", correct: false}
      ]},

      {
        pergunta: "Qual das seguintes afirmações é verdadeira sobre Marie Curie?",
        respostas: [
          {text: "Ela seguiu as expectativas rígidas impostas às mulheres de sua época.", correct: false},
          {text: "Ela enfrentou desafios por ser polonesa vivendo na Polônia. ", correct: false},
          {text: "Ela era casada com um cientista chamado Pierre Curie.", correct: true},
          {text: "Ela contribuiu para a criação da bomba atômica.", correct: false}
        ]},
    
    {
      pergunta: "Qual é o título do romance gráfico em que a história do filme é baseada?",
      respostas: [
        {text: "Radioactive: Marie & Pierre Curie: A Tale of Love and Fallout", correct: true},
        {text: "Persépolis: A História de Marie Curie", correct: false},
        {text: "A Vida de Marie Curie: Uma História de Amor e Ciência", correct: false},
        {text: "Marie Curie: A Descoberta da Radiação", correct: false}
      ]}
];

const questions = document.getElementById('perguntas');
const buttonEscolha = document.getElementById('resposta');
const buttonEnviar = document.getElementById('send-button');



let currentPerguntaIndex = 0;
let score = 0;

function startQuiz(){
  currentPerguntaIndex = 0;
  score = 0;
  buttonEnviar.innerHTML = 'Enviar';

  showPergunta();
}

function showPergunta(){
  
  let currentPergunta = perguntas[currentPerguntaIndex];
  let numeroPergunta = currentPerguntaIndex + 1;
  questions.innerHTML= numeroPergunta + "." + currentPergunta.pergunta;

  currentPergunta.respostas.forEach(resposta => {
    const button = document.createElement("button");
    button.innerHTML = resposta.text;
    button.classList.add("botao");
    buttonEscolha.appendChild(button);
  });
}


startQuiz();


