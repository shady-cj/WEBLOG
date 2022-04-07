import React, { useEffect } from "react";
import Topic from "../../components/Topic";
import Wrapper from "../../components/Container/HOC/requireAuth";

const index = () => {
    return <Topic type="all" />;
};

export default Wrapper(index);
