# adMYTT Website Master Build Brief

Version: 1.0  
Status: Source of truth  
Product: adMYTT CRM  
Primary website: `https://admytt.com`  
Secure application: `https://app.admytt.com`

---

## How To Use This File

Give this entire document to Codex, Claude Code, a designer, a copywriter, or another implementation agent. Treat it as the master prompt and acceptance contract for the adMYTT marketing website.

Do not begin by producing a generic SaaS homepage. Read the full brief, inspect the existing adMYTT product, establish the design tokens, prepare sanitized product data, and then build in the phases defined below.

When information such as pricing, customer logos, certifications, or performance results has not been verified, use a clearly labeled placeholder in development. Never publish invented claims.

---

## Master Prompt

Design and build a production-ready, world-class SaaS marketing website for **adMYTT**, an AI-enabled CRM and operating platform built specifically for study-abroad consultants, education agencies, admissions teams, visitor-visa businesses, partner networks, and training academies.

The website must make the product understandable in seconds, establish trust around customer data, demonstrate the real software with sanitized screenshots, and convert qualified visitors into booked demos or free-trial registrations.

The result must feel like a mature international B2B product. It must not resemble a generic purple SaaS template, a collection of floating cards, or a brochure filled with vague AI claims. The visual language must come from adMYTT's real domain: student journeys, counselling workflows, applications, document readiness, visa stages, team operations, and measurable enrollment outcomes.

Build with responsive, accessible, reusable React and Next.js components. Use real product screens, strong copy, transparent product information, fast performance, clear conversion paths, trustworthy security language, complete metadata, analytics hooks, and tested forms.

The website and CRM must share one brand system while serving different purposes:

- The marketing website is spacious, editorial, persuasive, and optimized for discovery.
- The CRM is dense, quiet, operational, and optimized for repeated daily work.

The public website must be deployed independently from the secure CRM so marketing releases cannot interrupt client operations.

---

## Product Positioning

### Category

Education consultancy CRM and student operations platform.

### Core Promise

**Run your education consultancy from first enquiry to visa outcome.**

### Supporting Message

adMYTT brings leads, counselling, applications, documents, payments, visas, partners, tasks, and reporting into one secure workspace built for education teams.

### Differentiation

adMYTT is not a generic sales CRM adapted with custom fields. It is purpose-built around the operating model of education consultancies:

- Student enquiry and lead qualification
- Counselling and follow-up workflows
- Course and institution discovery
- Admission and application management
- Document collection and readiness
- Visa and visitor-visa operations
- Fee, payment, receipt, and invoice tracking
- Partner and sub-agent collaboration
- Multi-team task management
- Academy and training operations
- Workspace-level permissions, auditability, and data isolation

### Primary Conversion

Book a live product demo.

### Secondary Conversion

Start a free trial.

### Utility Action

Log in to the secure CRM.

### CTA Language

Use consistently:

- Primary: `Book a demo`
- Secondary: `Start free trial`
- Product exploration: `Explore the platform`
- Login: `Log in`

Do not rotate between ambiguous alternatives such as "Get started," "Learn more," "Transform now," and "Join the future" when the actual action is known.

---

## Audiences And Jobs

### Consultancy Owners

They need visibility across teams, branches, pipelines, conversions, outstanding work, revenue, and risk.

Primary message: operate the entire consultancy from one reliable system.

### Counsellors

They need assigned leads, conversation history, next actions, reminders, course recommendations, and fewer manual updates.

Primary message: know whom to contact, what to discuss, and what to do next.

### Admissions Teams

They need structured applications, document readiness, deadlines, checklists, and progress visibility.

Primary message: move every application forward without losing context.

### Visa Teams

They need country-specific workflows, checklists, document status, filing progress, and outcome tracking.

Primary message: manage visa work with clear ownership and fewer missed requirements.

### Finance Teams

They need fee records, payment history, receipts, proformas, taxes, balances, and reconciliation visibility.

Primary message: connect student operations with financial status.

### Partner Managers

They need partner onboarding, lead ownership, compliance, agreements, resources, courses, and commissions.

Primary message: scale a partner network without surrendering control.

### Training Academies

They need leads, students, programs, batches, sessions, attendance, assessments, and fees.

Primary message: manage enrollment and delivery in one connected system.

---

## Domain And Deployment Architecture

Use this target architecture:

| Surface | Domain | Purpose |
| --- | --- | --- |
| Marketing website | `admytt.com` | SEO, product education, pricing, resources, conversion |
| Marketing alias | `www.admytt.com` | Permanent redirect to canonical marketing domain |
| Secure CRM | `app.admytt.com` | Authenticated customer application |
| Status page | `status.admytt.com` | Service availability and incident history |
| Help center | `help.admytt.com` | Documentation and customer support |

Requirements:

- Keep marketing and CRM deployments independent.
- Preserve secure, host-scoped authentication cookies.
- Test login, logout, password reset, invitation, and all email links after the CRM domain change.
- Update CORS, canonical URLs, email templates, OAuth callbacks, Razorpay settings, Resend links, and Vercel domains as required.
- Do not change production DNS until staging verification and a rollback plan are complete.

---

## Site Map

### Launch Pages

1. Home
2. Product overview
3. AI Command Centre
4. Lead Management
5. Admissions and Applications
6. Documents and Visa
7. Course Finder
8. Partner Hub
9. Finance
10. Reports and Automation
11. Solutions for Study Abroad Consultants
12. Solutions for Multi-Branch Agencies
13. Solutions for Visitor Visa Teams
14. Solutions for Academies
15. Pricing
16. Security and Trust
17. Customer Stories
18. Integrations
19. Book a Demo
20. Contact
21. Privacy Policy
22. Terms of Service
23. Data Processing Information
24. Refund and Cancellation Policy

### Growth Pages

1. Product updates
2. Help center
3. Blog and guides
4. CRM migration guide
5. Education CRM comparison pages
6. Country-specific study-abroad workflow pages
7. Templates and downloadable resources
8. Partner program
9. System status

---

## Navigation

### Desktop

- Product
- Solutions
- AI
- Pricing
- Security
- Resources
- `Log in`
- `Book a demo`
- `Start free trial`

Product and Solutions may use accessible mega menus. The menus must remain compact, keyboard navigable, and useful rather than becoming link directories.

### Mobile

- Use one clear menu button with an accessible label.
- Keep `Book a demo` visible or immediately available.
- Do not reproduce the full desktop mega menu as a tiny multi-column panel.
- Lock background scroll while the menu is open.
- Restore focus to the trigger when the menu closes.

---

## Homepage Narrative

The homepage must follow this persuasion sequence:

### 1. Hero

Headline:

> Run your education consultancy from first enquiry to visa outcome.

Supporting copy:

> Bring leads, counselling, applications, documents, payments, visas, partners, and team operations into one secure CRM built for education businesses.

Actions:

- Book a demo
- Start free trial
- Log in

Visual:

- Use a real, sanitized adMYTT product view.
- Present the product as the first-viewport signal, not as a small screenshot inside a decorative card.
- Prefer a full-width product scene or carefully composed product walkthrough.
- Keep the text unframed and readable.
- Leave a visible hint of the next section on common desktop and mobile viewports.

Trust near the CTA:

- No credit card required, only if accurate.
- Trial duration, only when confirmed.
- Setup or migration assistance, only when operationally available.

### 2. Verified Trust Strip

Use only approved customer logos and verified numbers.

Possible metrics after verification:

- Active organizations
- Countries served
- Student records managed
- Applications processed
- Customer satisfaction

Do not use placeholder numbers in production.

### 3. Student Journey Rail

This is the website's signature interaction.

Create an interactive journey from:

`Enquiry -> Counselling -> Course Selection -> Application -> Documents -> Finance -> Visa -> Enrollment`

Selecting a stage updates a large adjacent product view and a short outcome statement. It must feel like one connected operating flow, not eight feature cards.

Examples:

- Enquiry: capture, assign, score, and prioritize leads.
- Counselling: preserve context and schedule the next action.
- Application: track institutions, programs, intakes, and status.
- Documents: see missing, rejected, verified, and versioned files.
- Finance: track fees, receipts, balances, and invoices.
- Visa: manage checklists, filing stages, and decisions.

### 4. Operational Problem

Explain the cost of disconnected spreadsheets, inboxes, WhatsApp chats, shared drives, and individual memory.

Use a before-and-after comparison grounded in actual work:

- Before: information scattered across tools and people.
- With adMYTT: one student record, one accountable workflow, one operational view.

Do not shame the audience or exaggerate failure.

### 5. Product Platform

Show the main product areas through substantial, full-width sections:

- Lead and Pipeline Management
- Counselling and Follow-ups
- Admissions and Applications
- Document Management
- Course Finder
- Visa and Visitor Visa
- Partner Hub
- Finance
- Tasks and Team Operations
- Reports and Dashboards
- Academy Management
- Automations and Communication

Each section must contain:

- One specific outcome
- Two to four concrete capabilities
- One real product visual
- One relevant action

### 6. AI Command Centre

Demonstrate AI through actual product actions:

- Lead scoring
- Suggested next actions
- Missing-document alerts
- Student record summaries
- Follow-up message generation
- Application risk signals
- Operational briefing

Do not publish claims that AI makes final admission, financial, legal, or visa decisions.

### 7. Built For Each Team

Use tabs or a segmented control for:

- Owners
- Counsellors
- Admissions
- Visa
- Finance
- Partner teams

Each view should change the workflow, screenshot, and outcome. Do not merely replace one paragraph.

### 8. Automation And Integrations

Cover only implemented or committed integrations:

- Email
- WhatsApp
- Website forms
- Lead assignment
- Notifications
- Razorpay
- Imports and exports
- API and webhooks

Mark planned integrations as `Coming soon`; never mix them visually with active integrations.

### 9. Security And Trust

Explain in plain language:

- Each customer company has an isolated workspace.
- Customer records and document access are workspace-scoped.
- Documents are stored privately.
- Browser sessions are hashed, expiring, and revocable.
- Role-based access limits staff capabilities.
- Important actions are recorded in audit logs.
- Platform support access is reason-bound, time-limited, read-only, and audited.
- Customers can export security evidence.

Do not claim certifications such as SOC 2, ISO 27001, GDPR certification, or HIPAA compliance unless formally verified and documented.

### 10. Migration And Onboarding

Show a four-step process:

1. Import existing data
2. Configure the workspace
3. Invite the team
4. Launch operations

State realistic onboarding timelines only after the service process is finalized.

### 11. Customer Evidence

Prioritize:

- Named case studies
- Approved company logos
- Real customer photographs or video
- Specific operational improvements
- Quotations approved for publication

Do not build a rotating testimonial carousel with fabricated people.

### 12. Pricing Preview

Introduce Starter, Growth, and Pro without hiding important limitations.

Show:

- Intended customer
- Included seats
- Usage limits
- Major included modules
- Support level
- Billing period
- Taxes and renewal terms where relevant

If pricing is not final, use `Talk to sales` and explain what determines pricing.

### 13. FAQ

Answer:

- Is each company's data separate?
- Who can see our workspace?
- Can staff access only assigned leads?
- Can we import spreadsheets or another CRM?
- Does adMYTT support multiple branches?
- Can we manage sub-agents and partners?
- Can we export our data?
- How does onboarding work?
- What happens when a subscription ends?
- How do cancellation and deletion work?

### 14. Final CTA

Headline:

> See how adMYTT fits the way your consultancy works.

Actions:

- Book a demo
- Start free trial

Set the expectation for what happens next.

---

## Page Briefs

### Product Overview

Explain the connected platform and link to detailed product areas. Center the narrative on one student record moving through multiple teams.

### Feature Pages

Each feature page must contain:

- Job-specific hero
- Real workflow
- Product visual
- Capabilities
- Team benefits
- Related integrations
- Security implications
- Relevant proof
- FAQ
- Demo CTA

### Solution Pages

Solution pages must reorganize the product around the audience's operating model. They must not be copies of feature pages with a changed headline.

### Pricing

Include:

- Monthly and annual toggle
- Plan comparison
- Seats and usage limits
- Module availability
- Trial conditions
- Migration and onboarding costs
- Taxes
- Upgrade and downgrade behavior
- Cancellation information
- Pricing FAQ

Never preselect annual billing without clearly showing the billing commitment.

### Security And Trust

Include:

- Data isolation
- Authentication and session controls
- Roles and permissions
- Private file storage
- Audit logs
- Support-access controls
- Backups and recovery policy after verification
- Data retention policy after approval
- Incident reporting contact
- Security FAQ

### Book A Demo

Keep the form short:

- Full name
- Work email
- Phone with country code
- Company name
- Team size
- Country
- Optional primary challenge

Show what happens after submission. Do not ask for unnecessary student or customer data.

---

## adMYTT Design System

Build a custom design system using Tailwind CSS tokens and accessible headless primitives. Do not apply an off-the-shelf theme.

### Technology

- Tailwind CSS 4
- Radix UI primitives where a robust accessible primitive is needed
- Lucide icons
- Next.js and React
- `next/font` for self-hosted fonts

### Color Tokens

Use this starting palette, then confirm it against the production logo:

| Token | Value | Use |
| --- | --- | --- |
| `brand-red` | `#E21B23` | Primary brand emphasis, selected highlights |
| `brand-navy` | `#0B1533` | Headlines, dark bands, authority |
| `action-blue` | `#2453D4` | Links, focus, interactive states |
| `signal-green` | `#0F9F6E` | Success and protected states |
| `signal-amber` | `#D97706` | Warnings and attention |
| `canvas` | `#F6F8FC` | Page background |
| `surface` | `#FFFFFF` | Primary surfaces |
| `ink` | `#111827` | Body text |
| `muted` | `#64748B` | Secondary text |
| `border` | `#DCE3EE` | Dividers and controls |

Rules:

- Red is a brand signal, not the color of every CTA and heading.
- Blue is the primary interactive color.
- Green, amber, and red retain semantic meaning in product UI.
- Avoid purple-dominant palettes and gradients.
- Never communicate status through color alone.
- Meet WCAG AA contrast.

### Typography

- Display and major headings: Manrope
- Body and interface: Inter
- Data and code when needed: system monospace
- Use sentence case.
- Letter spacing must remain `0`.
- Do not scale font size directly with viewport width.

Suggested scale:

- Display: 56/64 desktop, 40/46 mobile
- H1: 48/56 desktop, 36/42 mobile
- H2: 36/44 desktop, 30/38 mobile
- H3: 24/32
- Body large: 18/29
- Body: 16/26
- Small: 14/21
- Caption: 12/18

### Geometry

- Standard component radius: `8px`
- Compact control radius: `6px`
- Pills only for statuses, tags, and compact filters
- Avoid rounded sections and nested cards
- Use full-width bands with constrained inner content
- Maximum content width: approximately `1200-1280px`
- Reading width: `640-760px`

### Spacing

Use a consistent scale:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

### Buttons

- Primary: icon plus text when useful, solid action color
- Secondary: bordered surface
- Tertiary: text or icon action
- Icon-only controls require tooltips and accessible labels
- Minimum touch target: `44px`
- Maintain stable dimensions across loading and success states

### Motion

Use motion to clarify:

- Student Journey Rail transitions
- Product-tab changes
- Menu opening and closing
- Form submission state
- Screenshot focus changes

Rules:

- Prefer one orchestrated signature interaction over scattered animation.
- Respect `prefers-reduced-motion`.
- Avoid parallax, floating objects, looping decorative movement, and scroll hijacking.

---

## Screenshot And Product Media Workflow

Never use real client records in marketing materials.

### Demo Workspace

Create a dedicated marketing workspace containing fictional but realistic data:

- Fictional student names
- Reserved example domains such as `example.com`
- Non-routable or clearly fictional phone numbers
- Fictional institutions only when necessary
- No real passports, marksheets, financial details, or visa records
- Multiple workflow states so screens look operational rather than empty

### Required Screens

Capture:

1. Main dashboard
2. Leads list
3. Lead detail
4. Pipeline
5. Today's work
6. Course Finder
7. Application management
8. Document readiness
9. Visa tracking
10. Visitor Visa
11. Partner Hub
12. Finance
13. Reports
14. AI Command Centre
15. Security and Audit Center
16. Workspace onboarding

### Capture Standards

- Use Playwright with a dedicated marketing account.
- Capture consistent desktop and mobile viewports.
- Desktop baseline: `1440 x 1000`.
- Mobile baseline: `390 x 844`.
- Hide browser chrome unless the composition specifically requires it.
- Keep text readable.
- Do not blur the entire interface.
- Crop intentionally without concealing the product's actual state.
- Export responsive WebP or AVIF variants.
- Preserve source PNGs outside the production bundle.
- Add meaningful alt text.
- Maintain a manifest recording route, viewport, capture date, workspace, and asset path.

### Agent Roles

- Codex owns the capture script, fixtures, image optimization, implementation, and visual regression checks.
- Claude Code may independently review screenshot selection, privacy, copy alignment, and responsive use.
- Agents must work sequentially on shared files or use separate branches. Do not make simultaneous conflicting edits.

---

## Content Rules

### Voice

- Clear
- Calm
- Specific
- Operational
- Confident without exaggeration
- International English

### Writing Principles

- Lead with customer outcomes, then explain capabilities.
- Use terms education teams recognize.
- Prefer active voice.
- Keep headlines literal and useful.
- Explain what happens after every important action.
- Keep one vocabulary across navigation, pages, forms, and product.

### Prohibited Copy

Avoid:

- Revolutionize everything
- Ten-times your business
- Game-changing
- Best-in-class without evidence
- Seamless as a substitute for explanation
- AI-powered when no specific AI behavior is shown
- Enterprise-grade without defined controls
- Bank-level security
- Guaranteed visa or admission outcomes

### Evidence Policy

Every published number, logo, testimonial, award, integration, and compliance claim must have:

- An owner
- A source
- Approval to publish
- A review date

---

## Conversion System

### Primary Funnel

`Landing page -> Product understanding -> Trust -> Demo form -> Confirmation -> Sales follow-up`

### Trial Funnel

`Landing page -> Pricing or product page -> Trial registration -> Workspace setup -> First value`

### Trust Placement

Place reassurance where doubt arises:

- Trial terms beside trial CTA
- Data protection beside forms and document features
- Pricing terms beside plan selection
- Migration help beside import claims
- Cancellation information beside purchase decisions

### Forms

Requirements:

- Client and server validation
- Clear labels
- Useful examples
- Specific error messages
- Loading, success, duplicate, and failure states
- Spam protection
- Rate limiting
- Source and campaign attribution
- Consent that is explicit and not preselected
- CRM lead creation in the correct internal workspace
- Notification to the responsible adMYTT team
- Confirmation email after verified deliverability

---

## Analytics

Use privacy-aware analytics and document the provider.

Track:

- `nav_cta_clicked`
- `hero_demo_clicked`
- `hero_trial_clicked`
- `product_tour_started`
- `product_stage_viewed`
- `pricing_viewed`
- `plan_selected`
- `demo_form_started`
- `demo_form_submitted`
- `trial_started`
- `security_page_viewed`
- `customer_story_viewed`
- `integration_viewed`

Include:

- Page
- CTA location
- Referrer
- UTM source, medium, campaign, content, and term
- Selected plan or product area where relevant

Never send passwords, student information, form-message contents, or sensitive CRM data to analytics.

---

## SEO And Discoverability

Implement:

- Unique title and description per page
- Canonical URLs
- XML sitemap
- `robots.txt`
- Open Graph and social images
- Organization structured data
- SoftwareApplication structured data where appropriate
- FAQ structured data only for visible FAQ content
- Breadcrumb structured data on nested pages
- Clean semantic heading hierarchy
- Useful internal linking
- Fast, indexable server-rendered content

Initial topic clusters:

- CRM for study-abroad consultants
- Education consultancy CRM
- Student application management software
- Overseas education lead management
- Visa case management software
- Education partner and sub-agent portal
- Education CRM security
- Course Finder for education consultants
- Visitor visa CRM

Do not create thin location pages or comparison pages that make unsupported competitor claims.

---

## Accessibility

Target WCAG 2.2 AA.

Requirements:

- Semantic landmarks and headings
- Keyboard-operable navigation
- Visible focus
- Skip link
- Proper labels and errors
- Accessible dialogs and menus
- Sufficient color contrast
- Alt text based on image purpose
- Captions and transcripts for meaningful video
- Reduced-motion support
- No hover-only information
- Usable at 200% zoom
- Responsive reflow without horizontal page scrolling

Run automated checks and perform manual keyboard testing.

---

## Performance

Targets at the 75th percentile on production mobile traffic:

- LCP under `2.5s`
- INP under `200ms`
- CLS under `0.1`
- Lighthouse category scores of `90+` where representative testing permits

Techniques:

- Server-render content by default
- Limit client components
- Optimize and size images explicitly
- Use responsive image sources
- Self-host fonts through `next/font`
- Load video on interaction or when near viewport
- Avoid large animation dependencies
- Defer analytics safely
- Keep third-party scripts under review
- Use route-level bundle analysis before launch

---

## Engineering Rules

- Prefer the existing repository conventions when modifying existing code.
- If creating the recommended separate marketing application, document setup and deployment clearly.
- Use TypeScript with strict, meaningful types.
- Build reusable components around real recurring patterns.
- Do not introduce abstractions for one-off content.
- Use structured content objects for repeated features, FAQs, plans, and navigation.
- Keep secrets server-side.
- Validate all public input on the server.
- Apply rate limits to public forms and authentication.
- Add correlation-friendly error logging without recording sensitive data.
- Keep legal and security copy reviewable as content, not scattered through components.
- Do not use lorem ipsum in finished screens.
- Do not publish dead links or decorative controls.

---

## Implementation Technique

### Phase 0: Discovery And Inventory

- Audit current brand assets.
- Audit production CRM routes and domain dependencies.
- Identify verified claims and missing business inputs.
- Create the sanitized marketing workspace.
- Capture baseline competitor and product references.
- Define the conversion measurement baseline.

### Phase 1: Foundation

- Create the marketing deployment.
- Configure Tailwind tokens, fonts, layout, metadata, icons, and primitives.
- Build an internal `/design-system` route.
- Build header, footer, buttons, forms, media, tabs, and section primitives.
- Review desktop and mobile foundations before page production.

### Phase 2: Homepage

- Write final homepage copy.
- Build the complete homepage narrative.
- Implement the Student Journey Rail.
- Capture and integrate real product visuals.
- Add demo and trial conversion paths.
- Verify the homepage across target viewports.

### Phase 3: Launch Pages

- Product overview
- Feature pages
- Solution pages
- Pricing
- Security
- Integrations
- Demo and contact
- Legal pages

### Phase 4: Content And Proof

- Customer stories
- Approved testimonials
- Migration guide
- Product updates
- Initial SEO articles

### Phase 5: Quality And Staging

- Run unit and integration tests.
- Run Playwright conversion-flow tests.
- Run accessibility checks.
- Inspect screenshots at every target viewport.
- Run Lighthouse and bundle analysis.
- Verify metadata and social previews.
- Test every form and notification.
- Verify that no screenshot contains real customer data.

### Phase 6: Domain Cutover

- Deploy marketing to staging.
- Move CRM to `app.admytt.com`.
- Verify authentication and email links.
- Move marketing to `admytt.com`.
- Redirect `www` to the canonical domain.
- Monitor logs, forms, analytics, and Core Web Vitals.
- Keep a documented rollback route.

---

## Codex And Claude Code Working Agreement

### Codex

Primary responsibilities:

- Repository inspection
- Architecture
- Implementation
- Screenshot automation
- Tests
- Accessibility
- Performance
- Deployment
- Live verification

### Claude Code

Independent review responsibilities:

- Information architecture critique
- Copy clarity review
- UX and conversion review
- Accessibility review
- Security-claim review
- Code review on completed changes

### Coordination

- One agent owns an implementation branch at a time.
- Reviews happen after a coherent phase, not during edits to the same files.
- Findings must include file and line references.
- The implementing agent addresses findings and reruns verification.
- Neither agent may publish invented claims or expose production secrets.

---

## Required Automated Tests

At minimum:

- Navigation works on desktop and mobile.
- Menus are keyboard accessible.
- Book Demo form validates and submits.
- Trial CTA reaches the intended registration flow.
- Login reaches `app.admytt.com`.
- Pricing toggle preserves transparent billing language.
- Product Journey controls update visible content.
- FAQ controls expose correct ARIA state.
- All internal links resolve.
- Metadata is present.
- Protected CRM routes are not exposed through marketing.
- Analytics events contain no sensitive values.
- Reduced-motion behavior works.

---

## Responsive Verification Matrix

Verify at:

- `360 x 800`
- `390 x 844`
- `430 x 932`
- `768 x 1024`
- `1024 x 768`
- `1280 x 800`
- `1440 x 900`
- `1920 x 1080`

Check:

- No overlap
- No clipped text
- No accidental horizontal page scroll
- Stable controls
- Legible screenshots
- Visible CTAs
- Correct menu behavior
- Correct form layout
- Hint of following content beneath the hero

---

## Launch Acceptance Criteria

The website is ready only when:

- The target audience and product are clear within the first viewport.
- The primary CTA is unambiguous.
- All published claims are verified.
- Every major product area uses a real or approved product visual.
- No production screenshot contains client or personal data.
- Demo and trial flows work end to end.
- Pricing terms are transparent.
- Security language matches implemented controls.
- All launch pages are responsive and keyboard accessible.
- The website passes the defined performance targets or has documented exceptions.
- SEO metadata, sitemap, robots, canonical links, and social previews are verified.
- Analytics events are tested.
- CRM login and customer workflows continue to work after domain cutover.
- Legal pages are reviewed by the business owner or legal adviser.
- Production monitoring and rollback are ready.

---

## Inputs Required From The Business Owner

These must be collected before final publication:

- Final legal company name
- Registered address
- Sales and support contact details
- Approved logo assets
- Final pricing and taxes
- Trial duration and limits
- Cancellation and refund policy
- Data retention and deletion policy
- Support hours and response commitments
- Approved customer logos
- Approved testimonials
- Verified usage metrics
- Confirmed integrations
- Any formal security certifications
- Demo scheduling destination
- Sales lead ownership and notification rules
- Analytics and consent preference

Until supplied, keep these values as explicit development placeholders.

---

## Final Instruction

Build the website as evidence of the product, not decoration around it.

Every section must answer at least one real buyer question:

- Is this built for a business like mine?
- What work does it replace?
- How will my team use it?
- Can it support our complete student journey?
- Is our data separated and protected?
- How difficult is migration?
- What does it cost?
- What happens after I book a demo or start a trial?

If a section answers none of these questions, remove it.
