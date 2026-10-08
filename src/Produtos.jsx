
import { useState } from 'react'
import { cadastrarProduto } from './api'

function Produtos({ produtos, setProdutos }) {
  const [nome, setNome] = useState('')
  const [unidade, setUnidade] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [erro, setErro] = useState('')

  async function cadastrarProdutos() {
    try {
      const novoProduto = await cadastrarProduto({ nome, unidade, quantidade })
      setProdutos([...produtos, novoProduto])
      setNome('')
      setUnidade('')
      setQuantidade('')
      setErro('')
    } catch (erro) {
      setErro(erro.message)
    }
  }
  return (
    <div className="produtos">
      <h1>Produtos</h1>

      <div className="formulario">
        <div>
          <h2>Produtos cadastrados</h2>

          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Unidade</th>
                <th>Quantidade</th>
              </tr>
            </thead>

            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.unidade}</td>
                  <td>{produto.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2>Cadastrar produto</h2>

        <label>Nome do produto</label>
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />

        <label>Unidade</label>
        <input
          type="text"
          value={unidade}
          onChange={(evento) => setUnidade(evento.target.value)}
        />

        <label>Quantidade</label>
        <input
          type="number"
          value={quantidade}
          onChange={(evento) => setQuantidade(evento.target.value)}
        />

        {erro && <p>{erro}</p>}

        <button onClick={cadastrarProdutos}>
          Cadastrar produto
        </button>
      </div>
    </div>
  )
}

export default Produtos