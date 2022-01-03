import React from 'react'
import './Article.css'
import {Link} from 'react-router-dom'

function Article(props) {
    return (
        <main className="article">
            <h3 className="article-title">{props.title}</h3>
            <Link to={props.path} className="article-link">
                <div className="banner">
                    <figure className="article-figure">
                        <img className="article-img" src={props.src} alt={props.alt} />
                    </figure>
                    <div className="article-desc">{props.desc}</div>
                </div>
            </Link>
        </main>
    )
}

export default Article
