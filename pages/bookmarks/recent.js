import React from "react";
import Bookmark from "../../components/Bookmark";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";

const recent = () => {
    return <Bookmark type="recent" />;
};

export default recent;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
