import { Box, Flex, Icon, Avatar } from "@chakra-ui/react";
import React from "react";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { MdOutlineTopic, MdTopic } from "react-icons/md";
import NextLink from "next/link";
const bottomBar = ({ page }) => {
    return (
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
                cursor="pointer"
            />
        </Flex>
    );
};

export default bottomBar;
