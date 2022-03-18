import React from "react";
import Image from "next/image";
import { Heading, Text, Button, Link } from "@chakra-ui/react";
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
                    <Image
                        src="/images/logo.svg"
                        height={150}
                        width={150}
                        alt="logo"
                    />
                </Center>
                <Flex flex="1" justify="flex-end" align="center" pr="30px">
                    <HStack>
                        <NextLink href="#" style={{ border: "none" }} passHref>
                            <Link
                                fontSize="md"
                                _hover={{
                                    textDecor: "none",
                                    border: "none",
                                }}
                                _focus={{
                                    border: "none",
                                }}
                                mr="1rem"
                            >
                                Sign In
                            </Link>
                        </NextLink>
                        <NextLink href="#" style={{ border: "none" }} passHref>
                            <Link
                                fontSize="md"
                                bg={
                                    scrolledPast
                                        ? "secondary.100"
                                        : "default.dark"
                                }
                                transition="0.4s ease-in"
                                borderRadius="3xl"
                                color="default.light"
                                p="0.5rem 01rem"
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
        </Box>
    );
};

export default navBanner;
