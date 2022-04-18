import { Box, Flex, Icon, HStack, Center } from "@chakra-ui/react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
const topBar = ({ page, editPage }) => {
    const router = useRouter();
    return (
        <Flex
            position="fixed"
            top="0"
            width="100vw"
            height={editPage ? "65px" : "55px"}
            bg="white"
            justify="space-between"
            boxShadow="0 2px 7px rgba(0,0,0,0.09)"
            zIndex={10}
            px={editPage ? { base: "0rem", md: "4rem", lg: "8rem" } : ""}
        >
            <Box maxW="7rem">
                {editPage ? (
                    <Center w="200px" h="100%" pb="20px">
                        <Icon
                            viewBox="0 0 500 500"
                            width={{ xs: "40", md: "60" }}
                            height={{ xs: "40", md: "60" }}
                            mb={{ sm: "0.5rem", md: "1rem" }}
                            ml={{ sm: "0.4rem", md: "1rem" }}
                            onClick={() => router.push("/")}
                            cursor="pointer"
                        >
                            <text
                                style={{
                                    fill: "rgb(51, 51, 51)",
                                    fontFamily: "Bigshot One",
                                    fontSize: "99px",
                                    fontWeight: "700",
                                    stroke: "#2a7c6f",
                                    whiteSpace: "pre",
                                    transition: "0.4s ease-in",
                                }}
                                x="50.556"
                                y="168.444"
                                dx="-26.349 -16.939 -15.056 -27.604 -20.075 -18.194"
                                dy="156.212 -0.628 0 -0.628 -1.255"
                            >
                                WEBLOG
                            </text>
                        </Icon>
                    </Center>
                ) : (
                    <Icon
                        viewBox="0 0 500 500"
                        width="100%"
                        height="100%"
                        mb="2rem"
                        ml="1rem"
                        onClick={() => router.push("/")}
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
                )}
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
                        onClick={() => router.push("/notifications")}
                    />
                </HStack>
            </Box>
        </Flex>
    );
};

export default topBar;
