export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "design-tweaks-for-premium-rentals",
    title: "5 design tweaks that make rentals feel instantly premium",
    category: "Interior design",
    date: "2025-01-15",
    excerpt:
      "Small, intentional updates can dramatically change how a rental photographs and feels to tenants.",
    content: `
### 1. Upgrade lighting before anything else

Lighting changes everything. Swap harsh overhead bulbs for warmer,
dimmable options and add layered lamps where possible.

### 2. Neutral base, personality in the details

Keep walls and big pieces neutral, then bring personality in through art,
textiles, and smaller decor that is easy to update.

### 3. Focus on the first photo

Most renters decide within seconds whether to click a listing. Design
your main living area with that first photo in mind.

(You can expand this content later with images, more sections, and links.)
    `,
  },
  {
    slug: "calm-landlord-systems",
    title: "The calm landlord: systems for move-ins, move-outs, and rent-ready units",
    category: "Landlord tips",
    date: "2025-02-02",
    excerpt:
      "Checklists and simple workflows help you protect your time, property, and tenants.",
    content: `
### Why systems matter

Systems turn one-off decisions into repeatable, calm workflows.
They reduce stress and help your properties present consistently.

### Start with move-in and move-out

Document your process for each step: inspections, keys, cleaning,
photos, and communication.

Add more detail here as your processes evolve.
    `,
  },
  {
    slug: "design-minded-investing-101",
    title: "Design-minded real estate investing 101",
    category: "Investing",
    date: "2025-03-10",
    excerpt:
      "Why finishes, layouts, and styling matter just as much as cap rates and comps.",
    content: `
### Beyond spreadsheets

Numbers matter, but so does the lived experience. Design can support
stronger rents, lower vacancy, and better tenant retention.

### Look for bones and potential

Layout, natural light, and flow can be transformed with thoughtful design,
often more efficiently than full structural changes.

You can grow this article as your portfolio and perspective grow.
    `,
  },
];
