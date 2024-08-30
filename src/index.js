import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueriro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

//Instâncias da class filho, esta que cria também a class pai
const magoAntônio = new Mago('Antônio', 4, 'fogo', 4, 3)
const magaJulhia = new Mago('Júlia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 6, 'Ar', 8, 9)
const arqueiroMagoChico = new ArqueiroMago ('Chico', 7, 10, 'ar', 4, 8)

// array de instâncias que alimenta a função reder no arquivo personagem-view.js
const personagens = [magoAntônio, magaJulhia, arqueiroBruno, arqueiroMagoChico]

//Instância o objeto persongemView e já executga a função render.
new PersonagemView(personagens).render()
