import AuthlessHomepage from "../components/Home";
import HomePage from "../components/Home/homePage";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Home() {
    const is_authenticated = useSelector((state) => state.auth.isAuthenticated);

    const register_success = useSelector(
        (state) => state.auth.register_success
    );
    return (
        <>
            {register_success || is_authenticated ? (
                <HomePage />
            ) : (
                <AuthlessHomepage />
            )}
        </>
    );
}
