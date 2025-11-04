import ServiceProduto from '../service/produto.js'

class ControllerProduto {
  async PegarTodos(req, res) {
    try {
      const produtos = await ServiceProduto.PegarTodos()
      res.status(200).send({
        data: produtos
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async PegarUm(req, res) {
    try {
      res.status(200).send('dog francês')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Criar(req, res) {
    try {
      // precisa pegar o valor do body
      // Outra forma de fazer:
      // const nome = req.body.nome
      // const disponivel = req.body.disponivel
      // const qtde = req.body.qtde
      const { nome, disponivel, qtde } = req.body
      await ServiceProduto.Criar(nome, disponivel, qtde)

      res.status(201).send()
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Alterar(req, res) {
    try {
      res.status(200).send('dog francês')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Deletar(req, res) {
    try {
      res.status(200).send('dog francês')
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerProduto()