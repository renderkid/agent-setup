"use client";

import { Icon } from "@/registry/default/ui/icon";

export default function IconColors() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="accent" />
        <span className="text-xs text-accent-muted-foreground">accent</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="destructive" />
        <span className="text-xs text-destructive-muted-foreground">
          destructive
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="muted" />
        <span className="text-xs text-muted-foreground">muted</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="warning" />
        <span className="text-xs text-warning-muted-foreground">warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="success" />
        <span className="text-xs text-success-muted-foreground">success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="info" />
        <span className="text-xs text-info-muted-foreground">info</span>
      </div>
    </div>
  );
}
