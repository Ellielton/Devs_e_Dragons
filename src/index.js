const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

//Criando a personagem Ana 
const personagemAna = {
    nome: "Ana",
    vida: 8,
    mana: 10
}

//Criando um model de persongem para ser reaproveitavél
class Personagem {
    nome
    vida
    mana
}

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = "Pedrinho"
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7 
