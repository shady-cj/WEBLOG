import { Box, Hide, Show } from "@chakra-ui/react";
import React from "react";
import LeftBar from "../../subcomponents/HomePage/leftBar";
import TopBar from "../../subcomponents/HomePage/topBar";
import BottomBar from "../../subcomponents/HomePage/bottomBar";

const homeWrapper = ({ children, page }) => {
    return (
        <Box>
            <Show below="lg">
                <TopBar page={page} />
                {children}
                <BottomBar page={page} />
            </Show>
            <Show above="lg">
                {children}
                <LeftBar page={page} />
            </Show>
        </Box>
    );
};
export default homeWrapper;
