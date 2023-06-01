// import React from 'react'
import Home from './components/Home'
import './App.css'
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
import { Container } from '@mui/material';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Header/>
{/* <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}> */}
    
    <Home />
    {/* </Container> */}
    <h6>Created by Rahul Sharma</h6>  
    </ThemeProvider>

  );
};

export default App;
