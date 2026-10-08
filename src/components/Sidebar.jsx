function Sidebar({ setPagina }) {
    return (
        <aside className="sidebar">
            <img
                src="/PAMONHARIA-DA-ROÇA-3-sem-fundo.png"
                alt="Pamonharia da Roça"
            />

            <h2>Raizes da Roca</h2>

            <nav>
                <a href="#" onClick={() => setPagina('dashboard')}>
                    📊 Dashboard
                </a>

                <a href="#" onClick={() => setPagina('produtos')}>
                    📦 Produtos
                </a>

                <a href="#" onClick={() => setPagina('entradas')}>
                    📥 Entradas
                </a>

                <a href="#" onClick={() => setPagina('saidas')}>
                    📤 Saídas
                </a>

                <a href="#" onClick={() => setPagina('estoque')}>
                    📋 Estoque
                </a>
            </nav>
        </aside>
    )
}
export default Sidebar
