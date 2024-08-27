//Criando um modelo de persongem para ser reaproveitavél
 export class Personagem {
  nome
  vida
  mana
  level
  tipo
  descricao

  obterInsignia() {
    if(this.level >= 5) {
      return `Implacável ${this.tipo}`
    }
    return `${this.tipo} iniciante`
  }
}
