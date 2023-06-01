// import React from 'react'
import Home from './components/Home'
// import './App.css'
import Header from './components/Header'

// function App() {
//   return (
//     <div className='main-container'>
//       <Header/>
//       <Home/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
// import { Container } from '@mui/material';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Header/>

    
    <Home />

      
    </ThemeProvider>
  );
};

export default App;
