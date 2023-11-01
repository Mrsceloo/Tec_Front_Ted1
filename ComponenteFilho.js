import React from 'react';

function ComponenteFilho(props) {
  return (
    <React.Fragment>
      <h2>Componente Filho</h2>
      <p>Mensagem do Pai: {props.mensagem}</p>
    </React.Fragment>
  );
}

export default ComponenteFilho;