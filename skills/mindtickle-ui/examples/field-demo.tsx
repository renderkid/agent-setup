import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function FieldDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" placeholder="Enter your email" type="email" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  );
}
