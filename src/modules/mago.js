import { Personagem } from "./personagem.js"

export class Mago extends Personagem{
  elementoMagico
  levelMagico
  inteligencia
  tipo = 'Mago' //tipo declarado por defull necessário por que é usado como classe no css

  constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
    super(nome, level)//E o constructor da class pai e tras as propriedades nome e level de Personagem
    this.elementoMagico = elementoMagico
    this.levelMagico = levelMagico
    this.inteligencia = inteligencia
  }

  obterInsignia() {
    if(this.level >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`
    }
    return super.obterInsignia()
  }
}