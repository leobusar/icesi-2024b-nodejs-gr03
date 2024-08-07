import express, {Request, Response} from "express";
import userController from "../controllers/user.controller";

export const router =  express.Router();

router.post("/", userController.create);

router.get("/", userController.getAll);

router.get("/:id/group/:groupId",  (req: Request, res: Response) => {
    res.send(`get user with id ${req.params.id} y group ID: ${req.params.groupId}`);
});

router.get("/:id", userController.getUser);

router.put("/:id",  userController.update);

router.delete("/:id",  userController.delete);