import { FaTrashAlt } from 'react-icons/fa';
import styles from './Caixa.module.css';

type CaixaProps = {
    disciplina: string;
    data: string;
    nota: number;
};

function Caixa({disciplina, data, nota}: CaixaProps) {
    return (
        <div className={styles.principal}>
            <div className={styles.container}>
                <div className={styles.cima}>
                    <h1>{disciplina}</h1>
                    <p>{data}</p>
                </div>
                <div className={styles.baixo}>
                    <p className={styles.diferente}>Nota: {nota}</p>
                </div>
            </div>
            <div>
                <FaTrashAlt className={styles.lixeira} />
            </div>
        </div>
    )
}

export default Caixa