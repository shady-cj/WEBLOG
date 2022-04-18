import React, { useEffect } from "react";
import {
    Flex,
    Box,
    Avatar,
    Icon,
    FormLabel,
    Input,
    HStack,
} from "@chakra-ui/react";
import PrimaryBtn from "./primaryBtn";
import { AiOutlineCamera } from "react-icons/ai";

const ProfileModal = React.forwardRef(
    ({ url, name, handleModalChange, readURL }, ref) => {
        return (
            <Flex
                position="fixed"
                top="0"
                left="0"
                zIndex="20"
                w="100vw"
                h="100vh"
                align="center"
                justify="center"
                bg="rgba(0, 0, 0,0.75)"
            >
                <Flex
                    pt={{ base: "6rem", md: "4rem" }}
                    justify="flex-start"
                    align="center"
                    bg="white"
                    w={{ base: "100%", md: "60%" }}
                    h={{ base: "100%", md: "70%" }}
                    direction="column"
                >
                    <Box position="relative" width="150px" height="150px">
                        <Avatar
                            src={url}
                            name={name}
                            w="150px"
                            h="150px"
                            fontSize="10rem"
                            opacity="0.6"
                        />
                        <FormLabel
                            htmlFor="prof_pic"
                            display="inline-block"
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%,-50%)"
                        >
                            <Icon
                                as={AiOutlineCamera}
                                fontSize="1.8rem"
                                fontWeight="300"
                                cursor="pointer"
                                color="neutrals.900"
                            />
                        </FormLabel>
                        <Input
                            id="prof_pic"
                            type="file"
                            display="none"
                            accept="image/*"
                            ref={ref}
                            onChange={(e) => readURL(this)}
                        />
                    </Box>
                    <HStack spacing="2rem" mt="3rem">
                        <PrimaryBtn
                            primary={false}
                            displayName={"Cancel"}
                            handleModalChange={handleModalChange}
                        />
                        <PrimaryBtn
                            primary={true}
                            displayName={"Save Changes"}
                            handleModalChange={handleModalChange}
                        />
                    </HStack>
                </Flex>
            </Flex>
        );
    }
);

export default ProfileModal;
