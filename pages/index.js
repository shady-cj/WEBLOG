import AuthlessHomepage from "../components/Home";
import HomePage from "../components/Home/homePage";
import { AnimatePresence } from "framer-motion";
import { Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <AnimatePresence exitBeforeEnter>
            {/* <AuthlessHomepage /> */}
            <HomePage />
        </AnimatePresence>
    );
}
