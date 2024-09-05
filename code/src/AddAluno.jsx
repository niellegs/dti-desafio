import React, { useState } from "react";
import styles from "./css/add.module.css";

function AddAluno({ onAddAluno, classes }) {
    const [fechado, setFechado] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        classe: '',
        notas: {
            portugues: '',
            matematica: '',
            historia: '',
            fisica: '',
            filosofia: ''
        },
        frequencias: {
            portugues: '',
            matematica: '',
            historia: '',
            fisica: '',
            filosofia: ''
        }
    });

    const fechar = () => {
        setFechado(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const [key, subKey] = name.split('.');
            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    [subKey]: value
                }
            };
        });
    };

    const handleSave = () => {
        const aluno = {
            nome: formData.nome,
            classe: formData.classe,
            notaPort: parseFloat(formData.notas.portugues) || 0,
            notaMat: parseFloat(formData.notas.matematica) || 0,
            notaHist: parseFloat(formData.notas.historia) || 0,
            notaFisi: parseFloat(formData.frequencias.fisica) || 0,
            notaFilos: parseFloat(formData.notas.filosofia) || 0,
            freqPort: parseFloat(formData.frequencias.portugues) || 0,
            freqMat: parseFloat(formData.frequencias.matematica) || 0,
            freqHist: parseFloat(formData.frequencias.historia) || 0,
            freqFisi: parseFloat(formData.frequencias.fisica) || 0,
            freqFilos: parseFloat(formData.frequencias.filosofia) || 0,
        };
        onAddAluno(aluno);
        fechar();
    };

    return (
        <>
            {!fechado && (
                <div className={styles.container}>
                    <div className={styles.fechar}>
                        <button onClick={fechar}>x</button>
                    </div>
                    <div className={styles.info}>
                        <h3>NOVO ALUNO</h3>
                        <div>
                            <p>Nome do aluno:</p>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="classe" className={styles.disciplinas}>Classe do aluno:</label>
                            <select
                                name="classe"
                                value={formData.classe}
                                onChange={handleChange}
                            >
                                <option value="">Selecione uma classe</option>
                                {classes.map((classe, index) => (
                                    <option key={index} value={classe}>{classe}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.containerMaterias}>
                            {['portugues', 'matematica', 'historia', 'fisica', 'filosofia'].map(materia => (
                                <div className={styles.materias} key={materia}>
                                    <div className="materia">
                                        <h4>{materia.charAt(0).toUpperCase() + materia.slice(1)}</h4>
                                        <div>
                                            <p>Nota:</p>
                                            <input
                                                type="text"
                                                name={`notas.${materia}`}
                                                value={formData.notas[materia]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <p>Frequência:</p>
                                            <input
                                                type="text"
                                                name={`frequencias.${materia}`}
                                                value={formData.frequencias[materia]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleSave}>SALVAR</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddAluno;
