import React from 'react';
import styles from './css/add.module.css';
import { useState } from 'react';

function AddTurma({addClasse}) {
    const [fechado, setFechado] = useState(false);
    const [novaClasse, setNovaClasse] = useState('');

    const fechar = () => {
        setFechado(true)
    }

    const receberClasse = () => {
      if(novaClasse.trim()) {
        addClasse(novaClasse.trim());
        setNovaClasse('');
        fechar()
      }
    };

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
                    <input type="text" value={novaClasse} onChange={(e) => setNovaClasse(e.target.value)} />
                  </div>
                  <button onClick={receberClasse}>SALVAR</button>
                </div>
              </div>
            )}
    </>
  );
}

export default AddTurma;