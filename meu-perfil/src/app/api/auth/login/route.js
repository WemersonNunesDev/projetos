export async function POST(req) {
    try {
        const { email, senha } = await req.json();

        if (!email || !senha) {
            return Response.json({ error: 'Email e senha são obrigatórios' }, { status: 400 })
        } 

        
    } catch (error) {
        
    }
}