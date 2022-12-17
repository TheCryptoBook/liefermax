import mongoose from "mongoose";

const ProduktSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50
    },
    beschreibung: {
        type: String,
        require: true,
        maxlength: 250
    },
    kategorie: {
        type: String,
        require: true,
        maxlength: 30
    },
    preis: {
        type: Number,
        require: true
    },
    url: {
        type: String,
        require: true,
        maxlength: 30,
        unique: true
    },
    bild: {
        type: String,
        require: true
    },
    extras: {
        type: [
            {
                text: {
                    type: String,
                    required: true
                },
                preis: {
                    type: Number,
                    required: true
                }
            }
        ],    
    }
},
//{timestamps: true}
)

export default mongoose.models.Produkt || mongoose.model("Produkt", ProduktSchema)