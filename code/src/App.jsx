import React, { useState } from 'react';
import Menu from './Menu';
import Classe from './Classe';
import AddTurma from './AddTurma';
import AddAluno from './AddAluno';
import VerClasse from './VerClasse';

function App() {
    const [classes, setClasses] = useState(["2º ANO - A", "2º ANO - B"]);
    const [alunos, setAlunos] = useState([]);
    const [addTurma, setAddTurma] = useState(false);
    const [addAluno, setAddAluno] = useState(false);
    const [classeSelecionada, setClasseSelecionada] = useState(null);

    const alternarAddTurma = () => {
        setAddTurma(prevState => !prevState);
    };

    const alternarAddAluno = () => {
        setAddAluno(prevState => !prevState);
    };

    const addClasse = (novaClasse) => {
        setClasses([...classes, novaClasse]);
    };

    const handleAddAluno = (novoAluno) => {
        setAlunos([...alunos, novoAluno]);
    };

    return (
        <div className="App">
            <Menu alternarAddTurma={alternarAddTurma} alternarAddAluno={alternarAddAluno} />
            {addTurma && <AddTurma addClasse={addClasse} />}
            {addAluno && <AddAluno onAddAluno={handleAddAluno} classes={classes} />}
            <h2>MINHAS TURMAS</h2>
            <div className="containerClasse">
                <Classe classes={classes} onSelectClass={setClasseSelecionada} />
            </div>
            {classeSelecionada && <VerClasse classeSelecionada={classeSelecionada} alunos={alunos} />}
        </div>
    );
}

export default App;
