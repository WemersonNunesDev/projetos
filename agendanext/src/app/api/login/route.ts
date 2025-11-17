import { redirect } from "next/navigation";

export async function POST(req: Request) {
    const data = await req.json();
    const { email, senha } = data;

    if (!email || !senha) {
        return Response.json(
            { redirect: '/erro' },
            { status: 400 },
        )
    }

    return Response.json({ ok: true })
}
