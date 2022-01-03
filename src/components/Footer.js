import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="sign-footer">
                    <h4>Fique por dentro dos novos artigos</h4>
                    <p>Se inscreva e receberá notificações no seu email sobre novos artigos!</p>
                    <form method="POST">
                        <input type="text" placeholder="Digite seu Email" />
                        <button type="submit">INSCREVA-SE</button>
                    </form>
                </div>
                <div className="list-footer">
                    <div>
                        <ul>
                            <h5>Sobre</h5>
                            <li>Filosofía</li>
                            <li>Bíblia</li>
                            <li>Grecia Antiga</li>
                            <li>Egito Antigo</li>
                        </ul>
                        <ul>
                            <h5>Artigos</h5>
                            <li>O Legado Perdido</li>
                            <li>Pré-socraticos</li>
                            <li>Sócrates</li>
                            <li>Aristóteles</li>
                        </ul>
                    </div>
                    
                    <div>
                        <ul>
                            <h5>Contato</h5>
                            <li>Email</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>Facebook</li>
                        </ul>
                        
                        <ul>
                            <h5>Doações</h5>
                            <li>Pix</li>
                            <li>PayPal</li>
                            <li>SuperChat</li>
                        </ul>
                    </div>
                </div>

                <div className="finally-footer">
                    <p>Cristosofia</p>
                    <p>© copyright - 2021</p>
                    <p>João Pedro C. Monteiro</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
