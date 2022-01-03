import React from 'react'
import Article from '../Article'
import HeroSection from '../HeroSection'

function Home() {
    return (
        <>
            <HeroSection src="./images/k-mitch-hodge-dIxNPbPqTuc-unsplash.jpg" alt="Outro teste" title="Cristosofia" subtitle="Filosofía sem compromisso com ideologia!"/>
            <Article path="Cristosofia/legado" title="O legado roubado" src="./images/istockphoto-1322882224-170667a.jpg" alt="image" desc="8 textos de explicando como os gregos roubaram a  filosofia egípicia" />
        </>
    )
}

export default Home
