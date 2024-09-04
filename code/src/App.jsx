import React, { useState } from 'react';
import Menu from './Menu';
import Classe from './Classe';
import AddTurma from './AddTurma';
import AddAluno from './AddAluno';

function App() {
  const [classes, setClasses] = useState(["2º ANO - A", "2º ANO - B"])
  const [addTurma, seeAddTurma] = useState(false);
  const [addAluno, seeAddAluno] = useState(false);

  const alternarAddTurma = () => {
    seeAddTurma(prevState => !prevState);
  };
  const alternarAddAluno = () => {
    seeAddAluno(prevState => !prevState);
  }

  const addClasse = (novaClasse) => {
    setClasses([...classes, novaClasse]);
  }

  return (
    <div className="App">
      <Menu alternarAddTurma={alternarAddTurma} alternarAddAluno={alternarAddAluno} />
      {addTurma && <AddTurma addClasse={addClasse}/>}
      {addAluno && <AddAluno />}
      <AddAluno />
      <h2>MINHAS TURMAS</h2>
      <div className="containerClasse">
        <Classe classes={classes}/>
      </div>
    </div>
  );
}

export default App;