import { AlertCircle, Check } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/default/ui/input-group";

export default function InputGroupValidation() {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <InputGroup>
          <InputGroupInput
            className="border-success-muted focus-visible:ring-success-muted/50"
            defaultValue="john.doe@example.com"
            type="email"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <Check className="text-success" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-success text-sm">Email is valid</p>
      </div>
      <div className="space-y-1.5">
        <InputGroup>
          <InputGroupInput
            aria-invalid="true"
            defaultValue="invalid-email"
            type="email"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <AlertCircle className="text-destructive" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-destructive text-sm">
          Please enter a valid email address
        </p>
      </div>
    </div>
  );
}
