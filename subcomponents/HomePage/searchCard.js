import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const searchCard = () => {
    return (
        <Box>
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
        </Box>
    );
};

export default searchCard;
