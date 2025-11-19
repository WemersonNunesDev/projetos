import { connectDB } from "@/lib/mongodb";
import Agenda from "@/models/Agenda";

export async function listarContatos() {
    await connectDB();
    return Agenda.find();
}

export async function criarContato(data) {
    await connectDB();
    return Agenda.create(data);
}

export async function atualizarContato(id, dados) {
    await connectDB();
    return Agenda.findByIdAndUpdate(id, dados, { new: true });
}

export async function deletarContato(id) {
    await connectDB();
    return Agenda.findByIdAndDelete(id);
}
