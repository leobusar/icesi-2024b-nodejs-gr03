import { Request, Response } from "express";


class UserController {

    public create(req: Request, res: Response) {
        res.status(201).send("create user with email: "+ req.body.email);
    }

    public update(req: Request, res: Response) {
        res.send("update user");
    }

    public getUser(req: Request, res: Response) {
        res.send(`get user with id ${req.params.id} `);
    }

    public getAll(req: Request, res: Response) {
        res.send("get users");
    }

    public delete(req: Request, res: Response) {
        res.send("delete user");
    }
}

export default new UserController();