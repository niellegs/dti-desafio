import React from 'react';
import './css/menu.css';

function Menu({ alternarAddTurma }) {
  return (
    <header>
      <h1>GRADEHUB</h1>
      <ul className="menu">
        <li>
          <button>+</button>
          <ul>
            <li onClick={alternarAddTurma}><p>Turma</p></li>
            <li><p>Aluno</p></li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

export default Menu;