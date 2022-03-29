import React, { useState } from "react";
import Image from "next/image";
import {
    Text,
    Grid,
    GridItem,
    Box,
    Tag,
    TagLabel,
    Heading,
    Icon,
    Avatar,
    Center,
    Link,
    Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

const blogPostCard = ({ name, title, text, date, bookmark }) => {
    return (
        <Box py="2rem" borderBottom="1px" borderColor="neutrals.300">
            <Grid templateColumns="repeat(4,1fr)" gap={4}>
                <GridItem colSpan="3">
                    <Flex align="center">
                        <NextLink href="/Peter" passHref>
                            {/* <Link display="inline"> */}
                            <Avatar size="xs" cursor="pointer" />
                            {/* </Link> */}
                        </NextLink>
                        <NextLink href="/Peter" passHref>
                            {/* <Link display="inline"> */}
                            <Text
                                as="span"
                                fontSize="0.7rem"
                                fontWeight="600"
                                mx="0.6rem"
                                noOfLines={1}
                                cursor="pointer"
                            >
                                {name}
                            </Text>
                            {/* </Link> */}
                        </NextLink>
                        <Text
                            fontSize="xs"
                            color="neutrals.600"
                            fontWeight="600"
                        >
                            {date}
                        </Text>
                    </Flex>
                    <Box>
                        <Heading
                            fontSize={{ lg: "xl", md: "lg", base: "sm" }}
                            as="h3"
                            lineHeight="25px"
                            fontWeight="900"
                            mt="0.95rem"
                            mb="0.5rem"
                            noOfLines={2}
                            fontFamily="Sora"
                        >
                            {title}
                        </Heading>
                    </Box>
                    <Box display={{ md: "block", base: "none" }}>
                        <Text
                            fontSize="0.91rem"
                            fontWeight="normal"
                            color="neutrals.900"
                            noOfLines={2}
                        >
                            {text}
                        </Text>
                    </Box>
                    <Flex align="center" justify="space-between" mt="0.9rem">
                        <Flex align="center">
                            <Tag>
                                <TagLabel>Politics</TagLabel>
                            </Tag>
                            <Text
                                as="span"
                                fontSize="xs"
                                color="neutrals.600"
                                fontWeight="600"
                                pl="2rem"
                            >
                                8 min read
                            </Text>
                        </Flex>

                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        ></svg>

                        <Icon
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            cursor="pointer"
                        >
                            {bookmark ? (
                                <path
                                    d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z"
                                    fill="#000"
                                ></path>
                            ) : (
                                <path
                                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                    fill="#292929"
                                ></path>
                            )}
                        </Icon>
                    </Flex>
                </GridItem>
                <GridItem
                    colSpan="1"
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    <Box width="80%">
                        <Image
                            src={
                                "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop"
                            }
                            layout="responsive"
                            width={100}
                            height={80}
                        />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default blogPostCard;
