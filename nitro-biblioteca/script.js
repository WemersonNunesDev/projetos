import { prisma } from "./lib/prisma";

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Wemerson',
            email: 'wemerson@prisma.io',
            password: '123456',
        }
    })

    await prisma.book.createMany({
        data: [
            {
                title: 'The Prisma Book',
                author: 'Prisma Team',
                isbn: '111111111',
                category: 'Tech',
                year: 2024,
                quantity: 5,
            },
            {
                title: 'Advanced Prisma Techniques',
                author: 'Prisma Team',
                isbn: '222222222',
                category: 'Tech',
                year: 2024,
                quantity: 3,
            }
        ]
    })


    console.log('Created user:', user);

    const allUsers = await prisma.user.findMany({
        include: {
            books: true,
        },
    })
    console.log('All users:', JSON.stringify(allUsers, null, 2));
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
