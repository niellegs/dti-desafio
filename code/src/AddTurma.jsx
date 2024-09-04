import React from 'react';
import styles from './css/add.module.css';
import { useState } from 'react';

function AddTurma() {
    const [fechado, setFechado] = useState(false);
    const fechar = () => {
        setFechado(true)
    }
  return (
    <>
        {!fechado &&(
                <div className={styles.container}>
                <div className={styles.fechar}>
                  <button onClick={fechar}>x</button>
                </div>
                <div className={styles.info}>
                  <h3>NOVA TURMA</h3>
                  <div>
                    <p>Nome da turma: </p>
                    <input type="text" />
                  </div>
                  <button>SALVAR</button>
                </div>
              </div>
            )}
    </>
  );
}

export default AddTurma;