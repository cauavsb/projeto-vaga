import styles from './Disciplinas.module.css'

function Disciplinas() {
    return (
        <div className={styles.container}>
            <div className={styles.biologia}>
                <p>Biologia</p>
            </div>
            <div className={styles.artes}>
                <p>Artes</p>
            </div>
            <div className={styles.geografia}>
                <p>Geografia</p>
            </div>
            <div className={styles.sociologia}>
                <p>Sociologia</p>
            </div>
        </div>
    )
}

export default Disciplinas