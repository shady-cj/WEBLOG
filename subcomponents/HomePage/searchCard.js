import React, { useEffect, useState } from "react";
import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
    Avatar,
    Grid,
    GridItem,
    Flex,
    Text,
    Button,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import FollowBtn from "./followBtn";

const searchCard = () => {
    return (
        <Box position="sticky" top="30px">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<RiSearchLine color="neutrals.300" />}
                />
                <Input
                    placeholder="Search"
                    size="md"
                    borderRadius="full"
                    _focus={{ outline: "none" }}
                />
            </InputGroup>

            <Box mt="2rem">
                <Heading fontSize="md" color="secondary.100">
                    Trending
                </Heading>
                <Flex
                    width="100%"
                    direction="column"
                    justify="center"
                    mt="1.5rem"
                >
                    {[1, 2, 3, 4, 5, 6].map((data) => {
                        return (
                            <Box key={data} mb="1.5rem">
                                <Flex align="center">
                                    <Avatar size="xs" />
                                    <Text
                                        ml="0.8rem"
                                        color="neutrals.800"
                                        as="span"
                                        fontSize="xs"
                                        fontWeight="semibold"
                                    >
                                        Benjamin Davis
                                    </Text>
                                </Flex>
                                <Box mt="0.4rem">
                                    <Text fontWeight="semibold" fontSize="md">
                                        The War in Ukraine Has Exposed America's
                                        Hypocrisy.
                                    </Text>
                                </Box>
                            </Box>
                        );
                    })}
                </Flex>
            </Box>
            <Box mt="2rem">
                <Heading color="secondary.100" fontSize="md">
                    Who to follow
                </Heading>
                <Flex direction="column" mt="1.5rem">
                    <Box>
                        {[1, 2, 3, 4].map((data, index) => (
                            <Grid
                                key={data + index}
                                templateColumns="repeat(5,1fr)"
                                gap={2}
                                mb="1rem"
                            >
                                <GridItem colSpan="1">
                                    <Avatar />
                                </GridItem>
                                <GridItem colSpan="3" pl="0.2rem">
                                    <Heading fontSize="md" mb="0.5rem">
                                        Luke Burgis
                                    </Heading>
                                    <Text
                                        as="p"
                                        noOfLines="2"
                                        fontSize="xs"
                                        fontWeight="600"
                                        fontFamily="Montserrat"
                                        color="neutrals.500"
                                    >
                                        Independent health and science
                                        journalist, former editor-in-chief of
                                        LiveScience, writing about physical
                                        health and mental wellness at every
                                        stage of life.
                                    </Text>
                                </GridItem>
                                <GridItem colSpan="1">
                                    <Flex
                                        w="100%"
                                        h="85%"
                                        align="center"
                                        justify="center"
                                    >
                                        <FollowBtn following={false} />
                                    </Flex>
                                </GridItem>
                            </Grid>
                        ))}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default searchCard;
