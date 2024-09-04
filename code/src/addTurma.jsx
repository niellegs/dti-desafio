import styles from './css/add.module.css';

function AddTurma() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.fechar}><button>x</button></div>
            <div className={styles.info}>
                <h3>NOVA TURMA</h3>
                <p>Nome da turma: </p>
                <input type="text" />
                <br />
                <button>SALVAR</button>
                </div>
        </div>

        </>
    )
};

export default AddTurma;
