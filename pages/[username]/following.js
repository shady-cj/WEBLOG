import React from "react";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
const following = () => {
    const router = useRouter();
    const { username } = router.query;
    return <>{username && <Profile type="following" username={username} />}</>;
};

export default following;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
