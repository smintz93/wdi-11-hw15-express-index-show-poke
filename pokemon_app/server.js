const express = require("express"); 
const app = express();


const pokemon = require("./models/pokemon.js")





// app.get("/pokemon", (req, res) => {
// 	res.send(pokemon)
// })


app.use(express.static("public"))



// INDEX ROUTE 

app.get("/pokemon", (req, res) => {
	
	res.render("index.ejs", {
		pokemonList: pokemon
	})
})

// SHOW ROUTE 

app.get("/pokemon/:id", (req, res) => {
	

	res.render("show.ejs", {
		pokemon: pokemon[req.params.id]
	})
})











app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})




