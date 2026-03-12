"use client";

import {
  ArrowRight,
  Calendar,
  CircleCheck,
  Eye,
  MessageSquare,
  MoreVertical,
  Star,
  TrendingUp,
} from "lucide-react";

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderBreadcrumb,
  PageHeaderMeta,
  PageHeaderTabs,
  PageHeaderThumbnail,
  PageHeaderTitle,
} from "@/registry/default/blocks/header/page-header";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Tabs, TabsList, TabsTab } from "@/registry/default/ui/tabs";

export default function PageHeaderModule() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader className="gap-4">
        <PageHeaderBreadcrumb
          items={[
            { label: "Series", href: "#" },
            { label: "Series name", href: "#" },
            { label: "Module name" },
          ]}
        />

        <div className="flex gap-6">
          {/* Thumbnail */}
          <PageHeaderThumbnail className="w-24 shrink-0">
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
              <div className="h-8 w-12 rotate-12 rounded bg-white/30" />
            </div>
          </PageHeaderThumbnail>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {/* Title row with status and actions */}
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <PageHeaderTitle>Module name</PageHeaderTitle>
                </div>
              </div>
              <PageHeaderActions>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <CircleCheck className="size-4 text-success-muted-foreground" />
                  <span className="@5xl:block hidden">Autosaved 1m ago</span>
                </div>
                <span className="font-semibold text-sm">1200 points</span>
                <Button size="sm" variant="outline">
                  <MessageSquare className="size-4" />
                  56
                </Button>
                <Button size="icon-sm" variant="outline">
                  <Calendar className="size-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="size-4" />
                  Preview
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button size="icon" variant="ghost" />}
                  >
                    <MoreVertical className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("Edit");
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("Duplicate");
                      }}
                    >
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() => {
                        console.log("Archive");
                      }}
                    >
                      Archive
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </PageHeaderActions>
            </div>

            {/* Meta info row */}
            <PageHeaderMeta>
              <Badge size="md" variant="default" color="muted">
                Course
              </Badge>
              <Badge color="warning" size="md" variant="surface">
                Draft
              </Badge>
              <span className="text-muted-foreground text-sm">
                Created by <span className="font-medium">Antoine Plu</span> on
                July 12, 2024
              </span>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-muted-foreground text-sm">
                Overall rating
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                <span className="font-medium">4.8</span>
                <span className="text-muted-foreground">(99K+)</span>
              </span>
            </PageHeaderMeta>
          </div>
        </div>
        {/* Navigation tabs */}
        <PageHeaderTabs>
          <Tabs>
            <TabsList variant="underline">
              <TabsTab
                value="build"
                nativeButton={false}
                render={<a href="#" />}
              >
                Build
              </TabsTab>
              <ArrowRight className="size-4 text-muted-foreground" />
              <TabsTab
                value="settings"
                nativeButton={false}
                render={<a href="#" />}
              >
                Settings
              </TabsTab>
              <ArrowRight className="size-4 text-muted-foreground" />
              <TabsTab
                value="publish"
                nativeButton={false}
                render={<a href="#" />}
              >
                Publish
              </TabsTab>
              <ArrowRight className="size-4 text-muted-foreground" />
              <TabsTab
                value="invite"
                nativeButton={false}
                render={<a href="#" />}
              >
                Invite & track
              </TabsTab>
            </TabsList>
          </Tabs>

          <div className="ml-auto pb-2">
            <Button size="icon" variant="ghost">
              <TrendingUp className="size-4" />
            </Button>
          </div>
        </PageHeaderTabs>
      </PageHeader>
    </div>
  );
}
