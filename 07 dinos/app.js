class App {
    runApplication() {
        console.log("hello world!")


        let dino = new Dino("T-Rex" , true , 69)
        let plantEter = new Dino ("Triceratops" , false , 20)
        let grass = new Plant("grass"); 
        let struik = new Plant("struik")
        console.log(dino)
        console.log(plantEter)
        dino.eatFood(plantEter)
        console.log(  "leeft " +  plantEter.naam +  "? " + plantEter.leeft)
        console.log( "ik ben een " + plantEter.naam + "en ik eet graag " + grass.naam , "maar als er " + struik.naam , "is vind ik het ook niet erg yum")
        
    }   
}




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




class Plant{
    
    constructor(naam , leeft){
        this.naam = naam    
        this.leeft = leeft 

    }
}

let app = new App()
app.runApplication()