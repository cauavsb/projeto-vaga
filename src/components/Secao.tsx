import { FaPlus } from 'react-icons/fa6';
import styles from './Secao.module.css';

const num: number[] = [1, 2, 3, 4];

function Secao() {
    return (
        <>
            {num.map((bimestre) => (
                <section className={styles.secoes} key={bimestre}>
                    <h1>Bimestre {bimestre}</h1>
                    <div className={styles.lancar_notas}>
                        <h1>Lançar nota</h1>
                        <FaPlus className={styles.mais} />
                    </div>
                </section>
            ))}
        </>
    );    
}

export default Secao;