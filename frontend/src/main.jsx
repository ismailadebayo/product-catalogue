import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider, theme } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>

);
