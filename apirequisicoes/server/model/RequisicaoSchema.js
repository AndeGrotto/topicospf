const mongoose = require("mongoose");

const RequisicaoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    dataHoraCriada: { type: Date },
    status: { type: String },
    prazoAtendimento: { type: Date },
    responsavel1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoRequisicao',
        require: true,
    },
    responsavel2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solicitante',
        require: true,
    },
});
module.exports = mongoose.model("Requisicao", RequisicaoSchema);