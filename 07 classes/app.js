class App {
    runApplication() {
        console.log("hello world!")

    }
}


let app = new App()
app.runApplication()



class Greet {
    constructor() 
    {
        this.greeting = "Greetings!"
    }

    showGreeting() {

        console.log("Greeting van binenn " + this.greeting) 
    }
}

let greet = new Greet()
greet.showGreeting();


class GoodBye {
    constructor() {
        this.farwel = "See u next time!"
    }

    showGoodbye()
    {
        console.log("see u next time  van binenn " + this.farwel)
    }
}

let bye = new GoodBye()
bye.showGoodbye()




bye.showGoodbye()
greet.showGreeting();

bye.showGoodbye()
greet.showGreeting();

bye.showGoodbye()
greet.showGreeting();

bye.showGoodbye()
greet.showGreeting();

bye.showGoodbye()
greet.showGreeting();

console.log("greeting van buiten "  + greet.greeting)
console.log(" see u next time from outside" + bye.farwel)