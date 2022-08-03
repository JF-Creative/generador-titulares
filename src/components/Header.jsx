import { NavLink } from "react-router-dom";

export function Header(){

    return (    
        <div>
            <header className="header">
                <h1 className="app-title">Generador de Titulares </h1>
                <nav className='nav'>
                    <ul>
                        <li><NavLink to='/'>Generar Titulares</NavLink></li>
                        <li><NavLink to='/tips'>Tips para crear titulares</NavLink></li>
                        <li><NavLink to='/about'>¿Qué es esto?</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
        
    );
  
}


