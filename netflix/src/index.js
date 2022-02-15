import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { blue } from "@mui/material/colors";

const theme =  createTheme({
  palette: {
    primary: {
      main: blue[700]
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
