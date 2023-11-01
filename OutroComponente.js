import React from 'react';
import ComponenteFilho from './ComponenteFilho';

function OutroComponente() {
  return (
    <React.Fragment>
      <h1>Outro Componente</h1>
      <ComponenteFilho mensagem="Esta é uma mensagem direta para o filho" />
    </React.Fragment>
  );
}

export default OutroComponente;