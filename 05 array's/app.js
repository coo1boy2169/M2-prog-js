class App {
    runApplication() {
        let artiesten = ["Bieber", "BlackPink", "LadyGaGa"]
        let nummers = [2, 5, 7]
        let headersByCssClass = document.getElementsByClassName("bandName")
        console.log("hello world!")
        console.log(artiesten)
        console.log(nummers)

        for (let i = 0; i < artiesten.length; i++) {
            let element = artiesten[i];
            console.log(i + ": " + element)
        }



        // vraag hulp 
        for (let i = 0; i < nummers; i++) {
            let Numbers = nummers[i];
            console.log(Numbers)
        }


        artiesten.push(" Bob dylan", " prince ")

        for (let i = 0; i < artiesten.length; i++) {
            let element = artiesten[i];
            console.log(i + ": " + element)
        }

        let indexToRemove = artiesten.indexOf("bob dylan")

        artiesten.splice(indexToRemove, 1)

        for (let i = 0; i < headersByCssClass.length; i++) {
            let Header = headersByCssClass[0].innerText = "nieuws ";
            headersByCssClass[1].innerText = "reviews";
            headersByCssClass[2].innerText = "commentaar ";
            headersByCssClass[3].innerText = " sterren";
            headersByCssClass[4].innerText = " kritiek";
            console.log(headersByCssClass[i].innerText)
        }




    }



}

let app = new App()
app.runApplication()