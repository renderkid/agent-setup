"use client";

import { useState } from "react";

import { MainNav } from "@/registry/default/blocks/navigation/main-nav";

export default function MainNavLearnerDemo() {
  const [currentPath, setCurrentPath] = useState("/home");

  const DemoLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    // oxlint-disable-next-line no-html-link-for-pages
    <a
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="relative flex h-[600px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <MainNav
        currentPath={currentPath}
        LinkComponent={DemoLink}
        site="learner"
      />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="font-medium text-muted-foreground text-sm">
            Learner site navigation
          </p>
          <code className="mt-1 block rounded bg-background px-3 py-1.5 font-mono text-sm">
            {currentPath}
          </code>
        </div>
      </div>
    </div>
  );
}
