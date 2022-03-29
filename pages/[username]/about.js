import React from "react";
import Profile from "../../components/Profile";
import { useRouter } from "next/router";

const about = () => {
    const router = useRouter();
    const { username } = router.query;
    return <>{username && <Profile type="about" username={username} />}</>;
};

export default about;
