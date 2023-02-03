import { fileURLToPath } from 'url'
import path from 'path'
import express from 'express'

/*
  Création des variables globales permettant d'obtenir 
  le chemin absolue d'un fichier avec les modules ES6.
*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

/* Définition du moteur de rendu */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* 
  Envoi du dossier public au client avec le template EJS 
  correspondant à la page visiter par l'utilisateur
*/
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
  res.render('pages/accueil')
})

app.get('/page-de-test', async (req, res) => {
  res.render('test/page-de-test')
})

app.get('/contact', async (req, res) => {
  res.render('pages/contact')
})

app.get('/domaines', async (req, res) => {
  res.render('pages/domaines')
})

app.get('/ecoles', async (req, res) => {
  res.render('pages/ecoles', { data: restaurant })
})

app.get('/formations', (req, res) => {
  res.render('pages/formations')
})

app.get('/mentions-legales', (req, res) => {
  res.render('pages/mentions_legales')
})

app.get('/politique-de-confidentialite', (req, res) => {
  res.render('pages/politique_de_confidentialite')
})

app.listen(port, () => {
  console.log(`Front-end app listening on port ${port}`)
})
