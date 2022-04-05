import React from "react";
import Story from "../../components/Story";
import Wrapper from "../../components/Container/HOC";

const published = () => {
    return <Story type="published" />;
};

export default Wrapper(published);
