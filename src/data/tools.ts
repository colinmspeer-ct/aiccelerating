/**
 * Product catalog for aiccelerating.com.
 *
 * Edit this file to rename a product, attach a domain, or rewrite a tool page.
 * Names and domains are not hardcoded anywhere else.
 *
 * - nameTbd: true  → the site stamps the tool "Name TBD". `name` must be NAME_TBD.
 * - nameTbd: false → `name` is public. `domain` is a bare hostname, or empty when `domainTbd` is true.
 * - domainCandidates: hostnames still being chosen. Shown only when `domainTbd` is true.
 * - redirectsFrom: bare hostnames that redirect to `domain`.
 * - previewUrl: the one temporary preview address. Swap it here. The page labels it Preview.
 * - image: a path under /public, shown on the card and the tool page.
 * - editorNotes is never rendered. Use it for naming ideas or reference links.
 *
 * Describe our product. Do not name competing products in any field on this page.
 */

export const NAME_TBD = "Name TBD";

export type ToolFaq = {
  question: string;
  answer: string;
};

export type Tool = {
  slug: string;
  name: string;
  nameTbd: boolean;
  /** Descriptive title. Subtitle for named products, heading when the name is TBD. */
  workingTitle: string;
  /** Bare hostname, no protocol. Empty string until a real domain exists. */
  domain: string;
  /** True when the product name is public and the hostname is not. */
  domainTbd?: boolean;
  /** Candidate hostnames. Rendered only while domainTbd is true. */
  domainCandidates?: string[];
  /** Bare hostnames that redirect to `domain`. */
  redirectsFrom?: string[];
  /**
   * Temporary preview URL. This is the only place that address lives.
   * Replace it when the tunnel or the launch URL changes.
   */
  previewUrl?: string;
  /** Card and page image, a public path such as /tools/example.png. */
  image?: string;
  imageAlt?: string;
  category: string;
  /** One sentence. Shown first on the tool page. */
  summary: string;
  description: string[];
  capabilities: { title: string; detail: string }[];
  operator: {
    name: string;
    detail: string;
    /** Featured in the “built and battle-tested” section. */
    featured?: boolean;
  };
  usedInternally: string;
  audience: string;
  /** One honest limit. No metrics we have not measured. */
  limit: string;
  related: string[];
  faqs: ToolFaq[];
  /** Not rendered. */
  editorNotes: string;
};

export const tools: Tool[] = [
  {
    slug: "d2d-job",
    name: "D2D Job",
    nameTbd: false,
    workingTitle: "Door-to-door recruiting and hiring",
    domain: "d2djob.com",
    category: "Hiring",
    summary:
      "D2D Job is the platform Swyft Marketing uses to recruit and hire door-to-door sales reps.",
    description: [
      "D2D Job does one job: move a person from interested in door-to-door sales to hired onto a team.",
      "Swyft Marketing is the door-to-door agency. D2D Job is how that agency recruits. It is built for rep hiring, with fast cycles and a clear yes or no, rather than a general office applicant tracker.",
      "We use it in that business. Partner companies can ask for access. There is no public signup on this site.",
    ],
    capabilities: [
      {
        title: "Recruiting for door-to-door roles",
        detail:
          "Roles, applicants, and conversations aimed at people who will knock doors, not at generic office seats.",
      },
      {
        title: "A path to hired",
        detail:
          "A recruiting team can move someone from applicant to hired rep without inventing a process in a spreadsheet.",
      },
      {
        title: "Built for volume",
        detail:
          "D2D hiring is a lot of applicants and short decisions. The platform is shaped for that pace.",
      },
    ],
    operator: {
      name: "Swyft Marketing",
      detail:
        "Swyft Marketing is the door-to-door agency. D2D Job is the hiring platform inside that operation.",
      featured: true,
    },
    usedInternally: "Used by Swyft Marketing to hire door-to-door reps.",
    audience: "Door-to-door sales organizations and the agencies that staff them.",
    limit:
      "We do not publish applicant counts, hire rates, or time-to-hire. The claim is that Swyft Marketing uses it.",
    related: ["outbound-rep", "pestwize"],
    faqs: [
      {
        question: "Who uses D2D Job?",
        answer:
          "Swyft Marketing uses D2D Job to recruit and hire door-to-door reps. Partner companies in our groups can ask for access. It is not a public signup.",
      },
      {
        question: "Is D2D Job a general hiring tool?",
        answer:
          "No. D2D Job is for door-to-door rep recruiting and hiring. Office hiring is a different problem, and this product does not pretend to cover it.",
      },
      {
        question: "Where does the product live?",
        answer:
          "The product site is d2djob.com. AICCELERATING incubates it. Swyft Marketing operates the agency that depends on it.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "vaccelerating",
    name: "vaccelerating",
    nameTbd: false,
    workingTitle: "Virtual assistant and offshore talent placement",
    domain: "vaccelerating.com",
    category: "Talent",
    summary:
      "vaccelerating places virtual assistants and offshore talent. Swyft International is the agency that runs that work.",
    description: [
      "vaccelerating is the placement platform for virtual assistants and offshore talent.",
      "Swyft International is the operating agency. The software exists because that agency places people, not because a marketplace slide needed a product around it.",
      "Companies come for ongoing help. The agency matches them with assistants and offshore talent and keeps the placement moving. We use it in that business.",
    ],
    capabilities: [
      {
        title: "Placement, not a freelancer directory",
        detail:
          "Swyft International places virtual assistants and offshore talent. The platform is how that placement is run.",
      },
      {
        title: "Ongoing roles",
        detail:
          "Built for operators who need someone in the work week after week, not a one-off gig.",
      },
      {
        title: "An agency behind the software",
        detail:
          "A person at Swyft International owns the match. The software does not pretend to replace that judgment.",
      },
    ],
    operator: {
      name: "Swyft International",
      detail:
        "Swyft International places virtual assistants and offshore talent. vaccelerating is the platform that work runs on.",
      featured: true,
    },
    usedInternally:
      "Used by Swyft International to place virtual assistants and offshore talent.",
    audience:
      "Companies that need virtual assistants or offshore talent, and the agency that places them.",
    limit:
      "We do not publish placement counts, retention, or salary benchmarks. The claim is that Swyft International uses it.",
    related: ["home-service-marketing", "d2d-job"],
    faqs: [
      {
        question: "Who operates vaccelerating?",
        answer:
          "Swyft International operates the placement practice. AICCELERATING incubates the tool. The agency does the matching.",
      },
      {
        question: "Is vaccelerating a job board?",
        answer:
          "It is a placement practice with software around it. Swyft International places virtual assistants and offshore talent. It is not an open board of freelance gigs.",
      },
      {
        question: "Can a partner company hire through it?",
        answer:
          "Ask us. Access is arranged, not sold from a checkout on this site. Start at the contact page and choose the topic that fits.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "home-service-marketing",
    name: NAME_TBD,
    nameTbd: true,
    workingTitle: "Marketing, websites, and reviews",
    domain: "",
    category: "Marketing",
    summary:
      "An AI platform we use for home service marketing, the company website, and reviews. The public name is not final.",
    description: [
      "This is the marketing tool we use for home service companies: the website, the marketing around it, and the reviews that decide whether a homeowner calls.",
      "The public name and domain are not final. The tool is listed because we already use it, and partner companies should know it is in the incubator.",
      "A home service company lives on the last few reviews and on whether the site makes the phone ring. This product is aimed at that, as one system, rather than a pile of disconnected logins.",
    ],
    capabilities: [
      {
        title: "The company website",
        detail:
          "A site a home service company can send a homeowner to, kept in the same place as the marketing.",
      },
      {
        title: "Marketing around that site",
        detail:
          "The work that brings people to the site, run next to the site instead of in a separate stack we then forget.",
      },
      {
        title: "Reviews",
        detail:
          "A workflow for the reviews a home service company depends on, because the last ten customers often decide the next call.",
      },
    ],
    operator: {
      name: "Our own companies",
      detail:
        "We use this inside businesses we operate. The public product name and domain are not final.",
    },
    usedInternally: "Used in our own home service marketing.",
    audience: "Home service companies, starting with our own work and our partner groups.",
    limit:
      "The name is a placeholder. We do not publish site counts, review totals, or traffic. The claim is that we use it.",
    related: ["pestwize", "field-service", "home-services-school"],
    faqs: [
      {
        question: "What is this product called?",
        answer:
          "The public name is not final. On this site it is marked Name TBD. The working description is marketing, websites, and reviews for home service companies.",
      },
      {
        question: "Can I buy it today?",
        answer:
          "There is no public checkout. Partner companies in Home Services School and Pest Control School can ask for access from the contact page.",
      },
      {
        question: "Is the website builder separate from reviews?",
        answer:
          "They are one platform on purpose. The site, the marketing, and the reviews are the same problem for a home service company: will the next homeowner call?",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "pestwize",
    name: "PestWize",
    nameTbd: false,
    workingTitle: "Pest control growth and sales",
    domain: "pestwize.com",
    category: "Sales",
    summary:
      "PestWize is our pest control growth and sales tool. A pest request becomes covered work, and a one-time visit can become an account that stays.",
    description: [
      "PestWize is how we sell and grow pest control. A homeowner, a resident, or a property contact reports a pest problem. That request becomes a record the company can accept, cover, and follow. It does not sit in a voicemail.",
      "The growth is in what happens after the first visit. PestWize is built for coverage and repeat service, so the account stays readable: what was requested, what was done, and what should be sold next. A lot of pest revenue sits in groups of homes and property accounts, not only in a single house call.",
      "This is a different job from the field CRM. That tool runs the customer record, the schedule, and the route. PestWize is the front of the business: the request, the sale, and the reason the account is still there next quarter. We use it in our own companies. The product site is pestwize.com.",
    ],
    capabilities: [
      {
        title: "Pest requests as sales intake",
        detail:
          "A pest problem arrives as a record, with who asked and what they are seeing, instead of a missed call.",
      },
      {
        title: "From request to covered work",
        detail:
          "The company can accept the request and track it through a completed service, including what was done.",
      },
      {
        title: "Accounts that stay",
        detail:
          "Recurring coverage sits next to the one-time job, so a request can turn into a plan instead of a one-off spray.",
      },
      {
        title: "A book you can sell from",
        detail:
          "Homes and property accounts stay visible: what is covered, what came in, and where the next sales conversation is.",
      },
    ],
    operator: {
      name: "Our own companies",
      detail:
        "We use PestWize in our own pest control sales. It is not a case study of someone else’s company.",
    },
    usedInternally: "Used in our own pest control sales.",
    audience:
      "Pest control companies selling to homeowners and to property accounts.",
    limit:
      "We do not publish close rates, door counts, or an integration list. The claim is that we use PestWize ourselves.",
    related: ["field-service", "inbound-rep", "pest-control-school"],
    faqs: [
      {
        question: "What is PestWize?",
        answer:
          "PestWize is AICCELERATING’s pest control growth and sales tool. A request becomes covered work, and the account can stay on a plan. We use it in our own companies. The product site is pestwize.com.",
      },
      {
        question: "How is PestWize different from the field service CRM?",
        answer:
          "PestWize is for selling and keeping pest accounts: the request, the coverage, and the next sale. The field service tool, still marked Name TBD, is the CRM, the schedule, and the route.",
      },
      {
        question: "Can another pest control company use PestWize?",
        answer:
          "Partner companies in Pest Control School can ask for access. There is no public checkout on this site.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "field-service",
    name: NAME_TBD,
    nameTbd: true,
    workingTitle: "Field service CRM, scheduling, and routing",
    domain: "",
    category: "Operations",
    summary:
      "A field service CRM with scheduling and routing for companies that send technicians to homes. The public name is not final.",
    description: [
      "This is the operating tool for a route: the customer record, the schedule, and the order of stops.",
      "It is built for pest control and home services, where the day is a truck, a technician, and a list of houses. The office and the person in the field need the same record.",
      "The public name is not final. Sales and account growth live in PestWize. This tool is what happens after the work is sold: who goes, when, and in what order.",
    ],
    capabilities: [
      {
        title: "One customer and job record",
        detail:
          "The office and the technician share the same account, job, and notes, instead of a text thread.",
      },
      {
        title: "Scheduling for a service day",
        detail:
          "The day fills the way a service company actually fills it, with appointments that have to land in a real afternoon.",
      },
      {
        title: "Routing",
        detail:
          "Stops in an order a technician can drive, rather than a pile of appointments with no sequence.",
      },
    ],
    operator: {
      name: "Our own companies",
      detail:
        "We use this in our own field operations. The public name and domain are not final.",
    },
    usedInternally: "Used to schedule and route our own field work.",
    audience:
      "Pest control and home service companies that run technicians to homes.",
    limit:
      "We do not publish a miles-saved figure or an on-time percentage. The name is still a placeholder. The claim is that we run routes with it.",
    related: ["pestwize", "inbound-rep", "home-service-marketing"],
    faqs: [
      {
        question: "What is this tool called?",
        answer:
          "The public name is not final. It is marked Name TBD. It is the field service CRM, scheduling, and routing tool in the incubator.",
      },
      {
        question: "Does this replace PestWize?",
        answer:
          "No. PestWize is growth and sales: requests, coverage, and keeping the account. This tool is the CRM, the schedule, and the route once the work exists.",
      },
      {
        question: "Who is it for?",
        answer:
          "Companies that send technicians to homes, starting with pest control and home services. Partner companies can ask for access.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "outbound-rep",
    name: "OutboundRep",
    nameTbd: false,
    workingTitle: "AI outbound dialing",
    domain: "outboundrep.com",
    category: "Calling",
    summary:
      "OutboundRep is the AI outbound dialer we use when a team has to call a list.",
    description: [
      "OutboundRep dials outbound. It is a power dialer with AI on the parts of the work that should not require a person to click next all day.",
      "People still sell. The dialer and the AI handle the mechanical part of working a list: who is next, what we already know, and getting a human into a live conversation.",
      "We use it in our own businesses. The product site is outboundrep.com. Lists are prepared in the lead enrichment tool, which is still marked Name TBD.",
    ],
    capabilities: [
      {
        title: "Outbound dialing for a real list",
        detail:
          "A team can work through prospects without running the session from a spreadsheet and a desk phone.",
      },
      {
        title: "AI on the mechanical parts",
        detail:
          "The software takes the busywork of a dialing session so the person spends time talking.",
      },
      {
        title: "Built where we already call",
        detail:
          "Used in our pest control and home service work, and in the agencies that sell into those industries.",
      },
    ],
    operator: {
      name: "Our own companies",
      detail:
        "We use OutboundRep when our own teams call a list. It is not a quoted case study.",
    },
    usedInternally: "Used by our own teams to call outbound lists.",
    audience: "Sales teams that live on the phone.",
    limit:
      "We do not publish connect rates, meetings booked, or calls per hour. The claim is that we dial with it.",
    related: ["lead-enrichment", "inbound-rep", "d2d-job"],
    faqs: [
      {
        question: "Is OutboundRep a call center?",
        answer:
          "OutboundRep is software for outbound calling. People still have the sales conversation. The dialer and the AI handle working the list.",
      },
      {
        question: "Where do the leads come from?",
        answer:
          "From lists we build. The lead enrichment and prospecting tool, still marked Name TBD, is the data side. OutboundRep is the dialer.",
      },
      {
        question: "How do we get access?",
        answer:
          "The product site is outboundrep.com. Access for partner companies is arranged through AICCELERATING, not an open signup on this page.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "inbound-rep",
    name: "InboundRep",
    nameTbd: false,
    workingTitle: "AI inbound call handling",
    domain: "inboundrep.com",
    category: "Calling",
    summary:
      "InboundRep answers inbound calls with AI. For pest control it also handles cancellation save attempts and reservice requests.",
    description: [
      "InboundRep picks up when a customer calls. The job is to handle the call, not to take a message and hope someone calls back.",
      "For pest control, two calls matter as much as a new lead. A customer trying to cancel, and a customer who needs the service done again. InboundRep is built to work both: a real save attempt on a cancellation, and a reservice request that becomes a scheduled return.",
      "We use it ourselves. The product site is inboundrep.com. How a given company wants a person in the loop is part of setup, and we do not pretend every caller has the same path.",
    ],
    capabilities: [
      {
        title: "Inbound calls for service companies",
        detail:
          "The phone is answered and the request is handled, which is the job an office misses when everyone is on a route.",
      },
      {
        title: "Cancellation save attempts",
        detail:
          "When a pest control customer calls to cancel, InboundRep is built to try to keep the account, not only to log the loss.",
      },
      {
        title: "Reservice requests",
        detail:
          "A missed or failed service can become a scheduled return instead of a customer who gives up.",
      },
    ],
    operator: {
      name: "Our own companies",
      detail:
        "We use InboundRep on our own inbound calls, including pest control cancellations and reservice.",
    },
    usedInternally:
      "Used on our own inbound calls, including pest control saves and reservice.",
    audience:
      "Service companies that take inbound calls, with pest control workflows called out because that is where we run it.",
    limit:
      "We do not publish a save rate, a containment rate, or a handle time. Those numbers are easy to invent. We use the product on real calls.",
    related: ["outbound-rep", "pestwize", "field-service"],
    faqs: [
      {
        question: "What is a save attempt?",
        answer:
          "When a pest control customer calls to cancel, someone has to actually try to keep the account. InboundRep is built for that conversation, not only for recording that the customer left.",
      },
      {
        question: "What is a reservice request?",
        answer:
          "A customer calling because the service failed or was missed and they need a technician back. InboundRep handles that request so it can be scheduled, not lost.",
      },
      {
        question: "Does a person ever get the call?",
        answer:
          "InboundRep is AI call handling. Whether a human joins, and when, is part of how a company sets it up. We do not claim one script for every business.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "lead-enrichment",
    name: NAME_TBD,
    nameTbd: true,
    workingTitle: "Lead enrichment and prospecting",
    domain: "",
    category: "Prospecting",
    summary:
      "A lead enrichment and prospecting tool for finding who is worth calling and filling in the data before the dial. The public name is not final.",
    description: [
      "Before anyone dials, someone has to know which company, which person, and how to reach them. This tool does that enrichment and prospecting work.",
      "We use it to build lists for our own outbound. OutboundRep is the dialer. This product is the data in front of the dialer.",
      "The public name and domain are not final. It is in the incubator because we already depend on it, not because the brand is ready.",
    ],
    capabilities: [
      {
        title: "Prospecting",
        detail:
          "Find companies and people that match a market, including pest control and home services.",
      },
      {
        title: "Enrichment",
        detail:
          "Fill in the contact and company data so a list is something a person can actually call.",
      },
      {
        title: "A list the dialer can use",
        detail:
          "Hands a cleaner list to OutboundRep and to the people who sell, instead of a CSV nobody trusts.",
      },
    ],
    operator: {
      name: "Our own companies",
      detail:
        "We use this to build our own prospect lists. The public name and domain are not final.",
    },
    usedInternally: "Used to build the lists our own teams call.",
    audience: "Teams that prospect, including ours.",
    limit:
      "We do not publish a database size, a match rate, or a source list. The name is still a placeholder. The claim is that we prospect with it.",
    related: ["outbound-rep", "pestwize", "d2d-job"],
    faqs: [
      {
        question: "What is this product called?",
        answer:
          "The public name is not final. It is marked Name TBD. It is our lead enrichment and prospecting tool.",
      },
      {
        question: "Does this tool send the email or make the call?",
        answer:
          "No. It prepares the lead. OutboundRep is the dialer. This tool is the data before the call.",
      },
      {
        question: "Where does the data come from?",
        answer:
          "From enrichment and prospecting workflows we run for our own lists. We do not describe a private database size on this page.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "pest-control-school",
    name: "Pest Control School",
    nameTbd: false,
    workingTitle: "Community and courses for pest control operators",
    domain: "pestctrlschool.com",
    redirectsFrom: ["pestcontrolschool.com"],
    previewUrl: "https://concrete-kenneth-acquisitions-paintings.trycloudflare.com",
    image: "/tools/pest-control-school.png",
    imageAlt: "Pest Control School homepage, with the Everyone feed and pest category schools",
    category: "Community",
    summary:
      "Pest Control School is the community and course platform for pest control operators. The permanent domain is pestctrlschool.com. The link marked Preview is a temporary address.",
    description: [
      "Pest Control School is where a pest control operator reads the short posts, then goes into a school for the pest in front of them, or for the business around the work.",
      "Everyone is the short feed: text, images, and video. Each pest category has its own school: rodents, termites, mosquitoes, bed bugs, stinging insects, general pest, and wildlife. The business schools cover sales and door-to-door, local SEO and Google Business Profile, marketing, operations, hiring, and buying or selling a pest business.",
      "Courses keep a member’s progress. A playbook is a PDF of the current strategy, and it is regenerated when Colin updates that strategy. Membership billing runs on Stripe. A creator earns half of what their course sells. The preview does not charge a card.",
    ],
    capabilities: [
      {
        title: "Everyone feed",
        detail:
          "Short posts with text, images, and video, in front of the deeper schools.",
      },
      {
        title: "A school per pest, and for the business",
        detail:
          "Rodents, termites, mosquitoes, bed bugs, stinging insects, general pest, and wildlife, plus sales, local SEO, marketing, operations, hiring, and buying or selling a company.",
      },
      {
        title: "Courses with progress",
        detail:
          "A member can move through a course and see what they have finished.",
      },
      {
        title: "Living playbooks",
        detail:
          "The PDF is the current strategy. When Colin updates it, the playbook is regenerated.",
      },
      {
        title: "Stripe memberships, half to the creator",
        detail:
          "Membership is billed on Stripe. A creator earns 50% of the sales of a course they sell. The preview does not charge a card.",
      },
    ],
    operator: {
      name: "AICCELERATING",
      detail:
        "Colin Speer runs Pest Control School. He writes the strategy, and the playbooks follow that writing.",
    },
    usedInternally: "Run by Colin Speer for pest control operators in our group.",
    audience: "Pest control operators, and the people who teach them.",
    limit:
      "The Preview link is a temporary address. We do not publish a member count, and the preview does not charge a card.",
    related: ["home-services-school", "pestwize", "d2d-job"],
    faqs: [
      {
        question: "What is Pest Control School?",
        answer:
          "It is a community and course platform for pest control operators. There is a short Everyone feed, a school for each pest category, business schools, courses that track progress, and playbook PDFs that regenerate when the strategy changes.",
      },
      {
        question: "Which address is the real one?",
        answer:
          "pestctrlschool.com is the domain. pestcontrolschool.com redirects to it. The link marked Preview is temporary and will be replaced.",
      },
      {
        question: "How do creators get paid?",
        answer:
          "A creator earns 50% of the sales of a course they sell. Membership billing runs on Stripe. The current preview does not charge a card.",
      },
      {
        question: "What is a living playbook?",
        answer:
          "A PDF of the strategy as it stands. When Colin updates that strategy, the PDF is regenerated, so the download is the latest version.",
      },
    ],
    editorNotes: "",
  },
  {
    slug: "home-services-school",
    name: "Home Services School",
    nameTbd: false,
    workingTitle: "Community and courses for home service trades",
    domain: "",
    domainTbd: true,
    domainCandidates: ["homeservicesschool.com", "homeserviceschool.com"],
    previewUrl: "https://solar-regions-surprised-silent.trycloudflare.com",
    image: "/tools/home-services-school.png",
    imageAlt: "Home Services School homepage, with trade schools for roofing, windows, and the rest",
    category: "Community",
    summary:
      "Home Services School is the sister platform to Pest Control School, for home service trades. The public domain is not chosen yet. The link marked Preview is a temporary address.",
    description: [
      "Home Services School is the same kind of community for the trades around the house. Each trade has a school: roofing and exteriors, windows, lawn, water treatment, HVAC, plumbing, solar, and home security.",
      "It shares the business schools with Pest Control School, and it shares the Everyone feed, the living playbooks, and the creator split. A creator earns half of what their course sells.",
      "The public hostname is not final. The two names still in the running are homeservicesschool.com and homeserviceschool.com. Membership billing is Stripe, and the preview does not charge a card.",
    ],
    capabilities: [
      {
        title: "A school for each trade",
        detail:
          "Roofing and exteriors, windows, lawn, water treatment, HVAC, plumbing, solar, and home security.",
      },
      {
        title: "The same business schools",
        detail:
          "Sales, local search, marketing, operations, and hiring sit alongside the trade schools, shared with Pest Control School.",
      },
      {
        title: "Feed, courses, and playbooks",
        detail:
          "Short posts with text, images, and video. Courses track progress. Playbook PDFs regenerate when the strategy is updated.",
      },
      {
        title: "Half of course sales to the creator",
        detail:
          "A creator earns 50% of the sales of a course they sell. Membership billing runs on Stripe. The preview does not charge a card.",
      },
    ],
    operator: {
      name: "AICCELERATING",
      detail:
        "Colin Speer runs Home Services School beside Pest Control School. The two share the business schools and the playbook model.",
    },
    usedInternally: "Run by Colin Speer as the sister school to Pest Control School.",
    audience: "Owners and operators in home service trades, and the people who teach them.",
    limit:
      "The domain is not chosen. The Preview link is a temporary address. We do not publish a member count, and the preview does not charge a card.",
    related: ["pest-control-school", "home-service-marketing", "field-service"],
    faqs: [
      {
        question: "What is Home Services School?",
        answer:
          "It is the sister platform to Pest Control School, for home service trades. Each trade has a school. The feed, the business schools, the playbooks, and the 50% creator share are shared with Pest Control School.",
      },
      {
        question: "What is the domain?",
        answer:
          "Not chosen yet. The two hostnames still in the running are homeservicesschool.com and homeserviceschool.com. Neither is the launch address until one of them is.",
      },
      {
        question: "Is the Preview link the permanent site?",
        answer:
          "No. Preview is a temporary address. It will be replaced when the domain is chosen.",
      },
      {
        question: "Which trades have a school?",
        answer:
          "Roofing and exteriors, windows, lawn, water treatment, HVAC, plumbing, solar, and home security.",
      },
    ],
    editorNotes: "",
  },
];

function assertCatalog(catalog: Tool[]) {
  const slugs = new Set<string>();
  for (const tool of catalog) {
    if (slugs.has(tool.slug)) {
      throw new Error(`Duplicate tool slug: ${tool.slug}`);
    }
    slugs.add(tool.slug);
    if (tool.nameTbd !== (tool.name === NAME_TBD)) {
      throw new Error(
        `${tool.slug}: nameTbd and name are out of sync. Placeholder tools use name "${NAME_TBD}".`,
      );
    }
    if (tool.domain.includes("://") || tool.domain.includes("/")) {
      throw new Error(`${tool.slug}: domain must be a bare hostname.`);
    }
    if (!tool.nameTbd && tool.domain.length === 0 && !tool.domainTbd) {
      throw new Error(`${tool.slug}: named products need a domain, or domainTbd: true.`);
    }
    if (tool.domainTbd && tool.domain.length > 0) {
      throw new Error(`${tool.slug}: clear domain or turn off domainTbd.`);
    }
    for (const host of tool.redirectsFrom ?? []) {
      if (host.includes("://") || host.includes("/")) {
        throw new Error(`${tool.slug}: redirectsFrom entries must be bare hostnames.`);
      }
    }
    for (const host of tool.domainCandidates ?? []) {
      if (host.includes("://") || host.includes("/")) {
        throw new Error(`${tool.slug}: domainCandidates entries must be bare hostnames.`);
      }
    }
    if (tool.previewUrl && !tool.previewUrl.startsWith("https://")) {
      throw new Error(`${tool.slug}: previewUrl must be an https URL.`);
    }
  }
  for (const tool of catalog) {
    for (const related of tool.related) {
      if (!slugs.has(related)) {
        throw new Error(`${tool.slug}: related slug "${related}" does not exist.`);
      }
    }
  }
}

assertCatalog(tools);

export function toolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function toolHeading(tool: Tool): string {
  return tool.nameTbd ? tool.workingTitle : tool.name;
}

export function toolLabel(tool: Tool): string {
  return tool.nameTbd ? `${NAME_TBD} — ${tool.workingTitle}` : tool.name;
}

export function productUrl(tool: Tool): string | null {
  return tool.domain ? `https://${tool.domain}` : null;
}

export function relatedTools(tool: Tool): Tool[] {
  return tool.related.flatMap((slug) => {
    const match = toolBySlug(slug);
    return match ? [match] : [];
  });
}

export function namedTools(): Tool[] {
  return tools.filter((tool) => !tool.nameTbd);
}

export function placeholderTools(): Tool[] {
  return tools.filter((tool) => tool.nameTbd);
}
