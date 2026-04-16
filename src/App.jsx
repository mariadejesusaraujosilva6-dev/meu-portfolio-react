import './App.css'

// Este é o seu segundo componente (Componentização)
function ProjetoCard({ nome, tech }) {
  return (
    <div style={{ border: '1px solid #646cff', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{nome}</h3>
      <p>Tecnologia: {tech}</p>
    </div>
  );
}

function App() {
  // Seu array de objetos (Renderização de Dados)
  const listaDeProjetos = [
    { id: 1, nome: "Primeiro Portfólio", tech: "HTML/CSS" },
    { id: 2, nome: "Edição de Fotos com IA", tech: "Ferramentas IA" },
    { id: 3, nome: "Projeto Atual", tech: "React + Vite" }
  ];

  return (
    <div className="App">
      <h1>Meu Portfólio em React</h1>
      <p>Desenvolvido por Maria</p>
      
      <div className="container-projetos">
        {/* Renderizando a lista dinamicamente */}
        {listaDeProjetos.map((projeto) => (
          <ProjetoCard key={projeto.id} nome={projeto.nome} tech={projeto.tech} />
        ))}
      </div>
    </div>
  )
}

export default App