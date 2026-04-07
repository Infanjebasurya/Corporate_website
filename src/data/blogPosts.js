import officeImage from '../assets/Images/deemar-people-335298_1920.jpg'
import teamImage from '../assets/Images/julientromeur-business-4328465_1920.jpg'

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
    image: officeImage,
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
    image: teamImage,
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
    image: officeImage,
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
]

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null
}
