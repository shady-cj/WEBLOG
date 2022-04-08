import React, { useState, useEffect } from "react";
import cookie from "cookie";
import { API_URL } from "../../config";

export const useFetchFollow = (type, username) => {
    const [fetching, setFetching] = useState(true);
    const [follow, setFollow] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFollow = async () => {
            if (username) {
                try {
                    const res = await fetch(
                        `http://localhost:8000/api/users/profile/${username}/${type}`
                    );
                    const data = await res.json();
                    if (res.status === 200) {
                        setFollow(data.data);
                        setFetching(false);
                    } else {
                        setError(true);
                        setFetching(false);
                    }
                } catch (err) {
                    setError(true);
                    setFetching(false);
                }
            }
        };
        fetchFollow();
    }, []);
    return { fetching, follow, error };
};
