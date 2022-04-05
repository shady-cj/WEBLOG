import React from "react";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
import Wrapper from "../../components/Container/HOC";

const about = () => {
    const router = useRouter();
    const { username } = router.query;
    return <>{username && <Profile type="about" username={username} />}</>;
};

export default Wrapper(about);
