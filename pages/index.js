import HomePage from "../components/Home/homePage";
import React, { useEffect } from "react";
import { requireAuth } from "../components/Container/HOC/requireAuth";
import { wrapper } from "../redux/store";
import { useSelector } from "react-redux";
import AuthlessHomepage from "../components/Home";
import { useRouter } from "next/router";
function Home() {
    const router = useRouter();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    useEffect(() => {
        const q = router.query.next;
        if (isAuthenticated && q) {
            router.replace(`/${q}`);
        }
    }, [isAuthenticated]);

    return <>{isAuthenticated && user ? <HomePage /> : <AuthlessHomepage />}</>;
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
