import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const requireAuth = (gssp) => {
    return async (ctx) => {
        const { user, isAuthenticated } = useSelector((state) => state.auth);

        console.log(user, isAuthenticated, ctx.req);

        return await gssp(ctx);
    };
};
