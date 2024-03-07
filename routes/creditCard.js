const router = require('express').Router();
const CreditCard = require('../models/creditcard');

// GET | /api/v1/creditCard | public | get all creditCard
router.get('/creditCard', async (req, res) => {
    try {
        const creditCard = await CreditCard.find();
        //

        return res.status(200).json({
            data: creditCard,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

router.post('/add-creditCard', async (req, res) => {
    try {
        const creditCard = await CreditCard.create({
            cardholderName: req.body.name,
            expirationDate: req.body.expDate,
            cardNumber: req.body.cardNumber,
            cvv: req.body.cvv,
        });

        res.status(200).json({
            data: creditCard,
            succes: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

// PUT | /api/v1/edit-creditCard/:id| Private | Edit a customer
router.put('/edit-creditcard/:id', async (req, res) => {
    console.log(' method put', req.params);
    try {
        const creditCardId = req.params.id;
        const updates = req.body;
        const updateCreditCard = await CreditCard.findByIdAndUpdate(
            creditCardId,
            updates,
            { new: true }
        );
        if (!updateCreditCard) {
            return res.status(400).json({
                success: false,
                message: 'Tarjeta de credito no encontrado',
            });
        }

        res.status(200).json({
            data: updateCreditCard,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});
router.delete('/delete-creditcard/:id', async (req, res) => {
    try {
        const creditCard = await CreditCard.findById(req.params.id)
        if (!creditCard) {
            return res.status(404).json({
                success: false,
                message: 'Tarjera de credito no encontrado'
            });
        }
        else {
            await CreditCard.findByIdAndDelete(creditCard);
        }
        res.status(200).json({
            success: true,
            data: creditCard,
            message: 'Tarjera de credito eliminada correctamente'
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false, message: err })
    }
})
module.exports = router;
