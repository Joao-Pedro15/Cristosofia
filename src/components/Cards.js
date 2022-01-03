import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <main className="cards">
            <div className="cards-container">
                <div className="card-content">
                    <ul>
                        <CardItem path="Cristosofia/capitulo1" src="./images/egypt-g7556a505a_1920.jpg" text="FILOSOFÍA GREGA É FILOSOFÍA EGÍPCIA ROUBADA" label="Capítulo #1"/>
                    </ul>
                </div>
                <div className="card-content">
                    <ul>
                        <CardItem path="Cristosofia/capitulo2" src="./images/achilles-g8b6378306_640.jpg" text=" AS GUERRAS NÃO APRESENTAM AMBIENTE FAVORÁVEL AO SURGIMENTO DO PENSAMENTO" label="Capítulo #2"/>
                        <CardItem path="Cristosofia/capitulo3" src="./images/the-death-of-socrates-g9ad385020_1280.png" text=" SISTEMA DOS MISTÉRIOS, LIBERTAÇÃO DA ALMA E ARTES LIBERAIS" label="Capítulo #3"/>
                    </ul>
                </div>
                <div className="card-content">
                    <ul>
                        <CardItem path="Cristosofia/capitulo4" src="./images/22701215286_702584c697_o.jpg" text="TALES, ANAXIMANDRO, ANAXÍMENES E HERÁCLITO" label="Capítulo #4"/>
                        <CardItem path="Cristosofia/capitulo5" src="./images/pythagoras-g7215a582f_1280.jpg" text="PITÁGORAS" label="Capítulo #5"/>
                        <CardItem path="Cristosofia/capitulo6" src="./images/37331596772_eed2d3ef10_o.jpg" text="PARMÊNIDES, ANAXÁGORAS E DEMÓCRITO" label="Capítulo #6"/>

                    </ul>
                </div>
                <div className="card-content">
                    <ul>
                        <CardItem path="Cristosofia/capitulo7" src="./images/3596663014_77f27f6477_b.jpg" text="SÓCRATES" label="Capítulo #7"/>
                        <CardItem path="Cristosofia/capitulo8"  src="./images/4511314389_9d43dcb18d_o.jpg" text="PLATÃO" label="Capítulo #8"/>
                    </ul>
                </div>
            </div>
        </main>
    )
}
export default Cards