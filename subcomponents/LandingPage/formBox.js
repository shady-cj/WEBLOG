import React, { useState } from "react";
import {
    VStack,
    Text,
    Icon,
    Input,
    Box,
    InputGroup,
    InputRightElement,
    // Button,
} from "@chakra-ui/react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const formBox = ({ infoName, type, name, fieldData, handleChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Box as="section" minWidth="100%">
            <VStack>
                <Text
                    fontSize="md"
                    fontWeight="600"
                    mb="4rem"
                    color="neutrals.800"
                >
                    Enter Your {infoName}
                </Text>

                <InputGroup w="82%">
                    <Input
                        border="none"
                        borderBottom="1px"
                        borderColor="neutrals.600"
                        borderRadius="0"
                        placeholder={infoName}
                        type={
                            type === "password"
                                ? `${showPassword ? "text" : type}`
                                : type
                        }
                        name={name}
                        value={fieldData[name]}
                        onChange={handleChange}
                        w="100%"
                        _focus={{ outline: "none" }}
                        textAlign="center"
                    />
                    {name === "password" && (
                        <InputRightElement>
                            <Icon
                                as={
                                    showPassword
                                        ? AiFillEyeInvisible
                                        : AiFillEye
                                }
                                cursor="pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </InputRightElement>
                    )}
                </InputGroup>
            </VStack>
        </Box>
    );
};

export default formBox;
