import React from "react";
import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";
import Image from "next/image";
import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";
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
            <HomeGrid>
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
                                <Flex
                                    key={index}
                                    justify="space-between"
                                    mb="2rem"
                                    align="center"
                                    borderBottom="1px"
                                    borderColor="neutrals.200"
                                    pb="1rem"
                                >
                                    <Box display="flex" alignItems="center">
                                        <Box height="30px" width="40px">
                                            <Image
                                                src={
                                                    "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop"
                                                }
                                                layout="responsive"
                                                width={40}
                                                height={30}
                                            />
                                        </Box>

                                        <Text
                                            fontFamily="Sora"
                                            fontSize="sm"
                                            ml="2rem"
                                        >
                                            {name}
                                        </Text>
                                    </Box>
                                    <Button
                                        borderRadius="full"
                                        size="sm"
                                        fontSize="xs"
                                        color={
                                            following
                                                ? "secondary.100"
                                                : "white"
                                        }
                                        _focus={{
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                        _active={{
                                            background: following
                                                ? "white"
                                                : "secondary.100",
                                        }}
                                        _hover={{
                                            background: following
                                                ? "white"
                                                : "secondary.100",
                                        }}
                                        fontWeight="normal"
                                        border={following && "1px"}
                                        borderColor="neutrals.300"
                                        background={
                                            following
                                                ? "white"
                                                : "secondary.100"
                                        }
                                    >
                                        {following ? "Following" : "Follow"}
                                    </Button>
                                </Flex>
                            );
                        })}
                    </Box>
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default index;
