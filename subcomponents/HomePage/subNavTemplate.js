import React from "react";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const subNavTemplate = ({ navs, active }) => {
    const router = useRouter();
    return (
        <Box mt="0.5rem" borderBottom="1px" borderColor="neutrals.300">
            {navs.map((nav, index) => {
                const { title, type, link } = nav;
                return (
                    <Text
                        fontSize="sm"
                        key={index}
                        pb="0.8rem"
                        as="span"
                        ml={index !== 0 && "4rem"}
                        display={
                            nav.hidden
                                ? { base: "none", md: "inline-block" }
                                : "inline-block"
                        }
                        onClick={() => router.push(link)}
                        mt="1px"
                        cursor="pointer"
                        fontWeight={type === active ? "semibold" : "normal"}
                        color={type == active ? "neutrals.900" : "neutrals.500"}
                        borderBottom={type === active && "2px"}
                        borderColor={type === active && "neutrals.800"}
                    >
                        {title}
                    </Text>
                );
            })}
        </Box>
    );
};

export default subNavTemplate;
