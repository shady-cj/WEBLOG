import React from "react";
import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";
import Image from "next/image";
import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";
import FollowLayout from "../../subcomponents/HomePage/followLayout";
const index = ({ type }) => {
    const navs = [
        {
            title: "All Topics",
            link: "/topics",
            type: "all",
        },
        {
            title: "Following",
            link: "/topics/following",
            type: "following",
        },
    ];
    const topics = [
        {
            name: "Politics",
            following: true,
        },
        {
            name: "Education",
            following: false,
        },
        {
            name: "Technology",
            following: true,
        },
        {
            name: "Sport",
            following: true,
        },
        {
            name: "Programming",
            following: true,
        },
        {
            name: "Food",
            following: false,
        },
        {
            name: "Lifestyle",
            following: false,
        },
        {
            name: "Entertainment",
            following: true,
        },
    ];
    return (
        <HomeWrapper page="topic">
            <HomeGrid page="topic">
                <Heading
                    mt={{ lg: "1rem", base: "3rem" }}
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight="900"
                >
                    Topics
                </Heading>
                <Box>
                    <SubNavTemplate active={type} navs={navs} />

                    <Box pt="2.5rem">
                        {topics.map((topic, index) => {
                            const { following, name } = topic;
                            return (
                                <FollowLayout
                                    key={name + index}
                                    following={following}
                                    name={name}
                                />
                            );
                        })}
                    </Box>
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default index;
