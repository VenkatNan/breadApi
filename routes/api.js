const express = require('express');
const router = express.Router();
const breadsCtrl = require('../controllers/api/breads')

/* GET users listing. */
router.get('/breads', breadsCtrl.index)
router.get('/breads/:id', breadsCtrl.show)

router.post('/breads', breadsCtrl.create)

router.put('/breads/:id', breadsCtrl.update)

router.delete('/breads/:id', breadsCtrl.delete)

module.exports = router;
