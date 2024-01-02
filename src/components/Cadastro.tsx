import React, { useState } from 'react';
import styles from "./Cadastro.module.css"
import Disciplinas from './Disciplinas';

function Cadastro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.app}>
      <h1>Minha Página</h1>
      <button onClick={openModal}>Abrir Modal</button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h1>Bimestre </h1>
            <h2>Disciplina</h2>
            <div>
              <Disciplinas />
            </div>

            <h2>Nota</h2>
            <input type="number" name="nota" id="nota" />

            <button type="submit">Confirmar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cadastro;