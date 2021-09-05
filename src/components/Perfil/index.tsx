import Image from 'next/image';
import { FaPhp, FaJs, FaPython, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import styles from './Perfil.module.css';

const myLoader = ({ src }) => src;

type Avatar = {
    avatar_url: string;
}

function Perfil({ avatar_url }: Avatar) {
    return (
        <div className={ styles.perfil }>
            <Image 
                alt=''
                className={ styles.perfil__foto }
                height={ 170 }
                loader={ myLoader }
                src={ avatar_url }
                width={ 170 }
            />

            <p className={ styles.perfil__nome }>Anderson Pires</p>
            <h1 className={ styles.perfil__cargo }><em>Programador Full Stack</em></h1>

            <h2 className={ styles.perfil__tecnologia}>Tecnologia</h2>
            <ul className={ styles.perfil__stack }>
                <li tabIndex={ 1 }>
                    <FaPhp size={ 48 } />
                    <span className={styles.ocultaTexto}>PHP</span>
                </li>
                <li tabIndex={ 2 }>
                    <FaJs size={ 48 } />
                    <span className={styles.ocultaTexto}>JavaScript</span>
                </li>
                <li tabIndex={ 3 }>
                    <FaPython size={ 48 } />
                    <span className={styles.ocultaTexto}>Python</span>
                </li>
            </ul>

            <ul className={ styles.perfil__redes }>
                <li>
                    <a href='https://www.linkedin.com/in/devanderson-pires/' target='_blank' rel='noopener noreferrer' className={ styles.redes__link }>
                        <FaLinkedin size={ 18 } className={ styles.redes__icon }/>
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/devanderson-pires' target='_blank' rel='noopener noreferrer' className={ styles.redes__link }>
                        <FaGithub size={ 18 } className={ styles.redes__icon }/>
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/devanderson.pires/' target='_blank' rel='noopener noreferrer' className={ styles.redes__link }>
                        <FaInstagram size={ 18 } className={ styles.redes__icon }/>
                        <span>Instagram</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Perfil;
