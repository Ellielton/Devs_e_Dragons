//Criando um modelo de persongem para ser reaproveitavél
 export class Personagem {
  nome
  vida = 100
  mana = 100
  level
  tipo
  descricao

  constructor(nome, level, tipo) {
    this.nome = nome
    this.level = level
    this.tipo = tipo  
  }

  obterInsignia() {
    if(this.level >= 5) {
      return `Implacável ${this.tipo}`
    }
    return `${this.tipo} iniciante`
  }
}
