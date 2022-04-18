import React from "react";
import { motion } from "framer-motion";
import { Box, Text, Flex } from "@chakra-ui/react";

const MotionBox = motion(Box);
const followLoading = () => {
    return (
        <>
            {[1, 2, 3, 4, 5].map((data) => (
                <Flex
                    justify="space-between"
                    mb="2rem"
                    align="center"
                    borderBottom="1px"
                    borderColor="neutrals.200"
                    pb="1rem"
                    cursor="pointer"
                    mt="2rem"
                >
                    <Box display="flex" alignItems="center">
                        <MotionBox
                            height="30px"
                            width="30px"
                            borderRadius="full"
                            bg="neutrals.300"
                            animate={{ opacity: [0.5, 1, 0.5, 1] }}
                            initial={{ opacity: 0.5 }}
                            transition={{
                                duration: 1.5,
                                repeat: "Infinity",
                                repeatType: "reverse",
                            }}
                        />

                        <Text
                            fontFamily="Sora"
                            fontSize="sm"
                            ml="2rem"
                            flex="1"
                            height="28px"
                            borderRadius="sm"
                            width={{ base: "140px", md: "300px" }}
                            bg="neutrals.200"
                            overflow="hidden"
                            position="relative"
                        >
                            <MotionBox
                                h="100%"
                                w="30%"
                                position="absolute"
                                left="0"
                                top="0"
                                bg="linear-gradient(90deg, rgb(220, 220, 220,0.8), rgba(244, 244, 244, 0.5), rgb(220, 220, 220,0.8))"
                                zIndex={3}
                                animate={{ x: [-300, 300] }}
                                initial={{ x: -300 }}
                                transition={{
                                    duration: 1.5,
                                    repeat: "Infinity",
                                    repeatType: "loop",
                                }}
                            />
                        </Text>
                    </Box>
                    <Box
                        width="12%"
                        height="30px"
                        borderRadius="full"
                        bg="neutrals.200"
                        position="relative"
                        overflow="hidden"
                    >
                        <MotionBox
                            h="100%"
                            w="40%"
                            position="absolute"
                            left="0"
                            top="0"
                            bg="linear-gradient(90deg, rgb(220, 220, 220,0.8), rgba(244, 244, 244, 0.3), rgb(220, 220, 220,0.8))"
                            zIndex={3}
                            animate={{ x: [-100, 100] }}
                            initial={{ x: -100 }}
                            transition={{
                                duration: 1.5,
                                repeat: "Infinity",
                                repeatType: "loop",
                            }}
                        />
                    </Box>
                </Flex>
            ))}
        </>
    );
};

export default followLoading;
