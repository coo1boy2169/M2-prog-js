class App 
{
    runApplication()
    {
        console.log("hello world!")
       
        let title = document.getElementById("newstitle")
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        let newsitem2 = document.getElementsByClassName("gamenews") [1]
       
    

       let random = Math.random()
       console.log(random )
       if ( random < 0.2 )
       {
           title.style.backgroundColor = "#FF0000"
       }
       else if ( 0.2 <= 0.6) {
            title.style.backgroundColor = "#6E633D"
       }
       else if (0.6 <= 0.75){
        title.style.backgroundColor = "#355834 "
       }
       else if ( random > 0.75){
        title.style.backgroundColor = "#14281D"
       }
       

       
       
       console.log(title)

       if ( random < 0.2 )
       {
           newsitem1.style.backgroundColor =  "#6E633D"
       }
       else if ( 0.2 <= 0.6) {
            newsitem1.style.backgroundColor = "#FF0000"
       }
       else if (0.6 <= 0.75){
        newsitem1.style.backgroundColor = "#14281D"
       }
       else if ( random > 0.75){
        newsitem1.style.backgroundColor = "#355834 "
       }
       

       console.log(newsitem1)


       if ( random < 0.2 )
       {
           newsitem2.style.backgroundColor = "#14281D"
       }
       else if ( 0.2 <= 0.6) {
            newsitem2.style.backgroundColor = "#355834 "
       }
       else if (0.6 <= 0.75){
        newsitem2.style.backgroundColor =  "#6E633D"
       }
       else if ( random > 0.75){
        newsitem2.style.backgroundColor = "#FF0000"
       }
       

       console.log(newsitem2)



    }
}





let app = new App()
app.runApplication()