import NextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import { signIn } from "next-auth/react";

export const authOptions = {
    session: { strategy: 'jwt', },
    pages: {
        signIn: '/login',
    },
    providers: [
        credentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                senha: { label: 'Senha', type: 'password' },
            },

            async authorize(credentials) {
                await connectDB();

                const user = await User.findOne({ email: credentials.email });
                if (!user) return null;

                const match = await bcrypt.compare(credentials.senha, user.senha);
                if (!match) return null;

                return { id: user._id, email: user.email }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        }
    },
    cookies: {
        sessionToken: {
            name: '_Secure-next-auth.session-token',
            options: {
                httpOnly: true,
                sameSite: 'strict',
                path: '/',
                secure: true,
            }
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
