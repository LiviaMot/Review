import Produto from "../model/produto.js";

class ServiceProduto {
  async PegarTodos() {
    return Produto.findAll()
  }

  async PegarUm(id) {}

  async Criar(nome, disponivel, qtde) {
    Produto.create({
      nome, disponivel, qtde
    })
  }

  async Alterar(id, nome, disponivel, qtde) {
    // Produto.update({
    //   nome, disponivel, qtde
    // })
  }

  async Deletar(id) {}
}

export default new ServiceProduto()