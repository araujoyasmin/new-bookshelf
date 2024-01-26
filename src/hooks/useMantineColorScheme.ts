import { useState, useEffect } from 'react';

function useMantineColorScheme(): {
  colorScheme: 'dark' | 'light' | 'auto';
  setColorScheme: (colorScheme: 'dark' | 'light' | 'auto') => void;
  toggleColorScheme: () => void;
  clearColorScheme: () => void;
} {
  // O estado inicial pode ser obtido a partir de algum local de persistência,
  // como localStorage ou preferências do usuário
  const [colorScheme, setColorScheme] = useState<'dark' | 'light' | 'auto'>('auto');

  // Função para alternar entre os esquemas de cores
  const toggleColorScheme = () => {
    setColorScheme((prevColorScheme) =>
      prevColorScheme === 'auto' ? 'dark' : prevColorScheme === 'dark' ? 'light' : 'auto'
    );
  };

  // Função para limpar o esquema de cores
  const clearColorScheme = () => {
    localStorage.removeItem('colorScheme'); // Ou qualquer outra lógica para limpar a persistência
    setColorScheme('auto');
  };

  // Efeito para definir o esquema de cores com base nas preferências do usuário ou padrões
  useEffect(() => {
    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme) {
      setColorScheme(savedColorScheme as 'dark' | 'light');
    } else {
      // Lógica para inferir o esquema de cores do sistema operacional, se necessário
    }
  }, []);

  // Retorne as funções e o estado
  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    clearColorScheme,
  };
}

export default useMantineColorScheme;
