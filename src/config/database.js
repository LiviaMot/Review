// configurar a conexão com o banco
import { Sequelize } from 'sequelize'

class BancoDados {
  constructor() {
    this.init()
  }

  init() {
    // colocar todas as configs com o banco
    this.db = new Sequelize ({
      database: 'estoque', // nome do banco de dados
      host: 'localhost', // servidor
      username: 'root', // user
      password: '', // senha
      dialect: 'mysql' // tipo do banco a ser usado
    })
  }
}
export default new BancoDados()