import Produto from "../model/produto.js";

class ServiceProduto {
  async PegarTodos() {
    return Produto.findAll()
  }

  async PegarUm(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }
    // serviço se comunica com o modelo
    const produto = await Produto.findByPk(id)
    // findByPk = quando sei o id
    // findOne = quando não sei o id

    if (!produto) {
      throw new Error('Produto não encontrado!')
    }

    return produto
  }

  async Criar(nome, disponivel, qtde) {
    Produto.create({
      nome, disponivel, qtde
    })
  }

  async Alterar(id, nome, disponivel, qtde) {
    // verificar os parâmetros que vieram
    // boolean tem verificação diferente
    // if (!id || !nome || !disponivel || !qtde === undefined) // assim ele pede obrigatoriamente para digitar os valores
    if (!id) {
      throw new Error('Favor preecher todas as info.')
    }

    const produtoVelho = await Produto.findByPk(id)

    if (!produtoVelho) {
      throw new Error("Produto não encontrado")
    }

    produtoVelho.nome = nome || produtoVelho.nome // se o user digitar um novo nome será substituido || se não vai deixar o nome velho
    produtoVelho.nome = disponivel || produtoVelho.disponivel
    produtoVelho.nome = qtde || produtoVelho.qtde

    produtoVelho.save()
  }

  async Deletar(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }
    
    const produto = await Produto.findByPk(id) // aqui pega o id
    
    if (!produto) {
      throw new Error('Produto não encontrado!')
    } // confirmação de existência do id
    
    await produto.destroy() // continua se o id existe
  }
}

export default new ServiceProduto()