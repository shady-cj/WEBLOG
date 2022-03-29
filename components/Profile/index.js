import React from "react";
import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";

import {
    Heading,
    Box,
    Flex,
    Text,
    Button,
    Avatar,
    VStack,
    Center,
} from "@chakra-ui/react";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";

const index = ({ type, username }) => {
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
            <HomeGrid page="profile">
                <Heading
                    mt={{ lg: "1rem", base: "3rem" }}
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight="900"
                    display={{ lg: "block", base: "none" }}
                >
                    {username?.slice(0, 1).toUpperCase() + username?.slice(1)}
                    {/* {username} */}
                </Heading>
                <Box mt="3rem" display={{ lg: "none", base: "block" }}>
                    <Flex>
                        <Flex flex="1" align="center">
                            <Avatar name="Erinfolami" mr="1rem" />
                            <VStack spacing={2} align="flex-start">
                                <Heading fontSize="md" fontWeight="700">
                                    Erinfolami Peter
                                </Heading>
                                <Text fontSize="sm" color="neutrals.700">
                                    @Peter
                                </Text>
                            </VStack>
                        </Flex>
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
                        >
                            Edit Profile
                        </Button>
                    </Flex>
                    <Center width="60%" ml="3rem">
                        <Text
                            mt="1rem"
                            noOfLines={2}
                            fontSize="xs"
                            color="neutrals.500"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error earum perferendis, perspiciatis corporis
                            dicta in veniam, eveniet, voluptatibus quaerat
                            repellat quas pariatur rem. Esse, aspernatur est!
                            Tempora optio dolor explicabo?
                        </Text>
                    </Center>
                </Box>
                <Box>
                    <SubNavTemplate active={type} navs={navs} />
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default index;
