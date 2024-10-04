import db from "../config/db.js"

const Schema = db.Schema;

const rentedSchema = new Schema({
    rented_by: {
        type: db.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movie_rented: {
        type: db.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    rent_date: {
        type: Date,
        required: true,
    },
    return_date: {
        type: Date,
        required: true,
    }
})
  
const Rented = db.model("Rented", rentedSchema);
  
export default Rented;