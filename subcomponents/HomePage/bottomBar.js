import { Box, Flex, Icon, Avatar, Text, Heading, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { MdOutlineTopic, MdTopic } from "react-icons/md";
import ExtrasPopup from "./extrasPopup";
import { useRouter } from "next/router";
import { toggle_popup } from "../../redux/actions/popup";
import { useSelector, useDispatch } from "react-redux";
const bottomBar = ({ page }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const popUp = useSelector((state) => state.popup.state);

    const router = useRouter();
    useEffect(() => {
        const openPopup = (e) => {
            if (
                !e.target.closest(".user-popup-mobile") &&
                !e.target.closest(".avatar-btn")
            ) {
                dispatch(toggle_popup(false));
            }
        };

        window.addEventListener("click", openPopup);
        return () => {
            window.removeEventListener("click", openPopup);
        };
    }, []);
    useEffect(() => {
        const bodyEl = document.querySelector("body");
        bodyEl.classList.toggle("popup-open", popUp);
    }, [popUp]);

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
                <Icon
                    // fontWeight="100"
                    color="neutrals.900"
                    boxSize="0.55em"
                    focusable
                    as={page == "home" ? HiHome : HiOutlineHome}
                    cursor="pointer"
                    onClick={() => router.push("/")}
                />

                <Icon
                    color="neutrals.900"
                    focusable
                    boxSize="0.48em"
                    cursor="pointer"
                    as={page == "bookmark" ? BsBookmarksFill : BsBookmarks}
                    onClick={() => router.push("/bookmarks")}
                />

                <Icon
                    color="neutrals.900"
                    boxSize="0.5em"
                    as={page == "topic" ? MdTopic : MdOutlineTopic}
                    focusable
                    cursor="pointer"
                    onClick={() => router.push("/topics")}
                />

                <Avatar
                    size="sm"
                    name={user && user.user.last_name}
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    className="avatar-btn"
                    cursor="pointer"
                    src={user && user.profile_picture}
                    onClick={() => dispatch(toggle_popup(!popUp))}
                />
            </Flex>
            <Box
                position="fixed"
                left="0"
                display={popUp ? "flex" : "none"}
                top="0"
                width="100vw"
                height="100vh"
                background="white"
                zIndex={9}
                className="user-popup-mobile"
                flexDir="column"
                p="5.2rem 1rem"
                overflowY="scroll"
            >
                <ExtrasPopup viewport="mobile" />
            </Box>
        </>
    );
};

export default bottomBar;
