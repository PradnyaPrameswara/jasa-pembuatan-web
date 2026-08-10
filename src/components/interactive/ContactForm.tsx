import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration boundary: frontend only. Do not fake a successful network submission.
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-label="Project Inquiry Form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company / Organization</Label>
          <Input id="company" name="company" placeholder="Acme Corp" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select name="budget" required>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select a budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
              <SelectItem value="25k-50k">$25k - $50k</SelectItem>
              <SelectItem value="50k+">$50k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Tell us about your challenges and goals..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitted}>
        {isSubmitted ? "Integration Boundary Reached" : "Submit Inquiry"}
      </Button>

      <p className="text-xs text-muted-foreground mt-4">
        Integration Boundary: This form is currently frontend-only.
      </p>
    </form>
  );
}
