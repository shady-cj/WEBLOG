import React from "react";
import { Button } from "@chakra-ui/react";

const PrimaryBtn = ({ displayName, primary, handleModalChange }) => {
    return (
        <Button
            size="md"
            bg={primary ? "secondary.100" : "white"}
            fontSize="0.8rem"
            fontWeight="400"
            borderRadius="full"
            border={primary ? "" : "1px"}
            borderColor={primary ? "" : "secondary.100"}
            color={primary ? "white" : "secondary.100"}
            _focus={{
                outline: "none",
            }}
            _active={{
                background: primary ? "secondary.100" : "white",
                color: primary ? "white" : "secondary.100",
            }}
            _hover={{
                background: !primary ? "#2a7c6f1a" : "secondary.300",
            }}
            onClick={() => handleModalChange && handleModalChange(false)}
        >
            {displayName}
        </Button>
    );
};

export default PrimaryBtn;
