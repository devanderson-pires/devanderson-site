import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__texto}>Desenvolvidor por <em>Anderson Pires</em></p>

            <a href='https://github.com/devanderson-pires/devanderson-site' target='_blank' rel='noopener noreferrer' className={styles.footer__link}>
                Source Code
                <FaExternalLinkSquareAlt size={15} className={styles.footer__icon} />
            </a>
        </footer>
    );
}

export default Footer;
