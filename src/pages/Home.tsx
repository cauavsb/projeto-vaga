import Secao from '../components/Secao';
import Cadastro from '../components/Cadastro';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <Secao />
            <Cadastro />
        </div>
    )
}

export default Home