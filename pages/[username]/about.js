import React from "react";
import Profile from "../../components/Profile";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Box, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const about = ({ userProfile }) => {
    // const router = useRouter();
    const { user } = useSelector((state) => state.auth);

    // const { username } = router.query;

    return (
        <>
            {userProfile ? (
                <Profile type="about" user={userProfile}>
                    <Box py="2.5rem">
                        <Text fontSize="md">{userProfile.about}</Text>
                        {user.user.id === userProfile.user.id && (
                            <Button
                                fontWeight="400"
                                bg="default.dark"
                                p="0.1rem 1rem"
                                fontSize="xs"
                                color="white"
                                _hover={{
                                    background: "default.dark",
                                }}
                                _focus={{
                                    background: "default.dark",
                                }}
                                _active={{
                                    background: "default.dark",
                                }}
                            >
                                Edit
                            </Button>
                        )}
                    </Box>
                </Profile>
            ) : (
                <ErrorPage statusCode={404} />
            )}
        </>
    );
};

export default about;

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
