const express = require("express"); 
const app = express();


const pokemon = require("./models/pokemon.js")





// app.get("/pokemon", (req, res) => {
// 	res.send(pokemon)
// })

// INDEX ROUTE 

app.get("/pokemon", (req, res) => {
	
	res.render("index.ejs", {
		pokemonList: pokemon
	})
})
















app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})


