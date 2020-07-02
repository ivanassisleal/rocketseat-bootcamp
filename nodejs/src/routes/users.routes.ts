import { Router } from "express";
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import ensureAuthenticate from "../middleware/ensureAuthenticate";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post("/", async (request, response) => {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name, email, password
    });

    delete user.password;

    return response.json(user);
});

usersRouter.patch("/avatar", ensureAuthenticate, upload.single('avatar'), async (request, response) => {

    const updateAvatarService = new UpdateUserAvatarService();

    const user = await updateAvatarService.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename
    })

    delete user.password;

    return response.json(user)

});

export default usersRouter;
