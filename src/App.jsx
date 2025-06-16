import React, { useState, useEffect } from "react";
import axios from "axios";
import ProdutoCard from "./components/ProdutoCard";
import Carrinho from "./components/Carrinho";
import "./styles/App.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao carregar produtos:", err));
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(p => p.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Minha Loja Online</h1>
      <div className="produtos-lista">
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
      <Carrinho
        carrinho={carrinho}
        removerDoCarrinho={removerDoCarrinho}
      />
    </div>
  );
}

export default App;
