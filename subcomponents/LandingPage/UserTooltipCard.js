import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const UserTooltipCard = ({ name, setOpenTooltip }) => {
    const toolTip = useRef(null);
    const [tooltipTopOffset, setTooltipTopOffset] = useState(null);
    // const [toolTipPos, setToolTipPos] = useState(false);

    useLayoutEffect(() => {
        const handleToolTipPosition = () => {
            const toolTipRect =
                toolTip.current && toolTip.current.getBoundingClientRect();
            const toolTipParentMidHeight =
                toolTip.current.offsetParent.getBoundingClientRect().height / 2;
            const toolTipMidHeight = toolTipRect.height / 2;

            let topPos = -toolTipMidHeight + toolTipParentMidHeight;
            setTooltipTopOffset(topPos);
        };
        handleToolTipPosition();
        window.addEventListener("scroll", handleToolTipPosition);
        return () => {
            return window.removeEventListener("scroll", handleToolTipPosition);
        };
    }, [tooltipTopOffset]);
    return (
        <Box
            ref={toolTip}
            position="absolute"
            left="110%"
            top={tooltipTopOffset != null ? `${tooltipTopOffset}px` : "0"}
            zIndex="20"
            w="300px"
            bg="neutrals.100"
            borderRadius="sm"
            p="1rem"
            _before={{
                content: `""`,
                position: "absolute",
                top: "50%",
                left: "-6.5%",
                marginRight: "-52px",
                marginTop: "-10px",
                borderStyle: "solid",
                borderWidth: "10px",
                borderColor: "transparent #f4f4f4 transparent transparent",
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
                present. Also: Illuminating forgotten corners of history to
                think about the present. Also: Illuminating forgotten corners of
                history to think about the present. Also: Illuminating forgotten
                corners of history to think about the present. Also:
                {/* {toolTip.current && toolTip.current.getBoundingClientRect()} */}
            </Text>
        </Box>
    );
};

export default UserTooltipCard;
