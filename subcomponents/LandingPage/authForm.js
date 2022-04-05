import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change_auth } from "../../redux/actions/auth";
import { register, login } from "../../redux/actions/auth";

import FormBox from "./formBox";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import {
    Input,
    Box,
    Text,
    Center,
    Icon,
    VStack,
    Button,
    Flex,
} from "@chakra-ui/react";
const authForm = () => {
    const authType = useSelector((state) => state.auth.authType);
    const dispatch = useDispatch();

    const error_message = useSelector((state) => state.auth.error_message);

    const loading = useSelector((state) => state.auth.loading);

    const loginForm = [
        {
            infoName: "Username",
            type: "text",
            name: "username",
        },
        {
            infoName: "Password",
            type: "password",
            active: false,
            name: "password",
        },
    ];
    const registerForm = [
        {
            infoName: "First Name",
            type: "text",
            name: "firstName",
        },
        {
            infoName: "Last Name",
            type: "text",
            name: "lastName",
        },
        {
            infoName: "Password",
            type: "password",
            name: "password",
        },
    ];
    const [formIndex, setFormIndex] = useState(0);

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleChange = (e) => {
        if (authType === "login") {
            setLoginData({
                ...loginData,
                [e.target.name]: e.target.value,
            });
        } else {
            setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined) {
            if (authType === "register") {
                dispatch(register(registerData));
            } else {
                dispatch(login(loginData));
            }
        }
    };
    const formData = authType === "login" ? loginForm : registerForm;

    useEffect(() => {
        // const updatedData = formData.map((data, index) => {
        //     if (formIndex === index) {
        //         return { ...data, active: true };
        //     } else {
        //         return { ...data, active: false };
        //     }
        // });
        // console.log("called");
    }, [formIndex]);
    return (
        <>
            <Box>
                <Box>
                    <Center flexDirection="column" overflowX="hidden">
                        <Flex
                            width="100%"
                            transform={`translateX(${-100 * formIndex}%)`}
                            transition="transform 0.4s ease-in"
                        >
                            {formData.map((data, index) => {
                                return (
                                    <FormBox
                                        key={index}
                                        {...data}
                                        fieldData={
                                            authType === "login"
                                                ? loginData
                                                : registerData
                                        }
                                        handleChange={handleChange}
                                    />
                                );
                            })}
                        </Flex>
                        {error_message.error && (
                            <Center w="100%" mt="1rem">
                                <Text as="span" fontSize="lg" color="red">
                                    {error_message.message}
                                </Text>
                            </Center>
                        )}

                        <Flex
                            align="center"
                            mt="4rem"
                            justify="flex-start"
                            width="100%"
                        >
                            <Icon
                                display={
                                    formIndex === 0 ? "none" : "inline-block"
                                }
                                ml={{ base: "30px", md: "50px" }}
                                cursor="pointer"
                                color="primary.200"
                                onClick={() => {
                                    if (formIndex > 0) {
                                        setFormIndex(formIndex - 1);
                                    }
                                }}
                                as={MdOutlineArrowBackIosNew}
                            />
                            <Button
                                isLoading={loading}
                                p="1rem 3rem"
                                _focus={{ outline: "none" }}
                                bg="secondary.100"
                                m="0 auto"
                                transform={
                                    formIndex === 0
                                        ? "translateX(0)"
                                        : {
                                              base: "translateX(-40px)",
                                              md: "translateX(-50px)",
                                          }
                                }
                                _hover={{ bg: "secondary.500" }}
                                onClick={(e) => {
                                    if (formIndex < formData.length - 1) {
                                        setFormIndex(formIndex + 1);
                                    } else {
                                        handleSubmit(e);
                                    }
                                }}
                            >
                                {formIndex === formData.length - 1
                                    ? authType.slice(0, 1).toUpperCase() +
                                      authType.slice(1)
                                    : "Next"}
                            </Button>
                        </Flex>
                        <Text fontSize="sm" mt="2rem">
                            {authType === "login"
                                ? "Don't have an account?"
                                : "Already have an account?"}
                            <Text
                                fontSize="sm"
                                color="secondary.200"
                                cursor="pointer"
                                onClick={() => {
                                    if (authType === "login") {
                                        dispatch(change_auth("register"));
                                        setLoginData({
                                            username: "",
                                            password: "",
                                        });
                                    } else {
                                        dispatch(change_auth("login"));
                                        setRegisterData({
                                            firstName: "",
                                            lastName: "",
                                            password: "",
                                        });
                                    }
                                    setFormIndex(0);
                                }}
                                _hover={{ textDecoration: "underline" }}
                            >
                                {authType === "login"
                                    ? "Register here"
                                    : "Login here"}
                            </Text>
                        </Text>
                    </Center>
                </Box>
            </Box>
        </>
    );
};

authForm.defaultProps = {
    authType: "login",
};

export default authForm;
