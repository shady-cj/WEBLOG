import React from "react";
import Bookmark from "../../components/Bookmark";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";

const index = () => {
    return <Bookmark type="saved" />;
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
