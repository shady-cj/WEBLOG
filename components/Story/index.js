import React from "react";
import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";
import { Heading, Box, Button, Flex } from "@chakra-ui/react";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";
import { useRouter } from "next/router";
const Story = ({ type }) => {
    const router = useRouter();
    const navs = [
        {
            title: "Drafts",
            link: "/story/drafts",
            type: "drafts",
        },
        {
            title: "Published",
            link: "/story/published",
            type: "published",
        },
        {
            title: "Trash",
            link: "/story/trash",
            type: "trash",
        },
    ];
    return (
        <HomeWrapper page="story">
            <HomeGrid page="story">
                <Flex
                    align="center"
                    justify="space-between"
                    mt={{ lg: "1rem", base: "3rem" }}
                >
                    <Heading
                        fontWeight="900"
                        fontSize={{ base: "xl", lg: "2xl" }}
                    >
                        Your Stories
                    </Heading>

                    <Button
                        fontFamily="Sora"
                        background="secondary.100"
                        color="white"
                        fontWeight="500"
                        fontSize="sm"
                        size="md"
                        borderRadius="full"
                        _focus={{
                            outline: "none",
                            boxShadow: "none",
                        }}
                        _hover={{
                            background: "secondary.400",
                        }}
                        _active={{
                            background: "secondary.500",
                        }}
                        onClick={() => router.push("/new-story")}
                    >
                        Write a story
                    </Button>
                </Flex>

                <Box>
                    <SubNavTemplate active={type} navs={navs} />
                    <Box>
                        {/* {data.map((entry) => {
                            return <BlogPostCard {...entry} bookmark={true} />;
                        })} */}
                    </Box>
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default Story;
