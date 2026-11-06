import React from "react";
import { profile } from "@/data/profile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailCheck } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const fieldClassName =
  "border-white/18 bg-white/[0.07] text-white placeholder:text-white/38 shadow-none backdrop-blur-xl focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-cyan-spectrum/45";

export function ContactForm() {
  const [draftRequested, setDraftRequested] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("website") ?? "").trim()) return;

    const value = (name: string) => String(data.get(name) ?? "").trim();
    const name = value("name");
    const email = value("email");
    const inquiry = value("inquiry");
    const description = value("description");
    if (!name || !email || !inquiry || !description) return;

    const subject = "Portfolio inquiry — " + inquiry + " — " + name;
    const body = [
      "Name: " + name,
      "Email: " + email,
      "Company / organization: " + (value("company") || "Not provided"),
      "Inquiry type: " + inquiry,
      "Budget: " + (value("budget") || "Not sure yet"),
      "",
      "Details:",
      description,
    ].join("\n");

    // On static hosting, launch the visitor's email app. This does not send
    // a network request or imply that their message was delivered.
    window.location.href = "mailto:" + profile.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    setDraftRequested(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7"
      aria-label="Opportunity or project inquiry form">
      <div aria-hidden="true"
        className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden opacity-0">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="name" className="text-sm font-medium text-white/78">Name</Label>
          <Input id="name" name="name" required autoComplete="name"
            placeholder="Your name" className={fieldClassName} />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="email" className="text-sm font-medium text-white/78">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email"
            placeholder="you@company.com" className={fieldClassName} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="company" className="text-sm font-medium text-white/78">Company / Organization</Label>
          <Input id="company" name="company" autoComplete="organization"
            placeholder="Optional" className={fieldClassName} />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="inquiry" className="text-sm font-medium text-white/78">Inquiry type</Label>
          <Select name="inquiry" required>
            <SelectTrigger id="inquiry" className={fieldClassName + " w-full"}>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent className="border-white/16 bg-[#07134d]/95 text-white shadow-2xl backdrop-blur-2xl">
              <SelectItem value="Employment opportunity">Employment opportunity</SelectItem>
              <SelectItem value="Website development">Website development</SelectItem>
              <SelectItem value="Web application">Web application</SelectItem>
              <SelectItem value="E-commerce">E-commerce</SelectItem>
              <SelectItem value="Other">Other / not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="budget" className="text-sm font-medium text-white/78">Budget range (optional)</Label>
        <Select name="budget">
          <SelectTrigger id="budget" className={fieldClassName + " w-full"}>
            <SelectValue placeholder="Not sure yet" />
          </SelectTrigger>
          <SelectContent className="border-white/16 bg-[#07134d]/95 text-white shadow-2xl backdrop-blur-2xl">
            <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            <SelectItem value="$10k - $25k">$10k - $25k</SelectItem>
            <SelectItem value="$25k - $50k">$25k - $50k</SelectItem>
            <SelectItem value="$50k+">$50k+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="description" className="text-sm font-medium text-white/78">
          Opportunity or project details
        </Label>
        <Textarea id="description" name="description" rows={6} required
          placeholder="Describe the role, project, timeline, or expected outcome."
          className={fieldClassName + " min-h-36 resize-y"} />
      </div>

      <div className="flex flex-col gap-4 border-t border-white/14 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-white/58">
          Opens an email draft in your mail app. The website does not send or store messages.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Compose email
        </Button>
      </div>

      {draftRequested && (
        <Alert className="border-white/20 bg-white/[0.08] text-white">
          <MailCheck aria-hidden="true" className="size-4 text-cyan-spectrum" />
          <AlertTitle>Check your email app</AlertTitle>
          <AlertDescription className="text-white/75">
            No message was sent automatically. Review and send the draft to{" "}
            {profile.email}. If your email app did not open, use{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a> instead.
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
