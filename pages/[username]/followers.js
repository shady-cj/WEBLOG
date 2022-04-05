import React from "react";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
import Wrapper from "../../components/Container/HOC";
const followers = () => {
    const router = useRouter();
    const { username } = router.query;
    return <>{username && <Profile type="follower" username={username} />}</>;
};

export default Wrapper(followers);
