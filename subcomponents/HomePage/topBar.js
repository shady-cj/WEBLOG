import { Box, Flex, Icon, HStack } from "@chakra-ui/react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import NextLink from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
const topBar = ({ page }) => {
    return (
        <Flex
            position="fixed"
            top="0"
            width="100vw"
            height="55px"
            bg="white"
            justify="space-between"
            boxShadow="0 2px 7px rgba(0,0,0,0.09)"
            zIndex={10}
        >
            <Box maxW="7rem">
                <NextLink href="/" passHref>
                    <Icon
                        viewBox="0 0 500 500"
                        width="100%"
                        height="100%"
                        mb="2rem"
                        ml="1rem"
                    >
                        <text
                            style={{
                                fill: "rgb(51, 51, 51)",
                                fontFamily: "Bigshot One",
                                fontSize: "320px",
                                fontWeight: "700",
                                stroke: "#2a7c6f",
                                whiteSpace: "pre",
                                transition: "0.4s ease-in",
                                cursor: "pointer",
                            }}
                            x="50.556"
                            y="170.444"
                            dx="-26.349 -16.939 -15.056 -27.604 -20.075 -18.194"
                            dy="166.212 -0.628 0 -0.628 -1.255"
                        >
                            WB
                        </text>
                    </Icon>
                </NextLink>
            </Box>
            <Box>
                <HStack height="100%" spacing={8} pr="2rem">
                    <Icon
                        color={page == "search" ? "black" : "neutrals.800"}
                        boxSize="0.5em"
                        as={RiSearchLine}
                        focusable
                        cursor="pointer"
                    />
                    <NextLink href="notifications" passHref>
                        <Icon
                            color="neutrals.900"
                            boxSize="0.5em"
                            as={
                                page == "notification"
                                    ? IoNotificationsSharp
                                    : IoNotificationsOutline
                            }
                            focusable
                            cursor="pointer"
                        />
                    </NextLink>
                </HStack>
            </Box>
        </Flex>
    );
};

export default topBar;
