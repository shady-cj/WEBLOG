import React, { useState } from "react";
import Image from "next/image";
import {
    Text,
    Grid,
    GridItem,
    Box,
    Icon,
    Avatar,
    Flex,
} from "@chakra-ui/react";
import UserTooltipCard from "./UserTooltipCard";

const blogPostCard = ({ name, title, text, date }) => {
    const [openTooltip, setOpenTooltip] = useState(false);
    return (
        <Box mb="2.5rem">
            <Grid templateColumns="repeat(3,1fr)" gap={4}>
                <GridItem colSpan="2">
                    <Flex align="center">
                        <Avatar size="xs" />
                        <Text
                            as="span"
                            fontSize="sm"
                            fontWeight="bold"
                            fontFamily="Cormorant SC"
                            ml="0.6rem"
                            noOfLines={1}
                            cursor="pointer"
                            position="relative"
                            overflow="visible"
                            onMouseEnter={() => {
                                setOpenTooltip(true);
                            }}
                            onMouseLeave={() => {
                                setOpenTooltip(false);
                            }}
                        >
                            {name}
                            {openTooltip && (
                                <UserTooltipCard
                                    name={name}
                                    setOpenTooltip={setOpenTooltip}
                                />
                            )}
                        </Text>
                    </Flex>
                    <Box>
                        <Text
                            fontSize="xl"
                            lineHeight="22px"
                            fontWeight="semibold"
                            mt="0.8rem"
                            mb="0.5rem"
                            noOfLines={2}
                        >
                            {title}
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            fontSize="md"
                            fontWeight="normal"
                            color="neutrals.700"
                            noOfLines={2}
                        >
                            {text}
                        </Text>
                    </Box>
                    <Flex align="center" justify="space-between">
                        <Box>
                            <Text
                                fontSize="xs"
                                color="neutrals.600"
                                fontWeight="600"
                            >
                                {date}
                            </Text>
                        </Box>

                        <Icon
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            cursor="pointer"
                        >
                            <path
                                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                fill="#292929"
                            ></path>
                        </Icon>
                    </Flex>
                </GridItem>
                <GridItem colSpan="1">
                    <Image
                        src={
                            "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop"
                        }
                        layout="responsive"
                        width={150}
                        height={100}
                    />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default blogPostCard;
