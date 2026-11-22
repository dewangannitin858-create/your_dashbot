import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export default function Document() {
    // Lang will be set dynamically by useLanguage hook in runtime
    return (
        <Html lang="en" {...mantineHtmlProps}>
            <Head>
                <ColorSchemeScript />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='32' y2='32' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%233B82F6'/%3E%3Cstop offset='.5' stop-color='%238B5CF6'/%3E%3Cstop offset='1' stop-color='%2314B8A6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='9' fill='url(%23g)'/%3E%3Crect x='7' y='7' width='8' height='8' rx='2.5' fill='white'/%3E%3Crect x='17' y='7' width='8' height='5' rx='2' fill='white' fill-opacity='.6'/%3E%3Crect x='17' y='14' width='8' height='11' rx='2.5' fill='white'/%3E%3Crect x='7' y='17' width='8' height='8' rx='2.5' fill='white' fill-opacity='.6'/%3E%3C/svg%3E"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}