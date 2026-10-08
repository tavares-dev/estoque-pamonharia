import { useState } from 'react'

function Entradas({ produtos, setProdutos }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState('')
  const [quantidade, setQuantidade] = useState('')

  function registrarEntrada() {
    console.log(produtoSelecionado)
    console.log(quantidade)
  }
  return (
    <div className="entradas">
      <h1>Entradas</h1>

      <div className="formulario">
        <h2>Registrar entrada</h2>

        <label>Produto</label>

        <select
          value={produtoSelecionado}
          onChange={(evento) => setProdutoSelecionado(evento.target.value)}
        >
          <option value="">Selecione um produto</option>

          {produtos.map((produto, indice) => (
            <option key={indice} value={indice}>
              {produto.nome}
            </option>
          ))}
        </select>

        <label>Quantidade</label>

        <input

          type="number"
          placeholder="Digite a quantidade"
          value={quantidade}
          onChange={(evento) => setQuantidade(evento.target.value)}
        />

        <button onClick={registrarEntrada}>
          Registrar entrada
        </button>
      </div>
    </div>
  )
}

export default Entradas