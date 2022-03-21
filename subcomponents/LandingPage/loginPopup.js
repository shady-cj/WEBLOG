import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import AuthForm from "./authForm";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const popup = {
    hidden: {
        scale: 0,
    },
    visible: { scale: 1 },
};
const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};
const loginPopup = ({ setPopupOpen }) => {
    return (
        <MotionFlex
            position="fixed"
            top="0"
            bg="rgb(252, 252, 252,0.9)"
            width="100vw"
            zIndex="20"
            height="100vh"
            justify="center"
            align="center"
            overflowY="scroll"
            transition="0.4s ease-in"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <MotionBox
                w="50%"
                height="100%"
                bg="default.light"
                boxShadow="-1px 1px 8px 2px rgba(0,0,0,0.2)"
                borderRadius="md"
                position="relative"
                variants={popup}
                boxSizing="border-box"
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.3,
                }}
            >
                <CloseIcon
                    boxSize="0.28em"
                    position="absolute"
                    right="5%"
                    top="5%"
                    color="neutrals.700"
                    cursor="pointer"
                    onClick={() => setPopupOpen(false)}
                />
                <Center h="100%" p="50px 10px">
                    <VStack>
                        <Heading as="h3" mb="4rem">
                            Welcome Back
                        </Heading>
                        <Box>
                            <AuthForm />
                        </Box>
                    </VStack>
                </Center>
            </MotionBox>
        </MotionFlex>
    );
};

export default loginPopup;
