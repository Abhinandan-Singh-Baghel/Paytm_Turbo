"use client"
import { useState } from "react";
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
// import { Center } from "@repo/ui/center"
import { CACHE_ONE_YEAR } from "next/dist/lib/constants";


const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl ] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    return <Card title="Add Money">

    </Card>
}