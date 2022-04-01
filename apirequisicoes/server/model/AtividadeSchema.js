const mongoose = require("mongoose");

const AtividadeSchema = new mongoose.Schema({
    titulo: { type: String },
    descricao: { type: String },
    status: { type: String },
    prazo: { type: Date },
    agendaInicio: { type: Date },
    dataHoraTermino: { type: Date },
    responsavel1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        require: false,
    },
    responsavel2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Requisicao',
        require: true,
    }
});
module.exports = mongoose.model("Atividade", AtividadeSchema);