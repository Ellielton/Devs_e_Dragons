import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem{
  tipo = 'Arqueiro'
  destereza

  constructor(nome, level, destereza) {
    super(nome, level)
    this.destereza = destereza
  }

  obeterInsignia() {
    if(this.destereza >= 5){
      return `Dominador de flechas`
    }
    return super.obterInsignia();
  }
}