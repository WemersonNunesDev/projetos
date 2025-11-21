import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { email, senha } = await req.json();
        await connectDB();

        const exist = await User.findOne({ email });
        if (exist) return Response.json({ error: "Email já registrado!" }, { status: 400 });

        const hashed = await bcrypt.hash(senha, 10);

        const user = await User.create({ email, senha: hashed });

        return Response.json({ success: true, user });
    } catch (e) {
        return Response.json({ error: "Erro no servidor" }, { status: 500 });
    }
}
