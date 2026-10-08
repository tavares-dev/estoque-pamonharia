import { useState } from 'react'

import Entradas from './Entradas'
import Saidas from './saidas'
import Estoque from './Estoque'
import Sidebar from './components/Sidebar'
import Dashboard from './Dashboard'
import './App.css'
import Produtos from './produtos'

function App() {

  const [produtos, setProdutos] = useState([])
  const [pagina, setPagina] = useState('dashboard')

  return (
    <div className="app">

      <Sidebar setPagina={setPagina} />

      <div className="content">

        {pagina === 'dashboard' && (
          <Dashboard produtos={produtos} />
        )}

        {pagina === 'produtos' && (
          <Produtos
            produtos={produtos}
            setProdutos={setProdutos}
          />
        )}

        {pagina === 'entradas' && (
          <Entradas
            produtos={produtos}
            setProdutos={setProdutos}
          />
        )}

        {pagina === 'saidas' && (
          <Saidas />
        )}

        {pagina === 'estoque' && (
          <Estoque produtos={produtos} />
        )}

      </div>

    </div>
  )
}

export default App