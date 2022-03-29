import React from "react";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";
const following = () => {
    const router = useRouter();
    const { username } = router.query;
    return <>{username && <Profile type="following" username={username} />}</>;
};

export default following;
