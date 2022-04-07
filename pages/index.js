import HomePage from "../components/Home/homePage";
import React, { useEffect } from "react";
import AuthlessHomepage from "../components/Home";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { requireAuth } from "../components/Container/HOC/requireAuth";

function Home() {
    const is_authenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const router = useRouter();
    useEffect(() => {
        router.beforePopState(({ url, as, options }) => {
            // I only want to allow these two routes!
            // if (as !== "/" && as !== "/other") {
            //     // Have SSR render bad routes as a 404.
            //     window.location.href = as;
            //     return false;
            // }
            console.log(as, url, options);
            return true;
        });
    }, []);

    return (
        <>{is_authenticated && user ? <HomePage /> : <AuthlessHomepage />}</>
    );
}

export default Home;

export const getServerSideProps = requireAuth(async (_ctx) => {
    return {
        props: {},
    };
});
