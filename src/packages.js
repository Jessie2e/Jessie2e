// Public prices and plan limits live here so cards and inquiry summaries agree.
export const PROJECT_TIERS = {
  simple: { rank: 0, key: 'simple', label: 'Simple Site', range: '$400–$550', description: 'Usually 1–2 pages with straightforward content and a standard inquiry form.' },
  business: { rank: 1, key: 'business', label: 'Business Site', range: '$650–$1,000', description: 'Usually 3–5 pages, or a smaller site with a standard booking or newsletter connection.' },
  expanded: { rank: 2, key: 'expanded', label: 'Expanded Site', range: '$1,100–$1,800', description: 'Larger sites, several connections, substantial content, or more involved setup and testing.' },
  custom: { rank: 3, key: 'custom', label: 'Custom Build', range: 'Scoped individually', description: 'Ecommerce, memberships, publishing systems, migrations, and custom functionality need a project-specific quote.' },
};

export const CARE_PLANS = [
  { value: 'fresh', label: 'Website Care', monthly: 49, prepaid: 279, minutes: 30, batches: 1, responseDays: 3, description: 'For occasional changes: up to 30 minutes in one update batch each month.' },
  { value: 'ongoing', label: 'Website Support', monthly: 89, prepaid: 507, minutes: 60, batches: 2, responseDays: 2, description: 'For regular changes: up to 60 minutes across two update batches each month.' },
];

export const MAINTENANCE_OPTIONS = [
  ...CARE_PLANS.map(plan => ({ ...plan, price: `$${plan.monthly}/month` })),
  { value: 'diy', label: 'Website handoff', price: 'Included with build', description: 'Source files and an account summary for you or your next developer. Hosting and future updates are your responsibility.' },
  { value: 'unsure', label: 'Decide together', price: 'Discuss after scope', description: 'We can choose the best fit before launch.' },
];

export function carePrice(option, billing = 'monthly') {
  if (!option) return 'Not selected';
  return option.monthly && billing === 'six-months'
    ? `$${option.prepaid} / 6 months`
    : option.price;
}
