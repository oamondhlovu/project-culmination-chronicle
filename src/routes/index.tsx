import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, ChartBar as BarChart3, BookOpen, CalendarDays, Check, ChevronRight, CircleDollarSign, ClipboardCheck, Download, FileCheck as FileCheck2, FileText, Image as ImageIcon, Landmark, Menu, Mic as Mic2, Play, Quote, ShieldCheck, Sparkles, Target, Users, Video, WalletCards, X } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: ReportHome });

const sections = [
  { id: "summary", label: "Executive summary" },
  { id: "attendance", label: "Attendance" },
  { id: "participation", label: "Participation & feedback" },
  { id: "media", label: "Media evidence" },
  { id: "finance", label: "Financial reconciliation" },
  { id: "lessons", label: "Lessons learnt" },
];

const gallery = [
  {
    src: "https://images.pexels.com/photos/8761328/pexels-photo-8761328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A group attending a presentation",
    title: "Learning in action",
    type: "Photograph",
  },
  {
    src: "https://images.pexels.com/photos/8424451/pexels-photo-8424451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A facilitator presenting on a whiteboard",
    title: "Facilitator-led session",
    type: "Photograph",
  },
  {
    src: "https://images.pexels.com/photos/30697995/pexels-photo-30697995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A diverse group posing together",
    title: "Community of practice",
    type: "Photograph",
  },
  {
    src: "https://images.pexels.com/photos/26600702/pexels-photo-26600702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A woman holding her graduation certificate",
    title: "Celebrating achievement",
    type: "Photograph",
  },
  {
    src: "https://images.pexels.com/photos/15141536/pexels-photo-15141536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "A presenter explaining data",
    title: "Evidence-based practice",
    type: "Photograph",
  },
];

const attendance = [
  { name: "Cohort A", date: "12 Mar 2024", planned: 28, present: 26, rate: 93 },
  { name: "Cohort B", date: "15 Apr 2024", planned: 32, present: 31, rate: 97 },
  { name: "Cohort C", date: "21 May 2024", planned: 30, present: 27, rate: 90 },
  { name: "Cohort D", date: "18 Jun 2024", planned: 30, present: 29, rate: 97 },
  { name: "Cohort E", date: "16 Jul 2024", planned: 28, present: 27, rate: 96 },
  { name: "Cohort F", date: "13 Aug 2024", planned: 26, present: 25, rate: 96 },
];

const feedback = [
  { label: "Content relevance", value: 92 },
  { label: "Facilitator quality", value: 96 },
  { label: "Practical application", value: 89 },
  { label: "Materials & support", value: 87 },
];

function ReportHome() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof gallery)[number] | null>(null);
  const [activeSection, setActiveSection] = useState("summary");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-[#24343b]">
      <header className="relative overflow-hidden bg-[#123f46] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(120deg,transparent_0%,rgba(230,193,83,.3)_45%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-7 lg:px-10">
          <div className="flex items-center justify-between border-b border-white/15 pb-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#e6c153] text-[#123f46]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f1d57b]">
                  Programme close-out
                </p>
                <p className="text-sm font-semibold tracking-wide">Impact & Learning Office</p>
              </div>
            </div>
            <div className="hidden items-center gap-4 text-xs text-white/70 md:flex">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#e6c153]" />
                Reporting period: Jan–Aug 2024
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span>Issued 30 August 2024</span>
            </div>
            <button
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle navigation"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenu && (
            <div className="mt-4 grid gap-2 rounded-xl bg-white/10 p-3 md:hidden">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className="rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}

          <div className="grid items-end gap-10 pt-16 lg:grid-cols-[1.2fr_.8fr] lg:pt-24">
            <div>
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f1d57b]">
                <span className="h-px w-8 bg-[#e6c153]" /> Final report · 2024
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Project <em className="font-normal text-[#f1d57b]">Culmination</em> Chronicle
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                A documented account of participation, progress, and possibility from the 2024
                Learning Forward programme.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  onClick={() => scrollTo("summary")}
                  className="h-11 rounded-lg bg-[#e6c153] px-5 text-[#123f46] hover:bg-[#f1d57b]"
                >
                  <FileText className="h-4 w-4" />
                  Explore the report
                </Button>
                <Button
                  onClick={() => window.print()}
                  variant="outline"
                  className="h-11 rounded-lg border-white/25 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Print / save PDF
                </Button>
              </div>
            </div>
            <div className="relative lg:pb-2">
              <div className="ml-auto max-w-sm rounded-2xl border border-white/15 bg-white/[.07] p-6 backdrop-blur-sm">
                <div className="mb-7 flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Report at a glance
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#e6c153]" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  <Metric value="6" label="learning cohorts" />
                  <Metric value="171" label="learners reached" />
                  <Metric value="95%" label="average attendance" />
                  <Metric value="R1.24m" label="total investment" />
                </div>
              </div>
              <div className="absolute -bottom-12 -left-2 hidden h-20 w-20 rounded-full border border-[#e6c153]/40 lg:block" />
            </div>
          </div>
        </div>
      </header>

      <nav className="no-print sticky top-0 z-30 border-b border-[#d9e3e0] bg-[#f4f7f6]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-6 lg:px-10">
          <div className="mr-4 hidden shrink-0 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#123f46] lg:block">
            Contents
          </div>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={cn(
                "group flex shrink-0 items-center gap-2 border-b-2 px-3 py-4 text-xs font-semibold transition-colors",
                activeSection === section.id
                  ? "border-[#d4ae3f] text-[#123f46]"
                  : "border-transparent text-[#6b7f83] hover:text-[#123f46]",
              )}
            >
              <span className="hidden text-[10px] text-[#d4ae3f] sm:inline">0{index + 1}</span>
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <Section
          id="summary"
          eyebrow="01 / The story so far"
          title="Executive summary"
          intro="The 2024 Learning Forward programme concludes with strong evidence of reach, relevance, and readiness for the next chapter."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <Card className="border-[#d9e3e0] bg-white shadow-sm">
              <CardContent className="p-7 sm:p-9">
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#123f46]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#eaf2ef] text-[#2e7c69]">
                    <Check className="h-4 w-4" />
                  </span>
                  Programme outcome
                </div>
                <p className="font-serif text-2xl leading-snug text-[#123f46] sm:text-3xl">
                  “The programme did more than deliver training. It created a practical, shared
                  language for change.”
                </p>
                <p className="mt-6 text-sm leading-7 text-[#617477]">
                  Across six cohorts, the programme supported 171 learners through a blended
                  learning journey that combined facilitated sessions, peer exchange, and workplace
                  application. The close-out evidence shows a cohort that was engaged, confident,
                  and ready to carry the work forward.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge className="border-[#b8d9ce] bg-[#eaf5f0] text-[#27735f] hover:bg-[#eaf5f0]">
                    Target exceeded
                  </Badge>
                  <Badge variant="outline" className="border-[#d9e3e0] text-[#617477]">
                    Independent close-out
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <SummaryCard
                icon={Users}
                label="Learners reached"
                value="171"
                note="Across 6 cohorts"
                color="gold"
              />
              <SummaryCard
                icon={Target}
                label="Completion rate"
                value="94%"
                note="Above the 90% target"
                color="green"
              />
              <SummaryCard
                icon={ShieldCheck}
                label="Satisfaction"
                value="91%"
                note="Would recommend"
                color="blue"
              />
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <InsightCard
              number="01"
              title="Reach"
              text="The programme reached every planned cohort and expanded participation through targeted outreach."
            />
            <InsightCard
              number="02"
              title="Relevance"
              text="Learners consistently linked the content to their daily work and reported immediate practical value."
            />
            <InsightCard
              number="03"
              title="Readiness"
              text="Stakeholders identified clear opportunities to sustain peer learning beyond the funded period."
            />
          </div>
        </Section>

        <Section
          id="attendance"
          eyebrow="02 / Who showed up"
          title="Attendance statistics & registers"
          intro="Participation remained consistent throughout the programme, with an overall attendance rate of 95% against a target of 90%."
        >
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <Card className="border-[#d9e3e0] bg-[#123f46] text-white shadow-sm">
              <CardHeader className="p-7 pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Attendance overview</CardTitle>
                  <BarChart3 className="h-5 w-5 text-[#e6c153]" />
                </div>
              </CardHeader>
              <CardContent className="p-7 pt-3">
                <div className="mb-8 flex items-end gap-3">
                  <span className="font-serif text-6xl text-[#f1d57b]">95%</span>
                  <span className="mb-2 text-sm text-white/60">overall attendance</span>
                </div>
                <div className="space-y-5">
                  {attendance.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-white/80">{item.name}</span>
                        <span className="font-semibold text-[#f1d57b]">{item.rate}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#e6c153] transition-all"
                          style={{ width: `${item.rate}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-white/15 pt-5 text-xs leading-5 text-white/60">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#e6c153]" />
                  All cohorts met or exceeded the programme attendance threshold.
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#d9e3e0] bg-white shadow-sm">
              <CardHeader className="flex-row items-center justify-between p-7 pb-4">
                <div>
                  <CardTitle className="text-lg text-[#123f46]">
                    Signed attendance register
                  </CardTitle>
                  <p className="mt-1 text-sm text-[#738487]">Session-level verification record</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="no-print border-[#d9e3e0] text-[#123f46]"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download
                </Button>
              </CardHeader>
              <CardContent className="p-7 pt-3">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[540px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#e7eeec] text-[10px] uppercase tracking-[0.15em] text-[#829294]">
                        <th className="pb-3 font-semibold">Cohort</th>
                        <th className="pb-3 font-semibold">Session date</th>
                        <th className="pb-3 text-center font-semibold">Planned</th>
                        <th className="pb-3 text-center font-semibold">Present</th>
                        <th className="pb-3 text-right font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendance.map((item) => (
                        <tr key={item.name} className="border-b border-[#edf2f0] last:border-0">
                          <td className="py-4 font-semibold text-[#123f46]">{item.name}</td>
                          <td className="py-4 text-[#6d7d80]">{item.date}</td>
                          <td className="py-4 text-center text-[#6d7d80]">{item.planned}</td>
                          <td className="py-4 text-center font-semibold text-[#123f46]">
                            {item.present}
                          </td>
                          <td className="py-4 text-right">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2e8069]">
                              <Check className="h-3.5 w-3.5" />
                              Verified
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex items-start gap-3 rounded-lg bg-[#f2f7f5] p-4 text-xs leading-5 text-[#617477]">
                  <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2e8069]" />
                  Original signed registers are filed in the programme evidence repository and
                  available for audit review.
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          id="participation"
          eyebrow="03 / Voices from the programme"
          title="Stakeholder participation & learner feedback"
          intro="The strongest signal from the close-out is not only who participated, but how participants describe the value of the experience."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="border-[#d9e3e0] bg-white shadow-sm">
              <CardHeader className="p-7 pb-3">
                <CardTitle className="text-lg text-[#123f46]">Participation snapshot</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-7 pt-3 sm:grid-cols-2">
                <Participation icon={Users} value="171" label="learners enrolled" />
                <Participation icon={Landmark} value="24" label="partner organisations" />
                <Participation icon={Mic2} value="18" label="facilitators & speakers" />
                <Participation icon={ClipboardCheck} value="6" label="learning cohorts" />
              </CardContent>
            </Card>
            <Card className="border-[#d9e3e0] bg-white shadow-sm">
              <CardHeader className="p-7 pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-[#123f46]">Learner feedback</CardTitle>
                  <span className="text-xs font-semibold text-[#2e8069]">n = 143 responses</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 p-7 pt-3">
                {feedback.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-[#617477]">{item.label}</span>
                      <span className="font-bold text-[#123f46]">{item.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#e7eeec]">
                      <div
                        className="h-full rounded-full bg-[#2e8069]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
                <p className="border-t border-[#e7eeec] pt-5 text-xs leading-5 text-[#829294]">
                  Respondents rated their experience on a five-point scale. Percentages reflect
                  positive and very positive responses.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <QuoteCard
              quote="I left each session with something I could use immediately. The peer examples made the theory feel real."
              byline="Learner, Cohort D"
            />
            <QuoteCard
              quote="The programme gave our team a shared framework and the confidence to start conversations we had been avoiding."
              byline="Partner organisation representative"
            />
          </div>
        </Section>

        <Section
          id="media"
          eyebrow="04 / The programme in focus"
          title="Media coverage & evidence"
          intro="A curated record of the people, places, and moments that shaped the programme. Click any image to view it in full."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedPhoto(gallery[0])}
                className="group relative col-span-2 h-72 overflow-hidden rounded-2xl text-left sm:h-80"
              >
                <img
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123f46]/90 via-transparent to-transparent" />
                <MediaCaption item={gallery[0]} />
              </button>
              {gallery.slice(1, 3).map((item) => (
                <button
                  key={item.title}
                  onClick={() => setSelectedPhoto(item)}
                  className="group relative h-52 overflow-hidden rounded-2xl text-left"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123f46]/90 via-transparent to-transparent" />
                  <MediaCaption item={item} compact />
                </button>
              ))}
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-[#e6c153] p-7 text-[#123f46] sm:p-9">
              <div>
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#123f46] text-[#f1d57b]">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-3xl leading-tight">
                  Stories worth carrying forward.
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#31585c]">
                  The programme generated a rich collection of visual and written evidence, from
                  session photographs to learner reflections and partner stories.
                </p>
              </div>
              <div className="mt-12 space-y-3">
                <MediaRow icon={ImageIcon} label="Photographic evidence" value="42 files" />
                <MediaRow icon={Video} label="Video interviews" value="06 clips" />
                <MediaRow icon={FileText} label="Press & web coverage" value="11 mentions" />
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <CoverageCard outlet="The Learning Review" type="Feature article" date="18 Aug 2024" />
            <CoverageCard outlet="Community Voice FM" type="Radio interview" date="06 Aug 2024" />
            <CoverageCard outlet="Impact Matters" type="Programme spotlight" date="29 Jul 2024" />
          </div>
        </Section>

        <Section
          id="finance"
          eyebrow="05 / Stewardship"
          title="Financial reconciliation"
          intro="Programme expenditure was managed within approved parameters, with clear alignment between investment and delivery."
        >
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <Card className="border-[#d9e3e0] bg-[#123f46] text-white shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f1d57b]">
                  <WalletCards className="h-4 w-4" />
                  Final position
                </div>
                <p className="text-sm text-white/60">Total approved budget</p>
                <p className="mt-1 font-serif text-4xl text-white">R1,250,000</p>
                <div className="my-7 h-px bg-white/15" />
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-white/60">Actual expenditure</p>
                    <p className="mt-1 font-serif text-3xl text-[#f1d57b]">R1,237,450</p>
                  </div>
                  <span className="rounded-full bg-[#2e8069]/30 px-3 py-1 text-xs font-semibold text-[#9ee0c7]">
                    99% utilised
                  </span>
                </div>
                <p className="mt-8 text-xs leading-5 text-white/55">
                  Unspent balance: <span className="font-semibold text-white/80">R12,550</span>,
                  returned in line with funding conditions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#d9e3e0] bg-white shadow-sm">
              <CardHeader className="p-7 pb-4">
                <CardTitle className="text-lg text-[#123f46]">Reconciled expenditure</CardTitle>
              </CardHeader>
              <CardContent className="p-7 pt-3">
                <div className="space-y-5">
                  <FinanceRow
                    label="Learning delivery & facilitation"
                    amount="R534,800"
                    percent={43}
                  />
                  <FinanceRow label="Learner support & materials" amount="R286,450" percent={23} />
                  <FinanceRow
                    label="Monitoring, evaluation & learning"
                    amount="R161,250"
                    percent={13}
                  />
                  <FinanceRow label="Travel & access support" amount="R148,500" percent={12} />
                  <FinanceRow label="Communications & media" amount="R106,450" percent={9} />
                </div>
                <div className="mt-7 flex items-center gap-3 border-t border-[#e7eeec] pt-5 text-xs text-[#617477]">
                  <CircleDollarSign className="h-4 w-4 text-[#2e8069]" />
                  All line items are supported by invoices, approvals, and payment records.
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <FinanceNote
              title="On budget"
              text="Final expenditure remained within the approved ceiling."
              icon={Check}
            />
            <FinanceNote
              title="Fully supported"
              text="100% of sampled transactions had evidence on file."
              icon={FileCheck2}
            />
            <FinanceNote
              title="Value for money"
              text="Unit cost per learner was 8% below the original estimate."
              icon={ArrowDownToLine}
            />
          </div>
        </Section>

        <Section
          id="lessons"
          eyebrow="06 / Looking ahead"
          title="Lessons learnt"
          intro="The close-out creates a practical bridge between what worked, what we would change, and what should happen next."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Lesson
              number="01"
              title="Keep the practice close"
              text="The strongest learning happened when concepts were immediately connected to a participant's real work. Future cohorts should protect time for application and reflection."
            />
            <Lesson
              number="02"
              title="Design for the whole system"
              text="Partner participation improved relevance and reduced duplication. Bring organisational stakeholders into the design conversation earlier."
            />
            <Lesson
              number="03"
              title="Make peer learning visible"
              text="Informal peer exchange became a defining strength. A simple structure for continued connection would extend the programme's value."
            />
          </div>
          <div className="mt-6 rounded-2xl border border-[#d9e3e0] bg-white p-7 shadow-sm sm:p-9">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2e8069]">
                  <BookOpen className="h-4 w-4" />
                  Recommendation
                </div>
                <h3 className="mt-3 font-serif text-3xl text-[#123f46]">
                  Invest in the continuation, not just the conclusion.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#617477]">
                  The evidence supports a focused next phase: maintain the cohort network, deepen
                  workplace application, and build a light-touch alumni model that keeps the
                  learning alive.
                </p>
              </div>
              <Button
                onClick={() => window.print()}
                className="h-11 shrink-0 bg-[#123f46] text-white hover:bg-[#1d5961]"
              >
                <Download className="h-4 w-4" />
                Save full report
              </Button>
            </div>
          </div>
        </Section>

        <footer className="mt-24 border-t border-[#d9e3e0] pt-8 text-xs text-[#829294]">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>Project Culmination Chronicle · Final report 2024</p>
            <p>Prepared by the Impact & Learning Office</p>
          </div>
        </footer>
      </main>

      <Dialog
        open={selectedPhoto !== null}
        onOpenChange={(open) => !open && setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-3xl overflow-hidden border-0 bg-[#123f46] p-2 text-white sm:rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedPhoto?.title}</DialogTitle>
          </DialogHeader>
          {selectedPhoto && (
            <div>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[70vh] w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between px-3 py-3">
                <div>
                  <p className="font-semibold">{selectedPhoto.title}</p>
                  <p className="text-xs text-white/60">{selectedPhoto.type}</p>
                </div>
                <ImageIcon className="h-5 w-5 text-[#e6c153]" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-[#d9e3e0] py-16 last:border-0 lg:py-24"
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2e8069]">
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-tight text-[#123f46] sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-[#617477]">{intro}</p>
      </div>
      {children}
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-[#f1d57b]">{value}</p>
      <p className="mt-1 text-xs leading-4 text-white/55">{label}</p>
    </div>
  );
}
function SummaryCard({
  icon: Icon,
  label,
  value,
  note,
  color,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  note: string;
  color: "gold" | "green" | "blue";
}) {
  const styles = {
    gold: "bg-[#fdf7e7] text-[#a07816]",
    green: "bg-[#eaf5f0] text-[#2e8069]",
    blue: "bg-[#eaf2f4] text-[#2f6972]",
  };
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#d9e3e0] bg-white p-5 shadow-sm">
      <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-lg", styles[color])}>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs text-[#829294]">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-[#123f46]">{value}</p>
        <p className="text-[11px] text-[#829294]">{note}</p>
      </div>
    </div>
  );
}
function InsightCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#d9e3e0] bg-white p-6 shadow-sm">
      <span className="text-xs font-bold text-[#d4ae3f]">{number}</span>
      <h3 className="mt-4 font-semibold text-[#123f46]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#6d7d80]">{text}</p>
    </div>
  );
}
function Participation({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[#f2f7f5] p-5">
      <Icon className="h-5 w-5 text-[#2e8069]" />
      <p className="mt-4 text-2xl font-bold text-[#123f46]">{value}</p>
      <p className="mt-1 text-xs text-[#6d7d80]">{label}</p>
    </div>
  );
}
function QuoteCard({ quote, byline }: { quote: string; byline: string }) {
  return (
    <div className="rounded-2xl bg-[#eaf2f0] p-7 sm:p-8">
      <Quote className="h-6 w-6 text-[#d4ae3f]" />
      <p className="mt-5 font-serif text-xl leading-relaxed text-[#123f46]">“{quote}”</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#5d797b]">
        {byline}
      </p>
    </div>
  );
}
function MediaCaption({
  item,
  compact = false,
}: {
  item: (typeof gallery)[number];
  compact?: boolean;
}) {
  return (
    <div className={cn("absolute bottom-0 left-0 right-0 p-5", compact && "p-4")}>
      <p className="text-[10px] uppercase tracking-[0.15em] text-[#f1d57b]">{item.type}</p>
      <p className={cn("mt-1 font-semibold text-white", compact ? "text-sm" : "text-lg")}>
        {item.title}
      </p>
    </div>
  );
}
function MediaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof ImageIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-t border-[#123f46]/15 pt-3 text-sm">
      <span className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {label}
      </span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
function CoverageCard({ outlet, type, date }: { outlet: string; type: string; date: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#d9e3e0] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f2f7f5] text-[#2e8069]">
          <Play className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#123f46]">{outlet}</p>
          <p className="mt-1 text-xs text-[#829294]">{type}</p>
        </div>
      </div>
      <span className="text-[11px] text-[#829294]">{date}</span>
    </div>
  );
}
function FinanceRow({
  label,
  amount,
  percent,
}: {
  label: string;
  amount: string;
  percent: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-[#617477]">{label}</span>
        <span className="shrink-0 font-semibold text-[#123f46]">{amount}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#e7eeec]">
        <div className="h-full rounded-full bg-[#2e8069]" style={{ width: `${percent * 2.25}%` }} />
      </div>
    </div>
  );
}
function FinanceNote({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: typeof Check;
}) {
  return (
    <div className="rounded-xl border border-[#d9e3e0] bg-white p-5 shadow-sm">
      <Icon className="h-5 w-5 text-[#2e8069]" />
      <h3 className="mt-4 text-sm font-semibold text-[#123f46]">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-[#6d7d80]">{text}</p>
    </div>
  );
}
function Lesson({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#123f46] p-7 text-white sm:p-8">
      <span className="font-serif text-6xl leading-none text-[#e6c153]/30">{number}</span>
      <h3 className="mt-7 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
      <ChevronRight className="absolute bottom-7 right-7 h-5 w-5 text-[#e6c153]" />
    </div>
  );
}
