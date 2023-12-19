class App {
    runApplication() {
        let uitButton = document.getElementById("myButton")
        console.log("hello world!")

        uitButton.addEventListener("click", (e) => {
            const para = document.createElement("p")
            const node = document.createTextNode("this is new")
            para.appendChild(node)
            document.body.appendChild(para);


        })
        let img = document.getElementById("OgiKnop")
        console.log("hello world!")

        img.addEventListener("click", (e) => {
            var x = document.createElement("IMG");
            x.setAttribute("src", "artworks-000114895155-xglnu7-t500x500.jpg");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "The Pulpit Rock");
            document.body.appendChild(x);
        })


        let h1 = document.getElementById("OgiKnop")
        console.log("hello world!")

        h1.addEventListener("click", (e) => {
            const para = document.createElement("h1")
            const node = document.createTextNode("hallo")
            para.appendChild(node)
            document.body.appendChild(para);

        })
        let p = document.getElementById("OgiKnop")
        console.log("hello world!")

        p.addEventListener("click", (e) => {
            const para = document.createElement("p")
            const node = document.createTextNode("Ik haat me leven")
            para.appendChild(node)
            document.body.appendChild(para);
        })
    }
}

let app = new App()
app.runApplication()