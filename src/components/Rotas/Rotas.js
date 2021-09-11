import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Produtos from '../Produtos/produtos';
import Aviso from '../Aviso/Avisos';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Rotas = () => (
    <BrowserRouter>
     <Header/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/produtos' component={Produtos} />
            <Route path='/aviso' component={Aviso} />  
        </Switch>
        <Footer/>
    </BrowserRouter>
);

export default Rotas;