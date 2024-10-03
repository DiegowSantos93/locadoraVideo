import "dotenv/config"
import express from "express"
import userRoutes from "./routes/user-route.js"
import movieRoutes from "./routes/movie-route.js"

const app = express();

app.use(express.json());

app.use("/user", userRoutes)

app.use("/movie", movieRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`)
});