import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
    title: "Rahul More",
    description: "A Frontend Developer Portfolio",
};

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
            <link rel="icon" type="image/x-icon" href="../pages/favicon.ico"/>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}