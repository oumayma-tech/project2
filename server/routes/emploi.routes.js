const express = require('express')
const{addEmploi} = require("../controllers/emploi.controller")
const{getAllEmplois, deleteEmploi, getOneEmploi, updateEmploi} = require("../controllers/emploi.controller")

const router = express.Router()

// @desc add new emploi
// @method post
// @req.body
router.post('/', addEmploi)


// @desc get all emplois
// @method get
router.get('/', getAllEmplois)


// @desc delete emploi
// @method delete
// @req.params

router.delete('/:ID', deleteEmploi)

// @desc update emploi
// @methode put
// @req.params
// @req.body
router.put('/:ID', updateEmploi)

// @desc get emploi
// @methode get
// @req.params

router.get('/:ID', getOneEmploi)

module.exports = router 
