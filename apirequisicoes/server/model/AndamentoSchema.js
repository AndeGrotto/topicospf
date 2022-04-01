const mongoose = require("mongoose");

const AndamentoSchema = new mongoose.Schema({
    dataHora: { type: Date },
    titulo: { type: String },
    descricao: { type: String },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    },
    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Atividade',
        require: true,
    }
});
module.exports = mongoose.model("Andamento", AndamentoSchema);