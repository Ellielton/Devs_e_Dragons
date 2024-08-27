import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
  
const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('Jose', 3, 'Arqueiro')

// array de personagens usado no constructor
const personagens = [personagemPedrinho,personagemJose]

//Instância o objeto persongemView e já executga a função render.
new PersonagemView(personagens).render()