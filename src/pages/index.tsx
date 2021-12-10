import { InferGetStaticPropsType } from 'next';
import Head from '../infra/components/Head';
import Perfil from '../components/Perfil';
import Footer from '../components/Footer';
import ListaDeProjetos from '../components/ListaDeProjetos';

type Projetos = {
    id: number;
    img_path: string | null;
    name: string;
    description: string;
    repo: string;
    demo: string | null;
    languages: Array<string>;
}

export async function getStaticProps() {
    const res = await fetch('https://devanderson-projetos.herokuapp.com/api/projects');
    const projetos: Projetos[] = await res.json();

    return {
        props: { projetos, avatar_url: 'https://avatars.githubusercontent.com/u/56002513?v=4' }
    }
}

function Home({ projetos, avatar_url }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head title='Anderson Pires - Programador Full Stack' />
            <main>
                <Perfil avatar_url={avatar_url} />

                <h2>Projetos</h2>

                <div className='container'>
                    <ListaDeProjetos projetos={projetos} />
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
