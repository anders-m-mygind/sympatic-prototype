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
// ---- Graf: knowledge + memory layer (vector-embedded corpora; transcripts scoped per case) ----
SYM.knowledge = {
  // "Graf" = a structured, coded dataset. Raw transcript utterances are mapped by an extraction step onto a
  // canonical taxonomy (ICD-11 concepts, the blended-care SOP as structured steps, protocol modules).
  // The result is case facts (sagsfakta) with evidence, confidence and review state. Q/A speaks only from facts + SOP clauses.
  taxonomy: {
    "icd-7A00": { kind: "icd", label: "Søvnforstyrrelse", code: "ICD-11 7A00", desc: "Insomni-lidelser (kapitel 7). Kodes ved gentagne rapporter om svært nedsat søvn." },
    "sym-hopeless": { kind: "symptom", label: "Håbløshed", code: "ICD-11 symptom MB24.8", desc: "Udtryk for håbløshed. Udløser altid SOP S1.1 (hard stop) uanset kodningssikkerhed." },
    "icd-6A70": { kind: "icd", label: "Depressiv episode, moderat", code: "ICD-11 6A70.1", desc: "Kodes kun fra screeningsinstrument, aldrig fra chat alene." },
    "icd-QD85": { kind: "icd", label: "Udbrændthed", code: "ICD-11 QD85", desc: "Arbejdsrelateret udmattelse. Kodes ved gentagne udsagn om overbelastning på arbejdet." },
    "sop-B2.1": { kind: "sop", label: "Overbelastning på arbejde", code: "SOP B2.1 trigger", desc: "Trigger i blended-care SOP modul B2 (arbejdsevne)." },
    "prot-ba": { kind: "protocol", label: "Springer øvelser over", code: "Protokol · adfærdsaktivering", desc: "≥ 3 oversprungne aktiviteter på en uge." },
    "prot-sleep": { kind: "protocol", label: "Søvnøvelse foreslået", code: "Protokol · søvnmodul", desc: "Assistenten har foreslået erstatning af dagens øvelse." },
    "sop-B1.4": { kind: "sop", label: "Foretrækker menneskelig kontakt", code: "SOP B1.4", desc: "Præference registreret fra screening eller chat." },
  },
  // SOP clauses (structured steps). Citable by id.
  sop: {
    "SOP B3.2": { title: "Søvnmodul · trin 2 · erstatning af dagens øvelse", module: "B3 Søvn", version: "v3", excerpt: "Når personen rapporterer markant søvnmangel (under 4 timer to nætter i træk, eller 'næsten ikke sovet'), må assistenten foreslå at erstatte dagens planlagte øvelse med en søvnhygiejne-øvelse på højst 6 minutter. Forslaget skal fremgå for behandler i tråden." },
    "SOP B3.3": { title: "Søvnmodul · trin 3 · niveau må ikke ændres", module: "B3 Søvn", version: "v3", excerpt: "Assistenten må ikke ændre forløbets niveau eller antallet af ugentlige aktiviteter på grund af søvn. Niveauskift er en beslutningspost, der signeres af behandler." },
    "SOP B3.5": { title: "Søvnmodul · trin 5 · faste sengetider", module: "B3 Søvn", version: "v3", excerpt: "Faste sengetider indføres som øvelse i uge 2 af søvnmodulet. Gennemførelse registreres som protokoltrin og indgår i behandlerens tjekliste." },
    "SOP S1.1": { title: "Sikkerhed · trin 1 · håbløshed og selvskade", module: "S1 Sikkerhed", version: "v3", excerpt: "Udtryk for håbløshed, ønske om at være død eller selvskade i chat udløser hard stop uden AI-vurdering. Behandler kontakter personen samme dag. Assistenten svarer med den faste sikkerhedstekst og henviser til Akut hjælp." },
    "SOP B2.1": { title: "Arbejdsevne · trin 1 · overbelastning som trigger", module: "B2 Arbejdsevne", version: "v3", excerpt: "Gentagne udsagn om overbelastning eller overarbejde kodes som trigger B2.1. Ved tre eller flere forekomster foreslår assistenten modulet 'Grænser på arbejdet' til behandler." },
    "SOP B2.4": { title: "Arbejdsevne · trin 4 · arbejdspladsdialog", module: "B2 Arbejdsevne", version: "v3", excerpt: "Arbejdspladsdialog planlægges af behandler, aldrig af assistenten, og kun med personens udtrykkelige samtykke." },
    "PROT M2.3": { title: "Adfærdsaktivering · oversprungne aktiviteter", module: "Protokol modul 2", version: "v3", excerpt: "Ved tre eller flere oversprungne aktiviteter på en uge opsummerer assistenten til behandler og må ikke øge antallet af aktiviteter." },
  },
  // evidence citations into the case thread (idx = SYM.thread index)
  cites: {
    "chat-1": { kind: "chat", case: "C-1041", idx: 1, label: "Chat 15.09 08:15" },
    "chat-3": { kind: "chat", case: "C-1041", idx: 3, label: "Chat 15.09 08:17" },
    "chat-4": { kind: "chat", case: "C-1041", idx: 4, label: "Chat 15.09 08:17 (assistent)" },
    "chat-5": { kind: "chat", case: "C-1041", idx: 5, label: "Chat 15.09 09:40 (Mette)" },
    "chat-hs": { kind: "chat", case: "C-1041", idx: 1, label: "Chat 18.09 07:41" },
    "chat-w36": { kind: "chat", case: "C-1041", idx: 1, label: "Chat 04.09 19:22" },
    "chat-w37": { kind: "chat", case: "C-1041", idx: 3, label: "Chat 10.09 08:05" },
    "scr-1": { kind: "chat", case: "C-1041", idx: 0, label: "Screening 27.08" },
  },
  // coded case facts, per case
  factsByCase: {
    "C-1041": [
      { id: "F-12", concept: "icd-7A00", n: 6, first: "04.09", last: "15.09", ev: ["chat-w36", "chat-w37", "chat-3"], conf: 0.91, status: "confirmed", by: "Mette" },
      { id: "F-14", concept: "sym-hopeless", n: 1, first: "18.09", last: "18.09", ev: ["chat-hs"], conf: 0.97, status: "confirmed", by: "Mette", note: "Udløste hard stop D-311" },
      { id: "F-15", concept: "prot-sleep", n: 1, first: "15.09", last: "15.09", ev: ["chat-4"], conf: 0.99, status: "confirmed", by: "system" },
      { id: "F-17", concept: "sop-B2.1", n: 3, first: "04.09", last: "10.09", ev: ["chat-w36", "chat-w37"], conf: 0.78, status: "unconfirmed" },
      { id: "F-18", concept: "prot-ba", n: 3, first: "12.09", last: "17.09", ev: ["chat-1"], conf: 0.88, status: "unconfirmed", note: "3 af 4 øvelser sprunget over uge 38" },
      { id: "F-19", concept: "icd-QD85", n: 2, first: "04.09", last: "10.09", ev: ["chat-w36"], conf: 0.52, status: "unconfirmed" },
      { id: "F-11", concept: "icd-6A70", n: 1, first: "27.08", last: "27.08", ev: ["scr-1"], conf: 0.94, status: "confirmed", by: "Mette", note: "PHQ-9 = 16 ved screening" },
      { id: "F-16", concept: "sop-B1.4", n: 1, first: "27.08", last: "27.08", ev: ["scr-1"], conf: 0.41, status: "rejected", by: "Mette", note: "Afvist: svaret var 'ingen præference'" },
    ],
  },
  // Q/A: closed world. Each answer is a list of claims; each claim cites fact ids and/or SOP clause ids.
  answers: [
    { match: /alkohol|alcohol|misbrug/i, claims: [], none: true },
    { match: /sidste uge|7 dage|talte i/i, claims: [
        { text: "I uge 38 er søvnforstyrrelse kodet én gang (15.09), og assistenten foreslog en søvnøvelse i stedet for aktivitetsplanen.", cites: ["F-12", "F-15"] },
        { text: "Tre af fire planlagte øvelser blev sprunget over i uge 38.", cites: ["F-18"] },
        { text: "Der er ét udtryk for håbløshed (18.09), som udløste hard stop D-311.", cites: ["F-14", "SOP S1.1"] },
      ], dropped: ["Sofie virker generelt mere presset af arbejdet end tidligere."] },
    { match: /søvn|sleep/i, claims: [
        { text: "Assistenten må foreslå at erstatte dagens øvelse med en søvnhygiejne-øvelse på højst 6 minutter ved markant søvnmangel.", cites: ["SOP B3.2"] },
        { text: "Forløbets niveau og antallet af aktiviteter må ikke ændres på grund af søvn; det kræver en signeret beslutning.", cites: ["SOP B3.3"] },
        { text: "Faste sengetider indføres som øvelse i uge 2 af søvnmodulet og registreres som protokoltrin.", cites: ["SOP B3.5"] },
      ] },
    { match: /håbløs|hard stop|selvskade/i, claims: [
        { text: "Håbløshed er kodet én gang, 18.09 kl. 07:41.", cites: ["F-14"] },
        { text: "Udtryk for håbløshed udløser hard stop uden AI-vurdering, og behandler kontakter personen samme dag.", cites: ["SOP S1.1"] },
      ] },
    { match: /arbejd|overbelast|grænser/i, claims: [
        { text: "Overbelastning på arbejde er kodet tre gange (04.09–10.09) og er endnu ubekræftet.", cites: ["F-17"] },
        { text: "Ved tre eller flere forekomster foreslår assistenten modulet 'Grænser på arbejdet' til behandler.", cites: ["SOP B2.1"] },
        { text: "Arbejdspladsdialog planlægges kun af behandler og kun med personens samtykke.", cites: ["SOP B2.4"] },
      ] },
    { match: /.*/, claims: [
        { text: "Sagen har 7 kodede fakta, hvoraf 4 er bekræftet, 3 ubekræftede og 1 afvist.", cites: ["F-12", "F-14", "F-11"] },
        { text: "Tre oversprungne øvelser i uge 38 kræver, at assistenten opsummerer til behandler og ikke øger antallet af aktiviteter.", cites: ["F-18", "PROT M2.3"] },
      ] },
  ],
  // admin: taxonomy & SOP overview
  corpora: [
    { id: "icd", name: "ICD-11 begreber", count: "412 begreber i brug", meta: "Kapitel 6 (mentale lidelser) + symptomkapitel · WHO-release 2026-01", status: "Kanonisk", tone: "success", scope: "Fælles for alle sager" },
    { id: "sop", name: "Blended-care SOP", count: "14 moduler · 96 trin", meta: "Version 3 · 2 trin afventer godkendelse hos Kim Mathiasen", status: "2 afventer", tone: "warning", scope: "Fælles for alle sager" },
    { id: "prot", name: "Protokol-moduler", count: "9 moduler", meta: "CBT tilpasset erhvervsevne · 41 trin", status: "Kanonisk", tone: "success", scope: "Fælles for alle sager" },
  ],
  extraction: { today: 63, avgConf: 0.84, rejected30: 11, pending: 9 },
  reviewQueue: [
    { fact: "F-17", case: "C-1041", concept: "sop-B2.1", conf: 0.78, status: "unconfirmed" },
    { fact: "F-19", case: "C-1041", concept: "icd-QD85", conf: 0.52, status: "unconfirmed" },
    { fact: "F-31", case: "C-1039", concept: "icd-7A00", conf: 0.69, status: "unconfirmed" },
    { fact: "F-33", case: "C-1030", concept: "sym-hopeless", conf: 0.95, status: "confirmed", by: "Jonas" },
    { fact: "F-28", case: "C-1039", concept: "prot-ba", conf: 0.44, status: "unconfirmed" },
    { fact: "F-22", case: "C-1044", concept: "sop-B1.4", conf: 0.81, status: "confirmed", by: "Mette" },
  ],
};


// Sealed session transcripts (blended-care video sessions). Recorded as separate per-participant audio tracks,
// transcribed locally with whisper.cpp on Sympatic's own server. Speaker = audio channel, not diarization.
// Append-only: segments are hash-chained, a sha256 seal is written at session end. Corrections are annotations; the original text never changes.
SYM.transcripts = {
  "C-1041": [
    { id: "S-2", date: "16.09.2026", label: "Samtale 16.09", mins: 19, clinician: "Mette Kjær", provider: "LiveKit · egen server",
      seal: { sha256: "a3f9c1e0", sealed_at: "16.09.2026 14:51", segments: 12, audio_retained: false },
      segments: [
        { i: 0, t: "00:12", who: "clinician", channel: "track-2", text: "Hej Sofie. Vi aftalte at kigge på søvnen og på, hvordan ugen er gået med aktivitetsplanen.", conf: 0.96 },
        { i: 1, t: "00:31", who: "person", channel: "track-1", text: "Ja. Søvnen er stadig det værste. Jeg vågner ved tre-fire-tiden og kan ikke falde i søvn igen.", conf: 0.94 },
        { i: 2, t: "01:05", who: "clinician", channel: "track-2", text: "Hvor mange nætter i den her uge, cirka?", conf: 0.97 },
        { i: 3, t: "01:12", who: "person", channel: "track-1", text: "Fire, tror jeg. Måske fem. Weekenden var den værste.", conf: 0.91 },
        { i: 4, t: "04:40", who: "clinician", channel: "track-2", text: "Lad os holde fast i de faste sengetider fra søvnmodulet, også i weekenden. Det er trin fem i modulet.", conf: 0.95 },
        { i: 5, t: "08:17", who: "person", channel: "track-1", text: "Jeg tog aftenarbejde med hjem to gange i sidste uge, fordi vi mangler folk i Drift.", conf: 0.88, note: { text: "Rettelse: 'malerarbejde' → 'aftenarbejde'", by: "Mette", at: "17.09" }, orig: "Jeg tog malerarbejde med hjem to gange i sidste uge, fordi vi mangler folk i Drift." },
        { i: 6, t: "09:02", who: "clinician", channel: "track-2", text: "Det er tredje gang, vi taler om overbelastning. Jeg vil gerne have det med som noget, vi ser på i arbejdsevne-modulet.", conf: 0.93 },
        { i: 7, t: "12:41", who: "person", channel: "track-1", text: "Jeg sover måske fire timer, og så er jeg helt tom om formiddagen. Det er derfor, jeg springer øvelserne over.", conf: 0.92, cited: ["F-12"] },
        { i: 8, t: "13:20", who: "clinician", channel: "track-2", text: "Det giver mening. Så lægger vi kun én øvelse ind om dagen i den kommende uge, og den skal være kort.", conf: 0.96 },
        { i: 9, t: "15:48", who: "person", channel: "track-1", text: "Det kan jeg godt. Én kort ting om dagen.", conf: 0.95 },
        { i: 10, t: "17:30", who: "clinician", channel: "track-2", text: "Og hvis du får en nat med under fire timer, så må assistenten bytte dagens øvelse ud med søvnøvelsen. Det er aftalt.", conf: 0.94 },
        { i: 11, t: "18:55", who: "clinician", channel: "track-2", text: "Vi ses om to uger. Skriv til mig i chatten, hvis det bliver for tungt inden da.", conf: 0.97 },
      ] },
    { id: "S-1", date: "02.09.2026", label: "Samtale 02.09", mins: 24, clinician: "Mette Kjær", provider: "LiveKit · egen server",
      seal: { sha256: "7b2e04d9", sealed_at: "02.09.2026 11:26", segments: 12, audio_retained: false },
      segments: [
        { i: 0, t: "00:09", who: "clinician", channel: "track-2", text: "Velkommen, Sofie. Det her er vores første samtale. Jeg vil gerne høre, hvordan hverdagen ser ud lige nu.", conf: 0.97 },
        { i: 1, t: "00:40", who: "person", channel: "track-1", text: "Jeg er træt hele tiden. Jeg går på arbejde, kommer hjem og kan ikke overskue noget.", conf: 0.93 },
        { i: 2, t: "02:15", who: "clinician", channel: "track-2", text: "Hvordan er søvnen?", conf: 0.98 },
        { i: 3, t: "02:19", who: "person", channel: "track-1", text: "Dårlig. Jeg ligger og tænker på arbejdet. Vi er to mand nede i Drift, og det ender hos mig.", conf: 0.9 },
        { i: 4, t: "05:33", who: "clinician", channel: "track-2", text: "Det lyder som en overbelastning, der har stået på et stykke tid. Hvornår begyndte det?", conf: 0.95 },
        { i: 5, t: "05:50", who: "person", channel: "track-1", text: "Efter sommerferien. August var slem. Jeg havde vagter to weekender i træk.", conf: 0.92, cited: ["F-17"] },
        { i: 6, t: "09:10", who: "clinician", channel: "track-2", text: "Vi starter med to ting: en aktivitetsplan, der er realistisk, og søvnmodulet. Ikke mere end det.", conf: 0.96 },
        { i: 7, t: "10:02", who: "person", channel: "track-1", text: "Jeg er bange for, at jeg ikke kan holde fast i det.", conf: 0.94 },
        { i: 8, t: "10:20", who: "clinician", channel: "track-2", text: "Det er okay at være bange for det. Planen skal være så lille, at den kan holde på en dårlig dag.", conf: 0.95 },
        { i: 9, t: "16:44", who: "person", channel: "track-1", text: "Kan jeg skrive til assistenten, hvis jeg går i stå?", conf: 0.93 },
        { i: 10, t: "16:52", who: "clinician", channel: "track-2", text: "Ja. Assistenten hjælper med øvelserne, og jeg læser med. Du taler aldrig med den uden, at jeg kan se det.", conf: 0.96 },
        { i: 11, t: "23:30", who: "clinician", channel: "track-2", text: "Vi ses om fjorten dage. Tak for i dag, Sofie.", conf: 0.98 },
      ] },
  ],
};
// transcript segments can be cited as evidence just like chat messages
SYM.knowledge.cites["tr-S2-7"] = { kind: "transcript", case: "C-1041", session: "S-2", idx: 7, label: "Samtale 16.09 12:41" };
SYM.knowledge.cites["tr-S1-5"] = { kind: "transcript", case: "C-1041", session: "S-1", idx: 5, label: "Samtale 02.09 05:50" };
(function(){ const f = SYM.knowledge.factsByCase["C-1041"];
  const f12 = f.find(x => x.id === "F-12"); if (f12) { f12.ev = ["chat-w36", "tr-S2-7", "chat-3"]; f12.last = "16.09"; f12.n = 7; }
  const f17 = f.find(x => x.id === "F-17"); if (f17) { f17.ev = ["tr-S1-5", "chat-w36", "chat-w37"]; f17.first = "02.09"; }
})();
