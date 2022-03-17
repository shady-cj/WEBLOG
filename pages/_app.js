import "../styles/globals/index.css";
import customTheme from "../styles/theme";
import "@fontsource/adamina/400.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
