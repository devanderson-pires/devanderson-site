import NextHead from 'next/head';

interface Head {
    title: string
}

function Head({ title }: Head) {

    return (
        <NextHead>
            <title>{ title }</title>
        </NextHead>
    );
}

export default Head;
