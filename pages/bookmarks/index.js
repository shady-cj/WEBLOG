import React from "react";
import Bookmark from "../../components/Bookmark";
import Wrapper from "../../components/Container/HOC";

const index = () => {
    return <Bookmark type="saved" />;
};

export default Wrapper(index);
