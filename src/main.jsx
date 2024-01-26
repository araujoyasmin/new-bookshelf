import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import App from './App.tsx'
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider defaultColorScheme="dark">
    <App />
  </MantineProvider>,
   document.getElementById('app')
)
