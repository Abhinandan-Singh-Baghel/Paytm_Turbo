import prisma from "@repo/db/client";
import { AddMoney } from "@/components/AddMoneyCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";


async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}