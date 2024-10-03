import db from "../config/db.js"
import bcrypt from "bcrypt"

const Schema = db.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    birthday_Date: {
        type: Date,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    permission_Type: {
        type: String,
        enum: ["ADM", "USR"],
        default: "USR",
    },
    phones: {
        type: Number,
        required: false,
    },
    addres: {
        type: Object,
        required: false,
    },
    house_number: {
        type: Number,
        required: false,
    }
})

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});
  
userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.password);
};
  
const User = db.model("User", userSchema);
  
export default User;