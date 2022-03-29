import React from "react";
import HomeWrapper from "../Container/homeWrapper";
import HomeGrid from "../Container/homeGrid";
import { Heading, Box } from "@chakra-ui/react";
import SubNavTemplate from "../../subcomponents/HomePage/subNavTemplate";
import BlogPostCard from "../../subcomponents/HomePage/blogPostCard";

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
];
const Bookmarks = ({ type }) => {
    const navs = [
        {
            title: "Saved Articles",
            link: "/bookmarks",
            type: "saved",
        },
        {
            title: "Recently viewed",
            link: "/bookmarks/recent",
            type: "recent",
        },
    ];
    return (
        <HomeWrapper page={type === "saved" && "bookmark"}>
            <HomeGrid page="bookmark">
                <Heading
                    mt={{ lg: "1rem", base: "3rem" }}
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight="900"
                >
                    Your Saved Articles
                </Heading>
                <Box>
                    <SubNavTemplate active={type} navs={navs} />
                    <Box>
                        {data.map((entry) => {
                            return <BlogPostCard {...entry} bookmark={true} />;
                        })}
                    </Box>
                </Box>
            </HomeGrid>
        </HomeWrapper>
    );
};

export default Bookmarks;
