import React from "react"
import "../styles/ProdutoCard.css"

function ProdutoCard({ produto, adicionarAoCarrinho}) {
    return(
        <div className="produto-card">
            <img src={produto.imagem} alt={produto.nome}/>
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar</button>
        </div>
    )
}



export default ProdutoCard