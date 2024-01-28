import React, { useState} from "react";
import { Button,Container,Drawer, List, ListItem,Avatar, Text} from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight} from '@tabler/icons-react';
import avatarImage from '../assets/violet.webp';
import { BookTable } from "./BookTable";

export const Menu = () => {
    const [showSecret, setShowSecret] = useState(false);

    const handleClickButton = () => {
      setShowSecret(!showSecret);
    } 
    const [drawerOpened, setDrawerOpened] = useState(false);
  
    const toggleDrawer = () => {
      setDrawerOpened(!drawerOpened);
    };
  
    const openBookTable = () => {
      setDrawerOpened(false);
      setShowSecret(true);
    };

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        {/* Cabeçalho */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: '1px solid #ddd' }}>
          {/* Informações do usuário */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              radius="xl"
              src={avatarImage} 
              alt="Nome do Usuário"
              style={{ marginRight: '8px' }}
              onClick={toggleDrawer}
            />
            <div>
              <Text size="md" fw={700}>Yasmin Araujo</Text>
              <Text size="sm"><b>Lendo:</b> Era uma vez um coração partido </Text>
            </div>
          </div>
          
         
        </div>
  
        {/* Conteúdo principal da aplicação vai aqui */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {showSecret && <BookTable/>}
        </div>
  
        {/* Menu lateral */}
        <Drawer
          position="left"
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
        >
          <List>
            <ListItem>
              <Button variant="link" onClick={openBookTable} style={{ marginBottom:'10px'}}>
                 Estante
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="link" onClick={() => console.log("Menu Item 2 clicked")} style={{ marginBottom:'10px'}}>
                TBR
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="link" onClick={() => console.log("Menu Item 3 clicked")} style={{ marginBottom:'10px'}}>
                Favoritos
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Container>
    );
}