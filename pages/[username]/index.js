import React from "react";
import Profile from "../../components/Profile";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

const index = ({ userProfile }) => {
    // const router = useRouter();
    // const { username } = router.query;

    return (
        <>
            {userProfile ? (
                <Profile type="home" user={userProfile} />
            ) : (
                <ErrorPage statusCode={404} />
            )}
        </>
    );
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        const { params, res } = ctx;
        const { username } = params;
        const apiRes = await fetch(
            `${process.env.BLOGREST_API_URL}/api/users/user_profile/${username}`
        );
        const data = await apiRes.json();
        if (apiRes.status === 200) {
            res.setHeader(
                "Cache-Control",
                "public, s-maxage=30, stale-while-revalidate=100"
            );
            return {
                props: {
                    userProfile: data.user,
                },
            };
        } else {
            return {
                props: {
                    userProfile: null,
                },
            };
        }
    }, store)
);
