import React from "react";

import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";

import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";
const index = ({ type }) => {
    const navs = [
        {
            title: "All",
            link: "/notifications",
            type: "all",
        },
        {
            title: "Responses",
            link: "/notifications/responses",
            type: "response",
        },
        {
            title: "Followers",
            link: "/notifications/followers",
            type: "follower",
        },
    ];
    return (
        <HomeWrapper page="notification">
            <HomeGrid>
                <Heading
                    mt={{ lg: "1rem", base: "3rem" }}
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight="900"
                >
                    Notifications
                </Heading>
                <Box>
                    <SubNavTemplate active={type} navs={navs} />
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default index;
