import React from "react";
import Notification from "../../Components/Notification";
import Wrapper from "../../components/Container/HOC";

const index = () => {
    return <Notification type="all" />;
};

export default Wrapper(index);
