import styles from './Caixa.module.css';

function Caixa() {
    return (
        <div className={styles.container}>
            <h1>História</h1>
            <p>29/10/2023</p>
            <p className={styles.diferente}>Nota: 9.5</p>
        </div>
    )
}

export default Caixa