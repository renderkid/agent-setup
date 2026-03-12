"use client";
import { Settings } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export default function DialogSettings() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="flex items-center gap-2" variant="outline" />
        }
      >
        <Settings className="h-4 w-4" />
        Settings
      </DialogTrigger>
      <DialogPopup className="max-w-md">
        <DialogHeader>
          <DialogTitle>Application Settings</DialogTitle>
          <DialogDescription>
            Configure your application preferences and options.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel className="space-y-4">
          <div className="space-y-2">
            <label className="font-medium text-sm">Theme</label>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Light
              </Button>
              <Button size="sm" variant="outline">
                Dark
              </Button>
              <Button size="sm" variant="outline">
                System
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium text-sm">Language</label>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                English
              </Button>
              <Button size="sm" variant="outline">
                Spanish
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium text-sm">Notifications</label>
            <div className="text-muted-foreground text-sm">
              Email notifications are enabled
            </div>
          </div>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Reset</DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
