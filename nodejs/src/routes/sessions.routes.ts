import { Router } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
    const { email, password } = request.body;

    const authenticatUser = new AuthenticateUserService();

    const { user, token } = await authenticatUser.execute({
        email,
        password
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRouter;
