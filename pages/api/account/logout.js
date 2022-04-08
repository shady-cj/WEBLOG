import cookie from "cookie";

export default async (req, res) => {
    if (req.method === "POST") {
        const access_cookies = cookie.serialize("access", "", {
            maxAge: 60 * 58,
            expires: new Date(0),
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/",
        });
        const refresh_cookies = cookie.serialize("refresh", "", {
            maxAge: 60 * 60 * 23,
            httpOnly: true,
            expires: new Date(0),
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/",
        });

        res.setHeader("Set-Cookie", [access_cookies, refresh_cookies]);
        return res.status(200).json({
            success: "Logged Out Successfully",
        });
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: "Method Not Allowed" });
    }
};
