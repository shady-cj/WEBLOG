import React, { useState } from "react";

import { Flex, Grid, GridItem, Text, Button, Input } from "@chakra-ui/react";
const EditCard = ({ field, value, handleChange }) => {
    const [edit, setEdit] = useState(false);
    return (
        <Flex mb="1rem" maxH="4rem" align="center">
            <Grid templateColumns="repeat(7,1fr)" w="100%">
                <GridItem
                    colSpan={{ base: "2", sm: "2", md: "2" }}
                    w="100%"
                    h="100%"
                >
                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="800"
                        h="100%"
                        display="flex"
                        alignItems="center"
                    >
                        {field.title}
                    </Text>
                </GridItem>
                <GridItem
                    colSpan={{ base: "3", sm: "4", md: "4" }}
                    w="100%"
                    h="100%"
                >
                    {edit ? (
                        <Input
                            name={field.name}
                            value={value}
                            fontSize="sm"
                            fontWeight="300"
                            color="neutrals.800"
                            h="100%"
                            display="flex"
                            alignItems="center"
                            border="none"
                            autoFocus
                            borderColor="neutrals.200"
                            _focus={{
                                outline: "none",
                            }}
                            borderRadius="none"
                            pl={{ base: "1rem", md: "0.1rem" }}
                            onChange={handleChange}
                        />
                    ) : (
                        <Text
                            fontSize="sm"
                            fontWeight="300"
                            color="neutrals.800"
                            h="100%"
                            display="flex"
                            alignItems="center"
                            pl={{ base: "1rem", md: "0.1rem" }}
                        >
                            {value}
                        </Text>
                    )}
                </GridItem>
                <GridItem
                    colSpan={{ base: "2", sm: "1", md: "1" }}
                    w="100%"
                    align="center"
                    justify="center"
                >
                    {edit ? (
                        <Button
                            size="sm"
                            borderRadius="full"
                            fontSize="0.85rem"
                            color="white"
                            bg="secondary.100"
                            _hover={{
                                outline: "none",
                            }}
                            _focus={{
                                outline: "none",
                            }}
                            _active={{
                                active: "none",
                            }}
                            onClick={() => setEdit(false)}
                        >
                            Save
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            borderRadius="full"
                            fontSize="0.85rem"
                            color="secondary.100"
                            bg="white"
                            border="1px"
                            borderColor="secondary.100"
                            _hover={{
                                outline: "none",
                            }}
                            _focus={{
                                outline: "none",
                            }}
                            _active={{
                                active: "none",
                            }}
                            onClick={() => setEdit(true)}
                        >
                            Edit
                        </Button>
                    )}
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default EditCard;
