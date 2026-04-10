import blogImageOne from '../assets/Images/Blogs/Blog-1.jpg'
import blogImageTwo from '../assets/Images/Blogs/Blog-2.png'
import blogImageThree from '../assets/Images/Blogs/Blog-3.jpg'
import blogImageFour from '../assets/Images/Blogs/Blog-4.png'
import blogImageFive from '../assets/Images/Blogs/Blog-5.jpg'
import blogImageSix from '../assets/Images/Blogs/Blog-6.jpg'

export const blogPosts = [
  {
    slug: 'designing-a-premium-first-impression',
    category: 'Brand Strategy',
    title: 'Designing a premium first impression for modern service businesses',
    excerpt:
      'The strongest websites do not begin with decoration. They begin with clarity, trust, and a deliberate visual rhythm that makes the brand feel established from the first scroll.',
    description:
      'A practical guide to structuring hero sections, proof points, and calls to action so a service brand looks credible in seconds.',
    author: 'Aarav Menon',
    role: 'Creative Director',
    date: 'April 2, 2026',
    readTime: '6 min read',
    image: blogImageOne,
    featured: true,
    sections: [
      {
        heading: 'Start with confidence, not clutter',
        body: [
          'Premium positioning comes from restraint. Visitors should immediately understand what the company does, who it serves, and why it is trustworthy. That means one strong headline, one supporting paragraph, and a call to action that feels intentional instead of desperate.',
          'When the hero tries to explain everything at once, the experience feels less premium because the brand appears unsure of its own message.',
        ],
      },
      {
        heading: 'Build credibility in layers',
        body: [
          'Once the main promise is clear, the next layer should validate it. Use fast-scanning proof like delivery timelines, client outcomes, or operational advantages before moving into deeper content.',
          'This layered structure creates momentum. The visitor gets a reason to trust first, then a reason to continue reading.',
        ],
      },
      {
        heading: 'Make every section feel connected',
        body: [
          'Professional websites feel calm because each section inherits the same typography, spacing logic, and visual tone. Reusable patterns create that calm. A page should feel designed as one system, not assembled from separate experiments.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-structure-a-conversion-focused-service-site',
    category: 'Conversion',
    title: 'How to structure a conversion-focused service site without making it feel salesy',
    excerpt:
      'Conversion design works best when it reduces uncertainty. Visitors move forward when the website answers the next obvious question before they have to ask it.',
    description:
      'A clear page sequence for agencies, consultants, and premium service brands that want more inquiries without aggressive tactics.',
    author: 'Neha Kapoor',
    role: 'Content Strategist',
    date: 'March 21, 2026',
    readTime: '5 min read',
    image: blogImageTwo,
    sections: [
      {
        heading: 'Lead with the business problem you solve',
        body: [
          'The first fold should frame the client outcome, not just your service label. Strong positioning gives visitors a reason to self-identify quickly.',
        ],
      },
      {
        heading: 'Use sequencing to remove friction',
        body: [
          'After the opening promise, most service sites need four things: proof, process, pricing guidance, and a low-friction contact path. The order matters because each section removes a different type of hesitation.',
        ],
      },
      {
        heading: 'Calls to action should feel timely',
        body: [
          'A professional page places calls to action where confidence naturally increases. Strong CTA placement feels helpful, not pushy, because it appears right after the visitor gets enough context to act.',
        ],
      },
    ],
  },
  {
    slug: 'keeping-a-small-react-marketing-site-maintainable',
    category: 'Engineering',
    title: 'Keeping a small React marketing site maintainable as it grows',
    excerpt:
      'Small marketing sites get messy when every new page invents its own layout. A little structure early on keeps the codebase easy to extend and redesign later.',
    description:
      'Component boundaries, route patterns, and content organization tips for a React site that is expected to evolve.',
    author: 'Rohan Iyer',
    role: 'Frontend Engineer',
    date: 'March 8, 2026',
    readTime: '7 min read',
    image: blogImageThree,
    sections: [
      {
        heading: 'Separate shells, pages, and primitives',
        body: [
          'Shared site chrome belongs in layout and site components. Reusable UI primitives should stay small and flexible. Route-level pages should focus on storytelling and composition rather than recreating shared patterns.',
        ],
      },
      {
        heading: 'Treat content like a system',
        body: [
          'Blog posts, FAQs, and pricing information become easier to manage when their source data is centralized instead of embedded in unrelated view files. That makes new sections easier to add and keeps the presentation layer focused.',
        ],
      },
      {
        heading: 'Design consistency is a technical advantage',
        body: [
          'When spacing, typography, and card patterns are reused well, feature work gets faster. Teams spend less time inventing new structures and more time improving the message and the experience.',
        ],
      },
    ],
  },
  {
    slug: 'pricing-pages-that-feel-premium',
    category: 'Positioning',
    title: 'Pricing pages that feel premium (without looking expensive)',
    excerpt:
      'A premium pricing page does not hide information. It guides decision-making with calm structure, clear tradeoffs, and proof that the company understands the buyer.',
    description:
      'How to present packages, boundaries, and next steps in a way that increases trust and reduces back-and-forth.',
    author: 'Ishita Rao',
    role: 'Growth Lead',
    date: 'February 24, 2026',
    readTime: '6 min read',
    image: blogImageFour,
    sections: [
      {
        heading: 'Show ranges, not surprises',
        body: [
          'Buyers rarely need every detail on the first read, but they do need confidence that the pricing is real. Use a clear starting point, a typical range, and what influences the final quote.',
          'Surprises create friction. Clarity creates momentum.',
        ],
      },
      {
        heading: 'Package with outcomes',
        body: [
          'Instead of listing features, name the outcome each plan is designed to deliver. This keeps the conversation anchored to value, not line-items.',
          'When packages are described as â€œwho this is forâ€ plus â€œwhat you getâ€, the page feels more professional and easier to scan.',
        ],
      },
      {
        heading: 'End with a confident next step',
        body: [
          'Your CTA should match the buyerâ€™s readiness. Offer one primary step (book a call / request a quote), and keep secondary actions unobtrusive (download a PDF / see examples).',
        ],
      },
    ],
  },
  {
    slug: 'turning-testimonials-into-proof',
    category: 'Trust',
    title: 'Turning testimonials into proof people actually believe',
    excerpt:
      'A testimonial is strongest when it reads like a specific outcome, not a compliment. The goal is to reduce doubt with details that feel verifiable.',
    description:
      'A lightweight system for social proof that looks corporate, stays consistent, and supports conversions across the site.',
    author: 'Karan Mehta',
    role: 'Brand Designer',
    date: 'February 10, 2026',
    readTime: '5 min read',
    image: blogImageFive,
    sections: [
      {
        heading: 'Use context first',
        body: [
          'Add a small line that frames who the customer is and what changed. This helps visitors map the story to their own situation quickly.',
        ],
      },
      {
        heading: 'Prefer numbers and time',
        body: [
          'Even one number makes the story stronger: weeks saved, time to launch, reduction in support tickets, increased response rate.',
          'If you do not have numbers, use â€œbefore and afterâ€ language with concrete situations.',
        ],
      },
      {
        heading: 'Design for scanning',
        body: [
          'On a corporate site, testimonials should be readable fast: one quote, one name, one role, one small rating or tag. Keep the layout consistent across cards.',
        ],
      },
    ],
  },
  {
    slug: 'hero-sections-that-earn-scrolls',
    category: 'Design Systems',
    title: 'Hero sections that earn the next scroll',
    excerpt:
      'A strong hero does not just look good. It answers the first three questions a buyer has: what it is, who it is for, and why they should trust it.',
    description:
      'A practical structure for corporate hero sections that stays readable on mobile and feels premium without heavy effects.',
    author: 'Meera Nair',
    role: 'Product Marketer',
    date: 'January 28, 2026',
    readTime: '7 min read',
    image: blogImageSix,
    sections: [
      {
        heading: 'Clarity beats cleverness',
        body: [
          'A headline should be clear enough that a new visitor can repeat it back. Avoid jargon that forces people to interpret.',
          'Use a supportive subheading that explains the benefit and the customer type in one sentence.',
        ],
      },
      {
        heading: 'Proof comes earlier than you think',
        body: [
          'Add one small proof row above the fold: clients, security badges, uptime, ratings, or a short metric. It helps buyers relax.',
        ],
      },
      {
        heading: 'Keep the CTA calm',
        body: [
          'One primary button, one secondary link. The goal is to feel confident, not loud.',
        ],
      },
    ],
  },
]

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null
}
