const mongoose = require('mongoose')

const pacienteSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    sexo: String,
    dataNascimento: String,
    estadoCivil: String,
    anosEstudo: Number,
    telefone: String,
    profissao: String,

    dadosComplementares: {
        profissionalServico: String,
        lugarAtendimento: String,
        endereco: String,
        ubs: String,
        acessoServico: String,
        motivoConsulta: String
    },

    habitosVida: {
        atividadeFisica: String,
        terapiaAlternativa: String,
        alerta: String,

        cigarro: {
            fumante: Boolean,
            observacao: String
        },

        bebidasAlcolicas: {
            consume: Boolean,
            observacao: String
        }        
    },

    dadosAntropometricos: {
        peso: String,
        altura: Number,
        imc: String
    },
    
    rotina: {
        acorda: String,
        cafedaManha: String,
        lanchedaManha: String,
        almoco: String,
        lanchedaTarde: String,
        jantar: String,
        dorme: String,
        observacaoRotina: String
    }

})

module.exports = mongoose.model('Paciente', pacienteSchema)