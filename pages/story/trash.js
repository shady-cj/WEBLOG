import React from "react";
import Story from "../../components/Story";
import Wrapper from "../../components/Container/HOC";
const trash = () => {
    return <Story type="trash" />;
};

export default Wrapper(trash);
