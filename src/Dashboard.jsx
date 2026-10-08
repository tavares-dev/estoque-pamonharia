function Dashboard({ produtos }) {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <p>Bem-vindo ao sistema de estoque da Pamonharia da Roça!</p>

            <div className="cards">
                <div className="card">
                    <h3>Produtos</h3>
                    <strong>{produtos.length}</strong>
                </div>

                <div className="card">
                    <h3>Estoque</h3>
                    <strong>0</strong>
                </div>

                <div className="card">
                    <h3>Entradas</h3>
                    <strong>0</strong>
                </div>

                <div className="card">
                    <h3>Saídas</h3>
                    <strong>0</strong>
                </div>
            </div>
        </div>
    )
}

export default Dashboard