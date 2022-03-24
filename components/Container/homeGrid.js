import { Grid, GridItem } from "@chakra-ui/react";
import SearchCard from "../../subcomponents/HomePage/searchCard";
const homeGrid = ({ children }) => {
    return (
        <Grid templateColumns="repeat(14,1fr)">
            <GridItem
                w="100%"
                display={{ lg: "block", xs: "none" }}
                colSpan="1"
            ></GridItem>
            <GridItem
                w="100%"
                p={{
                    lg: "2rem 3.7rem",
                    md: "2.5rem 4.5rem",
                    base: "3rem 2rem",
                }}
                colSpan={{ lg: "9", base: "14" }}
            >
                {children}
            </GridItem>
            <GridItem
                w="100%"
                minH="100vh"
                borderLeft="1px"
                borderColor="neutrals.300"
                p="4rem 2rem"
                display={{ lg: "block", xs: "none" }}
                colSpan="4"
            >
                <SearchCard />
            </GridItem>
        </Grid>
    );
};

export default homeGrid;