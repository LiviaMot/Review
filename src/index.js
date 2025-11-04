import express from "express";
import bancodados from './config/database.js'
import router from './router/produto.js'

const app = express()
app.use(express.json()) // a forma como a requisição vai ser lido no formato json

app.use('/api/v1', router)

// iniciar servidor
const port = 3000
// conectar com o banco
// subindo o servidor
bancodados.db
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("Servidor rodando na porta: " + port)
    })
  })
  .catch((e) => {
    console.log("Não foi possível conectar com o banco: " + e)
  })