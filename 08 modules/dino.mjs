export class Dino {

    eatFood(foodToEat){

        foodToEat.leeft = false
        this.honger = false 
        
        console.log("ik ben een "  + this.naam)
        console.log("mijn honger " + this.honger)
        console.log("ik eet " + foodToEat.naam)
        
    } 


    constructor(Name, vleeseter, leeftijd) {
        this.naam = Name;
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd
        this.leeft = false
        this.honger = false
    }
}