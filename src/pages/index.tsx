import { InferGetStaticPropsType } from 'next';
import Head from '../infra/components/Head';
import Perfil from '../components/Perfil';
import Footer from '../components/Footer';
import ListaDeProjetos from '../components/ListaDeProjetos';

type Projetos = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/devanderson-pires/repos');
    const projetos: Projetos[] = await res.json();

    return {
        props: { projetos }
    }
}

function Home({ projetos }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head title='Anderson Pires - Programador Full Stack' />
            <main>
                <Perfil />
                
                <h2>Projetos</h2>
                
                <div className='container'>
                    <ListaDeProjetos projetos={ projetos } />
                </div>
            </main><style jsx>{`
                h2 {
                    color: #283996;
                    font-size: 36px;
                    font-weight: 300;
                    letter-spacing: 2.5px;
                    margin: 30px 0;
                    text-align: center;
                    text-transform: uppercase;
                }
            `}</style>
            
            <Footer />
        </>
    );
}

export default Home;
