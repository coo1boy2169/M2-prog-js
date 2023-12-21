class App {
    runApplication() {
        console.log("hello world!")


        let dino = new Dino()
        console.log(dino)
    }
}




class Dino {
    constructor(Name, vleeseter, leeftijd) {
        this.Name = "t- rex "
        this.vleeseter = true
        this.leeftijd = 69
    }
}

let app = new App()
app.runApplication()