import { FaPlus } from 'react-icons/fa6';
import styles from './Secao.module.css';
import Caixa from './Caixa';
import { useState, useEffect } from 'react';

const num: number[] = [1, 2, 3, 4];

function Secao() {
    //function createPost() {
        //project.services = []
    
        //fetch('http://localhost:5000/resultado', {
            //method: 'POST',
            //headers: {
                //'Content-Type': 'application/json',
            //},
            //body: JSON.stringify(),
        //})
            //.then((resp) => resp.json())
            //.then((data) => {
                //history.push('/home', { message: 'Nota adicionada com sucesso!' })
            //})
    //}

    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/resultado`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setDados(data);
        })
        .catch((err) => console.log(err))
    }, [])
    
    return (
        <>
            {num.map((bimestre, index) => (
                <div className={styles.principal} key={index}>
                    <section className={styles.secoes}>
                        <h1>Bimestre {bimestre}</h1>
                        <div className={styles.lancar_notas}>
                            <h1>Lançar nota</h1>
                            <FaPlus className={styles.mais} />
                        </div>
                    </section>
                    <div className={styles.notas}>
                        {dados.length > 0 &&
                            dados.map((item, idx) => (
                                <Caixa 
                                    key={idx} 
                                    disciplina={item.disciplina} 
                                    data={item.atualizadoEm} 
                                    nota={item.nota} 
                                />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );    
}

export default Secao;