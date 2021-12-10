import { useState } from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import styles from './ListaDeProjetos.module.css';

function ListaDeProjetos({ projetos }) {
    const [show, setShow] = useState(false);

    return (
        <div className="div">
            <ul className={styles.projetos}>
                {projetos
                    .slice(0, show ? 12 : 3)
                    .map(projeto => (
                        <li key={projeto.id} className={styles.projeto}>
                            {projeto.img_path && <img src={`https://devanderson-projetos.herokuapp.com/${projeto.img_path}`} alt="" className={styles.projeto__foto} />}
                            
                            <h3 className={styles.projeto__nome}>{projeto.title}</h3>

                            <p className={styles.projeto__descricao}>{projeto.description}</p>

                            <div className={styles.projeto__links}>
                                <a href={projeto.repo} target="_blank" rel="noopener noreferrer" className={styles.projeto__link}>
                                    Ver código
                                    <FaExternalLinkSquareAlt size={15} style={{ marginLeft: 10 }} />
                                </a>

                                {!projeto.demo ? (
                                    <a href={projeto.repo} target="_blank" rel="noopener noreferrer" className={styles.projeto__link} style={{ marginLeft: 15 }}>
                                        Demo
                                        <FaExternalLinkSquareAlt size={15} style={{ marginLeft: 10 }} />
                                    </a>
                                ) : ''}
                            </div>
                        </li>
                    ))}
            </ul>

            {!show ? <p onClick={() => setShow(!show)} className="button">Ver todos</p> : ''}
        </div>
    );
}

export default ListaDeProjetos;
