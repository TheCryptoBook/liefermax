import mongoose from "mongoose";

const BestellungSchema = new mongoose.Schema({
    kunde: {
        type: String,
        required: true,
        maxlength: 100
    },
    adresse: {
        type: String,
        required: true,
        maxlength: 200
    },
    betrag: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    zahlung: {
        type: Number,
        required: true
    },
    produkte: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                menge: {
                    type: Number,
                    required: true
                },
                extras: {
                    type: [
                        {
                            type: String
                        }
                    ]
                }
            }
        ]
    }
},
//{timestamps: true}
)

// delete mongoose.connection.model['Bestellung'];
export default mongoose.models.Bestellung || mongoose.model("Bestellung", BestellungSchema);