const express = require('express');
const router = express.Router();
const controller = require('../controllers/PacienteController');

const {check} = require('express-validator/check');

router.route('/')
    .get(controller.consultar)
    .post(
        [
            check('nome').isLength({ min: 8}),
            //check('cpf').isLength({min: 11, max: 11}),
            // check('dataNascimento').
        ], 
        controller.inserir);

router.route('/:id')
    .get(controller.consultarPorId);

exports.default = router;