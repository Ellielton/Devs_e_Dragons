import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
  
const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('Jose', 3, 'Arqueiro')

// array de personagens usado no constructor
const personagens = [personagemPedrinho,personagemJose]

//Instância o objeto persongemView e já executga a função render.
new PersonagemView(personagens).render()

const mago = new Mago('manu', 5, 10)
console.log(mago)
