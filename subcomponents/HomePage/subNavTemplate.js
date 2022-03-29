import React from "react";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const subNavTemplate = ({ navs, active }) => {
    return (
        <Box mt="0.5rem" borderBottom="1px" borderColor="neutrals.300">
            {navs.map((nav, index) => {
                const { title, type, link } = nav;
                return (
                    <NextLink key={index} href={link} passHref>
                        <Text
                            fontSize="sm"
                            pb="0.8rem"
                            as="span"
                            ml={index !== 0 && "4rem"}
                            display={
                                nav.hidden
                                    ? { base: "none", md: "inline-block" }
                                    : "inline-block"
                            }
                            mt="1px"
                            cursor="pointer"
                            fontWeight={type === active ? "semibold" : "normal"}
                            color={
                                type == active ? "neutrals.900" : "neutrals.500"
                            }
                            borderBottom={type === active && "2px"}
                            borderColor={type === active && "neutrals.800"}
                        >
                            {title}
                        </Text>
                    </NextLink>
                );
            })}
        </Box>
    );
};

export default subNavTemplate;
