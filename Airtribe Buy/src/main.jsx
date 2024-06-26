import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App.jsx'
import '@mantine/core/styles.css';
import './index.css'
import AppRouter from './routes/AppRouter.jsx';


const theme = createTheme({
  /** Put your mantine theme override here */
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <MantineProvider theme={theme}>
    <AppRouter />
    </MantineProvider>
  </React.StrictMode>,
)
