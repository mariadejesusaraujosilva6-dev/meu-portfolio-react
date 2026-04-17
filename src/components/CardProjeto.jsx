export default function CardProjeto({ titulo, tecnologia }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      marginBottom: '10px',
      backgroundColor: '#fdfdfd',
      color: '#333',
      fontFamily: 'sans-serif'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>{titulo}</h3>
      <p style={{ margin: '0' }}><strong>Tecnologia:</strong> {tecnologia}</p>
    </div>
  );
}
