// SYMPATIC dummy data — shared by console and person prototypes. Danish names, fictional.
// Pathway states: monitored, referred, screening, no_indication, indicated, in_care, post_care, stabilised, escalated
// Levels: guided, human, blended
window.SYM = window.SYM || {};
SYM.tenants = [
  { id: "k1", kind: "kunde", name: "PFA Pension" },
  { id: "f1", kind: "firma", name: "Nordisk Logistik A/S", kunde: "k1", headcount: 412 },
  { id: "f2", kind: "firma", name: "Aarhus Kommune, Teknik & Miljø", kunde: "k1", headcount: 1180 },
  { id: "c1", kind: "clinic", name: "Encounter" },
];
SYM.clinicians = [
  { id: "b1", name: "Mette Kjær", role: "Psykolog", initials: "MK" },
  { id: "b2", name: "Jonas Winther", role: "Terapeut", initials: "JW" },
  { id: "b3", name: "Kim Mathiasen", role: "Ledende psykolog", initials: "KM" },
];
SYM.persons = [
  { id: "p1", name: "Sofie Andersen", firma: "f1", age: 41, dept: "Drift" },
  { id: "p2", name: "Rasmus Holm", firma: "f1", age: 34, dept: "Lager" },
  { id: "p3", name: "Camilla Berg", firma: "f2", age: 47, dept: "Byggesag" },
  { id: "p4", name: "Mads Thomsen", firma: "f2", age: 29, dept: "Vej & Park" },
  { id: "p5", name: "Louise Friis", firma: "f1", age: 52, dept: "Økonomi" },
  { id: "p6", name: "Emil Nørgaard", firma: "f2", age: 38, dept: "Plan" },
  { id: "p7", name: "Anne Lund", firma: "f1", age: 45, dept: "Drift" },
  { id: "p8", name: "Peter Dahl", firma: "f2", age: 56, dept: "Byggesag" },
];
// cases: one per referred person
SYM.cases = [
  { id: "C-1041", person: "p1", state: "in_care", level: "guided", opened: "2026-08-24", clinician: "b1", source: "workplace", risk: 0.62, trend: "down" },
  { id: "C-1042", person: "p2", state: "screening", level: null, opened: "2026-09-15", clinician: null, source: "self", risk: null, trend: null },
  { id: "C-1039", person: "p3", state: "in_care", level: "human", opened: "2026-08-11", clinician: "b2", source: "fund", risk: 0.71, trend: "flat" },
  { id: "C-1044", person: "p4", state: "indicated", level: null, opened: "2026-09-16", clinician: null, source: "workplace", risk: 0.78, trend: null },
  { id: "C-1030", person: "p5", state: "in_care", level: "blended", opened: "2026-07-20", clinician: "b1", source: "fund", risk: 0.83, trend: "up" },
  { id: "C-1045", person: "p6", state: "screening", level: null, opened: "2026-09-17", clinician: null, source: "fund", risk: null, trend: null },
  { id: "C-1021", person: "p7", state: "post_care", level: null, opened: "2026-06-02", clinician: "b2", source: "workplace", risk: 0.31, trend: "down" },
  { id: "C-1046", person: "p8", state: "referred", level: null, opened: "2026-09-18", clinician: null, source: "self", risk: null, trend: null },
];
// decision records awaiting sign-off (the morning conference queue)
SYM.decisions = [
  { id: "D-311", kind: "hard_stop", case: "C-1030", ai: null, confidence: null, evidence: ["PHQ-9 item 9 = 2 (flere end halvdelen af dagene)", "Chat 18.09 kl. 07:41: udtrykker håbløshed"], created: "2026-09-18T07:42:00", note: "AI-vurdering sprunget over. Kræver klinisk kontakt i dag." },
  { id: "D-305", kind: "triage", case: "C-1042", ai: "indicated", confidence: 0.81, evidence: ["PHQ-9 = 14 (moderat)", "GAD-7 = 11", "WAI = 5/10", "Sygefravær 9 dage / 90"], created: "2026-09-18T06:10:00" },
  { id: "D-306", kind: "triage", case: "C-1045", ai: "no_indication", confidence: 0.74, evidence: ["PHQ-9 = 6", "GAD-7 = 5", "WAI = 8/10"], created: "2026-09-18T06:12:00" },
  { id: "D-307", kind: "placement", case: "C-1044", ai: "human", confidence: 0.66, evidence: ["PHQ-9 = 17", "Foretrækker menneskelig kontakt (screening-svar)", "Lav digital tryghed"], created: "2026-09-17T21:03:00" },
  { id: "D-308", kind: "step_change", case: "C-1041", ai: "guided → human", confidence: 0.58, evidence: ["3 af 4 øvelser sprunget over sidste uge", "Pulse-tjek arbejdsevne 4 → 3", "Chat-tone: mere opgivende"], created: "2026-09-18T05:55:00" },
  { id: "D-309", kind: "step_change", case: "C-1039", ai: "human → guided", confidence: 0.72, evidence: ["PHQ-9 17 → 10 over 5 uger", "WAI 4 → 7", "Ingen terapeut-beskeder i 9 dage"], created: "2026-09-18T05:56:00" },
  { id: "D-310", kind: "discharge", case: "C-1021", ai: "stabilised", confidence: 0.88, evidence: ["Tilbage i arbejde fuld tid siden 25.08", "Pulse-tjek stabil ≥ 8 i 6 uger"], created: "2026-09-17T18:20:00" },
];
SYM.kindLabel = { hard_stop: "Hard stop", triage: "Triage", placement: "Placering", step_change: "Niveauskift", discharge: "Afslutning" };
SYM.stateLabel = { monitored: "Monitoreret", referred: "Henvist", screening: "Screening", no_indication: "Ingen indikation", indicated: "Indikation", in_care: "I forløb", post_care: "Efterforløb", stabilised: "Stabiliseret", escalated: "Eskaleret" };
SYM.levelLabel = { guided: "Guidet", human: "Menneskelig støtte", blended: "Blended care" };
// messages for the person app (p1 / C-1041) and the clinician view
SYM.thread = [
  { who: "assistant", at: "Man 08:02", text: "Godmorgen Sofie. I dag er der én øvelse: 'Aktivitetsplan for ugen'. Den tager ca. 10 minutter. Skal vi starte?" },
  { who: "person", at: "Man 08:15", text: "Ja ok. Jeg havde en dårlig weekend." },
  { who: "assistant", at: "Man 08:15", text: "Det er okay at sige. Vil du fortælle lidt om, hvad der gjorde weekenden svær, eller vil du hellere gå direkte til øvelsen?" },
  { who: "person", at: "Man 08:17", text: "Jeg sov næsten ikke natten til søndag." },
  { who: "assistant", at: "Man 08:17", text: "Tak. Jeg noterer søvnen, så Mette kan se det. Skal vi lægge en kort søvn-øvelse ind i planen i stedet for aktivitetsplanen i dag?" },
  { who: "clinician", at: "Man 09:40", text: "Hej Sofie, det er Mette. Jeg så din note om søvn. Vi tager det op, når vi skriver sammen onsdag. Du gør det godt." },
];
SYM.programme = [
  { id: "e1", title: "Aktivitetsplan for ugen", module: "Adfærdsaktivering", mins: 10, done: false, today: true },
  { id: "e2", title: "Søvn: faste tidspunkter", module: "Søvn", mins: 6, done: false, today: true },
  { id: "e3", title: "Tankeregistrering", module: "Kognitiv omstrukturering", mins: 12, done: true },
  { id: "e4", title: "Grænser på arbejdet", module: "Arbejdsevne", mins: 15, done: true },
  { id: "e5", title: "Vejrtrækning 4-7-8", module: "Ro", mins: 4, done: true },
];
// trajectory for p1 (weekly): PHQ-9 and working-capacity 0-10
SYM.trajectory = [
  { w: "U34", phq: 16, wai: 4, level: "guided" }, { w: "U35", phq: 15, wai: 4, level: "guided" },
  { w: "U36", phq: 13, wai: 5, level: "guided" }, { w: "U37", phq: 12, wai: 5, level: "guided" },
  { w: "U38", phq: 13, wai: 4, level: "guided" },
];
// pulse-check aggregates for firma f1 (weekly, index 0-10, participation %)
SYM.pulse = {
  f1: { weeks: ["U32","U33","U34","U35","U36","U37","U38"], mh: [7.1,7.0,6.8,6.9,6.6,6.4,6.5], wc: [7.4,7.3,7.2,7.0,6.9,6.7,6.8], part: [81,78,84,80,77,79,83],
        depts: [ { name: "Drift", n: 96, mh: 6.1, wc: 6.4, delta: -0.6 }, { name: "Lager", n: 140, mh: 6.7, wc: 7.0, delta: -0.2 }, { name: "Økonomi", n: 22, mh: 7.4, wc: 7.6, delta: 0.1 }, { name: "Ledelse", n: 4, mh: null, wc: null, delta: null } ] },
};
SYM.instruments = {
  pulse: [
    { id: "q1", text: "Hvordan har du haft det mentalt den seneste uge?", scale: ["Meget dårligt","Dårligt","Nogenlunde","Godt","Meget godt"] },
    { id: "q2", text: "Hvordan vurderer du din arbejdsevne lige nu?", scale: ["0","1","2","3","4","5","6","7","8","9","10"] },
    { id: "q3", text: "Har du haft svært ved at komme igennem en arbejdsdag?", scale: ["Aldrig","Sjældent","Nogle dage","De fleste dage","Hver dag"] },
  ],
  phq9: ["Lidt interesse eller glæde ved at gøre ting","Nedtrykt, deprimeret eller håbløs","Svært ved at falde i søvn eller sove igennem, eller sovet for meget","Træt eller uden energi","Dårlig appetit eller overspisning","Dårlige tanker om dig selv","Svært ved at koncentrere dig","Bevæget dig eller talt så langsomt at andre bemærkede det, eller det modsatte","Tanker om at du hellere ville være død eller om at gøre dig selv fortræd"],
};
SYM.kundeOutcomes = { referred: 63, inCare: 27, stabilised: 21, escalated: 4, medianDaysToStable: 71, rtwRate: 0.78, prevalence: 0.11 };
