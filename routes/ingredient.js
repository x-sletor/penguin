const express = require('express');
const router = express.Router();
const Mint = require('../models/ingredient');

router.post('/ingredient', async(req, res) => {
    const { id, name, unit } = req.body
        // simple validation
    if (!id || !name || !unit || !amount) {
        return res.render('ingredient', { message: 'Please try again' })
    }
    const mint = new Mint({
        id,
        name,
        amount,
        unit
    });
    await mint.save()
    req.session.mint = mint;
    res.render('index', { mint })
});