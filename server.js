/* 
  Code récupérer dans le cours : Passer au fullstack avec NodeJS, EJS et MongoDB
*/

import http from 'http'
import { app } from './app.js'

/**
 * Normalise le numéro du port du serveur.
 *
 * @param {String | Number} valeur
 * @returns {Boolean} vrai ou faux
 */
const normalizePort = (valeur) => {
  const port = parseInt(valeur, 10)

  if (isNaN(port)) {
    return valeur
  }
  if (port >= 0) {
    return port
  }
  return false
}
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Gestion des erreurs côté serveur.
 *
 * @param {Error} error
 */
const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' nécessite des privilèges élevés.')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' est déjà utilisé.')
      process.exit(1)
      break
    default:
      throw error
  }
}

const server = http.createServer(app)

server.on('error', errorHandler)
server.on('listening', () => {
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port
  console.log('Listening on ' + bind)
})

server.listen(port)
