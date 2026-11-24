import type { ToolFaq } from "@/data/tools";

export const company = {
  name: "AICCELERATING",
  legalName: "AICCELERATING LLC",
  url: "https://aiccelerating.com",
  domain: "aiccelerating.com",
  email: "colin@colinmspeer.com",
  owner: "Colin Speer",
  description:
    "AICCELERATING LLC is an incubator for AI tools for pest control and home services. Every product is used in a business the company operates. Owned by Colin Speer.",
};

export type Faq = ToolFaq;

export const services = [
  {
    id: "finish-your-app",
    href: "/services#finish-your-app",
    contactTopic: "finish-app",
    navLabel: "Finish your app",
    title: "We finish your vibe-coded app",
    summary:
      "You bring the half-working app you already built with AI coding tools. We make that app functional, connect the real systems, harden it, and deploy it.",
    lede: "You already started the app. We finish that app.",
  },
  {
    id: "consulting",
    href: "/services#consulting",
    contactTopic: "consulting",
    navLabel: "Consulting",
    title: "AI consulting",
    summary:
      "We help operating companies decide where AI belongs in the work, then help them put it there. Most of our experience is home services and pest control.",
    lede: "We look at the actual work before anyone buys a tool.",
  },
] as const;

export const contactTopics = [
  { id: "finish-app", label: "Finish my vibe-coded app" },
  { id: "consulting", label: "AI consulting" },
  { id: "pest-school", label: "Partner access — Pest Control School" },
  { id: "home-school", label: "Partner access — Home Service School" },
  { id: "tool", label: "Ask about a specific tool" },
  { id: "other", label: "Something else" },
] as const;

export type ContactTopicId = (typeof contactTopics)[number]["id"];

export const nav = [
  { href: "/tools", label: "Tools" },
  { href: "/services#finish-your-app", label: "Finish your app" },
  { href: "/services#consulting", label: "Consulting" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
] as const;

export const partners = [
  {
    id: "pest-school",
    name: "Pest Control School",
    handle: "pestctrlschool",
    url: null as string | null,
    who: "Pest control companies",
    detail:
      "The group for pest control companies. Member companies can use the tools we build, including PestWize and the phone tools, and the ones still marked Name TBD.",
  },
  {
    id: "home-school",
    name: "Home Service School",
    handle: "homeserviceschool.com",
    url: "https://homeserviceschool.com",
    who: "Home service companies",
    detail:
      "The group for general home services. Member companies can use the same incubator tools, starting with marketing, scheduling, calling, and prospecting.",
  },
] as const;

export const agencies = [
  {
    name: "Swyft Marketing",
    role: "Door-to-door agency",
    detail:
      "Swyft Marketing recruits and runs door-to-door reps. D2D Job is the hiring platform in that operation. This is the agency arm for D2D.",
    toolSlug: "d2d-job",
  },
  {
    name: "Swyft International",
    role: "Virtual assistants and offshore talent",
    detail:
      "Swyft International places virtual assistants and offshore talent. vaccelerating is the platform that placement work runs on.",
    toolSlug: "vaccelerating",
  },
] as const;

export const homeFaqs: Faq[] = [
  {
    question: "What is AICCELERATING?",
    answer:
      "AICCELERATING LLC is an incubator, owned by Colin Speer, that builds AI tools for pest control and home services. The tools are web apps the company uses in its own businesses. Partner companies in Pest Control School and Home Service School can ask for access.",
  },
  {
    question: "What does “used internally” mean?",
    answer:
      "It means a business we operate uses the tool. It does not mean a wall of customer logos. This site does not publish testimonials or usage numbers.",
  },
  {
    question: "Do you sell the tools to the public?",
    answer:
      "There is no public checkout. Member companies in our partner groups can use the tools. Email Colin, or use the contact form, to ask about access.",
  },
  {
    question: "Do you build apps from a blank page?",
    answer:
      "The finishing service starts from an app you already made with a tool such as Lovable, Replit, Bolt, or Cursor. We fix it, connect real systems, harden it, and deploy it. A project that is only an idea is a consulting conversation.",
  },
  {
    question: "What is Swyft?",
    answer:
      "Swyft is the agency arm. Swyft Marketing is the door-to-door agency and uses D2D Job. Swyft International places virtual assistants and offshore talent and uses vaccelerating.",
  },
  {
    question: "Who owns the company?",
    answer:
      "Colin Speer owns AICCELERATING LLC. The contact for the incubator, the services, and partner access is colin@colinmspeer.com.",
  },
];

export const serviceFaqs: Faq[] = [
  {
    question: "Do you rebuild the app from scratch?",
    answer:
      "You bring the app you already started. We finish that version: bugs, a real backend, payments if you charge, hardening, and deploy. We do not throw it out and begin from an empty repository.",
  },
  {
    question: "Which AI builders do you take projects from?",
    answer:
      "Lovable, Replit, Bolt, Cursor, and tools like them. If we can click through the app or read the project, we can usually tell you whether finishing it is the right move.",
  },
  {
    question: "What does “harden it” mean?",
    answer:
      "The parts that break once someone other than the builder uses it: sign-in, permissions, empty states, errors, and the two or three flows the business runs every day. We fix those before we call it deployed.",
  },
  {
    question: "Is consulting only for pest control?",
    answer:
      "Pest control and home services are where we have operated. We will talk to other businesses. We will also say when we are the wrong people.",
  },
  {
    question: "How do we start?",
    answer:
      "Use the contact form and pick the service. For a vibe-coded app, send the URL or say how we can see it. For consulting, say which workflow you want to look at. Colin reads colin@colinmspeer.com.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    question: "Is AICCELERATING a software vendor or an agency?",
    answer:
      "It is an incubator. We build tools and use them in businesses we operate. Swyft Marketing and Swyft International are the agency arm that commercializes door-to-door hiring and talent placement. Partner groups get access to the tools.",
  },
  {
    question: "Which industries do you build for?",
    answer:
      "Pest control and home services first. The work is phones, routes, hiring, reviews, and sales. Other industries are not the point of this site.",
  },
  {
    question: "How does a tool leave the incubator?",
    answer:
      "We use it ourselves first. When the public name is ready, the Name TBD stamp comes off. Partner companies in the schools can use a tool before the brand is finished. That is arranged, not launched from a pricing page.",
  },
];

export const partnerFaqs: Faq[] = [
  {
    question: "Who gets the tools?",
    answer:
      "Member companies in Pest Control School and Home Service School. Pest Control School is for pest control companies. Home Service School is for general home services.",
  },
  {
    question: "Is there a price on this site?",
    answer:
      "No. Access is arranged with the group. This page is not an offer with a published license fee.",
  },
  {
    question: "Do members get unfinished tools?",
    answer:
      "They can ask. Tools marked Name TBD are in use internally and do not have a final public name. We would rather say that than pretend every product is a finished brand.",
  },
  {
    question: "How do we apply?",
    answer:
      "Use the contact form and choose Pest Control School or Home Service School. Say whether you are already a member or you want to join. The note goes to colin@colinmspeer.com.",
  },
];

export const reliabilityPoints = [
  {
    title: "We use the software ourselves",
    detail:
      "Every tool on this site is in a business we operate. Swyft Marketing hires with D2D Job. Swyft International places people with vaccelerating. PestWize is in our pest control sales. The phone tools take real calls.",
  },
  {
    title: "A placeholder is labeled",
    detail:
      "If the public name is not final, the card says Name TBD. The tool can still be in use. The brand is what is unfinished.",
  },
  {
    title: "We do not invent proof",
    detail:
      "No customer logo wall, no testimonials, no uptime badge, no percentage we have not measured. If a number matters to you, ask, and we will tell you whether we have it.",
  },
  {
    title: "Broken in our company means it is not done",
    detail:
      "We find out a tool fails when our own people are on it. That is the test we trust. We do not call a demo finished and hand it to a partner.",
  },
];
