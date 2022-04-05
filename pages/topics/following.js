import React from "react";
import Topic from "../../components/Topic";
import Wrapper from "../../components/Container/HOC";

const following = () => {
    return <Topic type="following" />;
};

export default Wrapper(following);
