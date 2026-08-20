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

const fieldClassName =
  "border-white/18 bg-white/[0.07] text-white placeholder:text-white/38 shadow-none backdrop-blur-xl focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-cyan-spectrum/45";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Integration boundary: frontend only. Do not fake a successful network submission.
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
      aria-label="Project inquiry form"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="name" className="text-sm font-medium text-white/78">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="email" className="text-sm font-medium text-white/78">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="company" className="text-sm font-medium text-white/78">
            Company / Organization
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Company name"
            className={fieldClassName}
          />
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="budget" className="text-sm font-medium text-white/78">
            Budget range
          </Label>
          <Select name="budget" required>
            <SelectTrigger id="budget" className={`${fieldClassName} w-full`}>
              <SelectValue placeholder="Select a budget" />
            </SelectTrigger>
            <SelectContent className="border-white/16 bg-[#07134d]/95 text-white shadow-2xl backdrop-blur-2xl">
              <SelectItem value="not-sure">Not sure yet</SelectItem>
              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
              <SelectItem value="25k-50k">$25k - $50k</SelectItem>
              <SelectItem value="50k+">$50k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="description" className="text-sm font-medium text-white/78">
          Project description
        </Label>
        <Textarea
          id="description"
          name="description"
          rows={6}
          required
          placeholder="What are you building, what is not working today, and what outcome matters most?"
          className={`${fieldClassName} min-h-36 resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-white/14 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-white/44">
          Frontend integration boundary: submission wiring is intentionally not simulated.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitted}>
          {isSubmitted ? "Integration boundary reached" : "Submit inquiry"}
        </Button>
      </div>
    </form>
  );
}
