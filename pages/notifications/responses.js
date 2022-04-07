import React from "react";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import Notification from "../../Components/Notification";
const responses = () => {
    return <Notification type="response" />;
};

export default responses;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
