import express, { Request, Response } from 'express';
import userRouter from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { connectDB } from './config/mongodb';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(logger);
app.use("/users", userRouter)



app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World from TypeScript backend");
});
app.get("/health", (_req: Request, res: Response) => {
    res.send("Server is Running");
});
app.get("/user", (_req: Request, res: Response) => {
    res.json({
        name: "Shahabaaz",
        role: "SDE-2",
        stack: "Node.js + Express + TypeScript",
        age: 32,
        city: "Bangalore",
        LearningGoal: "top Coder"
    });
});

app.get("/products", (_req: Request, res: Response) => {
    const data =
        [{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]

    res.json(data)
})
app.use(errorHandler);

const start = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT ${PORT}`)
    });
};

start();