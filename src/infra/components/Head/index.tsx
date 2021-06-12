import NextHead from 'next/head';

function Head({ title }) {

    return (
        <NextHead>
            <title>{ title }</title>
        </NextHead>
    );
}

export default Head;
