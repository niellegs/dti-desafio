import React from "react";
import styles from "./css/add.module.css";
import { useState } from "react";

function AddAluno() {
    const [fechado, setFechado] = useState(false);
    const fechar = () => {
        setFechado(true)
    }
    return(
        <>
        {!fechado && (
                        <div className={styles.container}>
                        <div className={styles.fechar}>
                          <button onClick={fechar}>x</button>
                        </div>
                        <div className={styles.info}>
                          <h3>NOVO ALUNO</h3>
                          <div>
                            <p>Nome do aluno: </p>
                            <input type="text" />
                          </div>
                          <div>
                            <p>Classe do aluno: </p>
                            <input type="text" />
                          </div>
                          <div className={styles.containerMaterias}>
                          <div className={styles.materias}>
                            <div className="materia">
                                <h4>Português</h4>
                                <div>
                                    <p>Nota:</p>
                                    <input type="text" />
                                </div>
                                <div>Frequência:</div>
                                <input type="text" />
                            </div>
                          </div>
        
                          <div className={styles.materias}>
                            <div className="materia">
                                <h4>Matemática</h4>
                                <div>
                                    <p>Nota:</p>
                                    <input type="text" />
                                </div>
                                <div>Frequência:</div>
                                <input type="text" />
                            </div>
                          </div>
        
                          <div className={styles.materias}>
                            <div className="materia">
                                <h4>História</h4>
                                <div>
                                    <p>Nota:</p>
                                    <input type="text" />
                                </div>
                                <div>Frequência:</div>
                                <input type="text" />
                            </div>
                          </div>
        
                          <div className={styles.materias}>
                            <div className="materia">
                                <h4>Física</h4>
                                <div>
                                    <p>Nota:</p>
                                    <input type="text" />
                                </div>
                                <div>Frequência:</div>
                                <input type="text" />
                            </div>
                          </div>
        
                          <div className={styles.materias}>
                            <div className="materia">
                                <h4>Filosofia</h4>
                                <div>
                                    <p>Nota:</p>
                                    <input type="text" />
                                </div>
                                <div>Frequência:</div>
                                <input type="text" />
                            </div>
                          </div>
        
                          </div>
        
                          <button>SALVAR</button>
                        </div>
                      </div>
        )}

        </>
    )
}

export default AddAluno;
