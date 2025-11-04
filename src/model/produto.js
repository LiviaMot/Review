// começa do inicio que é o model
import bancodados from '../config/database.js'

class Produto {
  constructor() {
    this.model = bancodados.db.define('produtos', {
      id: {
        type: bancodados.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: bancodados.db.Sequelize.STRING // forma padrão de colocar o tipo da coluna
      },
      disponivel: {
        type: bancodados.db.Sequelize.BOOLEAN
      },
      qtde: {
        type: bancodados.db.Sequelize.INTEGER
      }
    }) // o banco
  }
}

export default new Produto().model // assim exporta a tabela 'this.model'