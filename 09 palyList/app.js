class App {
    runApplication() {
        console.log("hello world!")

        let spotifyPlayList = {
            acountName: "leeraar",
            song: [{
                Artist: "IcePice",
                Title: "ThatBoiALiar",
                Album: "locationbar",
                TrackNumber: 2,
                Genre: "Rap"
            }
            ,
            {
                Artist: "BrunMars",
                Title: "Magic",
                Album: "MAgicion",
                TrackNumber: 3,
                Genre: "pop"
            }
            ,
            {
                Artist: "JustinBieber",
                Title: "Baby",
                Album: "bbg",
                TrackNumber: 1,
                Genre: "Love"
            }],

            favArtiest: {
                Name: "JustinBieber",
                Age: 24,
                Grammy: 2,
                Num1Hits: 5,
                genre: "Pop",

                Name2: "IceSpice",
                Age2: 20,
                Grammy2: 0,
                Num1Hits2: 2,
                Genre: "rap",



                Name3: "BrunoMars",
                Age3: 30,
                Grammy3: 3,
                Num1Hits3: 4,
                gener3: "pop"
            }


        }
        console.log(spotifyPlayList.song)
        // Je moest Aleen je Fav Artiest doen en dat doe je met spotifyplaylist.Favartiest
        // zelfde met song is gewoon spotifyPLayList.song :)

    }
}


let app = new App()
app.runApplication()