class App 
{
    runApplication()
    {
        let uitButton = document.getElementById("myButton")
       console.log("hello world!")

       uitButton.addEventListener("click" , (e)=>
       {      
        console.log("click!");
       })


    }
}

let app = new App()
app.runApplication()