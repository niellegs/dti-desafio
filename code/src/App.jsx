import React, { useState } from 'react';
import Menu from './Menu';
import Classe from './Classe';
import AddTurma from './AddTurma';

function App() {
  const [addTurma, seeAddTurma] = useState(false);

  // Função para alternar a visibilidade do componente AddTurma
  const alternarAddTurma = () => {
    seeAddTurma(prevState => !prevState);
  };

  return (
    <div className="App">
      {/* Passa a função alternarAddTurma como prop para o Menu */}
      <Menu alternarAddTurma={alternarAddTurma} />
      {/* Renderiza AddTurma com base no estado addTurma */}
      {addTurma && <AddTurma />}
      <h2>MINHAS TURMAS</h2>
      <div className="containerClasse">
        <Classe />
      </div>
    </div>
  );
}

export default App;