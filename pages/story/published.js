import React from "react";
import Story from "../../components/Story";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
const published = () => {
    return <Story type="published" />;
};

export default published;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
