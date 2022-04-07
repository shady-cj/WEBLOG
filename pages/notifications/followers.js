import React from "react";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import Notification from "../../Components/Notification";

const followers = () => {
    return <Notification type="follower" />;
};

export default followers;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
