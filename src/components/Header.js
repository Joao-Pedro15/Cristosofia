import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {

    const [click, setClick] = useState(false)
    
    const handleClick = ()=> setClick(!click) 

    function closeMenu(){
        document.querySelector('.nav-menu').classList.toggle('active')
        handleClick()
    }

    return (
        <header>
            <div className="logo">
                <i className="fas fa-cross"></i>
                <span>Cristosofía</span>
            </div>
            <nav className={click ? "nav-menu active" : "nav-menu"}>
                <Link to='/Cristosofia' onClick={closeMenu} className="nav-link">Início</Link>
                <Link to='/legado' onClick={closeMenu} className="nav-link">Artigos</Link>
                <Link to='/sobre' onClick={closeMenu} className="nav-link">Sobre</Link>
            </nav>
            <div className="btn-menu" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </header>
    )
}

export default Header
