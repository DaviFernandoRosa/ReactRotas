import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const Header = () => {
    return(
        <div className='header'>
         <Link className="headerLink" to='/'>Inicio</Link>
         <Link className="headerLink" to='/produtos'>Produtos</Link>
         <Link className="headerLink" to='/aviso'>Avisos</Link>
         
        
        </div>
    )
}


export default Header;