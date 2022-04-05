// import React from "react";
// import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import {
    Heading,
    Grid,
    GridItem,
    Container,
    Icon,
    Hide,
    Show,
    Box,
    Center,
    Flex,
} from "@chakra-ui/react";

import TrendingPostCard from "../../subcomponents/LandingPage/trendingPostCard";
import BlogPostCard from "../../subcomponents/LandingPage/blogPostCard";
import DiscoverMore from "../../subcomponents/LandingPage/discoverMore";
import { FiTrendingUp } from "react-icons/fi";
import NavBanner from "../../subcomponents/LandingPage/navBanner";
import LoginPopup from "../../subcomponents/LandingPage/loginPopup";
import { useSelector } from "react-redux";

const Home = () => {
    const popUp = useSelector((state) => state.popup.state);

    const data = [
        {
            key: 1,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: "Mar 8 · 6 min read",
        },
        {
            key: 2,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: "Mar 8 · 6 min read",
        },
        {
            key: 3,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: "Mar 8 · 6 min read",
        },
        {
            key: 4,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: "Mar 8 · 6 min read",
        },
        {
            key: 5,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: "Mar 8 · 6 min read",
        },
        {
            key: 6,
            name: "Jessica Wildfire",
            title: "Vladimir Putin Has Already Won, but Nobody Wants to Admit It",
            text: "I couldn’t say all I wanted in my National Geographic story about vaccine injuries, so here’s the rest of the story",
            date: "Mar 8 · 6 min read",
        },
    ];

    useEffect(() => {
        const bodyEl = document.querySelector("body");
        bodyEl.classList.toggle("popup-open", popUp);
    }, [popUp]);

    return (
        <>
            <Box>
                <NavBanner />
                <Box py="4rem" borderBottom="1px" borderColor="neutrals.200">
                    <Container p="0 4rem">
                        <Heading
                            as="h2"
                            size="xs"
                            fontWeight="normal"
                            fontFamily="Dangrek"
                        >
                            <Box
                                display="inline-flex"
                                alignItems="center"
                                justifyContent="center"
                                border="1px solid black"
                                borderRadius="full"
                                w="24px"
                                h="24px"
                                mr="0.5rem"
                                mt="3px"
                            >
                                <Icon as={FiTrendingUp} />
                            </Box>
                            TRENDING ON WEBLOG
                        </Heading>
                        <Grid
                            mt="1.5rem"
                            templateColumns={{
                                lg: "repeat(3, 1fr)",
                                md: "repeat(2,1fr)",
                                sm: "repeat(1,1fr)",
                            }}
                            gap={5}
                        >
                            {data.map((entry) => {
                                return <TrendingPostCard {...entry} />;
                            })}
                        </Grid>
                    </Container>
                </Box>

                <Show below="lg">
                    <Box
                        py="4rem"
                        borderBottom="1px"
                        borderColor="neutrals.200"
                    >
                        <Container p="0 4rem">
                            <DiscoverMore />
                        </Container>
                    </Box>
                </Show>
                <Box>
                    <Container p="0 4rem">
                        <Grid
                            mt="3rem"
                            templateColumns="repeat(3, 1fr)"
                            gap={5}
                        >
                            <GridItem
                                width="100%"
                                colSpan={{ xs: "3", lg: "2" }}
                            >
                                {data.map((entry) => {
                                    return <BlogPostCard {...entry} />;
                                })}
                            </GridItem>
                            <Hide below="lg">
                                <GridItem
                                    width="100%"
                                    h="100px"
                                    colSpan="1"
                                    position="sticky"
                                    top="110px"
                                >
                                    <DiscoverMore />
                                </GridItem>
                            </Hide>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <AnimatePresence exitBeforeEnter>
                {popUp && <LoginPopup />}
            </AnimatePresence>
        </>
    );
};

export default Home;
