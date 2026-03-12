"use client";

import { GlobalHeader } from "@/registry/default/blocks/header/global-header";

export default function GlobalHeaderDemo() {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <GlobalHeader
        user={{
          name: "Jane Doe",
          email: "jane@acme.com",
          initials: "JD",
          profileHref: "/profile",
          menuItems: [
            { label: "Settings", href: "/settings" },
            { label: "Billing", href: "/billing" },
          ],
          onSignOut: () => {
            /* Handle sign out */
          },
        }}
      />
    </div>
  );
}
