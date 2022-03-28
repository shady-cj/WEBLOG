import { Box, Flex, Icon, Avatar } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { MdOutlineTopic, MdTopic } from "react-icons/md";
import NextLink from "next/link";
const bottomBar = ({ page }) => {
    const [openUserInfo, setOpenUserInfo] = useState(false);
    useEffect(() => {
        const openPopup = (e) => {
            if (
                !e.target.closest(".user-popup-mobile") &&
                !e.target.closest(".avatar-btn")
            ) {
                setOpenUserInfo(false);
            }
        };
        window.addEventListener("click", openPopup);
        return () => {
            window.removeEventListener("click", openPopup);
        };
    }, []);
    return (
        <>
            <Flex
                position="fixed"
                width="100vw"
                height="60px"
                bottom="0"
                bg="white"
                left="0"
                boxShadow="0 -2px 7px rgba(0,0,0,0.09)"
                align="center"
                justify="space-around"
                zIndex={10}
            >
                <NextLink href="/" passHref>
                    <Icon
                        // fontWeight="100"
                        color="neutrals.900"
                        boxSize="0.55em"
                        focusable
                        as={page == "home" ? HiHome : HiOutlineHome}
                        cursor="pointer"
                    />
                </NextLink>
                <NextLink href="/bookmarks" passHref>
                    <Icon
                        color="neutrals.900"
                        focusable
                        boxSize="0.48em"
                        cursor="pointer"
                        as={page == "bookmark" ? BsBookmarksFill : BsBookmarks}
                    />
                </NextLink>
                <NextLink href="/topics" passHref>
                    <Icon
                        color="neutrals.900"
                        boxSize="0.5em"
                        as={page == "topic" ? MdTopic : MdOutlineTopic}
                        focusable
                        cursor="pointer"
                    />
                </NextLink>
                <Avatar
                    size="sm"
                    name="Erinfolami"
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    className="avatar-btn"
                    cursor="pointer"
                    onClick={() => setOpenUserInfo(!openUserInfo)}
                />
            </Flex>
            <Box
                position="fixed"
                left="0"
                display={openUserInfo ? "flex" : "none"}
                top="0"
                width="100vw"
                height="100vh"
                background="white"
                zIndex={9}
                className="user-popup-mobile"
            ></Box>
        </>
    );
};

export default bottomBar;
