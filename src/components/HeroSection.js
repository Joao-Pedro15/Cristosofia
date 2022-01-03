import React from 'react'
import './HeroSection.css'

function HeroSection(props) {
    return (
        <section className="hero-container">
            <img src={props.src} alt={props.alt} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <div className="btns">
                <button>LOGIN</button>
                <button>INSCREVA-SE</button>

            </div>
        </section>    
    )
}

export default HeroSection
