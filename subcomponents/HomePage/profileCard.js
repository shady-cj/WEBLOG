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
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const profileCard = () => {
    const user = useSelector((state) => state.auth.user);
    const router = useRouter();
    return (
        <Box position="sticky" top="10px">
            <Center width="100%">
                <Box w="200px" h="200px">
                    <Avatar
                        name={user && user.user.last_name}
                        src={user && user.profile_picture}
                        size="full"
                        fontSize="14rem"
                    />
                </Box>
            </Center>
            <Box
                p="2rem"
                pb="1rem"
                borderBottom="1px"
                borderColor="neutrals.300"
            >
                <Flex direction="column">
                    <Heading fontSize="lg">
                        {user &&
                            user.user.last_name + " " + user.user.first_name}
                    </Heading>
                    <Text mt="0.4rem" fontSize="md" color="neutrals.700">
                        @{user && user.user.username}
                    </Text>
                    <Text
                        mt="1rem"
                        fontSize="xs"
                        noOfLines={3}
                        color="neutrals.500"
                    >
                        {user && user.about}
                    </Text>
                </Flex>
            </Box>
            <Box px="0.2rem" py="1rem">
                <Flex direction="column" width="100%">
                    <Heading fontSize="lg" mb="1rem">
                        Stories
                    </Heading>

                    <Flex justify="space-between" w="80%" mb="0.4rem">
                        <Text
                            fontSize="sm"
                            cursor="pointer"
                            onClick={() => router.push("/story/drafts")}
                        >
                            Drafts
                        </Text>

                        <Text fontSize="sm" ml="1rem">
                            {user && user.articles.drafts}
                        </Text>
                    </Flex>
                    <Flex justify="space-between" w="80%" mb="0.4rem">
                        <Text
                            fontSize="sm"
                            cursor="pointer"
                            onClick={() => router.push("/story/published")}
                        >
                            Published
                        </Text>

                        <Text fontSize="sm" ml="1rem">
                            {user && user.articles.published}
                        </Text>
                    </Flex>
                    <Flex justify="space-between" w="80%">
                        <Text
                            fontSize="sm"
                            cursor="pointer"
                            onClick={() => router.push("/story/drafts")}
                        >
                            Trash
                        </Text>

                        <Text fontSize="sm" ml="1rem">
                            {user && user.articles.trashed}
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
