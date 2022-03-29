import React from "react";
import {
    Box,
    Text,
    Flex,
    Avatar,
    Center,
    Heading,
    Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
const profileCard = () => {
    return (
        <Box position="sticky" top="10px">
            <Center width="100%">
                <Box w="200px" h="200px">
                    <Avatar name="Erinfolami" size="full" fontSize="14rem" />
                </Box>
            </Center>
            <Box
                p="2rem"
                pb="1rem"
                borderBottom="1px"
                borderColor="neutrals.300"
            >
                <Flex direction="column">
                    <Heading fontSize="lg">Erinfolami Peter</Heading>
                    <Text mt="0.4rem" fontSize="md" color="neutrals.700">
                        @Peter
                    </Text>
                    <Text
                        mt="1rem"
                        fontSize="xs"
                        noOfLines={3}
                        color="neutrals.500"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text>
                </Flex>
            </Box>
            <Box px="0.2rem" py="1rem">
                <Flex direction="column" width="100%">
                    <Heading fontSize="lg" mb="1rem">
                        Stories
                    </Heading>

                    <Flex justify="space-between" w="80%" mb="0.4rem">
                        <NextLink href="/story/drafts" passHref>
                            <Text fontSize="sm" cursor="pointer">
                                Drafts
                            </Text>
                        </NextLink>
                        <Text fontSize="sm" ml="1rem">
                            4
                        </Text>
                    </Flex>
                    <Flex justify="space-between" w="80%" mb="0.4rem">
                        <NextLink href="/story/published" passHref>
                            <Text fontSize="sm" cursor="pointer">
                                Published
                            </Text>
                        </NextLink>
                        <Text fontSize="sm" ml="1rem">
                            13
                        </Text>
                    </Flex>
                    <Flex justify="space-between" w="80%">
                        <NextLink href="/story/trash" passHref>
                            <Text fontSize="sm" cursor="pointer">
                                Trash
                            </Text>
                        </NextLink>
                        <Text fontSize="sm" ml="1rem">
                            1
                        </Text>
                    </Flex>
                </Flex>
                <Center w="100%" mt="2rem">
                    <Button
                        w="80%"
                        bg="default.dark"
                        color="default.light"
                        fontWeight="500"
                        _hover={{
                            bg: "#353434",
                        }}
                        _active={{
                            bg: "default.dark",
                        }}
                        _focus={{
                            outline: "none",
                        }}
                    >
                        Edit Profile
                    </Button>
                </Center>
            </Box>
        </Box>
    );
};

export default profileCard;
