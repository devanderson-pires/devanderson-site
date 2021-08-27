import { useState } from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import styles from './ListaDeProjetos.module.css';

function ListaDeProjetos({ projetos }) {
    const [show, setShow] = useState(false);

    return(
        <div className="div">
            <ul className={ styles.projetos }>
                { projetos
                .slice(0, show ? 12 : 3)
                .map(projeto => (
                    <li key={projeto.id} className={ styles.projeto }>
                        <h3 className={ styles.projeto__nome }>{ projeto.name }</h3>
                        <p className={ styles.projeto__tecnologias }>Tecnologias: <em>{ projeto.language }</em></p>
                        <p className={ styles.projeto__descricao }>{ projeto.description }</p>

                        <a href={ projeto.html_url } target="_blank" rel="noopener noreferrer" className={ styles.projeto__link }>
                            Ver código
                            <FaExternalLinkSquareAlt size={ 15 } style={{ marginLeft: 10 }} />
                        </a>
                    </li>
                )) }
            </ul>

            {!show ? <p onClick={() => setShow(!show)} className="button">Ver todos</p> : ''}
        </div>
    );
}

export default ListaDeProjetos;
