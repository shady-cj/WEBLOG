import React from "react";
import Notification from "../../Components/Notification";
import Wrapper from "../../components/Container/HOC";
const responses = () => {
    return <Notification type="response" />;
};

export default Wrapper(responses);
