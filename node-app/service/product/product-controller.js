const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();
var { Product } = require('./product-model');

router.get('/', (req, res) => {
    Product.find({},(err, docs) => {
        if (err) {
            console.error('Error occurred while fetching Product docs : ' + JSON.stringify(err, undefined, 2));
        } else {
            try {
                res.send(docs);
            } catch (error) {
                console.error('Error occurred while fetching Product docs : ' + JSON.stringify(error.stack, undefined, 2));
            }
        }
    })
});
router.post('/', (req, res) => {
    var product = new Product({
        productName: req.body.productName,
        createdDate: new Date()
    });
    product.save((err, doc) => {
        if (err) {
            console.error('Error occurred while inserting product : ' + JSON.stringify(err, undefined, 2));
        } else {
            try {
                res.send(doc);
            } catch (e) {
                logger.error('Error occurred while inserting product : ' + JSON.stringify(e.stack, undefined, 2));
                next(e);
            }
        }
    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    Product.findByIdAndRemove(req.params.id, function (err, result) {
        if (!err) {
            res.send({ code: 8, message: 'Product is deleted' });
        } else {
            console.error('Error occured while Deleting Product document :' + JSON.stringify(err, undefined, 2));
            next(err);
        }
    });
});

module.exports = router;