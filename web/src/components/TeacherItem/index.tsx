import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEOkggNDT2Xaw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=z1RVZXZh4L0pd2PJtLBGI2QzGLV5v8YocCH8s46lUss" alt="flavio ordone"/>
                <div>
                    <strong>Flávio Ordone</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
            Com o avanço das tecnologias digitais, a palavra programação chega as rodas de conversa com um significado que já é antigo, 
            mas que vem sendo discutido cada vez mais nos dias atuais. A palavra não se trata mais apenas do 
            planejamento que você faz para as férias ou do rumo que dá ao dinheiro que sobra no final do mês, 
            mas vai muito, muito além disso.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;

