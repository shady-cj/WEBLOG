import React from "react";
// import Image from "next/image";
import {
    Heading,
    Image,
    Text,
    Button,
    Link,
    Icon,
    Hide,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Box, Flex, Center } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
const navBanner = () => {
    const fixedHeader = useRef(null);
    const Banner = useRef(null);
    const [scrolledPast, setScrolledPast] = useState(false);
    useEffect(() => {
        const handleColorChangeOnScroll = () => {
            let threshold = fixedHeader.current.getBoundingClientRect().height;
            let scrolledFromTop =
                Banner.current.getBoundingClientRect().height +
                Banner.current.getBoundingClientRect().top;
            if (scrolledFromTop < threshold) {
                // fixedHeader.current.style.backgroundColor = "white";
                setScrolledPast(true);
            } else {
                // fixedHeader.current.style.backgroundColor = "#f7e8d3";
                setScrolledPast(false);
            }
        };
        window.addEventListener("scroll", handleColorChangeOnScroll);
        return () => {
            return window.removeEventListener(
                "scroll",
                handleColorChangeOnScroll
            );
        };
    }, []);
    return (
        <Box h="85vh" bg="primary.100" ref={Banner}>
            <Flex
                borderBottom="1px"
                borderColor="neutrals.500"
                h="80px"
                as="nav"
                position="fixed"
                align="center"
                zIndex="5"
                top="0px"
                left="0px"
                width="100%"
                px="14px"
                bg={scrolledPast ? "default.light" : "primary.100"}
                ref={fixedHeader}
                transition="0.4s ease-in"
            >
                <Center w="200px" pb="20px">
                    <Icon
                        viewBox="0 0 500 500"
                        width={{ xs: "40", md: "60" }}
                        height={{ xs: "40", md: "60" }}
                        mb={{ sm: "0.5rem", md: "1rem" }}
                        ml={{ sm: "0.4rem", md: "1rem" }}
                    >
                        <text
                            style={{
                                fill: "rgb(51, 51, 51)",
                                fontFamily: "Bigshot One",
                                fontSize: "99px",
                                fontWeight: "700",
                                stroke: `${
                                    scrolledPast ? "#2a7c6f" : "#f7e8d3"
                                }`,
                                whiteSpace: "pre",
                                transition: "0.4s ease-in",
                            }}
                            x="81.556"
                            y="168.444"
                            dx="-26.349 -16.939 -15.056 -27.604 -20.075 -18.194"
                            dy="156.212 -0.628 0 -0.628 -1.255"
                        >
                            WEBLOG
                        </text>
                    </Icon>
                </Center>
                <Flex
                    flex="1"
                    justify="flex-end"
                    align="center"
                    pr={{ xs: "15px", sm: "30px", md: "50px" }}
                >
                    <HStack>
                        <Hide below="sm">
                            <NextLink
                                href="#"
                                style={{ border: "none" }}
                                passHref
                            >
                                <Link
                                    _hover={{
                                        textDecor: "none",
                                        border: "none",
                                    }}
                                    _focus={{
                                        border: "none",
                                    }}
                                    mr={{
                                        xs: "0.3rem",
                                        sm: "1rem",
                                    }}
                                    fontSize={{
                                        base: "10px",
                                        xs: "xs",
                                        sm: "sm",
                                    }}
                                >
                                    Sign In
                                </Link>
                            </NextLink>
                        </Hide>

                        <NextLink href="#" style={{ border: "none" }} passHref>
                            <Link
                                fontSize={{
                                    base: "10px",
                                    xs: "sm",
                                }}
                                bg={
                                    scrolledPast
                                        ? "secondary.100"
                                        : "default.dark"
                                }
                                transition="background-color 0.4s ease-in"
                                borderRadius={{ base: "2xl", sm: "3xl" }}
                                color="default.light"
                                p={{
                                    base: "0.25rem 0.9rem",
                                    sm: "0.3rem 0.8rem",
                                    md: "0.5rem 1rem",
                                }}
                                _hover={{
                                    textDecor: "none",
                                    border: "none",
                                }}
                                _focus={{
                                    border: "none",
                                }}
                            >
                                Get Started
                            </Link>
                        </NextLink>
                    </HStack>
                </Flex>
            </Flex>
            <Flex
                h="100%"
                align="center"
                // flexDirection={{ md: "column", lg: "row" }}
                justify="space-between"
                position="relative"
                backgroundColor="primary.100"
            >
                <Box flex="1" textAlign="center">
                    <Heading>Welcome to WEBLOG</Heading>
                </Box>

                <Hide below="md">
                    <Image
                        mt="4.5rem"
                        // borderRadius="full"
                        height="430px"
                        width="600px"
                        src="/images/usplasharch.jpg"
                        alt="Architecture"
                        flex="1"
                    />
                    <Box
                        position="absolute"
                        top="0"
                        right="0"
                        width="50%"
                        backgroundColor="rgb(247, 232, 211,0.1)"
                        bottom="0"
                    ></Box>
                </Hide>
            </Flex>
        </Box>
    );
};

export default navBanner;
