import React, { useState } from 'react';
import Menu from './Menu';
import Classe from './Classe';
import AddTurma from './AddTurma';
import AddAluno from './AddAluno';

function App() {
  const [addTurma, seeAddTurma] = useState(false);
  const [addAluno, seeAddAluno] = useState(false);

  const alternarAddTurma = () => {
    seeAddTurma(prevState => !prevState);
  };
  const alternarAddAluno = () => {
    seeAddAluno(prevState => !prevState);
  }
  const turmaToMain = () => {
    
  }
  return (
    <div className="App">
      <Menu alternarAddTurma={alternarAddTurma} alternarAddAluno={alternarAddAluno} />
      {addTurma && <AddTurma />}
      {addAluno && <AddAluno />}
      <AddAluno />
      <h2>MINHAS TURMAS</h2>
      <div className="containerClasse">
        <Classe />
      </div>
    </div>
  );
}

export default App;