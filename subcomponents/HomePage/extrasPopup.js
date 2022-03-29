import React from "react";
import { IoMdStats, IoMdSettings } from "react-icons/io";
import { MdGroupAdd, MdGroups } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { RiFileList2Fill, RiFileList2Line } from "react-icons/ri";

import { useRouter } from "next/router";
import { Box, Flex, Icon, Avatar, Text, Heading } from "@chakra-ui/react";

const extrasPopup = ({ viewport }) => {
    const router = useRouter();
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
                <Avatar
                    size="md"
                    name="Erinfolami"
                    cursor="pointer"
                    fontFamily="Sora"
                    fontWeight="bold"
                    onClick={() => router.push("/peter")}
                />

                <Flex direction="column" ml="1rem" pt="0.2rem">
                    <Heading
                        fontSize="md"
                        cursor="pointer"
                        onClick={() => router.push("/peter")}
                    >
                        Erinfolami Peter
                    </Heading>

                    <Text
                        fontSize="sm"
                        cursor="pointer"
                        onClick={() => router.push("/peter")}
                    >
                        @peter
                    </Text>
                </Flex>
            </Flex>

            <Box mt="1rem" px={{ base: "1.5rem", lg: "0" }}>
                <Flex align="center" m="2rem 0">
                    <Icon
                        as={MdGroups}
                        boxSize="1.2rem"
                        color="neutrals.800"
                        cursor="pointer"
                        onClick={() => router.push("/peter/followers")}
                    />

                    <Text
                        fontSize="sm"
                        fontWeight="500"
                        fontFamily="Sora"
                        ml="0.6rem"
                        cursor="pointer"
                        onClick={() => router.push("/peter/followers")}
                    >
                        Followers
                    </Text>

                    <Text
                        fontSize="xs"
                        fontFamily="Sora"
                        cursor="pointer"
                        ml="1.3rem"
                        onClick={() => router.push("/peter/followers")}
                    >
                        23k
                    </Text>
                </Flex>
                <Flex align="center" m="2rem 0">
                    <Icon
                        as={MdGroupAdd}
                        boxSize="1.2rem"
                        color="neutrals.800"
                        cursor="pointer"
                        onClick={() => router.push("/peter/following")}
                    />

                    <Text
                        fontSize="sm"
                        fontWeight="500"
                        fontFamily="Sora"
                        cursor="pointer"
                        ml="0.6rem"
                        onClick={() => router.push("/peter/following")}
                    >
                        Following
                    </Text>

                    <Text
                        fontSize="xs"
                        fontFamily="Sora"
                        ml="1.3rem"
                        cursor="pointer"
                        onClick={() => router.push("/peter/following")}
                    >
                        12k
                    </Text>
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
                        <Icon
                            as={RiFileList2Line}
                            boxSize="1.2rem"
                            color="neutrals.800"
                            cursor="pointer"
                            onClick={() => router.push("/story/drafts")}
                        />

                        <Text
                            fontSize="sm"
                            fontWeight="500"
                            fontFamily="Sora"
                            ml="0.6rem"
                            cursor="pointer"
                            onClick={() => router.push("/story/drafts")}
                        >
                            Your Stories
                        </Text>
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
