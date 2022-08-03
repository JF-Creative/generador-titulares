import { NavLink } from "react-router-dom";

export function Header(){

    return (    
        <div>
            <header className="header">
                <h1 className="app-title">Generador de Titulares </h1>
                <nav className='nav'>
                    <ul>
                        <li><NavLink to='https://jf-creative.github.io/titles-generator-to-whatsapp/'>Generar Titulares</NavLink></li>
                        <li><NavLink to='https://jf-creative.github.io/titles-generator-to-whatsapp/tips'>Tips para crear titulares</NavLink></li>
                        <li><NavLink to='https://jf-creative.github.io/titles-generator-to-whatsapp/about'>¿Qué es esto?</NavLink></li>
                        <li><NavLink to='*'>Not Found</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
        
    );
  
}


