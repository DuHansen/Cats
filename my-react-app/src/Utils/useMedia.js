import { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(false); // Inicializado com false

  useEffect(() => {
    const mediaQueryList = window.matchMedia(media);
    
    // Função para atualizar o estado com base na consulta de mídia
    const changeMatch = () => {
      setMatch(mediaQueryList.matches);
    };

    // Executa a função inicialmente
    changeMatch();

    // Adiciona o listener para mudanças na mídia
    mediaQueryList.addListener(changeMatch);

    // Cleanup para remover o listener quando o componente for desmontado
    return () => {
      mediaQueryList.removeListener(changeMatch);
    };
  }, [media]); // Reexecuta o efeito apenas quando a string `media` mudar

  return match; // Retorna o estado, verdadeiro ou falso
};

export default useMedia;
