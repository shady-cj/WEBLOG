import React from "react";
import { Text, GridItem, Avatar, Box, Flex } from "@chakra-ui/react";

const trendingPostCard = ({ name, title, date }) => {
    return (
        <GridItem w="100%">
            <Box>
                <Flex align="center" mb="0.4rem">
                    <Avatar size="xs" />
                    <Text
                        as="span"
                        fontSize="sm"
                        fontWeight="normal"
                        ml="0.6rem"
                    >
                        {name}
                    </Text>
                </Flex>
                <Box>
                    <Text fontSize="md" fontWeight="semibold">
                        {title}
                    </Text>
                </Box>
                <Box>
                    <Text fontSize="xs" color="neutrals.700">
                        {date}
                    </Text>
                </Box>
            </Box>
        </GridItem>
    );
};

export default trendingPostCard;
