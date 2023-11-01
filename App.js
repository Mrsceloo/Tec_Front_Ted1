import React from 'react';
import ComponenteFilho from './ComponenteFilho';

function App() {
  const mensagem = "Esta é uma mensagem do pai para o filho";

  return (
    <React.Fragment>
      <h1>Componente Pai</h1>
      <ComponenteFilho mensagem={mensagem} />
    </React.Fragment>
  );
}

export default App;