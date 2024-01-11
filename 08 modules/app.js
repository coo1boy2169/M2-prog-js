class App 
{
    runApplication()
    {
       console.log("hello world!");
    }
}


 import { Plant } from "./plant.mjs";
 import {Dino} from "./dino.mjs"
import { MaakDino, MaakPlant } from "./maakDino.mjs";

let dino = new Dino("modulesauruz")
console.log(dino.naam)


let plant = new Plant( "modulesBloem")
console.log(plant.naam)
let app = new App()
app.runApplication()


let maakdino = MaakDino()
let maakplant = MaakPlant()

console.log( maakdino)
console.log( maakplant)