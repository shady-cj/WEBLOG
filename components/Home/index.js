// import React from "react";
// import Head from "next/head";
import Image from "next/image";
import {
    Heading,
    Text,
    Button,
    Link,
    Grid,
    GridItem,
    Container,
    Icon,
} from "@chakra-ui/react";
import { FiTrendingUp } from "react-icons/fi";
import NextLink from "next/link";
import { Box, Flex, Center } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import NavBanner from "../../subcomponents/navBanner";

const Home = () => {
    return (
        <Box h="4000px">
            <NavBanner />
            <Box pt="4rem">
                <Container p="0 4rem">
                    <Heading as="h2" size="xs" fontWeight="semibold">
                        <Box
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            border="3px"
                            w="30px"
                            h="30px"
                        >
                            <Icon as={FiTrendingUp} />
                        </Box>
                        TRENDING ON WEBLOG
                    </Heading>
                    <Grid mt="1.5rem" templateColumns="repeat(3, 1fr)" gap={5}>
                        <GridItem w="100%" h="10" bg="secondary.200"></GridItem>
                        <GridItem w="100%" h="10" bg="secondary.200"></GridItem>
                        <GridItem w="100%" h="10" bg="secondary.200"></GridItem>
                        <GridItem w="100%" h="10" bg="secondary.200"></GridItem>
                        <GridItem w="100%" h="10" bg="secondary.200"></GridItem>
                        <GridItem w="100%" h="10" bg="secondary.200"></GridItem>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
