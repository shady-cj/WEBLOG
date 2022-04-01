import { API_URL } from "../../../config";

export default async (req, res) => {
    if (req.method === "POST") {
        const { firstName, lastName, password } = req.body;
        const body = JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            password: password,
        });
        try {
            const apiRes = await fetch(`${API_URL}/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            });
            const data = await apiRes.json();
            // console.log(data);
            if (apiRes.status === 201) {
                return res.status(201).json({ success: data.success });
            } else {
                return res.status(apiRes.status).json({ error: data.error });
            }
        } catch (err) {
            return res.status(500).json({ error: "Something went wrong" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            error: `Method ${req.method} Not Allowed`,
        });
    }
};
