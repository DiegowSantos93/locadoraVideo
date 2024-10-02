import "dotenv/config"
import express from "express"
import userRoutes from "./routes/user-route.js"

const app = express();

app.use(express.json());

app.use("/user", userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`)
});