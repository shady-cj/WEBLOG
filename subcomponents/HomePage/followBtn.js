import React from "react";
import { Button } from "@chakra-ui/react";

const followBtn = ({ following }) => {
    return (
        <Button
            borderRadius="full"
            size="sm"
            fontSize="xs"
            color={following ? "secondary.100" : "white"}
            _focus={{
                outline: "none",
                boxShadow: "none",
            }}
            _active={{
                background: following ? "white" : "secondary.100",
            }}
            _hover={{
                background: following ? "#2a7c6f1a" : "secondary.300",
            }}
            fontWeight="normal"
            border={following && "1px"}
            borderColor="neutrals.300"
            background={following ? "white" : "secondary.100"}
        >
            {following ? "Following" : "Follow"}
        </Button>
    );
};

export default followBtn;
