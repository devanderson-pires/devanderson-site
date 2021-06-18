import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import styles from './ListaDeProjetos.module.css';

function ListaDeProjetos({ projetos }) {
    return(
        <ul className={ styles.projetos }>
            { projetos.map(projeto => (
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
    );
}

export default ListaDeProjetos;
