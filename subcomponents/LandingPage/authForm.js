import React, { useState, useEffect } from "react";
import FormBox from "./formBox";
import {
    Input,
    Box,
    Text,
    Center,
    VStack,
    Button,
    Flex,
} from "@chakra-ui/react";
const authForm = () => {
    const [formData, setFormData] = useState([
        {
            infoName: "Username",
            type: "text",
            active: true,
        },
        {
            infoName: "Password",
            type: "password",
            active: false,
        },
    ]);

    const [formIndex, setFormIndex] = useState(0);

    useEffect(() => {
        const updatedData = formData.map((data, index) => {
            if (formIndex === index) {
                return { ...data, active: true };
            } else {
                return { ...data, active: false };
            }
        });
        setFormData(updatedData);
        console.log("called");
    }, [formIndex]);
    return (
        <>
            <Box>
                <Box>
                    <Center flexDirection="column">
                        <Box
                            display="inline-flex"
                            flexDirection="row"
                            overflowX="hidden"
                            border="2px solid"
                            width="100%"
                        >
                            {formData.map((data, index) => {
                                return <FormBox key={index} {...data} />;
                            })}
                        </Box>
                        <Button
                            mt="4rem"
                            p="1rem 3rem"
                            _focus={{ outline: "none" }}
                            bg="secondary.100"
                            _hover={{ bg: "secondary.500" }}
                            onClick={(e) => {
                                if (formIndex < 1) {
                                    setFormIndex(formIndex + 1);
                                    console.log("increment");
                                } else {
                                    console.log("done");
                                    console.log(formData);
                                }
                            }}
                        >
                            {formIndex === 1 ? "Login" : "Next"}
                        </Button>
                    </Center>
                </Box>
            </Box>
        </>
    );
};

export default authForm;
