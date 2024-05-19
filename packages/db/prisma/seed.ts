import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt";
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { number: '1234'},
        update: {},
        create: {
            number: '1234',
            password: await bcrypt.hash('abhi', 10),
            name: 'abhinandan',
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "token__1",
                    provider: "HDFC Bank",
                },
            },
        },
    })

    const bob = await prisma.user.upsert({
        where: { number: '5678'},
        update: {},
        create: {
            number: '5678',
            password: await bcrypt.hash('bob', 10),
            name: 'bob',
            Balance: {
                create: {
                    amount: 2000,
                    locked: 0
                }
            },

            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2000,
                    token: "token__2",
                    provider: "HDFC Bank",
                },
            },
        },
    })

    console.log({ alice, bob })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
        
    })