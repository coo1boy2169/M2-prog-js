











class App {
    runApplication() {
        console.log("hello world ")

        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d")
        let items = [['boom', 'red', 1.2], ['huis', 'yellow', 0.8]];


        items.push(["paal", "grijs", 0, 7])
        items.splice(["yellow"])

        console.log(items)
        g.fillStyle = "yellow"


        for ( let i = 0; i< items.length; i++){
            
          
        }

        this.tekenhuis(g, 20, 20)
        this.tekenKerstBoom(g, 900, 250)


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

        // boom

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x, y)
        g.lineTo(200 + x, 300 + y)
        g.lineTo(-200 + x, 300 + y)
        g.closePath()
        g.stroke()
        g.fill()
        g.closePath()

        // piek

        g.beginPath()
        g.fillStyle = "orange"
        g.moveTo(x, y)
        g.lineTo(1 + x, -50 + y)
        g.lineTo(10 + x, 10 + y)
        g.lineTo(-10 + x, 10 + y)
        g.lineTo(1 + x, -50 + y)
        g.fill()
        g.closePath()




        // stam 


        g.beginPath()
        g.fillStyle = " brown"
        g.rect(x - 35, y + 300, 70, 90)
        g.fill()
        g.stroke()
        g.closePath()


        // ballen

        function drawBall(g, x, y) {
            g.beginPath()

            g.arc(x, y, 10, 0, Math.PI * 2)

            g.fill()
            g.closePath()
            g.stroke()
        }

        for (let i = 0; i < 20; i++) {
            drawBall(g, x + Math.random() * 100 - 50, y + Math.random() * 299)
        }






    }





}





let app = new App()
app.runApplication()
//app.drawBall(g , Math.random()* 30 , Math.random() * 400)


