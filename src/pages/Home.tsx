import Caixa from '../components/Caixa';
import Secao from '../components/Secao';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <Secao />
            <Caixa />
        </div>
    )
}

export default Home