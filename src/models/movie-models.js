import db from "../config/db.js"

const Schema = db.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    release_Date: {
        type: Date,
        required: false,
    },
    director: {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        enum: ["Livre", "Maior16", "Maior18"],
        required: true,
    }
})
  
const Movie = db.model("Movie", movieSchema);
  
export default Movie;