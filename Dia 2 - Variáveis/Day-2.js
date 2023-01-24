/* 1- Qual seu nome ?
   2- Qual sua Idade?
   3- Qual linguagem de programação você está estudando?

   No final exibirá: "Olá [nome], você tem [idade] anos de idade e já está aprendendo [linguagem]!"

   DEPOIS:
   Você gosta de estudar [linguagem] ? 1 para Sim, 2 para Não

   if(1){
    console.log{"Muito bom! Continue estudando e você terá muito sucesso."}
   }

   else(){
    console.log{Ahh que pena... Já tentou aprender outras linguagens?}
   }
*/

const nome = prompt("Qual seu nome ?");
const idade = prompt("Qual sua idade ?");
const linguagem = prompt("Qual linguagem de programação você está estudando ?");

const mensagem = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(mensagem);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);

if (gosta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}
else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
