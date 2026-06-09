export type WelcomeMessage = {
  id: string;
  topicCategory: string;
  icpSegment: string;
  headline: string;
  bodyCopy: string;
  suggestionPills: string[];
  rationale: string;
};

export const topicCategories = [
  "Contacts & Audience Mgmt",
  "Sending & Campaigns",
  "Automation & Flows",
  "SMS & Messaging",
] as const;

export const icpSegments = [
  "Ecommerce — New User",
  "Ecommerce — Tenured, Large Audience",
  "Nonprofit / Community — Any Tenure",
  "Professional Services — New User",
  "Entertainment & Leisure — Any Tenure",
] as const;

export const welcomeMessages: WelcomeMessage[] = [
  {
    id: "CAM-01",
    topicCategory: "Contacts & Audience Mgmt",
    icpSegment: "Ecommerce — New User",
    headline:
      "Your store is connected. Let's fill it with the right people.",
    bodyCopy:
      "Good news — your Mailchimp account is linked to your store. Now let's make sure your contacts are organized so every campaign lands with the right customers.\n\nI can help you:\n• Import your customer list from Shopify or a CSV\n• Set up tags for first-time vs. returning buyers\n• Create a segment for your top spenders\n• Merge duplicate contacts",
    suggestionPills: [
      "Import my customer list",
      "Tag buyers by purchase history",
      "Build my first segment",
      "Find duplicate contacts",
    ],
    rationale:
      "Ecommerce newcomers have an existing customer list but haven't organized it in Mailchimp yet. Leading with store-connection acknowledgment builds immediate trust.",
  },
  {
    id: "CAM-02",
    topicCategory: "Contacts & Audience Mgmt",
    icpSegment: "Ecommerce — Tenured, Large Audience",
    headline: "Impressive audience. Let's make it work harder.",
    bodyCopy:
      "You've built something real here. A list this size is a serious revenue channel — if it's structured right.\n\nLet me help you:\n• Clean up inactive subscribers before your next send\n• Build advanced segments based on purchase behavior\n• Set up a re-engagement flow for lapsed customers\n• Identify your highest-value contacts",
    suggestionPills: [
      "Clean inactive subscribers",
      "Segment by purchase behavior",
      "Build a re-engagement flow",
      "Find my top customers",
    ],
    rationale:
      "Large ecomm audiences are often messy — duplicate records, lapsed contacts dragging deliverability. Actions are revenue-oriented, matching what Empowered Manager ecomm users care about.",
  },
  {
    id: "CAM-03",
    topicCategory: "Contacts & Audience Mgmt",
    icpSegment: "Nonprofit / Community — Any Tenure",
    headline: "Your community is here. Let's keep them close.",
    bodyCopy:
      "Whether you're managing donors, volunteers, or event attendees — organized contacts mean better outreach and stronger relationships.\n\nI can help with:\n• Importing contacts from a spreadsheet or event platform\n• Tagging donors vs. volunteers vs. general subscribers\n• Understanding the difference between tags, segments, and groups\n• Finding or recovering a contact",
    suggestionPills: [
      "Import from a spreadsheet",
      "Tag donors and volunteers",
      "Understand tags vs. segments",
      "Find a contact",
    ],
    rationale:
      "Nonprofits wear many hats and manage diverse contact types in a single list. The headline emphasizes relationships, which resonates with mission-driven orgs.",
  },
  {
    id: "CAM-05",
    topicCategory: "Contacts & Audience Mgmt",
    icpSegment: "Professional Services — New User",
    headline:
      "You don't need thousands of contacts. You need the right ones.",
    bodyCopy:
      "Professional services live and die by relationships. Even a small, well-organized list can drive serious business.\n\nHere's what I'd start with:\n• Import your client and prospect list from a CSV or CRM\n• Tag contacts by service type or project stage\n• Set up groups for active clients vs. warm leads\n• Make sure you have permission to email everyone on the list",
    suggestionPills: [
      "Import my client list",
      "Tag by service type",
      "Separate clients from leads",
      "Check email permissions",
    ],
    rationale:
      "Professional services typically have small but high-value contact lists. Addressing this directly removes intimidation and reframes success around quality over quantity.",
  },
  {
    id: "CAM-04",
    topicCategory: "Contacts & Audience Mgmt",
    icpSegment: "Entertainment & Leisure — Any Tenure",
    headline: "Every seat sold starts with the right list.",
    bodyCopy:
      "Your audience is your venue's biggest asset. Let's make sure it's clean, tagged, and ready to drive ticket sales.\n\nI can help you:\n• Import attendee lists from your ticketing platform\n• Tag contacts by event interest or attendance history\n• Create a segment for your most loyal fans\n• Clean up contacts who haven't engaged in 6+ months",
    suggestionPills: [
      "Import from ticketing platform",
      "Tag by event interest",
      "Find my loyal fans",
      "Clean inactive contacts",
    ],
    rationale:
      "Entertainment & Leisure users are intensely focused on ticket/seat conversion. The headline ties contact management directly to business outcome.",
  },
  {
    id: "SC-01",
    topicCategory: "Sending & Campaigns",
    icpSegment: "Ecommerce — New User",
    headline: "Ready to send? Let's get your first campaign out the door.",
    bodyCopy:
      "Your list is set up — now it's time to reach them. I'll help you send your first campaign in a few steps.\n\nHere's what I can do:\n• Walk you through building and scheduling a campaign\n• Set up a test email so you can preview it first\n• Help you pick the right audience before you send\n• Check your setup so nothing blocks the send",
    suggestionPills: [
      "Build my first campaign",
      "Send a test email",
      "Choose the right audience",
      "Check my sending setup",
    ],
    rationale:
      "New ecomm users have the most to lose from a bad first send experience. Proactively surfacing test email and setup checks addresses anxiety about getting it wrong.",
  },
  {
    id: "AF-01",
    topicCategory: "Automation & Flows",
    icpSegment: "Ecommerce — New User",
    headline:
      "The most powerful emails you'll send are the ones you set up once.",
    bodyCopy:
      "Automations run while you sleep — following up with new subscribers, reminding customers about abandoned carts, and welcoming first-time buyers.\n\nHere's a good place to start:\n• Set up a welcome email for new subscribers\n• Create an abandoned cart reminder\n• Build a 'thank you' flow for first-time buyers\n• Understand how automations are triggered",
    suggestionPills: [
      "Set up a welcome email",
      "Build an abandoned cart flow",
      "Thank first-time buyers",
      "How do triggers work",
    ],
    rationale:
      "Abandoned cart and welcome flows are the highest-ROI automations for ecomm users. The headline reframes automation as a business advantage rather than a technical challenge.",
  },
  {
    id: "SMS-03",
    topicCategory: "SMS & Messaging",
    icpSegment: "Entertainment & Leisure — Any Tenure",
    headline: "Text your fans right before showtime.",
    bodyCopy:
      "SMS is the fastest way to move tickets last-minute. A well-timed text can sell out an event that email alone won't.\n\nHere's what I can help with:\n• Applying for SMS in Mailchimp\n• Setting up an SMS campaign for an event\n• Understanding opt-in requirements for text marketing\n• Combining SMS with your email campaigns",
    suggestionPills: [
      "Apply for SMS",
      "Set up an event text",
      "Opt-in requirements",
      "Combine SMS + email",
    ],
    rationale:
      "Entertainment & Leisure users have the highest urgency use case for SMS — last-minute event promotions. The headline speaks directly to their operational reality.",
  },
];

export const bentoCategories = [
  { name: "Contacts & Audience Mgmt", branches: 6, published: true },
  { name: "Sending & Campaigns", branches: 5, published: true },
  { name: "Email Design & Templates", branches: 5, published: true },
  { name: "Billing & Plans", branches: 4, published: true },
  { name: "Reports & Analytics", branches: 4, published: true },
  { name: "Automation & Flows", branches: 4, published: true },
  { name: "Integrations & API", branches: 4, published: true },
  { name: "SMS & Messaging", branches: 4, published: true },
  { name: "Cancellation / Downgrade", branches: 3, published: false },
  { name: "Domain & Email Auth", branches: 3, published: false },
];
