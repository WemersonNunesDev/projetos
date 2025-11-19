import { listarContatos, criarContato, atualizarContato, deletarContato } from "@/actions/agendaActions";

export async function GET() {
    const itens = await listarContatos();
    return Response.json(itens);
}

export async function POST(req) {
    const body = await req.json();
    const novo = await criarContato(body);
    return Response.json(novo);
}

export async function PUT(req) {
    const body = req.json();
    const { id, ...dados } = body;

    if (!id) return Response.json({ erro: "ID é obrigatório" }, { status: 400 });

    const atualizado = await atualizarContato(id, dados);
    return Response.json(atualizado);
}

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) return Response.json({ erro: "ID é obrigatório" }, { status: 400 });

    const removido = await deletarContato(id);
    return Response.json(removido);
}
