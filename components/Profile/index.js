import React from "react";
import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";
import FollowBtn from "../../subcomponents/HomePage/followBtn";
import {
    Heading,
    Box,
    Flex,
    Text,
    Button,
    Avatar,
    VStack,
    Center,
    useRadio,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";
import { useRouter } from "next/router";

const Index = ({ type, user, children }) => {
    const router = useRouter();
    const authUser = useSelector((state) => state.auth.user);
    const username = user && user.user.username;
    const isFollowing = authUser.following.includes(user.user.id);
    const isAuthUser = user && user.user.id === authUser.user.id;
    const navs = [
        {
            title: "Home",
            link: `/${username}`,
            type: "home",
        },
        {
            title: "About",
            link: `/${username}/about`,
            type: "about",
            hidden: true,
        },
        {
            title: "Followers",
            link: `/${username}/followers`,
            type: "follower",
        },
        {
            title: "Following",
            link: `/${username}/following`,
            type: "following",
        },
    ];
    return (
        <HomeWrapper page="profile">
            <HomeGrid page="profile" user={user}>
                <Heading
                    mt={{ lg: "1rem", base: "3rem" }}
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight="900"
                    display={{ lg: "block", base: "none" }}
                >
                    {/* {username?.slice(0, 1).toUpperCase() + username?.slice(1)} */}
                    {username}
                </Heading>
                <Box mt="3rem" display={{ lg: "none", base: "block" }}>
                    <Flex>
                        <Flex flex="1" align="center">
                            <Avatar
                                name={user && user.user.last_name}
                                mr="1rem"
                                src={user && user.profile_picture}
                            />
                            <VStack spacing={2} align="flex-start">
                                <Heading fontSize="md" fontWeight="700">
                                    {user && user.user.last_name}{" "}
                                    {user && user.user.first_name}
                                </Heading>
                                <Text fontSize="sm" color="neutrals.700">
                                    @{username}
                                </Text>
                            </VStack>
                        </Flex>

                        {isAuthUser ? (
                            <Button
                                bg="default.dark"
                                color="default.light"
                                fontWeight="500"
                                _hover={{
                                    bg: "#353434",
                                }}
                                _active={{
                                    bg: "default.dark",
                                }}
                                _focus={{
                                    outline: "none",
                                }}
                                size="sm"
                                onClick={() => router.push("/profile/edit")}
                            >
                                Edit Profile
                            </Button>
                        ) : (
                            <FollowBtn following={isFollowing} />
                        )}
                    </Flex>
                    <Box width="60%" ml="4rem">
                        <Text
                            mt="1rem"
                            noOfLines={2}
                            fontSize="xs"
                            color="neutrals.500"
                        >
                            {user && user.about}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    <SubNavTemplate active={type} navs={navs} />
                    {children}
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default Index;
