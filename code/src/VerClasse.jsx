import React from "react";
import styles from "./css/verclasse.module.css";

function VerClasse({ classeSelecionada, alunos }) {
    const alunosFiltrados = alunos.filter(aluno => aluno.classe === classeSelecionada);

    return (
        <>
            <div className={styles.cabecalho}>
                <h2>NOTAS DA TURMA</h2>
                <h3>{classeSelecionada}</h3>

                <label htmlFor="disciplinas" className={styles.disciplinas}>Disciplina:</label>
                <input list="disciplinas" name="disciplinas" className={styles.disciplinasInput} />

                <datalist id="disciplinas">
                    <option value="Todas" />
                    <option value="Português" />
                    <option value="Matemática" />
                    <option value="História" />
                    <option value="Física" />
                    <option value="Filosofia" />
                </datalist>
                <div className={styles.containerInfo}>
                    <div>
                        <p>Média de notas:</p>
                        <p className={styles.infoNumber}>
                            {alunosFiltrados.reduce((acc, aluno) => acc + aluno.mediaNota(), 0) / alunosFiltrados.length || 0}
                        </p>
                    </div>
                    <div>
                        <p>Média de Frequências:</p>
                        <p className={styles.infoNumber}>
                            {alunosFiltrados.reduce((acc, aluno) => acc + aluno.mediaFrequencia(), 0) / alunosFiltrados.length || 0}%
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.faixaAzul}></div>

            <div className={styles.alunos}>
                <div className={styles.checkboxes}>
                    <div>
                        <input type="checkbox" id="notasAcimaDaMedia" />
                        <label htmlFor="notasAcimaDaMedia">Notas acima da média</label>
                    </div>
                    <div>
                        <input type="checkbox" id="frequenciaAbaixo75" />
                        <label htmlFor="frequenciaAbaixo75">Frequência abaixo de 75%</label>
                    </div>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Aluno</th>
                            <th>Média de notas</th>
                            <th>Frequência geral</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosFiltrados.map((aluno, index) => (
                            <tr key={index}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.mediaNota().toFixed(2)}</td>
                                <td>{aluno.mediaFrequencia().toFixed(2)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default VerClasse;
