import { useMemo, useState } from 'react'
import manattLogo from './assets/manatt-logo.png'
import marcusMillichapLogo from './assets/marcus-millichap-logo.png'
import properHospitalityLogo from './assets/proper-hospitality-logo.png'
import resourceInnovationsLogo from './assets/resource-innovations-logo.png'
import robbinsLogo from './assets/robbins-logo.png'
import senskeLogo from './assets/senske-logo.png'
import olympicClubLogo from './assets/olympic-club-logo.png'
import checkrLogo from './assets/checkr-logo.png'
import trueworkLogo from './assets/truework-logo.png'
import avettaLogo from './assets/avetta-logo.png'
import castAndCrewLogo from './assets/cast-and-crew-logo.png'
import cyjTexasLogo from './assets/cyj-texas-logo.png'
import templeJudaeaLogo from './assets/temple-judaea-logo.png'

type View = 'narrative' | 'accounts' | 'skills' | 'leadership' | 'testimonials'
type EvidenceStatus = 'Strong' | 'Needs Quantification' | 'Needs Testimonial' | 'Draft'

type AccountImpact = {
  account: string
  label: string
  logoUrl?: string
  secondaryLogoUrl?: string
  headline: string
  status: EvidenceStatus
  businessImpact: string
  salesMotion: string
  products: string[]
  stakeholders: string[]
  competencies: string[]
  proof: string[]
  nextEvidence: string
}

type Competency = {
  name: string
  icon: string
  definition: string
  leadSignal: string
  examples: string[]
}

type LeadershipStory = {
  capability: string
  logoUrl?: string
  story: string
  impact: string
  competencies: string[]
  status: 'Evidence-ready' | 'Needs more detail'
}

type Testimonial = {
  name: string
  role: string
  quote: string
  competencies: string[]
  avatarUrl?: string
}

const navItems: { id: View; label: string }[] = [
  { id: 'narrative', label: 'The Narrative' },
  { id: 'accounts', label: 'Key Account Stories & ACV Pipeline' },
  { id: 'skills', label: 'Lead SE Skills & Competencies' },
  { id: 'leadership', label: 'Leadership Capabilities & Stories' },
  { id: 'testimonials', label: 'Testimonials' },
]

const executiveMetrics = [
  {
    label: 'Total open pipeline influenced (all attributed accounts)',
    value: '$1.85M',
    detail:
      'Org62: 58 open opportunities attributed via OpportunityTeamMember (Wendy Cohen) using Opportunity.sfbase__ACV__c, including impact beyond specifically named account stories.',
  },
  { label: 'Attached ACV since SFDC start', value: '$8.97M', detail: 'Closed-won ACV attributed since Apr 2022 start date in Org62' },
  { label: 'Attached ACV last fiscal year', value: '$1.61M', detail: 'Closed-won ACV attributed in LAST_FISCAL_YEAR' },
  { label: 'Attached ACV this fiscal year', value: '$1.36M', detail: 'Closed-won ACV attributed in THIS_FISCAL_YEAR' },
  {
    label: 'Named-account stories open FY27 pipeline',
    value: '$7.4M+',
    detail: 'Across Robbins, Manatt, M&M, and Senske specifically; total influenced impact extends beyond these named stories.',
  },
  { label: 'Scaling Impact', value: 'MM North Huddle', detail: 'Launched AE Enablement series for All CBS MM north AEs in partnership with AVP Scott Rubin' },
  { label: 'CBS MM tenure', value: '4 years', detail: 'Institutional knowledge carried into Scott Rubin territory transition' },
  { label: 'Leadership development', value: 'Aspire cohort', detail: 'Participating in upcoming Salesforce leadership training cohort' },
]

const accounts: AccountImpact[] = [
  {
    account: 'Manatt Phelps',
    label: 'Closed deal ownership',
    logoUrl: manattLogo,
    headline: 'Original SE through close on a complex multi-cloud win.',
    status: 'Strong',
    businessImpact:
      'Credited by the AE as the operator who took charge early and made the deal possible.',
    salesMotion: 'Ran discovery, licensing strategy, pivotal demo delivery, and cross-functional coordination across Sales Cloud, Tableau, Shield, Backup, and Platform Security.',
    products: ['Sales Cloud', 'Tableau', 'Shield', 'Platform Security', 'Backup'],
    stakeholders: ['Named AE', 'Principal TA', 'Distinguished Strategic SE', 'Legal', 'Customer CIO', 'Customer CMO'],
    competencies: ['Owns complex deals end-to-end', 'Drives multi-cloud technical strategy', 'Orchestrates cross-functional resources'],
    proof: [
      'AE quote: "Without you taking charge way back when, this deal does not happen."',
      'Org62 confirms closed-won ACV at $200,603.52 on Apr 30, 2026 for the primary Manatt transformation motion.',
      'Demo feedback praised flow, engagement, and real-time issue handling.',
      'Architecture presented to executive customer stakeholders.',
    ],
    nextEvidence: 'Align leadership narrative on one canonical Manatt ACV value across deck, canvas, and microsite.',
  },
  {
    account: 'Marcus & Millichap',
    label: 'Agentforce go-live and expansion',
    logoUrl: marcusMillichapLogo,
    headline: 'Embedded across one of the territory’s most complex technical accounts.',
    status: 'Needs Quantification',
    businessImpact:
      'Customer reported Agentforce automation helped reduce administrative work so the business could focus on clients.',
    salesMotion: 'Supported Agentforce, Data Cloud, MuleSoft, Tableau, Marketing Cloud, ProServ, and footprint review motions across a multi-year architecture engagement.',
    products: ['Agentforce', 'Data Cloud', 'MuleSoft', 'Tableau', 'Marketing Cloud', 'ProServ'],
    stakeholders: ['AE', 'Analytics SE', 'MuleSoft', 'Data Cloud', 'Marketing Cloud', 'Customer CIO', 'Customer Sr. Director'],
    competencies: ['Drives multi-cloud technical strategy', 'Earns trusted advisor status with customers', 'Builds reusable assets for the team'],
    proof: [
      'Org62 confirms active REIS/MMI expansion motions, including Integration Expansion at $300,000 and Signature Success at $125,000.',
      'Customer voice praised Agentforce impact on business focus.',
      'Included in customer internal Salesforce footprint review.',
      'Readback deck pattern became a reusable blueprint.',
    ],
    nextEvidence: 'Add influenced pipeline roll-up specific to REIS/MMI decision windows used in your promotion packet.',
  },
  {
    account: 'Senske Family of Companies',
    label: 'Red-to-green recovery and multi-cloud expansion',
    logoUrl: senskeLogo,
    headline: 'Sustained orchestration turned a challenged implementation environment into a healthy growth motion.',
    status: 'Strong',
    businessImpact:
      'The account transitioned from a difficult implementation posture to active FY27 growth, with $2.6M+ open pipeline tied to Canada/Deans migration, Agentforce for Field Service, and BYOT-related motions.',
    salesMotion:
      'Coordinated Slalom, Uptima, Signature Success, and cross-cloud Salesforce teams while maintaining executive cadence through onsites and readbacks. Acted as continuity anchor through turbulence and preserved momentum for both account team and customer stakeholders.',
    products: ['Agentforce', 'Field Service', 'Marketing Cloud', 'BYOT', 'Signature Success'],
    stakeholders: ['Named AE', 'Regional leadership', 'C-suite customer stakeholders', 'Slalom', 'Uptima', 'Signature Success'],
    competencies: ['Orchestrates cross-functional resources', 'Owns complex deals end-to-end', 'Earns trusted advisor status with customers'],
    proof: [
      'SCA FY 26 Account Stories canvas: "$2.6M+ open FY27 pipeline" with "$998K Canada/Deans migration" and "$937K Agentforce for Field Service" called out explicitly.',
      'SCA FY 26 Account Stories canvas: account narrative documents red-to-green recovery through cross-functional orchestration and executive onsite cadence.',
      'FY26 Quarterly Accomplishment Write-up canvas: multiple Senske onsites, readbacks, and Q4 orchestration support are documented across quarterly updates.',
      'Account story credits sustained trust-building with executive stakeholders and partner management across implementation complexity.',
    ],
    nextEvidence: 'Add opportunity-level stage movement dates to quantify how orchestration accelerated the recovery timeline.',
  },
  {
    account: 'Cast & Crew',
    label: 'Deal execution and orchestration',
    logoUrl: castAndCrewLogo,
    headline: 'Led a full Agentforce contact center AI evaluation as primary SE in a high-complexity vendor process.',
    status: 'Strong',
    businessImpact:
      'Anchored a 1,600 calls-per-week contact center AI initiative with a 30% deflection target, keeping technical and stakeholder alignment intact through a competitive evaluation cycle.',
    salesMotion: 'Organized the demo plan, rallied the team, aligned roles, brought in Agentforce, Prompt Builder, TA, and compete resources, and managed decision-path clarity across VP-level stakeholders.',
    products: ['Agentforce', 'Service Cloud', 'Prompt Builder', 'Contact Center AI'],
    stakeholders: ['Named AE', 'Principal TA', 'Agentforce SE', 'Compete Team', 'Customer Contact Center Leaders'],
    competencies: ['Owns complex deals end-to-end', 'Orchestrates cross-functional resources', 'Strategic thought partner to AEs'],
    proof: [
      'AE quote: "Thank you for running point on this and rallying the team."',
      'Org62 confirms active related motions: +Agentforce Service ($45,000), +Shield ($51,151.54), and +SCV/Agentforce Voice ($697,500).',
      'TA quote validated pre-call roles and agenda clarity.',
      'Owned technical narrative and evaluation plan under timeline and scope pressure.',
    ],
    nextEvidence: 'Capture opportunity stage movement and timeline shifts to quantify orchestration impact, not closed ACV.',
  },
  {
    account: 'Resource Innovations',
    label: 'New AE force multiplier',
    logoUrl: resourceInnovationsLogo,
    headline: 'Orchestrated simultaneous workstreams for a new Core Named AE.',
    status: 'Strong',
    businessImpact:
      'Demonstrates sustained FY26-to-FY27 performance by helping a new AE inherit and progress one of the highest-complexity accounts in the territory, with Org62 showing $2.65M+ open pipeline on core Resource Innovations motions.',
    salesMotion:
      'Led North Star POV, InfoSec call with CTO, Agentforce Rebate Agent architecture, weekly core sync, and Big Bet Account Plan input. The same orchestration habits built in FY26 were applied in FY27 to stabilize execution through territory change.',
    products: ['Agentforce', 'Service Cloud', 'MuleSoft IDP', 'Tableau Cloud', 'Shield', 'Data Mask', 'Signature Success'],
    stakeholders: ['New Core Named AE', 'CTO', 'NeuraFlash SI', 'Specialist SEs'],
    competencies: ['Mentors and elevates peers', 'Orchestrates cross-functional resources', 'Operates above comfort zone consistently'],
    proof: [
      'AE publicly credited Wendy for driving reverse demo momentum.',
      'Multiple technical and executive workstreams ran in parallel.',
      'Weekly operating cadence established for the core team.',
      'Slack evidence: #ZC:C08EVP0GY84:Resource Innovations shows ongoing reverse-demo, workshop, and coordination threads.',
      'Org62 evidence: open motions include Signature Success Platform ($200,000), Signature Success ($112,500), and TAB Early Renewal Cloud Migration ($30,308.56), plus a recent closed-won add-on ($5,385.60).',
      'Org62 aggregate snapshot: $2,650,280.87 open on Resource Innovations core account (plus additional related-org motions).',
    ],
    nextEvidence: 'Capture pipeline influenced and AE testimonial on ramp acceleration.',
  },
  {
    account: 'The Olympic Club',
    label: 'FY27 strategic narrative translation',
    logoUrl: olympicClubLogo,
    headline: 'Applied FY26 operating discipline to shape an executive-ready FY27 growth narrative.',
    status: 'Draft',
    businessImpact:
      'Reflects sustained performance into FY27 by translating account discovery into a clear executive storyline tied to member experience, operating consistency, and long-term platform value, while advancing $494K+ open multi-motion pipeline.',
    salesMotion:
      'Built a structured HERO presentation blueprint and cross-functional narrative designed to connect business outcomes with technical roadmap decisions. The motion shows repeatable leadership behavior from prior-year account work applied to new FY27 opportunities.',
    products: ['Data Cloud', 'Agentforce', 'Salesforce Platform'],
    stakeholders: ['Named AE', 'Customer executive stakeholders', 'Extended specialist team'],
    competencies: ['Strategic thought partner to AEs', 'Drives multi-cloud technical strategy', 'Builds reusable assets for the team'],
    proof: [
      'Slack evidence: #ZC:C03RA4KD19U:The Olympic Club anchors account collaboration and executive storyline development.',
      'Org62 evidence: active RFP motion "The Olympic Club - RFP - Revenue Cloud, Tableau, MuleSoft, & D360" at $353,706.26 (Stage 03).',
      'Org62 aggregate snapshot: $494,302.26 open on The Olympic Club account across six active motions.',
      'Org62 evidence: additional FY27 pipeline includes renewal ($53,482.07), Agentforce projected growth ($21,340.00), and UE upgrade ($13,935.69).',
      'Org62 evidence: closed-won "Adding Agentforce at Renewal - (+26) Flex Credit bundles" at $10,966.09 supports FY26-to-FY27 continuity.',
    ],
    nextEvidence: 'Add opportunity mapping, executive meeting dates, and attributable pipeline movement once FY27 stages advance.',
  },
  {
    account: 'Proper Hospitality',
    label: 'FY27 continuity execution',
    logoUrl: properHospitalityLogo,
    headline: 'Extended FY26 orchestration approach into a new FY27 account motion.',
    status: 'Draft',
    businessImpact:
      'Shows sustained year-over-year operating performance by applying the same trusted execution model to a fresh FY27 pursuit with multi-stakeholder alignment and measurable pipeline carry-forward, with $268K+ open in Org62.',
    salesMotion:
      'Positioned strategic discovery, solution framing, and team coordination as a single operating thread rather than ad hoc support. This mirrors the account execution model proven across FY26 and carried forward into FY27.',
    products: ['Agentforce', 'Service Cloud', 'Data Cloud'],
    stakeholders: ['Named AE', 'Customer business stakeholders', 'Cross-cloud specialist partners'],
    competencies: ['Owns complex deals end-to-end', 'Orchestrates cross-functional resources', 'Earns trusted advisor status with customers'],
    proof: [
      'Slack evidence: #ZC:C0AECNHCZJR:Proper Hospitality LLC tracks active account collaboration and execution updates.',
      'Org62 evidence: active pipeline includes Member App ($100,000; Stage 02), Slack renewal ($83,700; Stage 01), and CC+ Growth ($22,500; Stage 03).',
      'Org62 aggregate snapshot: $268,504.36 open across nine active Proper Hospitality motions.',
      'Org62 evidence: closed-won "Proper - SLK - (+409) 465Biz+ Upgrade" at $71,604 demonstrates momentum converting into booked value.',
      'Evidence pattern supports sustained performance narrative from FY26 execution habits into FY27 expansion motions.',
    ],
    nextEvidence: 'Add quantified pipeline, stage progression, and attributed stakeholder quote as the FY27 cycle matures.',
  },
  {
    account: 'Thumbtack',
    label: 'In-quarter expansion + multi-motion FY27 pipeline',
    headline: 'Built momentum on an operationally variable account with in-quarter Tableau expansion and broader platform runway.',
    status: 'Strong',
    businessImpact:
      'Even with lower closed ACV in some motions, the account shows strong strategic value: Org62 reflects $3.16M+ open pipeline with meaningful in-quarter conversion potential.',
    salesMotion:
      'Supported expansion sequencing across Tableau, Slack, A1E, and partner cloud motions while sustaining account rhythm and close planning on near-term opportunities.',
    products: ['Tableau', 'Slack', 'A1E', 'Partner Cloud'],
    stakeholders: ['Named AE', 'Account team', 'Customer technical and business evaluators'],
    competencies: ['Owns complex deals end-to-end', 'Strategic thought partner to AEs', 'Scales work for territory-level impact'],
    proof: [
      'Org62 in-quarter signal: "Thumbtack - Tableau+ Upgrade" at $87,724.55 with close date 2026-06-26 (Stage 04 - Confirming Value With Power).',
      'Org62 in-quarter signal: "Thumbtack, Inc - SPIFF" at $79,200 with close date 2026-06-30 (Stage 04).',
      'Org62 aggregate snapshot: $3,158,680.89 open across 16 active Thumbtack motions.',
      'Broader expansion runway includes A1E Upgrade ($536,515.68) and Slack Enterprise Plus Upgrade ($300,759).',
    ],
    nextEvidence: 'Add AE quote tying in-quarter execution discipline to broader FY27 expansion strategy.',
  },
  {
    account: 'Avetta',
    label: 'Five-track expansion',
    logoUrl: avettaLogo,
    headline: 'Consistent SE thread across multiple simultaneous expansion motions.',
    status: 'Draft',
    businessImpact:
      'Created continuity across five technical workstreams that could otherwise fragment the customer experience.',
    salesMotion: 'Ran marketing discovery, ITSM specialist threading, Supplier Lifecycle Agentforce discussion, Tableau Next/Pulse evaluation, Qualified/MC exploration, and North Star POV architecture.',
    products: ['Agentforce', 'ITSM', 'Tableau Next', 'Pulse', 'Marketing Cloud', 'Qualified'],
    stakeholders: ['AE', 'ITSM Specialists', 'Marketing Stakeholders', 'Supplier Lifecycle Leaders'],
    competencies: ['Drives multi-cloud technical strategy', 'Strategic thought partner to AEs', 'Orchestrates cross-functional resources'],
    proof: [
      'Five active workstreams with Wendy as the consistent SE thread.',
      'North Star POV architecture designed in real time.',
      'Specialist teams aligned to customer use cases.',
    ],
    nextEvidence: 'Add customer meeting outcomes, pipeline values, and stakeholder quote.',
  },
  {
    account: 'Checkr / Truework',
    label: 'AI-native customer artifact',
    logoUrl: checkrLogo,
    secondaryLogoUrl: trueworkLogo,
    headline: 'Built customer-facing AI documentation for verification workflow analysis.',
    status: 'Strong',
    businessImpact:
      'Moved a strategic account motion from POV discussion into structured AI-enabled workflow comparison.',
    salesMotion: 'Co-led North Star POV, built Truework POV deck, drafted discovery questions, led Agentforce verification workflow architecture, and created technical documentation for Claude-based SOP comparison.',
    products: ['Agentforce', 'Service Cloud', 'AI Workflow Documentation'],
    stakeholders: ['AE', 'Head of Strategic Operations', 'Customer Operations Leaders'],
    competencies: ['Uses AI to scale SE practice', 'Owns complex deals end-to-end', 'Earns trusted advisor status with customers'],
    proof: [
      'AE thanked Wendy specifically for driving the Checkr POV.',
      'Full discovery question set and workflow documentation built from scratch.',
      'AI tooling used to QA and validate the customer-ready canvas.',
    ],
    nextEvidence: 'Add customer feedback and outcome from SOP comparison.',
  },
  {
    account: 'Robbins Research',
    label: 'Red account turnaround',
    logoUrl: robbinsLogo,
    headline: 'Helped rebuild trust and re-open AI and data strategy conversations.',
    status: 'Needs Testimonial',
    businessImpact:
      'Contributed to a red account recovery by supporting compete positioning and AI ideation.',
    salesMotion: 'Engaged compete team for Agentforce, supported AI ideation workshop, and partnered with Principal TA on data strategy.',
    products: ['Agentforce', 'Data 360', 'Marketing Cloud Engagement'],
    stakeholders: ['AE', 'Principal TA', 'Compete Team', 'Customer Executive Stakeholder'],
    competencies: ['Earns trusted advisor status with customers', 'Strategic thought partner to AEs', 'Drives multi-cloud technical strategy'],
    proof: [
      'Org62 confirms open expansion motions including MCE+ Upgrade ($583,834.76), AFCC Digital + BYOT ($104,817.00), and Agentforce + D360 Expansion ($300,000).',
      'Manager notes identify Robbins as a trust-building turnaround story.',
      'AI ideation and data strategy workstreams moved forward.',
      'Compete team engaged for Agentforce positioning.',
    ],
    nextEvidence: 'Request formal quote from AE or TA describing the turnaround and Wendy’s role.',
  },
]

const competencies: Competency[] = [
  {
    name: 'Drives multi-cloud technical strategy',
    icon: '◎',
    definition:
      'Connects product depth to enterprise architecture decisions across multiple clouds and business functions. Frames technical choices in terms of customer outcomes, sequencing, and adoption risk, not just feature fit. Sustains that strategy through account transitions so the long-term platform narrative stays intact.',
    leadSignal:
      'Shows enterprise platform thinking beyond a single product lane. Demonstrates the ability to keep strategic direction stable while specialists, stakeholders, and priorities shift.',
    examples: ['M&M multi-cloud expansion', 'Manatt architecture', 'Avetta five-track motion', 'Robbins AI plus data strategy'],
  },
  {
    name: 'Owns complex deals end-to-end',
    icon: '◆',
    definition:
      'Sustains ownership from early discovery to executive validation, not just point-in-time delivery. Maintains continuity across long deal cycles, including moments of ambiguity, technical risk, and leadership change. Keeps the account moving by clarifying decisions, sequencing actions, and closing execution gaps before they become blockers.',
    leadSignal:
      'Operates as a technical deal quarterback. Demonstrates repeatable accountability over outcomes, not isolated tasks.',
    examples: ['Manatt from early motion through close', 'Cast & Crew full Agentforce evaluation', 'Checkr / Truework POV to architecture'],
  },
  {
    name: 'Orchestrates cross-functional resources',
    icon: '◈',
    definition:
      'Aligns specialists, partners, legal, TA, and sales into one coherent execution plan. Creates clear ownership and timing so each contributor is activated at the right moment. Maintains alignment through evolving scope, customer pressure, and competing internal priorities.',
    leadSignal:
      'Creates leverage for account teams instead of adding coordination burden. Turns fragmented effort into coordinated execution that leadership can trust.',
    examples: ['Manatt seven-team coordination', 'Cast & Crew specialist assembly', 'Resource Innovations weekly operating cadence'],
  },
  {
    name: 'Mentors and elevates peers',
    icon: '▲',
    definition:
      'Builds capability in AEs and peers through repeatable enablement and live coaching. Shares methods, not just answers, so others can execute independently with higher confidence. Supports new and transitioning teammates while preserving quality and momentum on active business.',
    leadSignal:
      'Turns personal expertise into team-level performance. Evidence shows influence across the wider territory, not only directly owned accounts.',
    examples: ['MM North Huddle session one (~40 attendees)', 'Early-tenure AE support', 'Senske lessons learned sharing', 'Sellen outreach coaching'],
  },
  {
    name: 'Uses AI to scale SE practice',
    icon: '✦',
    definition:
      'Uses AI to improve execution speed, consistency, and quality across customer and team motions. Applies AI in practical workflows like orchestration artifacts, readbacks, and technical documentation where cycle-time and clarity matter. Treats AI as an execution multiplier that improves team outcomes, not as a stand-alone experiment.',
    leadSignal:
      'Models the behavior Salesforce asks customers to adopt. Shows credible operator judgment by pairing innovation with responsible rollout and measurable business context.',
    examples: ['Account channel orchestration prompts', 'POV activation prompts', 'Truework technical documentation canvas', 'AI-assisted enablement content'],
  },
  {
    name: 'Earns trusted advisor status',
    icon: '●',
    definition:
      'Builds executive and technical trust that moves teams from evaluation to commitment. Demonstrates customer context fluency, transparent communication, and consistent follow-through under pressure. Strengthens trust over time so account teams can navigate strategic decisions with less friction.',
    leadSignal:
      'Customer trust extends beyond demo delivery into business decision support. Trusted-advisor posture is reinforced by repeat executive engagement and stakeholder testimonials.',
    examples: ['M&M internal footprint review', 'Robbins trust rebuild', 'Senske executive alignment', 'Manatt CIO / CMO architecture'],
  },
  {
    name: 'Scales work for territory-level impact',
    icon: '⬢',
    definition:
      'Operates with a scope that extends beyond individual accounts by creating repeatable execution patterns, enabling other sellers, and sustaining momentum across multiple complex motions at once. Balances depth in strategic deals with breadth across the territory, so impact compounds quarter over quarter.',
    leadSignal:
      'Impact is visible at territory level, not just account level. Demonstrates capacity to translate individual execution into broader team performance and measurable business outcomes.',
    examples: [
      '$7.4M+ open FY27 pipeline influenced across Robbins, Manatt, M&M, and Senske',
      'Resource Innovations, The Olympic Club, and Proper Hospitality continuity from FY26 into FY27',
      'MM North Huddle enablement session with ~40 attendees',
      'Support across multiple AEs and parallel account workstreams',
    ],
  },
]

const leadershipStories: LeadershipStory[] = [
  {
    capability: 'Builds scalable team enablement',
    story: 'Co-created and launched the MM North Huddle enablement series with structured sessions, resources, and recurring delivery cadence.',
    impact: 'Session one delivered with ~40 attendees and strong participation, establishing a repeatable AE enablement format.',
    competencies: ['Mentors and elevates peers', 'Orchestrates cross-functional resources'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Stabilizes execution through org change',
    story: 'Maintained account momentum through transitions in leadership and AE coverage by acting as execution anchor across major accounts.',
    impact: 'Protected continuity on complex multi-cloud motions while supporting up to seven AEs in parallel.',
    competencies: ['Owns complex deals end-to-end', 'Earns trusted advisor status'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Expands influence beyond individual accounts',
    story: 'Packaged account orchestration methods into reusable team motions and cross-functional operating habits.',
    impact: 'Converted personal execution patterns into territory-level behaviors now used in leadership-sponsored enablement.',
    competencies: ['Mentors and elevates peers', 'Uses AI to scale SE practice'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Inside Salesforce: ERG and community leadership',
    logoUrl: 'https://salesforce.enterprise.slack.com/files/U03AFLMMNGY/F0B9T57L9GU/image.png',
    story: 'Active leader in Shalomforce through event planning and board collaboration, contributing to Salesforce community engagement beyond core account responsibilities.',
    impact: 'Demonstrates sustained cross-functional influence, execution ownership, and leadership presence in internal community-building initiatives.',
    competencies: ['Mentors and elevates peers', 'Orchestrates cross-functional resources'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Inside Salesforce: leadership on Matt Martone team initiatives',
    story: 'Partnered on high-priority team initiatives and program ideation, including building and executing the AE enablement series model.',
    impact: 'Expanded influence beyond direct account work by creating repeatable programs that improve AE and team operating effectiveness.',
    competencies: ['Strategic thought partner to AEs', 'Mentors and elevates peers'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Outside Salesforce: nonprofit board governance and strategy',
    logoUrl: cyjTexasLogo,
    story: 'Board of Directors member for Camp Young Judaea Texas, including two terms as Treasurer with direct governance over strategic and financial decisions.',
    impact: 'Led fiduciary oversight for a $5M annual operating budget (camp + retreat business) and helped steer strategic planning, succession planning, and a $10M capital campaign.',
    competencies: ['Owns complex deals end-to-end', 'Strategic thought partner to AEs'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Outside Salesforce: faith-community leadership',
    logoUrl: templeJudaeaLogo,
    story:
      'Serves on the Youth & Family Committee at Temple Judaea, selected directly by the Rabbi during a critical period of growth and transition for the congregation.',
    impact:
      'Trusted to help guide programming and family experience at a pivotal moment when the temple is scaling support for a growing number of families.',
    competencies: ['Mentors and elevates peers', 'Orchestrates cross-functional resources'],
    status: 'Evidence-ready',
  },
  {
    capability: 'Leadership growth trajectory',
    story: 'Selected to participate in the upcoming Aspire cohort, Salesforce leadership training.',
    impact: 'Signals proactive investment in leadership capability and readiness to scale impact at Lead SE scope.',
    competencies: ['Mentors and elevates peers', 'Strategic thought partner to AEs'],
    status: 'Evidence-ready',
  },
]

const testimonials: Testimonial[] = [
  {
    name: 'Kyle Blumberg',
    role: 'Named AE, Manatt',
    quote:
      "Wendy - the OG who got us here! Without you taking charge way back when, this deal does not happen. Her ability to drive the strategy, own execution, and keep momentum through complexity was a major reason we got Manatt across the line.",
    competencies: ['Owns complex deals end-to-end', 'Orchestrates cross-functional resources'],
    avatarUrl: 'https://avatars.slack-edge.com/2020-12-14/1567547393238_916edad05b309b6a2f12_original.png',
  },
  {
    name: 'Angela Hawley',
    role: 'Distinguished Principal SE',
    quote:
      'It is my pleasure to recommend Wendy Cohen for promotion, based on her work on the Manatt, Phelps & Phillips engagement. When Wendy took on Manatt, the legal services firm viewed Salesforce narrowly as a pipeline entry tool rather than a strategic platform. She collaborated across Tableau, MuleSoft, security, and platform teams to build a bespoke executive demo, and her preparation paid off in December. Her deep discovery and cross-functional leadership shifted executive perception and gave Manatt the confidence to move forward.',
    competencies: ['Drives multi-cloud technical strategy', 'Owns complex deals end-to-end'],
    avatarUrl: 'https://avatars.slack-edge.com/2026-04-10/10888807429522_94644932f157638b5a0b_original.jpg',
  },
  {
    name: 'Sean McInturff',
    role: 'Principal TA',
    quote:
      "Over the past year, I've had the privilege of working alongside Wendy on Robbins, Cast & Crew, and Manatt. She consistently demonstrates poise, technical depth, and customer instincts. At Robbins, she co-built custom Agentforce agents that earned direct customer praise. At Manatt, she led the demo track through a months-long pursuit and handled a live technical issue mid-presentation without missing a beat. What sets Wendy apart is how she drives alignment across account teams and activates the right resources at the right time.",
    competencies: ['Orchestrates cross-functional resources', 'Earns trusted advisor status with customers'],
    avatarUrl: 'https://avatars.slack-edge.com/2026-01-27/10376701942867_8b0f5952d4f956ece090_original.png',
  },
  {
    name: 'Carly Carter',
    role: 'Regional Sales Director',
    quote:
      "Across these four accounts, Wendy's work - much of it done before I even arrived - has generated over $7.4 million in open FY27 pipeline. That is the direct result of trust, technical credibility, and orchestration she built one relationship at a time. Wendy has proven she can walk into ambiguity, command the extended team, and hold deals together.",
    competencies: ['Orchestrates cross-functional resources', 'Owns complex deals end-to-end'],
    avatarUrl: 'https://avatars.slack-edge.com/2021-07-06/2253698301940_5d861302b16764aabf98_original.jpg',
  },
  {
    name: 'Frankie Reitz',
    role: 'Named AE, Resource Innovations',
    quote:
      'What an incredible 3-hour Agentforce Rebate Agent Workshop session. Wendy’s preparation, thoughtfulness, and ability to anticipate questions kept the conversation flowing seamlessly. The customer said those three hours delivered more value than everything they had received from their implementation partner over the past two years.',
    competencies: ['Owns complex deals end-to-end', 'Orchestrates cross-functional resources'],
    avatarUrl: 'https://avatars.slack-edge.com/2025-09-29/9599893359286_49a39c70b519c1232955_original.png',
  },
  {
    name: 'Michael Carpenter',
    role: 'Lead, Analytics SE',
    quote:
      'I was excited when Wendy told me she is gunning for promotion to Lead SE. Wendy is the ultimate orchestrator. On complex accounts like Senske, Manatt, and Marcus & Millichap, her strategic thinking is always next-level. She has an incredible knack for building genuine partnerships across account teams and knowing exactly how and when to bring in the extended team to deliver the best results. Wendy is already operating as a Lead SE in every way and absolutely deserves this next step.',
    competencies: ['Orchestrates cross-functional resources', 'Drives multi-cloud technical strategy'],
    avatarUrl: 'https://avatars.slack-edge.com/2023-07-17/5617152063872_2c884a5eebb94cedd99a_original.jpg',
  },
  {
    name: 'Michael Falkner',
    role: 'Lead, Technical Architect',
    quote:
      'Wendy is a natural leader within her department and has become a trusted go-to person for peers, leadership, and supporting teams. She orchestrates large, complex deals by bringing multiple teams together, mapping responsibilities, and ensuring the right resources are used at the right time. Wendy leads with confidence, empathy, and trust, and she would crush it as a Lead Solutions Engineer.',
    competencies: ['Orchestrates cross-functional resources', 'Mentors and elevates peers'],
    avatarUrl: 'https://avatars.slack-edge.com/2025-02-17/8464946027266_25747b56e31cbbade6c5_original.png',
  },
  {
    name: 'Poria Asaad',
    role: 'Regional Vice President (RVP), FY27 Q1',
    quote:
      'Wendy’s impact on the team has been that she operates as a proactive, vocal strategic partner, not just a reactive support function. She contributes meaningfully in team meetings and client calls, helps create open dialogue around pipeline, people, and deal strategy, and brings the credibility to influence how AEs approach the business. Her involvement was an important factor in the success of the North Star POV program and in building a stronger shared-accountability model across AE, SE, and RVP partners.',
    competencies: ['Strategic thought partner to AEs', 'Mentors and elevates peers'],
    avatarUrl: 'https://avatars.slack-edge.com/2025-02-01/8371306429271_2633c69cb6899fcef6ed_original.png',
  },
  {
    name: 'Amy Shih',
    role: 'Cloud Account Executive (formerly Lead SE, Marketing Cloud)',
    quote:
      "I've had the pleasure of partnering with Wendy across several complex accounts, and she consistently stands out for her ability to orchestrate the right people, at the right time, in the right way. On Marcus & Millichap and Senske, she drove the strategic narrative, built executive-level POVs and roadmaps, and kept the extended team aligned through every twist and turn. The people she works with consistently produce better outcomes because of her involvement.",
    competencies: ['Strategic thought partner to AEs', 'Orchestrates cross-functional resources'],
    avatarUrl: 'https://avatars.slack-edge.com/2024-05-09/7093566891443_5c6adf055d0ba02bcd2f_original.jpg',
  },
  {
    name: 'Kelsey Brooks',
    role: 'Lead, Account SE',
    quote:
      "Wendy is an exceptional SE who is already operating at the Lead level. I've partnered with her on large, complex deals like Senske, where she expertly coordinated members of the extended team in a demanding environment. Beyond individual deals, she has been an invaluable partner in the BOW territory, keeping momentum and morale steady through significant change and showcasing range beyond deal execution.",
    competencies: ['Mentors and elevates peers', 'Orchestrates cross-functional resources'],
    avatarUrl: 'https://avatars.slack-edge.com/2023-05-30/5359774117713_67493e0a1a1d0432d8d8_original.jpg',
  },
]

const statusStyles: Record<EvidenceStatus, string> = {
  Strong: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  'Needs Quantification': 'border-amber-200 bg-amber-50 text-amber-800',
  'Needs Testimonial': 'border-blue-200 bg-blue-50 text-blue-800',
  Draft: 'border-slate-200 bg-slate-100 text-slate-700',
}

function App() {
  const [activeView, setActiveView] = useState<View>('narrative')
  const [selectedAccount, setSelectedAccount] = useState(accounts[0])

  const strongEvidenceCount = useMemo(
    () => accounts.filter((account) => account.status === 'Strong').length,
    [],
  )

  return (
    <main className="min-h-screen bg-[#f5f2ec] text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
          <div className="p-6 lg:p-10">
            <section className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
                  Lead SE Impact OS
                </p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <img
                    src="https://avatars.slack-edge.com/2022-12-12/4530027251008_08d46c313ac758fe46b6_original.jpg"
                    alt="Wendy Cohen"
                    className="h-24 w-24 rounded-2xl border border-slate-200 object-cover shadow-sm sm:h-28 sm:w-28"
                  />
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Wendy Cohen promotion case for Lead SE.
                  </h1>
                </div>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Executive-readout microsite with promotion narrative, account impact, lead
                  competencies, leadership evidence, and attributed testimonial proof.
                </p>
              </div>
              <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  Who I am in 30 seconds
                </p>
                <p className="mt-2 leading-7 text-indigo-950">
                  I bring 7 years of SE experience across strategic customer motions: 4 years in seat at
                  Salesforce plus 3 years as an SE prior to Salesforce. That depth, combined with an MBA,
                  gives me a strong business-acumen lens that helps translate technical strategy into
                  executive-relevant outcomes. It is a key differentiator in how I lead account strategy,
                  orchestrate teams, and drive measurable business impact.
                </p>
              </section>
              <section className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                  Promotion thesis
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight">
                  The recommendation is to promote because business impact, execution scope,
                  and team influence are already at Lead SE level.
                </p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-slate-300">Strong account stories</dt>
                    <dd className="text-2xl font-semibold">{strongEvidenceCount} of {accounts.length}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-300">Executive focus</dt>
                    <dd className="text-lg font-medium">Scope already carried should align with title.</dd>
                  </div>
                </dl>
              </section>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {executiveMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-3xl font-semibold text-slate-950">{metric.value}</p>
                    <p className="mt-1 text-sm font-medium text-slate-800">{metric.label}</p>
                    <p className="mt-2 text-sm leading-5 text-slate-500">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <nav className="no-print flex gap-2 overflow-x-auto border-t border-slate-200 bg-slate-50 px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveView(item.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeView === item.id
                    ? 'bg-slate-950 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        {activeView === 'narrative' && <NarrativeView setActiveView={setActiveView} />}
        {activeView === 'accounts' && (
          <AccountStoriesView selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} />
        )}
        {activeView === 'skills' && <LeadSkillsView />}
        {activeView === 'leadership' && <LeadershipView />}
        {activeView === 'testimonials' && <TestimonialsView />}
      </div>
    </main>
  )
}

function NarrativeView({ setActiveView }: { setActiveView: (view: View) => void }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          The narrative
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Wendy is already performing at Lead SE scope in territory strategy, account execution, and team-level influence.
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          This case is built on five factors: strategic business need, key account outcomes,
          lead-level competency evidence, leadership capability stories, and attributed testimonial proof.
          The emphasis is not on activity volume alone, but on measurable account impact and execution leadership.
        </p>
        <p className="mt-4 leading-7 text-slate-600">
          After four years in CBS MM, Wendy brings institutional and territory-specific knowledge that de-risks transition and accelerates execution in Scott Rubin&apos;s new coverage model.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveView('accounts')}
            className="rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-800"
          >
            Review key account stories
          </button>
          <button
            type="button"
            onClick={() => setActiveView('skills')}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-500"
          >
            Review lead competencies
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                Executive readout lens
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Why promotion now</h2>
            </div>
            <p className="text-sm text-slate-500">Evidence is account-anchored and competency-mapped</p>
          </div>
          <div className="mt-5 space-y-3">
            {[
              'Territory complexity and transition risk require a strategic SE anchor.',
              'Four years in CBS MM gives Wendy institutional context that shortens ramp time for new territory structures.',
              'Cross-cloud account motions and executive-level trust are already established.',
              'Execution influence extends beyond owned accounts through AE enablement.',
              'Promotion aligns title with current operating reality and territory need.',
            ].map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Stakeholder voice
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {testimonials.slice(0, 2).map((item) => (
              <blockquote key={item.quote} className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-lg font-medium leading-7">“{item.quote}”</p>
                <footer className="mt-4 text-sm text-slate-300">
                  {item.name} · {item.role}
                </footer>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.competencies.map((competency) => (
                    <span key={competency} className="rounded-full border border-white/30 px-2 py-1 text-xs text-slate-200">
                      {competency}
                    </span>
                  ))}
                </div>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

function AccountStoriesView({
  selectedAccount,
  setSelectedAccount,
}: {
  selectedAccount: AccountImpact
  setSelectedAccount: (account: AccountImpact) => void
}) {
  return (
    <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <aside className="no-print rounded-[2rem] border border-slate-200 bg-white p-4">
        <p className="px-2 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Key accounts
        </p>
        <div className="mt-2 space-y-2">
          {accounts.map((account) => (
            <button
              key={account.account}
              type="button"
              onClick={() => setSelectedAccount(account)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                selectedAccount.account === account.account
                  ? 'border-indigo-300 bg-indigo-50'
                  : 'border-transparent hover:border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <AccountLogo
                    name={account.account}
                    logoUrl={account.logoUrl}
                    secondaryLogoUrl={account.secondaryLogoUrl}
                    size="sm"
                  />
                  <span className="font-semibold text-slate-950">{account.account}</span>
                </div>
                <StatusBadge status={account.status} />
              </div>
              <p className="mt-1 text-sm text-slate-500">{account.label}</p>
            </button>
          ))}
        </div>
      </aside>

      <article className="rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
        <section className="mb-6 rounded-3xl border border-indigo-200 bg-indigo-50 p-5">
          <h3 className="text-lg font-semibold text-indigo-950">Sustained FY26 to FY27 performance</h3>
          <p className="mt-2 leading-7 text-indigo-900">
            Key account stories show continuity, not one-off wins. The execution model developed in FY26 is carried into FY27 and is visible across Resource Innovations, The Olympic Club, and Proper Hospitality through consistent orchestration, strategic narrative ownership, and cross-functional alignment.
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              Key account story & ACV / pipeline impact
            </p>
            <div className="mt-2 flex items-center gap-4">
              <AccountLogo
                name={selectedAccount.account}
                logoUrl={selectedAccount.logoUrl}
                secondaryLogoUrl={selectedAccount.secondaryLogoUrl}
                size="lg"
              />
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
                {selectedAccount.account}
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-xl leading-8 text-slate-600">{selectedAccount.headline}</p>
          </div>
          <StatusBadge status={selectedAccount.status} />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <InfoPanel title="Business Impact" body={selectedAccount.businessImpact} />
          <InfoPanel title="Sales Motion" body={selectedAccount.salesMotion} />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <ListPanel title="Products" items={selectedAccount.products} />
          <ListPanel title="Stakeholders" items={selectedAccount.stakeholders} />
          <ListPanel title="Lead SE Competencies" items={selectedAccount.competencies} />
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-950">Proof points</h3>
          <ul className="mt-4 space-y-3">
            {selectedAccount.proof.map((proof) => (
              <li key={proof} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-700" />
                {proof}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="text-lg font-semibold text-amber-950">Next evidence to add</h3>
          <p className="mt-2 leading-7 text-amber-900">{selectedAccount.nextEvidence}</p>
        </section>
      </article>
    </section>
  )
}

function LeadSkillsView() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Lead SE skills / competencies
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
          Lead-level competency evidence with account-linked examples.
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          This section maps where Wendy demonstrates each key competency at Lead SE level.
          Use this as the rubric-aligned evidence layer for promotion conversations.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {competencies.map((competency) => (
          <article key={competency.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-base font-semibold text-indigo-900">
                {competency.icon}
              </span>
              <h3 className="text-xl font-semibold text-slate-950">{competency.name}</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-600">{competency.definition}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {competency.examples.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 rounded-2xl bg-white p-4 text-sm font-medium leading-6 text-slate-800">
              {competency.leadSignal}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function LeadershipView() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Leadership capabilities & stories
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Leadership impact beyond core account execution.
        </h2>
        <p className="mt-5 leading-7 text-slate-600">
          This section captures leadership behavior that scales beyond one deal: enablement,
          organizational stability, cross-functional influence, and multiplier effects.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {leadershipStories.map((story) => (
          <article key={story.capability} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {story.logoUrl ? (
                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1">
                    <img src={story.logoUrl} alt={`${story.capability} logo`} className="h-full w-full object-contain" />
                  </div>
                ) : null}
                <h3 className="text-xl font-semibold text-slate-950">{story.capability}</h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  story.status === 'Evidence-ready'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {story.status}
              </span>
            </div>
            <p className="mt-3 leading-7 text-slate-600">{story.story}</p>
            <p className="mt-4 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-800">
              {story.impact}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {story.competencies.map((competency) => (
                <span key={competency} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                  {competency}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function TestimonialsView() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Testimonials</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
          Attributed stakeholder statements aligned to Lead SE competencies.
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Each testimonial includes person, role, quote, and competency indicators for promotion panel review.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name + testimonial.quote} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700">
                {testimonial.avatarUrl ? (
                  <img src={testimonial.avatarUrl} alt={testimonial.name} className="h-full w-full object-cover" />
                ) : (
                  getInitials(testimonial.name)
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{testimonial.name}</h3>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="mt-4 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-800">
              “{testimonial.quote}”
            </blockquote>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Competency indicators
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {testimonial.competencies.map((competency) => (
                <span key={competency} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-900">
                  {competency}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function InfoPanel({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{body}</p>
    </section>
  )
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function StatusBadge({ status }: { status: EvidenceStatus }) {
  return (
    <span className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  )
}

function AccountLogo({
  name,
  logoUrl,
  secondaryLogoUrl,
  size,
}: {
  name: string
  logoUrl?: string
  secondaryLogoUrl?: string
  size: 'sm' | 'lg'
}) {
  const [imageFailed, setImageFailed] = useState(false)
  const [secondaryImageFailed, setSecondaryImageFailed] = useState(false)
  const sizeClasses = size === 'sm' ? 'h-9 w-9 rounded-lg p-1 text-xs' : 'h-12 w-12 rounded-xl p-1.5 text-sm'
  const hasSecondaryLogo = Boolean(secondaryLogoUrl)

  return (
    <div
      className={`flex items-center justify-center overflow-hidden border border-slate-200 bg-white ${
        hasSecondaryLogo ? 'w-auto rounded-xl px-1.5 py-1' : sizeClasses
      }`}
    >
      {hasSecondaryLogo ? (
        <div className={`flex items-center ${size === 'sm' ? 'gap-1' : 'gap-1.5'}`}>
          {logoUrl && !imageFailed ? (
            <img
              src={logoUrl}
              alt="Checkr logo"
              className={`${size === 'sm' ? 'h-5 w-5' : 'h-7 w-7'} object-contain`}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="font-semibold text-slate-500">{getInitials(name).slice(0, 1)}</span>
          )}
          <span className="h-4 w-px bg-slate-200" />
          {secondaryLogoUrl && !secondaryImageFailed ? (
            <img
              src={secondaryLogoUrl}
              alt="Truework logo"
              className={`${size === 'sm' ? 'h-5 w-5' : 'h-7 w-7'} object-contain`}
              onError={() => setSecondaryImageFailed(true)}
            />
          ) : (
            <span className="font-semibold text-slate-500">{getInitials(name).slice(1, 2)}</span>
          )}
        </div>
      ) : logoUrl && !imageFailed ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="font-semibold text-slate-500">{getInitials(name)}</span>
      )}
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export default App
