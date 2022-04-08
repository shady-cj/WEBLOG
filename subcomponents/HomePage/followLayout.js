import React from "react";
import { Flex, Box, Text, Button, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import FollowBtn from "./followBtn";
import Router from "next/router";
const followLayout = ({ name, following, firstName, id, img }) => {
    return (
        <Flex
            justify="space-between"
            mb="2rem"
            align="center"
            borderBottom="1px"
            borderColor="neutrals.200"
            pb="1rem"
            cursor="pointer"
            onClick={() => id && Router.push(`/${id}`)}
        >
            <Box display="flex" alignItems="center">
                <Box height="30px" width="40px">
                    {img ? (
                        <Avatar name={name} src={img} size="sm" />
                    ) : (
                        <Image
                            src={
                                "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop"
                            }
                            layout="responsive"
                            width={40}
                            height={30}
                        />
                    )}
                </Box>

                <Text fontFamily="Sora" fontSize="sm" ml="2rem">
                    {name} {firstName && firstName}
                </Text>
            </Box>

            {following !== null && <FollowBtn following={following} />}
        </Flex>
    );
};

export default followLayout;
