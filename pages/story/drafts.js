import React from "react";
import Story from "../../components/Story";
import Wrapper from "../../components/Container/HOC";
const drafts = () => {
    return <Story type="drafts" />;
};

export default Wrapper(drafts);
