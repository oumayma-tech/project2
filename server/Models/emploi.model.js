const mongoose = require ("mongoose")

const Emploi = mongoose.model(
    "Emploi", 
    new mongoose.Schema({
        titre: String, 
        desc: String, 
        salaire: String, 
        horaire: String,
        adresse: String, 
        lien: String
    })
)


module.exports = Emploi;