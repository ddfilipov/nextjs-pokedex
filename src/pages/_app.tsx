import type { AppProps } from "next/app";
import GlobalStyle, { MainAreaContainer } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <MainAreaContainer>
                <Component {...pageProps} />
            </MainAreaContainer>
        </>
    );
}
