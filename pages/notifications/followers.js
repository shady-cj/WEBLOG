import React from "react";
import Notification from "../../Components/Notification";
import Wrapper from "../../components/Container/HOC";

const followers = () => {
    return <Notification type="follower" />;
};

export default Wrapper(followers);
