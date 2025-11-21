import mongoose from 'mongoose';

export async function connectDB() {
    try {
        if (mongoose.connection.readyState === 1) return mongoose.connection;

        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error('MONGODB_URI não foi encontrado no .env');

        const conn = await mongoose.connect(uri);
        console.log('MongoDB conectado');
        return conn;
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error);
        throw new Error("Erro ao conectar no MongoDB");
    }
}
