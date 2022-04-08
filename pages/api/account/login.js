import cookie from "cookie";

import { API_URL } from "../../../config";

export default async (req, res) => {
    if (req.method === "POST") {
        const { username, password } = req.body;
        const body = JSON.stringify({
            username,
            password,
        });
        try {
            const apiRes = await fetch(`${API_URL}/api/token/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            });
            const data = await apiRes.json();
            // console.log(data);
            if (apiRes.status === 200) {
                const access_cookies = cookie.serialize("access", data.access, {
                    maxAge: 60 * 58,
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    sameSite: "strict",
                    path: "/",
                });
                const refresh_cookies = cookie.serialize(
                    "refresh",
                    data.refresh,
                    {
                        maxAge: 60 * 60 * 23,
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        sameSite: "strict",
                        path: "/",
                    }
                );

                res.setHeader("Set-Cookie", [access_cookies, refresh_cookies]);
                return res
                    .status(200)
                    .json({ success: "Logged In Successfully" });
            } else {
                return res
                    .status(apiRes.status)
                    .json({ error: "Wrong Credentials" });
            }
        } catch (err) {
            return res.status(500).json({ error: `Something went wrong` });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            error: `Method ${req.method} Not Allowed`,
        });
    }
};
