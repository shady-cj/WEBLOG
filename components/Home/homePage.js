import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";
import { useState } from "react";
import { Box, Link, Text, Grid, GridItem } from "@chakra-ui/react";
import BlogPostCard from "../../subcomponents/HomePage/blogPostCard";
const homePage = ({ children }) => {
    const [activeNav, setActiveNav] = useState("all");
    const data = [
        {
            key: 1,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 2,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 3,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 4,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 5,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 6,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 7,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 8,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
        {
            key: 9,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: " · Mar 8",
        },
    ];
    return (
        <HomeWrapper page="home">
            <HomeGrid>
                <Box>
                    <Box
                        borderBottom="1px"
                        borderColor="neutrals.300"
                        mb="0.5rem"
                    >
                        <Link
                            _hover={{ textDecoration: "none" }}
                            _active={{ color: "neutrals.800" }}
                            color={
                                activeNav == "all"
                                    ? "default.dark"
                                    : "neutrals.700"
                            }
                            fontWeight={
                                activeNav == "all" ? "semibold" : "normal"
                            }
                            onClick={() => setActiveNav("all")}
                        >
                            <Text mr="2rem" as="span" fontSize="sm">
                                All
                            </Text>
                        </Link>

                        <Link
                            _hover={{ textDecoration: "none" }}
                            _active={{ color: "neutrals.800" }}
                            color={
                                activeNav == "following"
                                    ? "default.dark"
                                    : "neutrals.700"
                            }
                            fontWeight={
                                activeNav == "following" ? "semibold" : "normal"
                            }
                            onClick={() => setActiveNav("following")}
                        >
                            <Text mr="2rem" as="span" fontSize="sm">
                                Following
                            </Text>
                        </Link>
                        <Link
                            _hover={{ textDecoration: "none" }}
                            _active={{ color: "neutrals.800" }}
                            color={
                                activeNav == "recommended"
                                    ? "default.dark"
                                    : "neutrals.700"
                            }
                            fontWeight={
                                activeNav == "recommended"
                                    ? "semibold"
                                    : "normal"
                            }
                            onClick={() => setActiveNav("recommended")}
                        >
                            <Text mr="2rem" as="span" fontSize="sm">
                                Recommended
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        {data.map((entry) => {
                            return <BlogPostCard {...entry} />;
                        })}
                    </Box>
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default homePage;
