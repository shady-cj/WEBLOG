import React from "react";
import { VStack, Text, Input, Box } from "@chakra-ui/react";

const formBox = ({ infoName, type, active }) => {
    return (
        <Box as="section" minWidth="100%">
            <VStack>
                <Text fontSize="md" mb="4rem">
                    Enter Your {infoName}
                </Text>

                <Input
                    border="none"
                    borderBottom="1px"
                    borderColor="neutrals.600"
                    borderRadius="0"
                    type={type}
                    w="82%"
                    _focus={{ outline: "none" }}
                    textAlign="center"
                />
            </VStack>
        </Box>
    );
};

export default formBox;
