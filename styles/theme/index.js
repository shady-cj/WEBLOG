import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    base: "10em",
    xs: "22em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "90em",
    "3xl": "120em",
});
const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                overflowX: "hidden",
                color: props.colorMode === "light" ? "black" : "white",
                bg: props.colorMode === "light" ? "white" : "black",
            },
        }),
    },
    breakpoints,
    fonts: {
        heading: "Sora",
        body: "Sora",
    },
    colors: {
        default: {
            light: "#fcfcfc",
            dark: "#232323",
        },
        primary: {
            100: "#f7e8d3",
            200: "#ded1be",
            300: "#c6baa9",
            400: "#ada294",
            500: "#948b7f",
            600: "#7c746a",
            700: "#635d54",
            800: "#4a463f",
        },
        secondary: {
            100: "#2a7c6f",
            200: "#267064",
            300: "#226359",
            400: "#1d574e",
            500: "#194a43",
            600: "#153e38",
            700: "#11322c",
            800: "#0d2521",
        },
        neutrals: {
            100: "#f4f4f4",
            200: "#dcdcdc",
            300: "#c3c3c3",
            400: "#ababab",
            500: "#929292",
            600: "#7a7a7a",
            700: "#626262",
            800: "#494949",
            900: "#2c2c2c",
        },
    },
});

export default theme;
