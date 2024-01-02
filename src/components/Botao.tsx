import React, { useState } from 'react';

interface BotaoProps {
    disciplina: string;
}

const Botao: React.FC<BotaoProps> = ({ disciplina }) => {
  const [isMarked, setIsMarked] = useState(false);

  const toggleMarked = () => {
    setIsMarked(!isMarked);
  };

  return (
    <button onClick={toggleMarked}>
      {disciplina}{isMarked ? 'Marcado' : 'Desmarcado'}
    </button>
  );
}

export default Botao;