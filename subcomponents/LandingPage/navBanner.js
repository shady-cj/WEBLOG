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
    Box,
    Flex,
    Center,
    HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useDispatch } from "react-redux";
import { change_auth } from "../../redux/actions/auth";
import { toggle_popup } from "../../redux/actions/popup";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

const MotionText = motion(Box);
const appearIn = {
    visible: {
        opacity: 1,
        transform: "scale(1)",
        transition: { delay: 0.8 },
    },
    hidden: { opacity: 0, transform: "scale(0)" },
};

const navBanner = () => {
    const fixedHeader = useRef(null);
    const Banner = useRef(null);
    const [scrolledPast, setScrolledPast] = useState(false);

    const dispatch = useDispatch();

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
                overflow="hidden"
                bg={scrolledPast ? "default.light" : "primary.100"}
                ref={fixedHeader}
                transition="background-color 0.4s ease-in"
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
                                    scrolledPast ? "#2a7c6f" : "#c6baa9"
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
                            <Link
                                _hover={{
                                    textDecor: "none",
                                    border: "none",
                                }}
                                _focus={{
                                    border: "none",
                                }}
                                _active={{
                                    color: "black",
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(toggle_popup(true));
                                    dispatch(change_auth("login"));
                                }}
                            >
                                Sign In
                            </Link>
                        </Hide>

                        <Link
                            fontSize={{
                                base: "10px",
                                xs: "sm",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(toggle_popup(true));
                                dispatch(change_auth("register"));
                            }}
                            bg={scrolledPast ? "secondary.100" : "default.dark"}
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
                            _active={{
                                color: "default.light",
                            }}
                        >
                            Get Started
                        </Link>
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
                overflow="hidden"
            >
                <MotionText
                    variants={appearIn}
                    initial="hidden"
                    animate="visible"
                    flex="1"
                    px="2rem"
                    pt="4rem"
                >
                    <Heading
                        mb="1rem"
                        as="h1"
                        fontWeight="normal"
                        color="neutrals.900"
                        fontFamily="Dela Gothic One"
                        fontSize="3.5rem"
                    >
                        World Blog
                    </Heading>

                    <Text
                        fontSize="1.8rem"
                        color="neutrals.800"
                        fontFamily="Cormorant SC"
                        mb="1rem"
                    >
                        Discover new experience while Reading, Writing.
                    </Text>
                    <Button
                        background="default.dark"
                        color="default.light"
                        p="1.5rem 2.5rem"
                        borderRadius="full"
                        fontFamily="Montserrat"
                        _hover={{
                            background: "default.dark",
                        }}
                        _active={{
                            background: "default.dark",
                            opacity: "0.9",
                        }}
                        _focus={{
                            border: "none",
                        }}
                        onClick={(e) => {
                            dispatch(toggle_popup(true));
                            dispatch(change_auth("register"));
                        }}
                    >
                        Start Blogging
                    </Button>
                </MotionText>

                <Hide below="md">
                    <Image
                        mt="4.5rem"
                        // borderRadius="full"
                        height="437px"
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
