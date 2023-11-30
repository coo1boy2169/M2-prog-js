class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")
        let g =canvas.getContext("2d")
        let random = Math.random()
        console.log(random)
      
        g.fillStyle = "yellow"

g.beginPath()
        // muur 1 
        g.moveTo(300,100)
        g.lineTo(200, 300)
        g.lineTo(600, 400)
        g.lineTo(700 , 200)
        g.lineTo(300,100)
        g.fill()
        g.stroke()
       
        g.closePath()


        // muur 2 
        g.beginPath()
        
        g.fillStyle = "yellow"
        g.lineTo(200,300)
        g.lineTo(200, 500)
        g.lineTo(600,600)
        g.lineTo(600 , 400)
        g.lineTo(200 , 300)
        g.fill()
        g.stroke()
       g.closePath()

      
    

        // driekhoek muur   
        g.beginPath()
        g.fillStyle = "yellow" 
        g.lineTo(600 , 400)
        g.lineTo(800, 300)
        g.lineTo( 700, 200)
        g.lineTo(600, 400)
        g.fill()
        g.stroke()
        g.closePath()

      // muur zijkant 
      g.beginPath()
      g.fillStyle = "yellow"
      g.lineTo(600,400)
      g.lineTo(600 , 600)
      g.lineTo(800 , 500)
      g.lineTo(800 , 300)
      g.lineTo(600, 400 )
      g.fill()
      g.stroke()
      g.closePath()

     // Raam 
      g.beginPath()
      if( random > 0.5){
        g.fillStyle = "blue"
      }
      else{
        g.fillStyle= "green"
      }
      g.moveTo(500,500)
      g.lineTo(500,450)
      g.lineTo(400,420)
      g.lineTo(400 , 480)
      g.fill()
      g.stroke()
      






        console.log(canvas)

      console.log("hello World! ")
    }
}

let app = new App()
app.runApplication()


