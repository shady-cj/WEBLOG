import AuthlessHomepage from "../components/Home";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    return (
        <AnimatePresence exitBeforeEnter>
            <AuthlessHomepage />;
        </AnimatePresence>
    );
}
