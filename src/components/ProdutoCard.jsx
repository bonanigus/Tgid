import React from "react"
import "../styles/ProdutoCard.css"
import camisa from '../assets/camisa.jpeg';
import jeans from '../assets/jeans.jpeg';
import tenis from '../assets/tenis.jpeg';

const imagens = {
  'camisa.jpeg': camisa,
  'jeans.jpeg': jeans,
  'tenis.jpeg': tenis,
};

export default function ProdutoCard({ produto, adicionarAoCarrinho}) {
    return(
        <div className="produto-card">
            <img src={imagens[produto.imagem]} alt={produto.nome}/>
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar</button>
        </div>
    )
}



