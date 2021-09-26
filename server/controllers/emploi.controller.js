const config = require("../config/auth.config");
const db = require("../models");

const Emploi = db.emploi;


exports.addEmploi = async(req, res) => {
    const { titre, desc, salaire, horaire, adresse, lien} = req.body

    try {
        const newemploi = new Emploi({
           ...req.body
        })

        await newemploi.save()
        res.status(200).send({msg:"emploi added",newemploi})
    } catch (error) {
        res.status(500).send({msg:"impossible to add emploi",error})
    }
}


// get all jobs
exports.getAllEmplois = async(req, res) => {
    try {
        const emplois = await Emploi.find() 
        res.status(200).send({msg: 'All Emplois', emplois})
    } catch (error) {
        res.status(500).send({msg:"impossible to get emplois",error})
    }
}

// delete emploi
exports.deleteEmploi = async(req, res) => {
    const {ID} = req.params
    try {
        const emploi = await Emploi.findByIdAndDelete(ID)
        res.status(200).send({msg : 'emploi deleted'})
    } catch (error) {
        res.status(500).send({msg:"impossible to delete emploi",error})
        
    }
}

// update Emploi
exports.updateEmploi = async(req, res)=> {
    const {ID} = req.params
    try {
        await Emploi.findByIdAndUpdate(ID, {$set: {...req.body}})
        res.status(200).send({msg: 'emploi updated'})
    } catch (error) {
        res.status(500).send({msg:"impossible to update emploi",error})
    }
}
 // get One
exports.getOneEmploi =  async(req, res) => {
    const {ID} = req.params
    try {
        const emploi = await Emploi.findById(ID)
        res.status(200).send({msg: 'Emploi', emploi})
    } catch (error) {
        res.status(500).send({msg:"impossible to get emploi",error})
    }
}