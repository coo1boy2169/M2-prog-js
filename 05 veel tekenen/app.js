class App {
  runApplication() {
    const width = document.body.clientWidth, 
          height = document.body.clientHeight
    
    let canvas = document.getElementById("canvasId")
    canvas.width = width;
    canvas.height = height;
    let g = canvas.getContext("2d")
    g.fillStyle = "yellow"




    function drawBall(g, x, y) {
      g.beginPath()

      g.arc(x, y, 20, 0, Math.PI * 2)
      g.fill()
      g.closePath()
      g.stroke()
    }

    console.log(document.body.clientWidth, window.innerWidth)

    for (let i = 0; i < 80; i++) {
      drawBall(g, Math.random() * width, Math.random() * height)
    }

  }
}

let app = new App()
app.runApplication()


