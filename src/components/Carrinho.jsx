import React from "react";
import "../styles/Carrinho.css"

export default function Carrinho({ carrinho, removerDoCarrinho}) {
    const total = carrinho.reduce((acc,item) => acc+item.preco, 0);

    return (
        <div className="carrinho">
            <h2>Seu Carrinho</h2>
            {carrinho.length === 0 ? (
                <p>Carrinho Vazio</p>
            ) : (
                <>
                    <ul>
                        {carrinho.map((item, index) =>(
                            <li key={index}>
                                {item.nome} - R$ {item.preco.toFixed(2)}
                                <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                    <p className="total">Total: R$ {total.toFixed(2)}</p>
                </>
            )}
        </div>
    )
}