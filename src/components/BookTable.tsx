import React, { useState} from "react";
import { Book } from "../types/Book";
import { Badge, Button, Container, Table, TextInput, Text } from "@mantine/core";
import { TrashIcon } from '@radix-ui/react-icons';

type Props = {
    books: Book[];
}
export const BookTable = () => {
  const [itemInput, setItenInput] = useState('');
  const [authorInput, setAuthorInput] = useState("");

  const [list, setList] = useState<Book[]>([
    
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;
    setList([
      ...list,
      { id:list.length + 1, book: itemInput, author: authorInput, status: false}
    ]);
    setItenInput('');
    setAuthorInput("");
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
      );
  }

  const toggleItem = (id: number) => {
    setList(list.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    ));
  }

  const rows = list.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <Text size="md" fw={700}>{element.book}</Text>
        <Text size="sm">{element.author}</Text>
        
      </Table.Td>
      <Table.Td>
        {!element.status && (<input onClick={ () => toggleItem(element.id) } type="checkbox" checked={element.status} className="w-6 h-6 mr-3"/>)}
        {element.status && (<Badge color="blue">Lido</Badge>)}
      </Table.Td>
      <Table.Td>
      <Button
        variant="outline"
        color="red"
        radius="xl"
        onClick={() => deleteItem(element.id)}
      >
        <TrashIcon />
        Excluir
      </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return(
    <>
      <h1 className="text-4xl mt-5"> Minha Estante </h1>
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginBottom: '100px', width: '100%'}}>
            <TextInput
              size="md"
              radius="xl"
              label="Nome do Livro"
              placeholder="Informe o nome do livro"
              value={itemInput}
              onChange={(e) => setItenInput(e.target.value)}
            />
            <TextInput
              size="md"
              radius="xl"
              label="Autor"
              placeholder="Informe o nome do autor"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
            />
            <Button
              style={{ alignSelf: 'center', marginTop: '16px' }}
              variant="gradient"
              gradient={{ from: 'violet', to: 'grape', deg: 90 }}
              onClick={handleAddButton}
            >
              Adicionar
            </Button>
          </Container>
          <Container
          style={{ 
            width: '100%', 
            overflowX: 'auto' 
          }}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Nome</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Remover</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Container>
        
          </>
  );
}