import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './Authentication.module.css';
  import React, { useState } from 'react';
  import validator from 'validator';
  
  export function AuthenticationTitle({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        handleLogin(username, password);

    };

    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Bem vindo!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Ainda nao tem uma conta?{' '}
          <Anchor size="sm" component="button">
            Criar conta
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput 
                label="Email" 
                placeholder="teste@email.com" 
                required 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
          <PasswordInput 
                label="Senha" 
                placeholder="Sua senha" 
                required 
                mt="md" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Lembrar senha" />
            <Anchor component="button" size="sm">
             Esqueceu a senha?
            </Anchor>
          </Group>
          <Button 
                fullWidth 
                mt="xl"
                onClick={handleSubmit}
                variant="gradient"
                gradient={{ from: 'violet', to: '#5D3C7C', deg: 90 }}>
            Entrar
          </Button>
        </Paper>
      </Container>
    );
  }