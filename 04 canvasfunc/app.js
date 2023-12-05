class App {
  runApplication() {
    console.log("hello world ")

    let canvas = document.getElementById("canvasId")
    let g = canvas.getContext("2d")
    g.fillStyle = "yellow"

    this.tekenhuis(g, 20, 20)
    this.tekenKerstBoom(g,   700 ,300)


  }

  tekenhuis(g, x, y) {



    g.beginPath()
    // muur 1 
    g.moveTo(300 + x, 100 + y)
    g.lineTo(200 + x, 300 + y)
    g.lineTo(600 + x, 400 + y)
    g.lineTo(700 + x, 200 + y)
    g.lineTo(300 + x, 100 + y)
    g.fill()
    g.stroke()

    g.closePath()


    // muur 2 
    g.beginPath()

    g.fillStyle = "yellow"
    g.lineTo(200 + x, 300 + y)
    g.lineTo(200 + x, 500 + y)
    g.lineTo(600 + x, 600 + y)
    g.lineTo(600 + x, 400 + y)
    g.lineTo(200 + x, 300 + y)
    g.fill()
    g.stroke()
    g.closePath()




    // driekhoek muur   
    g.beginPath()
    g.fillStyle = "yellow"
    g.lineTo(600 + x, 400 + y)
    g.lineTo(800 + x, 300 + y)
    g.lineTo(700 + x, 200 + y)
    g.lineTo(600 + x, 400 + y)
    g.fill()
    g.stroke()
    g.closePath()

    // muur zijkant 
    g.beginPath()
    g.fillStyle = "yellow"
    g.lineTo(600 + x, 400 + y)
    g.lineTo(600 + x, 600 + y)
    g.lineTo(800 + x, 500 + y)
    g.lineTo(800 + x, 300 + y)
    g.lineTo(600 + x, 400 + y)
    g.fill()
    g.stroke()
    g.closePath()

    g.beginPath()
    g.fillStyle = "blue"
    g.moveTo(500 + x, 500 + y)
    g.lineTo(500 + x, 450 + y)
    g.lineTo(400 + x, 420 + y)
    g.lineTo(400 + x, 480 + y)
    g.fill()
    g.stroke()



    console.log("hello World! ")

  }


 
  tekenKerstBoom(g, x, y) {

    g.beginPath()
    g.fillStyle = "green";
    g.moveTo(x,y)
    g.lineTo(100 + x ,300 + y)
    g.lineTo(-100 + x , 300 + y)
    g.closePath()
    g.stroke()
    g.fill()

      // stam

      g.beginPath()
      g.fillStyle = "brown"
      

  }

}





let app = new App()
app.runApplication()


