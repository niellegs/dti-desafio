import './css/menu.css';
import Classe from './Classe';

function Menu() {
    const addTurma = () => {
        
    }
    return (
        <>
        <header>
            <h1>GRADEHUB</h1>
            <ul class="menu">
                <li><button>+</button>
                <ul>
                    <li onClick={addTurma}><p>Turma</p></li>
                    <li><p>Aluno</p></li>
                </ul>
                </li>
            </ul>
        </header>
        </>
    )
}

export default Menu;