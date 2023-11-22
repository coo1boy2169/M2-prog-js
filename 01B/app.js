class App
{
    runApplication()
    {
        this.greeting = "Starting up";
        this.appNaam = "Beest"
this.versienummer=   0.9 
this.versiedatum = "21-11-2007"
this.autheur = "paul van loon "
this.copyright = "marshmellow"
this.distributeur= "mr beast"
this.darkmode = true
this.lagg = "veel"
    }
}

let app = new App()
app.runApplication()


console.log(app.greeting)
console.log( "appNaam: " + app.appNaam);
console.log("versienummer: "+ app.versienummer)
console.log("versiedatum: " + app.versiedatum)
console.log("autheur:" + app.autheur)
console.log("copyright: " + app.copyright)
console.log("distributeur:" + app.distributeur)
console.log("darkmode: " + app.darkmode)
console.log("lagg:" + app.lagg)