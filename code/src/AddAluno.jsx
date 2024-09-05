// src/AddAluno.jsx
import React, { useState } from "react";
import styles from "./css/add.module.css";
import Aluno from "./Aluno";

function AddAluno({ onAddAluno, classes }) {
    const [nome, setNome] = useState("");
    const [classe, setClasse] = useState(classes[0]);
    const [notaPortugues, setNotaPortugues] = useState("");
    const [freqPortugues, setFreqPortugues] = useState("");
    const [notaMatematica, setNotaMatematica] = useState("");
    const [freqMatematica, setFreqMatematica] = useState("");
    const [notaHistoria, setNotaHistoria] = useState("");
    const [freqHistoria, setFreqHistoria] = useState("");
    const [notaFisica, setNotaFisica] = useState("");
    const [freqFisica, setFreqFisica] = useState("");
    const [notaFilosofia, setNotaFilosofia] = useState("");
    const [freqFilosofia, setFreqFilosofia] = useState("");
    const [fechado, setFechado] = useState(false);

    const handleSave = () => {
        const novoAluno = new Aluno(
            nome,
            classe,
            parseFloat(notaPortugues),
            parseFloat(freqPortugues),
            parseFloat(notaMatematica),
            parseFloat(freqMatematica),
            parseFloat(notaHistoria),
            parseFloat(freqHistoria),
            parseFloat(notaFisica),
            parseFloat(freqFisica),
            parseFloat(notaFilosofia),
            parseFloat(freqFilosofia)
        );
        onAddAluno(novoAluno);
        setFechado(true);
    };

    return (
        <>
            {!fechado && (
                <div className={styles.container}>
                    <div className={styles.fechar}>
                        <button onClick={() => setFechado(true)}>x</button>
                    </div>
                    <div className={styles.info}>
                        <h3>NOVO ALUNO</h3>
                        <div>
                            <p>Nome do aluno:</p>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="classe" className={styles.disciplinas}>
                                Classe do aluno:
                            </label>
                            <select
                                id="classe"
                                value={classe}
                                onChange={(e) => setClasse(e.target.value)}
                                className={styles.disciplinasInput}
                            >
                                {classes.map((cls, index) => (
                                    <option key={index} value={cls}>
                                        {cls}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.containerMaterias}>
                            <div className={styles.materias}>
                                <div className="materia">
                                    <h4>Português</h4>
                                    <div>
                                        <p>Nota:</p>
                                        <input
                                            type="number"
                                            value={notaPortugues}
                                            onChange={(e) => setNotaPortugues(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Frequência:</p>
                                        <input
                                            type="number"
                                            value={freqPortugues}
                                            onChange={(e) => setFreqPortugues(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.materias}>
                                <div className="materia">
                                    <h4>Matemática</h4>
                                    <div>
                                        <p>Nota:</p>
                                        <input
                                            type="number"
                                            value={notaMatematica}
                                            onChange={(e) => setNotaMatematica(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Frequência:</p>
                                        <input
                                            type="number"
                                            value={freqMatematica}
                                            onChange={(e) => setFreqMatematica(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.materias}>
                                <div className="materia">
                                    <h4>História</h4>
                                    <div>
                                        <p>Nota:</p>
                                        <input
                                            type="number"
                                            value={notaHistoria}
                                            onChange={(e) => setNotaHistoria(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Frequência:</p>
                                        <input
                                            type="number"
                                            value={freqHistoria}
                                            onChange={(e) => setFreqHistoria(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.materias}>
                                <div className="materia">
                                    <h4>Física</h4>
                                    <div>
                                        <p>Nota:</p>
                                        <input
                                            type="number"
                                            value={notaFisica}
                                            onChange={(e) => setNotaFisica(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Frequência:</p>
                                        <input
                                            type="number"
                                            value={freqFisica}
                                            onChange={(e) => setFreqFisica(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.materias}>
                                <div className="materia">
                                    <h4>Filosofia</h4>
                                    <div>
                                        <p>Nota:</p>
                                        <input
                                            type="number"
                                            value={notaFilosofia}
                                            onChange={(e) => setNotaFilosofia(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>Frequência:</p>
                                        <input
                                            type="number"
                                            value={freqFilosofia}
                                            onChange={(e) => setFreqFilosofia(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSave}>SALVAR</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddAluno;
