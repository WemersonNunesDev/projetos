import mongoose from 'mongoose';

const AgendaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    telefone: { type: Number, required: true },
    email: { type: String },
}, { timestamps: true });

export default mongoose.models.Agenda || mongoose.model('Agenda', AgendaSchema);
