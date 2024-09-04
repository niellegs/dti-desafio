import Menu from './Menu';
import Classe from './Classe';
import AddTurma from './addTurma';

function App() {
  return (
    <div className="App">
      <Menu />
      <AddTurma />
      <h2>MINHAS TURMAS</h2>
      <div className="containerClasse">
        <Classe />
      </div>
      
    </div>
  );
}

export default App;
