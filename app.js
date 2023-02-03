import express from "express";
import ejs from "ejs"
import * as url from 'url';
import { dirname } from "path";
const app = express()
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
// Voir le fichier Views || https://expressjs.com/fr/guide/using-template-engines.html
app.set("views", "app/views")
//Les templates serons en ejs C'est cela que ça signifie 
app.set("view engine", "ejs")
app.use(express.static(__dirname +"public"))
//Route par défaut (acceuil)
// Les méthods http GET POST PUT & DELETE attendent une request et une réponse 
// https://en.wikipedia.org/wiki/Request–response
app.get("/", (req,res) => {
  res.render("test.ejs")
  // on envoie la page ejs au navigateur qui avant va être compilé en html , 
})

app.listen(3000,
  console.log("Listen to port :3000"),
  console.log("dirname : ",__dirname)
  )