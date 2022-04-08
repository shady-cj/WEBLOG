import React, { useEffect } from "react";
import Topic from "../../components/Topic";
import { requireAuth } from "../../components/Container/HOC/requireAuth";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
const Index = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    useEffect(() => {
        console.log(isAuthenticated, user);
    }, []);

    return <Topic type="all" />;
};

export default Index;
export const getServerSideProps = wrapper.getServerSideProps((store) =>
    requireAuth(async (ctx) => {
        return {
            props: {},
        };
    }, store)
);
