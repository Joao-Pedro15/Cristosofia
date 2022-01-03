import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className='card-item'>
                <Link to={props.path} className='card-link'>
                    <figure className='card-figure' data-category={props.label}>
                        <img className='card-img' alt='Travel' src={props.src}/>
                    </figure>
                    <div className='card-desc'>
                        <h5 className='card-desc-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
