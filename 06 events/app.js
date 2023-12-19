class App 
{
    runApplication()
    {
        let uitButton =    document.getElementById("myButton")
     
       console.log("hello world!")

       let localFunction = function (e)
       {
        console.log("click")
       };
       uitButton.addEventListener("click" , localFunction);

    }
}

let app = new App()
app.runApplication()