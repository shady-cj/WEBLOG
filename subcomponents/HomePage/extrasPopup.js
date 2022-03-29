import React from "react";
import { IoMdStats, IoMdSettings } from "react-icons/io";
import { MdGroupAdd, MdGroups } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { RiFileList2Fill, RiFileList2Line } from "react-icons/ri";

import NextLink from "next/link";

import { Box, Flex, Icon, Avatar, Text, Heading } from "@chakra-ui/react";

const extrasPopup = ({ viewport }) => {
    return (
        <>
            <Flex
                borderBottom="1px"
                pb="0.5rem"
                align="center"
                height="18%"
                width="100%"
                borderColor="neutrals.300"
            >
                <NextLink href="/peter" passHref>
                    <Avatar
                        size="md"
                        name="Erinfolami"
                        cursor="pointer"
                        fontFamily="Sora"
                        fontWeight="bold"
                    />
                </NextLink>

                <Flex direction="column" ml="1rem" pt="0.2rem">
                    <NextLink href="/peter" passHref>
                        <Heading fontSize="md" cursor="pointer">
                            Erinfolami Peter
                        </Heading>
                    </NextLink>
                    <NextLink href="/peter" passHref>
                        <Text fontSize="sm" cursor="pointer">
                            @peter
                        </Text>
                    </NextLink>
                </Flex>
            </Flex>

            <Box mt="1rem" px={{ base: "1.5rem", lg: "0" }}>
                <Flex align="center" m="2rem 0">
                    <NextLink href="/peter/followers" passHref>
                        <Icon
                            as={MdGroups}
                            boxSize="1.2rem"
                            color="neutrals.800"
                            cursor="pointer"
                        />
                    </NextLink>

                    <NextLink href="/peter/followers" passHref>
                        <Text
                            fontSize="sm"
                            fontWeight="500"
                            fontFamily="Sora"
                            ml="0.6rem"
                            cursor="pointer"
                        >
                            Followers
                        </Text>
                    </NextLink>
                    <NextLink href="/peter/followers" passHref>
                        <Text
                            fontSize="xs"
                            fontFamily="Sora"
                            cursor="pointer"
                            ml="1.3rem"
                        >
                            23k
                        </Text>
                    </NextLink>
                </Flex>
                <Flex align="center" m="2rem 0">
                    <NextLink href="/peter/following" passHref>
                        <Icon
                            as={MdGroupAdd}
                            boxSize="1.2rem"
                            color="neutrals.800"
                            cursor="pointer"
                        />
                    </NextLink>
                    <NextLink href="/peter/following" passHref>
                        <Text
                            fontSize="sm"
                            fontWeight="500"
                            fontFamily="Sora"
                            cursor="pointer"
                            ml="0.6rem"
                        >
                            Following
                        </Text>
                    </NextLink>
                    <NextLink href="/peter/following" passHref>
                        <Text
                            fontSize="xs"
                            fontFamily="Sora"
                            ml="1.3rem"
                            cursor="pointer"
                        >
                            12k
                        </Text>
                    </NextLink>
                </Flex>

                {viewport === "mobile" && (
                    <Flex
                        align="center"
                        m="2rem 0"
                        borderBottom="1px"
                        borderColor="neutrals.300"
                        pb="2rem"
                        mb="1rem"
                    >
                        <NextLink href="/story/drafts" passHref>
                            <Icon
                                as={RiFileList2Line}
                                boxSize="1.2rem"
                                color="neutrals.800"
                                cursor="pointer"
                            />
                        </NextLink>
                        <NextLink href="/story/drafts" passHref>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                fontFamily="Sora"
                                ml="0.6rem"
                                cursor="pointer"
                            >
                                Your Stories
                            </Text>
                        </NextLink>
                    </Flex>
                )}

                <Flex align="center" m="2rem 0">
                    <Icon
                        as={IoMdStats}
                        boxSize="1.2rem"
                        color="neutrals.800"
                        cursor="pointer"
                    />
                    <Text
                        fontSize="sm"
                        fontWeight="500"
                        fontFamily="Sora"
                        ml="0.6rem"
                        cursor="pointer"
                    >
                        Stats
                    </Text>
                </Flex>
                <Flex align="center" m="2rem 0">
                    <Icon
                        as={IoMdSettings}
                        boxSize="1.2rem"
                        color="neutrals.800"
                        cursor="pointer"
                    />
                    <Text
                        fontSize="sm"
                        fontWeight="500"
                        fontFamily="Sora"
                        ml="0.6rem"
                        cursor="pointer"
                    >
                        Settings
                    </Text>
                </Flex>
                <Flex align="center" m="2rem 0">
                    <Icon
                        as={BiLogOutCircle}
                        boxSize="1.25rem"
                        color="neutrals.800"
                        cursor="pointer"
                    />
                    <Text
                        fontSize="sm"
                        fontWeight="500"
                        fontFamily="Sora"
                        ml="0.6rem"
                        cursor="pointer"
                    >
                        Sign Out
                    </Text>
                </Flex>
            </Box>
        </>
    );
};

export default extrasPopup;
