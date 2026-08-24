import pptxgen from "pptxgenjs";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Impact & Learning Office";
pptx.subject = "2024 Learning Forward programme close-out report";
pptx.title = "Project Culmination Chronicle";
pptx.company = "Impact & Learning Office";
pptx.lang = "en-ZA";
pptx.theme = {
  headFontFace: "Georgia",
  bodyFontFace: "Aptos",
  lang: "en-US",
};
pptx.defineSlideMaster({
  title: "MASTER",
  background: { color: "F4F7F6" },
  objects: [
    { line: { x: 0.55, y: 7.08, w: 12.25, h: 0, line: { color: "D9E3E0", width: 1 } } },
    { text: { text: "PROJECT CULMINATION CHRONICLE  ·  FINAL REPORT 2024", options: { x: 0.55, y: 7.17, w: 6, h: 0.16, fontFace: "Aptos", fontSize: 7, color: "829294", margin: 0, charSpacing: 1.1 } } },
    { text: { text: "Impact & Learning Office", options: { x: 10.2, y: 7.17, w: 2.6, h: 0.16, fontFace: "Aptos", fontSize: 7, color: "829294", margin: 0, align: "right" } } },
  ],
  slideNumber: { x: 12.85, y: 7.15, color: "829294", fontFace: "Aptos", fontSize: 7 },
});

const C = {
  teal: "123F46",
  teal2: "1D5961",
  gold: "E6C153",
  goldLight: "F1D57B",
  green: "2E8069",
  greenLight: "EAF5F0",
  ink: "24343B",
  gray: "617477",
  muted: "829294",
  line: "D9E3E0",
  white: "FFFFFF",
  pale: "F4F7F6",
  pale2: "EAF2F0",
};
const FONT = "Aptos";
const SERIF = "Georgia";

function addText(slide, text, x, y, w, h, options = {}) {
  slide.addText(text, { x, y, w, h, fontFace: FONT, fontSize: 14, color: C.ink, margin: 0, breakLine: false, fit: "shrink", valign: "mid", ...options });
}
function addTitle(slide, eyebrow, title, intro = "") {
  addText(slide, eyebrow.toUpperCase(), 0.65, 0.5, 5.7, 0.18, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.5 });
  addText(slide, title, 0.65, 0.78, 11.5, 0.48, { fontFace: SERIF, fontSize: 26, color: C.teal, bold: false });
  if (intro) addText(slide, intro, 0.65, 1.38, 10.9, 0.35, { fontSize: 11, color: C.gray, breakLine: false });
}
function roundedRect(slide, x, y, w, h, fill, radius = 0.12, line = fill) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: radius, fill: { color: fill }, line: { color: line, width: 0.8 } });
}
function pill(slide, text, x, y, w, fill = C.greenLight, color = C.green) {
  roundedRect(slide, x, y, w, 0.28, fill, 0.12, fill);
  addText(slide, text, x, y + 0.01, w, 0.22, { fontSize: 8, bold: true, color, align: "center" });
}
function iconCircle(slide, x, y, fill, label) {
  slide.addShape(pptx.ShapeType.ellipse, { x, y, w: 0.42, h: 0.42, fill: { color: fill }, line: { color: fill } });
  addText(slide, label, x, y + 0.03, 0.42, 0.3, { fontSize: 11, bold: true, color: C.teal, align: "center" });
}
function statCard(slide, x, y, w, h, value, label, fill = C.white) {
  roundedRect(slide, x, y, w, h, fill, 0.12, C.line);
  addText(slide, value, x + 0.18, y + 0.17, w - 0.36, 0.4, { fontFace: SERIF, fontSize: 25, color: C.teal });
  addText(slide, label, x + 0.18, y + 0.64, w - 0.36, 0.25, { fontSize: 9, color: C.gray, breakLine: false });
}
function sectionCard(slide, x, y, w, h, title, text, number) {
  roundedRect(slide, x, y, w, h, C.white, 0.12, C.line);
  addText(slide, number, x + 0.22, y + 0.2, 0.34, 0.2, { fontSize: 8, bold: true, color: C.gold });
  addText(slide, title, x + 0.22, y + 0.52, w - 0.44, 0.24, { fontSize: 13, bold: true, color: C.teal });
  addText(slide, text, x + 0.22, y + 0.9, w - 0.44, h - 1.08, { fontSize: 10, color: C.gray, valign: "top", breakLine: false, fit: "shrink" });
}
function bar(slide, label, value, x, y, w, color = C.green, valueLabel = `${value}%`) {
  addText(slide, label, x, y, w - 0.45, 0.2, { fontSize: 9, color: C.gray });
  addText(slide, valueLabel, x + w - 0.45, y, 0.45, 0.2, { fontSize: 9, bold: true, color: C.teal, align: "right" });
  slide.addShape(pptx.ShapeType.roundRect, { x, y: y + 0.28, w, h: 0.12, rectRadius: 0.05, fill: { color: "E7EEEC" }, line: { color: "E7EEEC" } });
  slide.addShape(pptx.ShapeType.roundRect, { x, y: y + 0.28, w: w * value / 100, h: 0.12, rectRadius: 0.05, fill: { color }, line: { color } });
}
function addNotes(slide, text) {
  slide.addNotes(text);
}

// 1. Cover
{
  const slide = pptx.addSlide();
  slide.background = { color: C.teal };
  slide.addShape(pptx.ShapeType.arc, { x: 8.7, y: -0.9, w: 5.1, h: 5.1, line: { color: C.gold, transparency: 55, width: 1.2 }, adjustPoint: 0.25, rotate: 15 });
  slide.addShape(pptx.ShapeType.arc, { x: 9.3, y: 3.9, w: 4.1, h: 4.1, line: { color: C.gold, transparency: 65, width: 1 }, adjustPoint: 0.25, rotate: 15 });
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: C.gold }, line: { color: C.gold } });
  addText(slide, "PROGRAMME CLOSE-OUT", 0.8, 0.85, 3, 0.2, { fontSize: 9, bold: true, color: C.goldLight, charSpacing: 2 });
  addText(slide, "Project\nCulmination\nChronicle", 0.78, 1.38, 6.1, 2.3, { fontFace: SERIF, fontSize: 38, color: C.white, breakLine: false, valign: "top", bold: false, fit: "shrink" });
  addText(slide, "A documented account of participation, progress, and possibility from the 2024 Learning Forward programme.", 0.82, 4.12, 5.7, 0.75, { fontSize: 15, color: "D4E3E1", breakLine: false, valign: "top" });
  pill(slide, "FINAL REPORT  ·  JAN–AUG 2024", 0.82, 5.45, 2.55, C.gold, C.teal);
  addText(slide, "Prepared by the Impact & Learning Office", 0.82, 6.55, 4.5, 0.22, { fontSize: 9, color: "A9C1BE" });
  addNotes(slide, "Cover slide for the Project Culmination Chronicle close-out report.");
}

// 2. Executive summary
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "01 / The story so far", "Executive summary", "The 2024 Learning Forward programme concludes with strong evidence of reach, relevance, and readiness for the next chapter.");
  roundedRect(slide, 0.65, 2.05, 6.25, 2.65, C.white, 0.12, C.line);
  iconCircle(slide, 0.92, 2.35, C.greenLight, "✓");
  addText(slide, "PROGRAMME OUTCOME", 1.48, 2.36, 2.3, 0.18, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.2 });
  addText(slide, "The programme did more than deliver training. It created a practical, shared language for change.", 0.95, 2.85, 5.55, 0.9, { fontFace: SERIF, fontSize: 21, color: C.teal, italic: true, breakLine: false, valign: "top" });
  addText(slide, "Across six cohorts, the programme supported 171 learners through a blended learning journey combining facilitated sessions, peer exchange, and workplace application.", 0.95, 4.02, 5.55, 0.42, { fontSize: 10, color: C.gray, breakLine: false, valign: "top" });
  pill(slide, "TARGET EXCEEDED", 0.95, 4.48, 1.3);
  pill(slide, "INDEPENDENT CLOSE-OUT", 2.38, 4.48, 1.7, "F4F7F6", C.gray);
  statCard(slide, 7.2, 2.05, 1.65, 1.2, "171", "learners reached", "FDF7E7");
  statCard(slide, 9.0, 2.05, 1.65, 1.2, "94%", "completion rate", C.greenLight);
  statCard(slide, 10.8, 2.05, 1.65, 1.2, "91%", "satisfaction", "EAF2F4");
  sectionCard(slide, 7.2, 3.55, 1.65, 1.72, "Reach", "Every planned cohort was reached, with expanded participation through targeted outreach.", "01");
  sectionCard(slide, 9.0, 3.55, 1.65, 1.72, "Relevance", "Learners linked the content to daily work and reported immediate practical value.", "02");
  sectionCard(slide, 10.8, 3.55, 1.65, 1.72, "Readiness", "Stakeholders identified clear opportunities to sustain peer learning.", "03");
  addNotes(slide, "Executive summary: six cohorts, 171 learners, 95% attendance, and 94% completion.");
}

// 3. Programme at a glance
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "01 / The story so far", "Programme at a glance", "A simple view of the scale, investment, and delivery footprint behind the close-out story.");
  const stats = [
    ["6", "learning cohorts"],
    ["171", "learners reached"],
    ["24", "partner organisations"],
    ["18", "facilitators & speakers"],
    ["95%", "average attendance"],
    ["R1.24m", "actual expenditure"],
  ];
  stats.forEach(([value, label], i) => {
    const x = 0.65 + (i % 3) * 4.0;
    const y = 2.15 + Math.floor(i / 3) * 1.55;
    statCard(slide, x, y, 3.55, 1.12, value, label, i % 2 === 0 ? C.white : "FDF7E7");
  });
  roundedRect(slide, 0.65, 5.5, 11.55, 0.78, C.teal, 0.1, C.teal);
  addText(slide, "A blended learning journey", 0.95, 5.7, 2.5, 0.22, { fontSize: 12, bold: true, color: C.goldLight });
  addText(slide, "Facilitated sessions  →  peer exchange  →  workplace application  →  reflection", 3.8, 5.7, 7.8, 0.22, { fontSize: 12, color: C.white, align: "center" });
}

// 4. Attendance
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "02 / Who showed up", "Attendance statistics & registers", "Participation remained consistent throughout the programme, with an overall attendance rate of 95% against a target of 90%.");
  roundedRect(slide, 0.65, 2.05, 4.0, 4.48, C.teal, 0.12, C.teal);
  addText(slide, "ATTENDANCE OVERVIEW", 0.95, 2.35, 2.5, 0.2, { fontSize: 8, bold: true, color: C.goldLight, charSpacing: 1.2 });
  addText(slide, "95%", 0.95, 2.73, 2.3, 0.65, { fontFace: SERIF, fontSize: 42, color: C.goldLight });
  addText(slide, "overall attendance", 3.0, 3.12, 1.2, 0.18, { fontSize: 9, color: "B7CCCA", align: "right" });
  ["Cohort A", "Cohort B", "Cohort C", "Cohort D", "Cohort E", "Cohort F"].forEach((label, i) => bar(slide, label, [93, 97, 90, 97, 96, 96][i], 0.95, 3.75 + i * 0.37, 3.25, C.gold));
  addText(slide, "All cohorts met or exceeded the programme attendance threshold.", 0.95, 6.08, 3.2, 0.25, { fontSize: 8, color: "B7CCCA", breakLine: false });
  roundedRect(slide, 4.95, 2.05, 7.25, 4.48, C.white, 0.12, C.line);
  addText(slide, "SIGNED ATTENDANCE REGISTER", 5.25, 2.35, 3.5, 0.2, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.2 });
  addText(slide, "Session-level verification record", 5.25, 2.63, 3.5, 0.18, { fontSize: 9, color: C.gray });
  const rows = [
    [{ text: "COHORT", options: { bold: true, color: C.muted } }, { text: "SESSION DATE", options: { bold: true, color: C.muted } }, { text: "PLANNED", options: { bold: true, color: C.muted } }, { text: "PRESENT", options: { bold: true, color: C.muted } }, { text: "STATUS", options: { bold: true, color: C.muted } }],
    ["Cohort A", "12 Mar 2024", "28", "26", "Verified"],
    ["Cohort B", "15 Apr 2024", "32", "31", "Verified"],
    ["Cohort C", "21 May 2024", "30", "27", "Verified"],
    ["Cohort D", "18 Jun 2024", "30", "29", "Verified"],
    ["Cohort E", "16 Jul 2024", "28", "27", "Verified"],
    ["Cohort F", "13 Aug 2024", "26", "25", "Verified"],
  ];
  slide.addTable(rows, { x: 5.25, y: 3.05, w: 6.6, h: 2.95, fontFace: FONT, fontSize: 9, color: C.ink, border: { type: "solid", color: "E7EEEC", pt: 0.5 }, fill: C.white, margin: 0.08, rowH: 0.38, valign: "mid", colW: [1.45, 1.55, 0.8, 0.8, 1.2], bold: false, autoFit: false });
  addText(slide, "Original signed registers are filed in the programme evidence repository and available for audit review.", 5.25, 6.15, 6.55, 0.24, { fontSize: 8, color: C.gray, italic: true, breakLine: false });
}

// 5. Participation and feedback
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "03 / Voices from the programme", "Stakeholder participation & learner feedback", "The strongest signal from the close-out is not only who participated, but how participants describe the value of the experience.");
  roundedRect(slide, 0.65, 2.05, 5.25, 4.25, C.white, 0.12, C.line);
  addText(slide, "PARTICIPATION SNAPSHOT", 0.95, 2.35, 2.7, 0.2, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.2 });
  [["171", "learners enrolled"], ["24", "partner organisations"], ["18", "facilitators & speakers"], ["6", "learning cohorts"]].forEach(([value, label], i) => {
    const x = 0.95 + (i % 2) * 2.35;
    const y = 2.85 + Math.floor(i / 2) * 1.35;
    roundedRect(slide, x, y, 2.05, 1.05, C.pale, 0.1, C.pale);
    addText(slide, value, x + 0.16, y + 0.16, 1.7, 0.3, { fontFace: SERIF, fontSize: 24, color: C.teal });
    addText(slide, label, x + 0.16, y + 0.58, 1.7, 0.2, { fontSize: 9, color: C.gray, breakLine: false });
  });
  roundedRect(slide, 6.2, 2.05, 6.0, 4.25, C.white, 0.12, C.line);
  addText(slide, "LEARNER FEEDBACK", 6.5, 2.35, 2.2, 0.2, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.2 });
  addText(slide, "n = 143 responses", 10.95, 2.35, 0.9, 0.2, { fontSize: 8, color: C.green, align: "right" });
  [["Content relevance", 92], ["Facilitator quality", 96], ["Practical application", 89], ["Materials & support", 87]].forEach(([label, value], i) => bar(slide, label, value, 6.5, 2.9 + i * 0.62, 5.1, C.green));
  addText(slide, "Respondents rated their experience on a five-point scale. Percentages reflect positive and very positive responses.", 6.5, 5.75, 5.1, 0.28, { fontSize: 8, color: C.gray, breakLine: false });
}

// 6. Quotes
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "03 / Voices from the programme", "What participants carried forward", "Learner and partner reflections point to practical value, confidence, and a stronger shared language for change.");
  [["I left each session with something I could use immediately. The peer examples made the theory feel real.", "Learner, Cohort D"], ["The programme gave our team a shared framework and the confidence to start conversations we had been avoiding.", "Partner organisation representative"], ["The most valuable part was seeing how others solved similar problems. It made progress feel possible.", "Learner, Cohort B"]].forEach(([quote, byline], i) => {
    const x = 0.65 + i * 4.0;
    roundedRect(slide, x, 2.1, 3.55, 3.45, i === 1 ? C.teal : C.pale2, 0.12, i === 1 ? C.teal : C.pale2);
    addText(slide, "“", x + 0.25, 2.38, 0.4, 0.45, { fontFace: SERIF, fontSize: 35, color: C.gold });
    addText(slide, quote, x + 0.32, 3.0, 2.9, 1.35, { fontFace: SERIF, fontSize: 17, color: i === 1 ? C.white : C.teal, italic: true, valign: "top", breakLine: false });
    addText(slide, byline.toUpperCase(), x + 0.32, 4.88, 2.9, 0.18, { fontSize: 8, bold: true, color: i === 1 ? C.goldLight : C.green, charSpacing: 1 });
  });
}

// 7. Media evidence
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "04 / The programme in focus", "Media coverage & evidence", "A curated record of the people, places, and moments that shaped the programme.");
  roundedRect(slide, 0.65, 2.05, 7.2, 4.35, C.teal, 0.12, C.teal);
  addText(slide, "STORIES WORTH CARRYING FORWARD", 0.98, 2.4, 4.5, 0.2, { fontSize: 8, bold: true, color: C.goldLight, charSpacing: 1.2 });
  addText(slide, "The programme generated a rich collection of visual and written evidence.", 0.98, 2.92, 4.9, 0.55, { fontFace: SERIF, fontSize: 22, color: C.white, breakLine: false, valign: "top" });
  addText(slide, "From session photographs to learner reflections and partner stories, the evidence captures more than delivery — it captures movement.", 0.98, 3.72, 5.3, 0.48, { fontSize: 11, color: "C7D8D5", breakLine: false, valign: "top" });
  [["42", "photographic evidence"], ["06", "video interviews"], ["11", "press & web mentions"]].forEach(([value, label], i) => {
    const x = 0.98 + i * 2.1;
    addText(slide, value, x, 5.05, 0.8, 0.36, { fontFace: SERIF, fontSize: 26, color: C.goldLight });
    addText(slide, label, x, 5.48, 1.65, 0.3, { fontSize: 8, color: "B7CCCA", breakLine: false });
  });
  roundedRect(slide, 8.2, 2.05, 4.0, 4.35, C.white, 0.12, C.line);
  addText(slide, "MEDIA COVERAGE", 8.5, 2.4, 2.2, 0.2, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.2 });
  [["The Learning Review", "Feature article", "18 Aug 2024"], ["Community Voice FM", "Radio interview", "06 Aug 2024"], ["Impact Matters", "Programme spotlight", "29 Jul 2024"]].forEach(([outlet, type, date], i) => {
    const y = 2.98 + i * 0.92;
    slide.addShape(pptx.ShapeType.ellipse, { x: 8.5, y, w: 0.35, h: 0.35, fill: { color: C.greenLight }, line: { color: C.greenLight } });
    addText(slide, "↗", 8.5, y + 0.04, 0.35, 0.2, { fontSize: 10, color: C.green, align: "center" });
    addText(slide, outlet, 9.05, y, 2.2, 0.2, { fontSize: 10, bold: true, color: C.teal });
    addText(slide, type, 9.05, y + 0.26, 1.8, 0.18, { fontSize: 8, color: C.gray });
    addText(slide, date, 11.05, y + 0.08, 0.75, 0.18, { fontSize: 8, color: C.muted, align: "right" });
  });
  addText(slide, "Photographs, video interviews, and published coverage are filed in the programme evidence repository.", 8.5, 5.75, 3.2, 0.35, { fontSize: 8, color: C.gray, breakLine: false, valign: "top" });
}

// 8. Financial reconciliation
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "05 / Stewardship", "Financial reconciliation", "Programme expenditure was managed within approved parameters, with clear alignment between investment and delivery.");
  roundedRect(slide, 0.65, 2.05, 4.2, 4.5, C.teal, 0.12, C.teal);
  addText(slide, "FINAL POSITION", 0.98, 2.38, 2.2, 0.2, { fontSize: 8, bold: true, color: C.goldLight, charSpacing: 1.2 });
  addText(slide, "Total approved budget", 0.98, 2.9, 2.2, 0.2, { fontSize: 9, color: "B7CCCA" });
  addText(slide, "R1,250,000", 0.98, 3.18, 3.1, 0.4, { fontFace: SERIF, fontSize: 27, color: C.white });
  slide.addShape(pptx.ShapeType.line, { x: 0.98, y: 3.82, w: 3.5, h: 0, line: { color: "FFFFFF", transparency: 80, width: 1 } });
  addText(slide, "Actual expenditure", 0.98, 4.12, 2.2, 0.2, { fontSize: 9, color: "B7CCCA" });
  addText(slide, "R1,237,450", 0.98, 4.4, 3.1, 0.4, { fontFace: SERIF, fontSize: 27, color: C.goldLight });
  pill(slide, "99% UTILISED", 0.98, 5.05, 1.35, "2E8069", C.white);
  addText(slide, "Unspent balance: R12,550, returned in line with funding conditions.", 0.98, 5.65, 3.2, 0.32, { fontSize: 8, color: "B7CCCA", breakLine: false, valign: "top" });
  roundedRect(slide, 5.2, 2.05, 7.0, 4.5, C.white, 0.12, C.line);
  addText(slide, "RECONCILED EXPENDITURE", 5.5, 2.38, 3.2, 0.2, { fontSize: 8, bold: true, color: C.green, charSpacing: 1.2 });
  [["Learning delivery & facilitation", "R534,800", 43], ["Learner support & materials", "R286,450", 23], ["Monitoring, evaluation & learning", "R161,250", 13], ["Travel & access support", "R148,500", 12], ["Communications & media", "R106,450", 9]].forEach(([label, amount, value], i) => {
    const y = 2.95 + i * 0.58;
    addText(slide, label, 5.5, y, 3.4, 0.2, { fontSize: 9, color: C.gray });
    addText(slide, amount, 10.45, y, 1.3, 0.2, { fontSize: 9, bold: true, color: C.teal, align: "right" });
    slide.addShape(pptx.ShapeType.roundRect, { x: 5.5, y: y + 0.27, w: 6.25, h: 0.1, rectRadius: 0.05, fill: { color: "E7EEEC" }, line: { color: "E7EEEC" } });
    slide.addShape(pptx.ShapeType.roundRect, { x: 5.5, y: y + 0.27, w: 6.25 * value / 45, h: 0.1, rectRadius: 0.05, fill: { color: C.green }, line: { color: C.green } });
  });
  addText(slide, "All line items are supported by invoices, approvals, and payment records.", 5.5, 5.98, 5.7, 0.22, { fontSize: 8, color: C.gray, italic: true });
}

// 9. Lessons learnt
{
  const slide = pptx.addSlide("MASTER");
  addTitle(slide, "06 / Looking ahead", "Lessons learnt", "The close-out creates a practical bridge between what worked, what we would change, and what should happen next.");
  [["01", "Keep the practice close", "The strongest learning happened when concepts were immediately connected to a participant's real work. Protect time for application and reflection."], ["02", "Design for the whole system", "Partner participation improved relevance and reduced duplication. Bring organisational stakeholders into the design conversation earlier."], ["03", "Make peer learning visible", "Informal peer exchange became a defining strength. A simple structure for continued connection would extend the programme's value."]].forEach(([number, title, text], i) => {
    const x = 0.65 + i * 4.0;
    roundedRect(slide, x, 2.12, 3.55, 3.0, C.teal, 0.12, C.teal);
    addText(slide, number, x + 0.28, 2.4, 0.8, 0.55, { fontFace: SERIF, fontSize: 30, color: "6E9A96", transparency: 35 });
    addText(slide, title, x + 0.28, 3.2, 2.9, 0.3, { fontSize: 14, bold: true, color: C.white });
    addText(slide, text, x + 0.28, 3.7, 2.9, 0.85, { fontSize: 10, color: "C7D8D5", valign: "top", breakLine: false });
  });
  roundedRect(slide, 0.65, 5.5, 11.55, 0.82, C.gold, 0.1, C.gold);
  addText(slide, "RECOMMENDATION", 0.95, 5.74, 1.3, 0.18, { fontSize: 8, bold: true, color: C.teal, charSpacing: 1.2 });
  addText(slide, "Invest in the continuation, not just the conclusion.", 2.5, 5.65, 5.9, 0.32, { fontFace: SERIF, fontSize: 19, color: C.teal });
}

// 10. Close
{
  const slide = pptx.addSlide();
  slide.background = { color: C.teal };
  slide.addShape(pptx.ShapeType.arc, { x: -1.1, y: 4.1, w: 4.3, h: 4.3, line: { color: C.gold, transparency: 55, width: 1.1 }, adjustPoint: 0.25 });
  slide.addShape(pptx.ShapeType.arc, { x: 10.4, y: -1.25, w: 4.2, h: 4.2, line: { color: C.gold, transparency: 65, width: 1.1 }, adjustPoint: 0.25 });
  addText(slide, "CLOSING NOTE", 0.85, 1.0, 2.2, 0.2, { fontSize: 9, bold: true, color: C.goldLight, charSpacing: 2 });
  addText(slide, "The work continues.", 0.85, 1.72, 7.5, 0.7, { fontFace: SERIF, fontSize: 38, color: C.white });
  addText(slide, "The evidence from this programme points to a clear next step: keep the network connected, deepen workplace application, and make the learning visible beyond the funded period.", 0.88, 2.82, 6.7, 0.8, { fontSize: 15, color: "C7D8D5", breakLine: false, valign: "top" });
  slide.addShape(pptx.ShapeType.line, { x: 0.88, y: 4.25, w: 2.2, h: 0, line: { color: C.gold, width: 2 } });
  addText(slide, "Thank you", 0.88, 4.55, 3, 0.4, { fontFace: SERIF, fontSize: 24, color: C.goldLight, italic: true });
  addText(slide, "Impact & Learning Office  ·  August 2024", 0.88, 6.35, 4.5, 0.2, { fontSize: 9, color: "A9C1BE" });
  addNotes(slide, "Closing slide with the final recommendation and acknowledgement.");
}

const output = resolve("public/project-culmination-chronicle.pptx");
await mkdir(dirname(output), { recursive: true });
await pptx.writeFile({ fileName: output });
console.log(`Created ${output}`);
