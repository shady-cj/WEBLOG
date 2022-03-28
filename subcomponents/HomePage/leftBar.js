import { Flex, VStack, Box, Icon, Avatar, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { RiFileList2Fill, RiFileList2Line } from "react-icons/ri";
import { MdOutlineTopic, MdTopic } from "react-icons/md";

import { FiEdit } from "react-icons/fi";

const leftBar = ({ page }) => {
    const [openUserInfo, setOpenUserInfo] = useState(false);
    useEffect(() => {
        const openPopup = (e) => {
            if (!e.target.closest(".user-popup")) {
                setOpenUserInfo(false);
            }
        };
        window.addEventListener("click", openPopup);
        return () => {
            window.removeEventListener("click", openPopup);
        };
    }, []);
    return (
        <Flex
            height="100vh"
            position="fixed"
            left="0"
            top="0"
            bg="white"
            borderRight="1px"
            borderColor="neutrals.300"
            width="90px"
            direction="column"
            zIndex="11"
        >
            <Box flex="1">
                <NextLink href="/" passHref>
                    <Icon
                        viewBox="0 0 500 500"
                        width={{ xs: "40", md: "100%" }}
                        height="20"
                    >
                        <text
                            style={{
                                fill: "rgb(51, 51, 51)",
                                fontFamily: "Bigshot One",
                                fontSize: "170px",
                                fontWeight: "700",
                                stroke: "#2a7c6f",
                                whiteSpace: "pre",
                                transition: "0.4s ease-in",
                                cursor: "pointer",
                            }}
                            x="140.556"
                            y="230.444"
                            dx="-26.349 -16.939 -15.056 -27.604 -20.075 -18.194"
                            dy="156.212 -0.628 0 -0.628 -1.255"
                        >
                            WB
                        </text>
                    </Icon>
                </NextLink>
            </Box>
            <VStack flex="2" width="100%" spacing={8}>
                {/* <Tooltip hasArrow label="Home" placement="right"> */}
                <NextLink href="/" passHref>
                    <Icon
                        color="neutrals.900"
                        boxSize="0.55em"
                        focusable
                        as={page === "home" ? HiHome : HiOutlineHome}
                        cursor="pointer"
                        _hover={{ color: "black" }}
                    />
                </NextLink>

                {/* </Tooltip> */}
                {/* <Tooltip hasArrow label="Notifications" placement="right"> */}
                <NextLink href="notifications" passHref>
                    <Icon
                        color="neutrals.900"
                        boxSize="0.55em"
                        as={
                            page === "notification"
                                ? IoNotificationsSharp
                                : IoNotificationsOutline
                        }
                        focusable
                        cursor="pointer"
                        _hover={{ color: "black" }}
                    />
                </NextLink>

                {/* </Tooltip> */}
                {/* <Tooltip hasArrow label="Bookmarks" placement="right"> */}
                <NextLink href="/bookmarks" passHref>
                    <Icon
                        color="neutrals.900"
                        focusable
                        boxSize="0.45em"
                        as={page === "bookmark" ? BsBookmarksFill : BsBookmarks}
                        cursor="pointer"
                        _hover={{ color: "black" }}
                    />
                </NextLink>

                {/* </Tooltip> */}

                {/* <Tooltip hasArrow label="Topics" placement="right"> */}
                <NextLink href="/topics" passHref>
                    <Icon
                        color="neutrals.900"
                        boxSize="0.45em"
                        as={page === "topic" ? MdTopic : MdOutlineTopic}
                        focusable
                        cursor="pointer"
                        _hover={{ color: "black" }}
                    />
                </NextLink>

                {/* </Tooltip> */}

                {/* <Tooltip hasArrow label="Topics" placement="right"> */}
                <NextLink href="/story/drafts" passHref>
                    <Icon
                        aria-label="stories"
                        color="neutrals.900"
                        boxSize="0.45em"
                        as={
                            page === "story" ? RiFileList2Fill : RiFileList2Line
                        }
                        focusable
                        cursor="pointer"
                        _hover={{ color: "black" }}
                    />
                </NextLink>

                {/* </Tooltip> */}
            </VStack>
            <Box
                flex="1"
                display="flex"
                flexDirection="column"
                pb="1.5rem"
                justifyContent="space-between"
                alignItems="center"
            >
                {/* <Tooltip hasArrow label="Write Article" placement="right"> */}
                <Icon
                    color="neutrals.900"
                    borderTop="1px"
                    pt="2rem"
                    fontSize="3.5rem"
                    borderColor="neutrals.200"
                    as={FiEdit}
                    focusable
                    cursor="pointer"
                    _hover={{ color: "black" }}
                />
                {/* </Tooltip> */}
                <Box
                    display="flex"
                    alignItems="center"
                    as="span"
                    position="relative"
                    className="user-popup"
                >
                    <Avatar
                        size="sm"
                        name="Erinfolami"
                        fontFamily="Montserrat"
                        fontWeight="bold"
                        cursor="pointer"
                        onClick={() => setOpenUserInfo(!openUserInfo)}
                    />
                    <Box
                        position="absolute"
                        bottom="170%"
                        left="-70%"
                        height={{ base: "100vh", lg: "500px" }}
                        width={{ base: "100vh", lg: "300px" }}
                        zIndex="14"
                        borderRadius="sm"
                        boxShadow="0px 0px 5px -1px rgba(0,0,0,0.2)"
                        bg="white"
                        display={openUserInfo ? "block" : "none"}
                    >
                        <Box
                            sx={{
                                content: `""`,
                                height: "30px",
                                width: "22px",
                                overflow: "hidden",
                                position: "absolute",
                                top: "100%",
                                left: "20%",

                                marginLeft: "-32px",
                            }}
                            _before={{
                                content: `""`,
                                height: "15px",
                                width: "15px",
                                background: "white",
                                transform:
                                    "translateY(-90%) translateX(80%) rotate(45deg)",
                                position: "absolute",
                                top: "20%",
                                left: "110%",
                                zIndex: "-1",
                                boxShadow: "0px 0px 5px -1px rgba(0,0,0,0.2)",
                                marginLeft: "-32px",
                            }}
                        ></Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default leftBar;
