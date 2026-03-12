"use client";

import { useState } from "react";

import { AssistedInput } from "@/registry/default/ai/assisted-input";

export default function AssistedInputDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-md">
      <AssistedInput
        label="Product Description"
        onChange={setValue}
        placeholder="Enter your text or click Auto-generate…"
        prompt="Write a brief description, up to 50 words, of a sales enablement program for a company that sells a software product to small businesses."
        value={value}
      />
    </div>
  );
}
