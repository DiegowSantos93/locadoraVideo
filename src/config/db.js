import mongoose from "mongoose";

const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Conectado ao MongoDB")
    } catch (error) {
        console.log(error)
    }
}

main()

export default mongoose