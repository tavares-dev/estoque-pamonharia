function Estoque({ produtos }) {
  return (
    <div className="estoque">
      <h1>Estoque</h1>

      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Unidade</th>
            <th>Quantidade</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.nome}</td>
              <td>{produto.unidade}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Estoque