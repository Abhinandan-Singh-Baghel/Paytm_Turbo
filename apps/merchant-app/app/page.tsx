"use client";

import { userBalance } from "@repo/store/useBalance";

export default function() {
  const balance = userBalance();
  return <div>
    hi there {balance}
  </div>
}