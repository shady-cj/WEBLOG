import React from "react";
import Story from "../../components/Story";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
const drafts = () => {
    return <Story type="drafts" />;
};

export default drafts;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
