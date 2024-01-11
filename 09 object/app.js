class App 
{
    runApplication()
    {
       console.log("hello world!")
        
        
    let magickaarten ={
        atk:3,
        def:2,
        name: 'basic creature',
        cost: ["1R" , "1B "],
        text: "this basic creture is better in attaking"
    };
    console.log("you play: " + magickaarten.name ,"and " + magickaarten.text , "it's atk =" + magickaarten.atk , "it's def =" + magickaarten.def , "you have to pay " + magickaarten.cost)
    }
}

let app = new App()
app.runApplication()