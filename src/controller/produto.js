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
      // const id = req.params.id
      // const params = req.params | pega o objeto inteiro então consequentemente o id
      // params.id | outra forma de pegar o id
      const { id } = req.params // tem que ser o nome correto existente
      const produto = await ServiceProduto.PegarUm(id)

      res.status(200).send({
        data: produto
      })
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

      res.status(201).send({
        msg: 'Produto criado com sucesso'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Alterar(req, res) {
    try {
      const id = req.params.id
      const nome = req.body?.nome
      const disponivel = req.body?.disponivel
      const qtde = req.body?.qtde
      
      await ServiceProduto.Alterar(id, nome, disponivel, qtde)

      res.status(200).send({
        msg: 'Produto alterado com sucesso'
      })
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }

  async Deletar(req, res) {
    try {
      const { id } = req.params
      const produto = await ServiceProduto.Deletar(id)

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }
}

export default new ControllerProduto()