import React from "react";
import Profile from "../../components/Profile";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const { username } = router.query;

    return <>{username && <Profile type="home" username={username} />}</>;
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
