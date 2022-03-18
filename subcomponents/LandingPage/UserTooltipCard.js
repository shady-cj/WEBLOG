import React, { useRef, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const UserTooltipCard = ({ name, setOpenTooltip }) => {
    const toolTip = useRef(null);
    console.log(toolTip);
    // const [toolTipPos, setToolTipPos] = useState(false);

    // useEffect(() => {
    //     const handleToolTipPosition = () => {
    //         const toolRect =
    //             toolTip &&
    //             toolTip.current &&
    //             toolTip.current.getBoundingClientRect();
    //         console.log(toolTipPos, toolRect.top, toolRect.bottom);
    //         if (toolTipPos == false) {
    //             if (toolRect != null && toolRect.top < 0) {
    //                 console.log("top");
    //                 setToolTipPos(true);
    //                 toolTip.current.style.top = "0";
    //                 toolTip.current.style.height = toolRect.height + "px";
    //                 toolTip.current.style.bottom = "";
    //             } else if (
    //                 toolRect != null &&
    //                 toolRect.bottom > window.innerHeight
    //             ) {
    //                 console.log("bottom");
    //                 setToolTipPos(true);
    //                 toolTip.current.style.bottom = "0";
    //                 toolTip.current.style.height = toolRect.height + "px";
    //                 toolTip.current.style.top = "";
    //             } else {
    //                 setToolTipPos(false);
    //                 toolTip.current.style.bottom = "";
    //                 toolTip.current.style.height = "auto";
    //                 toolTip.current.style.top = "";
    //             }
    //         } else {
    //             setToolTipPos(false);
    //             toolTip.current.style.bottom = "";
    //             toolTip.current.style.height = "auto";
    //             toolTip.current.style.top = "";
    //         }
    //     };
    //     handleToolTipPosition();
    //     window.addEventListener("scroll", handleToolTipPosition);
    //     return () => {
    //         return window.removeEventListener("scroll", handleToolTipPosition);
    //     };
    // }, []);
    return (
        <Box
            ref={toolTip}
            // position={toolTipPos ? "fixed" : "absolute"}
            // left={toolTipPos ? "0" : "110%"}
            position="absolute"
            left="110%"
            top={
                toolTip.current != null
                    ? `${
                          (toolTip.current.getBoundingClientRect().height /
                              137) *
                          -278
                      }%`
                    : "-278%"
            }
            zIndex="20"
            bg="white"
            w="300px"
            borderRadius="sm"
            p="1rem"
            _before={{
                content: `""`,
                position: "absolute",
                top: "50%",
                left: "-6%",
                marginRight: "-50px",
                marginTop: "-10px",
                borderStyle: "solid",
                borderWidth: "10px",
                borderColor: "transparent white transparent transparent",
            }}
            boxShadow="0px -2px 5px -1px rgba(28,27,27,0.3)"
            onMouseEnter={() => {
                setOpenTooltip(true);
            }}
            onMouseLeave={() => {
                setOpenTooltip(false);
            }}
        >
            <Text fontSize="sm">{name}</Text>
            <Text fontSize="sm">
                Illuminating forgotten corners of history to think about the
                present. Also:
                {toolTip.current && toolTip.current.getBoundingClientRect()}
            </Text>
        </Box>
    );
};

export default UserTooltipCard;
