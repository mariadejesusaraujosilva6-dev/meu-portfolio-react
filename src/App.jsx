import { useState } from "react";
import "./App.css";
import minhaFoto from "./assets/foto-perfil.png";

// REQUISITO 1: Componentização (Componente de Card)
function ProjetoCard({ nome, tech, link }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p><strong>Tecnologia:</strong> {tech}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="btn-projeto">Ver Projeto</button>
      </a>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // REQUISITO 2: Renderização de Dados (Array de objetos)
  const meusProjetos = [
    { id: 1, nome: "Meu Portfólio", tech: "React + Vite", link: "https://github.com/" },
    { id: 2, nome: "Projeto de Sistemas", tech: "HTML/CSS", link: "https://github.com/" },
    { id: 3, nome: "MVP Pedagogia", tech: "JavaScript", link: "https://github.com/" }
  ];

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <header className="cabecalho">
        <button onClick={() => setDarkMode(!darkMode)} className="btn-tema">
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
        </button>
      </header>

      <div className="container">
        {/* Foto redonda e pequena */}
        <img src={minhaFoto} alt="Maria de Jesus" className="foto-perfil-pequena" />
        
        <h1 className="titulo-principal">Maria de Jesus</h1>
        <p className="descricao">Estudante de Sistemas para Internet e Pedagogia</p>
        
        <hr className="divisor" />

        <h2 className="subtitulo">Meus Projetos</h2>
        
        <div className="lista-projetos">
          {/* Renderizando os projetos dinamicamente com .map() */}
          {meusProjetos.map((projeto) => (
            <ProjetoCard 
              key={projeto.id}
              nome={projeto.nome} 
              tech={projeto.tech} 
              link={projeto.link} 
            />
          ))}
        </div>

        <footer className="rodape">
          <p>Maria de Jesus • Desenvolvido em 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default App;