import "../styles/globals/index.css";
import customTheme from "../styles/theme";
import "@fontsource/dangrek";
import "@fontsource/adamina";
import "@fontsource/dela-gothic-one";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import "@fontsource/sora";
import "@fontsource/bigshot-one";
import "@fontsource/cormorant-sc";
import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "react-redux";
// import { useStore } from "../redux/store";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default wrapper.withRedux(MyApp);
