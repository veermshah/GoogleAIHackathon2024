import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8c2c8e',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#b5b5b5',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register(); //change the service worker registration from 'unregistered' to 'registered'
//Essentially, changing the service worker from unregistered to registered will allow you to utilize the app 
//even when it's offline, a key benefit when it comes to PWAs. Check Google's explanation on this topic for more information: https://developers.google.com/web/fundamentals/primers/service-workers/registration

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
