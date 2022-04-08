import React from "react";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ErrorPage from "next/error";
import { useFetchFollow } from "../../subcomponents/Hooks/useFetchFollow";
import { useSelector } from "react-redux";
import FollowLayout from "../../subcomponents/HomePage/followLayout";
import FollowLoading from "../../subcomponents/HomePage/followLoading";
const Following = ({ userProfile }) => {
    const authUser = useSelector((state) => state.auth.user);

    const { fetching, follow, error } = useFetchFollow(
        "following",
        userProfile && userProfile.user.username
    );
    return (
        <>
            {userProfile ? (
                <Profile type="following" user={userProfile}>
                    {fetching ? (
                        <FollowLoading />
                    ) : (
                        <Box mt="2.5rem">
                            {follow.following.map((fUser) => (
                                <FollowLayout
                                    key={fUser.id}
                                    name={fUser.last_name}
                                    firstName={fUser.first_name}
                                    id={fUser.username}
                                    following={
                                        authUser.user.id === fUser.id
                                            ? null
                                            : authUser.following.includes(
                                                  fUser.id
                                              )
                                    }
                                    img={fUser.profile_picture}
                                />
                            ))}
                        </Box>
                    )}
                </Profile>
            ) : (
                <ErrorPage statusCode={404} />
            )}
        </>
    );
};

export default Following;

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
