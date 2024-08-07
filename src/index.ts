import express,  {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

import {router} from './routes/users.router';
import { db } from './config/db';

const app: Express  = express();
dotenv.config();

const PORT  = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', router);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world");
})

db.then (()=>
    app.listen(PORT, ()=> {
        console.log(`Server running on http://localhost:${PORT}`)
    })
);
