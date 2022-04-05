import React from "react";
import Bookmark from "../../components/Bookmark";
import Wrapper from "../../components/Container/HOC";

const recent = () => {
    return <Bookmark type="recent" />;
};

export default Wrapper(recent);
