import { connectDB } from "@/lib/mongodb";
import Agenda from "@/models/Agenda";

// GET -> buscar todos
export async function GET() {
    await connectDB();
    const itens = await Agenda.find();
    if (itens.length === 0) return Response.json({ mensagem: "Nenhum item encontrado ainda." })
    return Response.json(itens);
}

// POST -> criar um novo
export async function POST(req) {
    await connectDB();
    const body = await req.json();
    const novo = await Agenda.create(body);
    return Response.json(novo);
}
