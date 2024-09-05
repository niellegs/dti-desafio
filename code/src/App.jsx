import React, { useState } from 'react';
import Menu from './Menu';
import Classe from './Classe';
import AddTurma from './AddTurma';
import AddAluno from './AddAluno';
import VerClasse from './VerClasse';

function App() {
  const [classes, setClasses] = useState(["2º ANO - A", "2º ANO - B"]);
  const [alunos, setAlunos] = useState([]);
  const [addTurmaVisible, setAddTurmaVisible] = useState(false);
  const [addAlunoVisible, setAddAlunoVisible] = useState(false);
  const [classeSelecionada, setClasseSelecionada] = useState(null);

  const toggleAddTurma = () => {
    setAddTurmaVisible(prevState => !prevState);
  };

  const toggleAddAluno = () => {
    setAddAlunoVisible(prevState => !prevState);
  };

  const handleAddClasse = (novaClasse) => {
    setClasses([...classes, novaClasse]);
  };

  const handleAddAluno = (novoAluno) => {
    setAlunos([...alunos, novoAluno]);
  };

  return (
    <div className="App">
      <Menu
        alternarAddTurma={toggleAddTurma}
        alternarAddAluno={toggleAddAluno}
      />
      {addTurmaVisible && <AddTurma onAddClasse={handleAddClasse} />}
      {addAlunoVisible && <AddAluno onAddAluno={handleAddAluno} classes={classes} />}
      <h2>MINHAS TURMAS</h2>
      <div className="containerClasse">
        <Classe classes={classes} onSelectClasse={setClasseSelecionada} />
      </div>
      {classeSelecionada && <VerClasse classeSelecionada={classeSelecionada} alunos={alunos} />}
    </div>
  );
}

export default App;
