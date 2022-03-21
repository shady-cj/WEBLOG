import React from "react";
import { VStack, Text, Input, Box } from "@chakra-ui/react";

const formBox = ({ infoName, type, active }) => {
    return (
        <Box
            as="section"
            w="500px"
            border="3px solid black"
            // transform={active ? "translateX(0)" : "translateX(100%)"}
            transition="transform 0.4s ease-in"
            transitionDelay={0.4}
        >
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
                    _focus={{ outline: "none" }}
                    textAlign="center"
                />
            </VStack>
        </Box>
    );
};

export default formBox;
