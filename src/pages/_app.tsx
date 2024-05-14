import {ReactElement} from 'react';

import type {AppProps} from 'next/app';
import {Lato} from 'next/font/google';

import '@/styles/globals.scss';
import '@/styles/fonts.scss';

const lato = Lato({subsets: ['latin'], weight: ['100', '300', '400', '700', '900']});

export default function App({Component, pageProps}: AppProps): ReactElement {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${lato.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
