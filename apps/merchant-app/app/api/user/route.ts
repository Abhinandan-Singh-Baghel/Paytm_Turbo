import { NextResponse } from "next/server";
import  PrismaClient  from "@repo/db/client";

const client =  PrismaClient;

export const GET = async () => {
    await client.user.create({
        data: {
            number: "asd",
            password: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}