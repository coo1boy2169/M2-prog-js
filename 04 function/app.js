






// opdracht 3 

// werkt niet vragen
function eigenWiskunde() {
    let u = 9
    let h = 8
    let l = 15
    let logY = Math.log(l) + h + Math.pow(u, 2)
    console.log(logY)
}

function heeftEenResultaat() {
    let resultaat = 1
    return resultaat
}

let hetResultaat = heeftEenResultaat() // opvangen 
console.log(hetResultaat)
console.log(heeftEenResultaat())


let x = 9
let a = 3
let b = 4
let c = 89

let y = (a * (x * x)) + (b * x + c)
console.log(y)



function xa2bcWiskunde(x, a, b, c) {
    let y = (a * (x * x)) + (b * x + c)
    return y
}


let y1 = xa2bcWiskunde(9, 4, 3, 89)
console.log(y1)

let y2 = xa2bcWiskunde(3, 6, 5, 45)
console.log(y2)


let y3 = xa2bcWiskunde(7, 1, 2, 13)
console.log(y3)













// 2 opdracht 

// vraag aan de docnet waarom het niet werkt string
function argumentsAreHandy(shoutout) {
    
    console.log("doe you wan to give a shout out ")
    console.log(shoutout)
}


argumentsAreHandy("hoi hoishoutout")










// 1 opdracht

function superMooieGlobaaleFunction() {
    console.log("ik ben globaal")
    console.log("dus je mag mij overaal aan ropeen")

}

superMooieGlobaaleFunction()
superMooieGlobaaleFunction()
superMooieGlobaaleFunction()

function aanRoepVoorbeeld() {

}

aanRoepVoorbeeld()


class App {
    runApplication() {
        console.log("hello world")
        superMooieGlobaaleFunction()
    }


    itsAME(Naam) {
        let MARIO = "MARIO!!"
        console.log = (Naam)

    }

    Geest(){
        let boe = "BWHAA!!!"
        return boe

    }


    Optellen(nx, y) {
         nx = 10
         y = Math.random()
        let uitslag = nx + y

        console.log(uitslag)
        return uitslag

    }

    randomGetal(l, y, h, w) {    
        let uitslagen = l + h + y + w
        l = Math.random()
        y = Math.random()
        h = Math.random()
        w = Math.random()
        console.log('randomGetal: ' + uitslagen)

    }



}

let app = new App()
app.runApplication()
app.randomGetal(1, 4, 5, 6)
app.Optellen()
app.itsAME()
app.Geest()


