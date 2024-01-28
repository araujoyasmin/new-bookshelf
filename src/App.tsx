import React, { useState } from 'react';
import { AuthenticationTitle } from './components/Login/Authentication';
import { Menu } from './components/Menu';
import { AppShellFooter, Container, Text, Title } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';
import logo from '../src/assets/lendo.png'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Lógica de autenticação simulada (use uma lógica segura no mundo real)
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#59595A' }}>
        {/* Conteúdo do cabeçalho aqui */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="Minha Estante Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          <Title order={2} orderMd={1} orderLg={1} orderXl={1} style={{ color: 'white', marginBottom: 0 }}>
            Minha Estante
          </Title>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Container>
          {isLoggedIn ? (
            <Menu />
          ) : (
            <AuthenticationTitle handleLogin={handleLogin} />
          )}
        </Container>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#5D3C7C' }}>
        {/* Conteúdo do rodapé aqui */}
        <Text size="sm" color="white">
          © 2024 Meu App. Todos os direitos reservados.
        </Text>
      </footer>
    </div>
  );
}

export default App;