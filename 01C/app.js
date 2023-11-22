class App
{
    runApplication()
    {
        let boolean = true
        let string = "string"
        let nummer = 0.69

        this.greeting = "Hello player"
        this.name = "beest";
        this.cijfer = 69
        this.tf = true
    console.log( boolean)
    console.log( string)
    console.log ( nummer )
    
    }
}

let app = new App()
app.runApplication()


console.log(app.greeting)
console.log( "appname: " + app.name);
console.log("versienummer: "+ app.cijfer)
console.log("tf: "+ app.tf)
