class App {
    runApplication() {
        console.log("hello world!")


        let dino = new Dino("T-Rex" , true , 69)
        let plantEter = new Dino ("Triceratops" , false , 20)
        console.log(dino)
        console.log(plantEter)

        dino.eatFood(plantEter)
        console.log("leeft " +  plantEter.Name +  "? " + plantEter.leeft)
    }
}




class Dino {

    eatFood(foodToEat){

        foodToEat.leeft = false
        this.honger = false 
        
        console.log("ik ben een "  + this.Name)
        console.log("mijn honger " + this.honger)
    } 


    constructor(Name, vleeseter, leeftijd) {
        this.Name = Name;
        this.vleeseter = vleeseter
        this.leeftijd = leeftijd
        this.leeft = false
        this.honger = false
    }
}

let app = new App()
app.runApplication()