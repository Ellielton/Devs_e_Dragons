import { Personagem } from "./modules/personagem.js"

/*const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}*/

/*const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}*/
   
//Criando a personagem Ana 
const personagemAna = {
    nome: "Ana",
    vida: 8,
    mana: 10
}


const personagemPedrinho = new Personagem()
personagemPedrinho.nome = "Pedrinho"
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.tipo = "Mago"
personagemPedrinho.level = 5

const personagemJose = new Personagem()
personagemJose.nome = "José"
personagemJose.tipo = "Arqueiro"
personagemJose.level = 3

console.log('Insiginia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia());
console.log('Insiginia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia());