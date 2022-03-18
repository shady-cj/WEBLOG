import React from "react";
import NextLink from "next/link";
import {
    Heading,
    Text,
    Button,
    Link,
    Grid,
    GridItem,
    Container,
    Icon,
    Avatar,
    Flex,
    Tag,
    Box,
    TagLabel,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";

const discoverMore = () => {
    const tags = [
        "Technology",
        "Education",
        "Politics",
        "Programming",
        "Sports",
        "Food",
        "Health",
        "LifeStyle",
    ];
    return (
        <Box>
            <Heading
                fontSize="md"
                textTransform="uppercase"
                fontWeight="semibold"
                mb="2rem"
                fontFamily="Dangrek"
                color="neutrals.800"
            >
                Discover more of what matters to you
            </Heading>
            <Wrap>
                {tags.map((entry, index) => (
                    <WrapItem key={index}>
                        <NextLink href="#" passHref>
                            <Tag
                                variant="outline"
                                colorScheme="blackAlpha"
                                size="lg"
                                p="0.4rem 1rem"
                                cursor="pointer"
                                borderRadius="sm"
                            >
                                <TagLabel>{entry}</TagLabel>
                            </Tag>
                        </NextLink>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default discoverMore;
