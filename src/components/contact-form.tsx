"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { company, contactTopics, type ContactTopicId } from "@/data/site";
import { toolLabel, tools } from "@/data/tools";

const topicItems = contactTopics.map((topic) => ({
  value: topic.id,
  label: topic.label,
}));

const toolItems = tools.map((tool) => ({
  value: tool.slug,
  label: toolLabel(tool),
}));

const topicIds = new Set<string>(contactTopics.map((topic) => topic.id));
const toolSlugs = new Set(tools.map((tool) => tool.slug));

function isTopic(value: string): value is ContactTopicId {
  return topicIds.has(value);
}

export function ContactFormGate() {
  const params = useSearchParams();
  const topicParam = params.get("topic") ?? "";
  const toolParam = params.get("tool") ?? "";
  const tool = toolSlugs.has(toolParam) ? toolParam : "";
  const topic = isTopic(topicParam) ? topicParam : tool ? "tool" : "";
  return <ContactForm initialTopic={topic} initialTool={tool} />;
}

/**
 * TODO(HighLevel): replace this mailto form with a HighLevel embed when the
 * form id is ready. Keep the same fields: name, email, company, topic, tool,
 * message. Until then the form posts nowhere. Submit opens an email to
 * colin@colinmspeer.com.
 */
export function ContactForm({
  initialTopic = "",
  initialTool = "",
}: {
  initialTopic?: ContactTopicId | "";
  initialTool?: string;
}) {
  const [topic, setTopic] = useState<ContactTopicId | "">(initialTopic);
  const [toolSlug, setToolSlug] = useState(initialTool);
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpened(false);
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organization = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!topic) {
      setError("Choose what you need.");
      return;
    }
    if (topic === "tool" && !toolSlug) {
      setError("Choose a tool.");
      return;
    }
    if (!name || !email || !message) {
      setError("Name, email, and a message are required.");
      return;
    }

    const topicLabel =
      contactTopics.find((item) => item.id === topic)?.label ?? topic;
    const toolName = tools.find((item) => item.slug === toolSlug)?.name;
    const subject = `AICCELERATING — ${topicLabel}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${organization || "(not given)"}`,
      `Topic: ${topicLabel}`,
      topic === "tool"
        ? `Tool: ${toolItems.find((item) => item.value === toolSlug)?.label ?? toolName ?? toolSlug}`
        : "",
      "",
      message,
    ]
      .filter((line) => line !== "")
      .join("\n");

    setError("");
    setOpened(true);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required className="h-12 px-3 text-base md:text-base" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-12 px-3 text-base md:text-base"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Company <span className="font-normal text-ink-soft">(optional)</span></Label>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          className="h-12 px-3 text-base md:text-base"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="topic">What do you need?</Label>
        <Select
          value={topic || null}
          items={topicItems}
          onValueChange={(value) => {
            const next = typeof value === "string" && isTopic(value) ? value : "";
            setTopic(next);
            if (next !== "tool") setToolSlug("");
            setError("");
          }}
        >
          <SelectTrigger id="topic" className="h-12 w-full px-3 text-base">
            <SelectValue placeholder="Choose a service or question" />
          </SelectTrigger>
          <SelectContent>
            {topicItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {topic === "tool" ? (
        <div className="grid gap-2">
          <Label htmlFor="tool">Which tool?</Label>
          <Select
            value={toolSlug || null}
            items={toolItems}
            onValueChange={(value) => {
              setToolSlug(typeof value === "string" ? value : "");
              setError("");
            }}
          >
            <SelectTrigger id="tool" className="h-12 w-full px-3 text-base">
              <SelectValue placeholder="Choose a tool" />
            </SelectTrigger>
            <SelectContent>
              {toolItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : null}
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="min-h-36 px-3 text-base md:text-base"
          placeholder="For an app, include the URL. For consulting, name the workflow. For partner access, say which group."
        />
      </div>
      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      {opened ? (
        <p className="text-sm text-ink-soft" role="status">
          Opening your email app with this message addressed to {company.email}. If nothing opens, write to that address directly.
        </p>
      ) : (
        <p className="text-sm text-ink-soft">
          This form does not store your message on the site. It opens an email to {company.email}.
        </p>
      )}
      <Button type="submit" className="h-12 w-full px-5 text-[15px] sm:w-auto">
        Email Colin
      </Button>
    </form>
  );
}
