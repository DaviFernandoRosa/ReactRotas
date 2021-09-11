import React from 'react';
import Rotas from './components/Rotas/Rotas';
import './App.css';


function App() {
  return (
    
    <div>
       <Rotas />
    </div>
  
   
  );
}

export default App;
































/*
import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/produtos';
import Aviso from './components/Aviso/Avisos';
import Footer from './components/Footer/Footer';
import {

  BrowserRouter as Router,
  Route

} from 'react-router-dom'

import './App.css';


function App() {
  return (
    <Router>
          <Header />
         <Route path='/' exact component={Home} />
         <Route  path='/produtos'  component={Produtos} />
         <Route  path='/aviso' component={Aviso} />


          <Footer />

          
      
    </Router>
      
   



    
  );
}

export default App; */
