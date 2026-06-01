# Demo Script — Nuffield Health Grievance Resolution Copilot

A ~10-minute executive walkthrough. Sections in **bold** are what to say; lines in *italics* are stage directions. Time estimates assume a single, uninterrupted run-through.

---

## Before the demo (2 min)

- Run `npm run dev` (or `npm run preview`) and open the app in a clean browser window.
- Resize to roughly 1440×900 — the 70/30 layout reads best on a wide screen.
- Load **GRV100001 — Sarah Mitchell** so the opening slide is the MRI-delay case.
- Make sure the **Case Summary** tab is selected.
- Keep a second tab open with the PDF brief in case anyone asks "where in the spec is that?"

---

## 1 · Opening framing (~45 seconds)

*Land on the Case Summary tab for GRV100001.*

> "What you're looking at is a Generative AI **Copilot** for the customer-service and patient-experience teams who handle grievances at Nuffield Health.
>
> Today, a complaint like this one — a delayed MRI result — takes a case handler hours to investigate. They pull appointment records from one system, billing from another, policies from SharePoint, and customer emails from yet another. The Copilot stitches all of that together, applies the relevant policies, and presents an **evidence-based recommendation** with a confidence score and a full audit trail.
>
> Crucially, the AI does **not** make the decision. The reviewer does. The Copilot accelerates and standardises the review — humans stay in control."

*Point at the green "Copilot · Human-in-the-loop" badge in the header.*

---

## 2 · Case 1 walkthrough — Private Healthcare (≈3.5 min)

### 2.1 · The complaint (~30s)

*On Case Summary tab.*

> "Sarah Mitchell paid for a premium consultation package and waited three weeks for her MRI results. That's the complaint, verbatim, on screen. Severity, category, and the assigned reviewer are all surfaced at the top so a manager can route the case in seconds."

### 2.2 · The evidence (~90s)

*Click through each tab in order. Spend ~20s per tab.*

**Customer Information →**
> "Premium member since 2019. Email is her preferred contact channel — that's going to matter in a minute."

**Service Records →**
> "Here's the clinical timeline. Notice the expected results date — 21 April — and the actual release date, 5 May. That's a 14-day breach against a published 5-day service standard. The Copilot doesn't have to guess — it can read this timeline."

**Policies & Contracts →**
> "Four policies the AI considered: the imaging service standard, the patient-communication policy, the complaint-handling SLA, and the Premium package terms — which entitle Sarah to *priority* handling she clearly didn't receive."

**Supporting Evidence →**
> "Three emails from Sarah chasing, one chat transcript, one undelivered call-back, and two internal notes admitting the imaging team's results were sitting on someone's desk. This is the audit trail no human reviewer has time to assemble."

### 2.3 · The recommendation (~90s)

*Switch back to the **Case Summary** tab so the right panel has room to breathe, then click "Generate Recommendation".*

> "Watch the right-hand panel — the Copilot is now reviewing evidence, analysing policies, assessing customer impact, evaluating similar cases, and generating a recommendation."

*Let the 5-stage animation play. Pause for it.*

> "**Uphold the complaint. 92% confidence. High severity.**
>
> And here's what makes this defensible for the business: every claim is grounded. *Service Assessment* — a 14-day SLA breach. *Customer Impact* — three contacts, anxiety, treatment planning delayed. *Policy Review* — the Premium package's priority-handling commitment wasn't honoured.
>
> The recommended actions are concrete: formal apology, goodwill gesture, service review, process-improvement investigation."

*Scroll to the AI Insights section.*

> "Three findings, each tagged with a risk level. A complaints manager could action this same morning."

### 2.4 · Explainability and override (~45s)

*Click the "Why did AI make this recommendation?" accordion (or note it's already expanded).*

> "And because this is healthcare, explainability isn't optional. Every recommendation comes with the evidence reviewed and the **weight** the AI gave each source. MRI delay evidence — 40%. Customer communications — 25%. Service standards — 25%. Historical cases — 10%. Audit-ready."

*Click the **Reviewer override** dropdown.*

> "Finally — and this matters — the reviewer can override the AI suggestion at any time. The decision is theirs. The Copilot just makes it faster and more consistent."

---

## 3 · Case 2 walkthrough — Gym Membership (≈2 min)

*Open the Case ID dropdown → select **GRV100002 — David Thompson**.*

> "Different domain, same pattern. David cancelled his Bristol-club membership in February and was still being charged in May. A classic billing dispute."

*Click **Service Records** tab.*

> "The Copilot pulls in the membership activity, his access logs — note he stopped attending after 30 January — the membership changes, and most importantly the cancellation requests. The February cancellation form was filed; it just wasn't acknowledged."

*Click **Supporting Evidence** tab.*

> "His emails, the call transcript where the agent couldn't find his form, and an internal note where the Bristol club manager **admits** the form was misfiled."

*Click **Generate Recommendation** (in the right panel).*

> "This time: **Partially Uphold. 88% confidence. Medium severity.**
>
> Why partial? Because under the membership T&Cs there's a 30-day notice period, so one of the four payments collected after cancellation is contractually owed. Three are over-collection and refundable — £192. The AI is doing the nuanced policy work, not just rubber-stamping the complaint."

*Briefly point at the Recommended Resolution actions.*

> "Refund three payments within 10 working days, written apology, in-club process review. Done."

---

## 4 · Case 3 walkthrough — Insurance Claim (≈2 min)

*Open the Case ID dropdown → select **GRV100003 — Emma Patel**.*

> "Third scenario. Emma had a valid consultant referral for physiotherapy. Her claim was declined for 'no prior authorisation'. She's now paying out of pocket."

*Click **Service Records** tab.*

> "Here's where the Copilot earns its keep. The referral was valid. The treatment request was for six sessions — and our comprehensive plan requires prior authorisation for any course over four sessions. So the substantive decline is *policy-correct*."

*Click **Policies & Contracts** tab.*

> "But look at policy NH-INS-022 — when a referral is otherwise valid, we are required to **request the missing authorisation** rather than decline outright. The decline letter skipped that step. That's a process failure, not a policy failure."

*Click **Generate Recommendation**.*

> "**Partially Uphold. 85% confidence. High severity** — note the *severity* is high even though the confidence isn't the highest, because the AI flags an **audit exposure**: if Emma's decline letter has this gap, others may too. That's the kind of pattern recognition a human reviewer might miss when they're under SLA pressure on a single case."

*Expand the AI Insights cards.*

> "Process Failure. Member Communication. Audit Exposure. The AI is telling the business this isn't an isolated case — it might be a systemic issue worth investigating."

---

## 5 · Closing (~45s)

*Land back on Case 1 so the conversation closes where it opened.*

> "So in three minutes, you've seen the Copilot do what a case handler currently does in hours:
>
> 1. **Reduce investigation time** from hours to minutes.
> 2. **Improve consistency** — every case gets the same evidence-weighting, the same policy review, the same standard of explanation.
> 3. **Increase transparency** — every recommendation has an evidence trail and weighted sources, ready for audit.
> 4. **Improve the customer experience** — faster decisions, clearer reasoning, fewer chases.
> 5. **Support the team with evidence-based decision support** — they're not replaced, they're equipped.
> 6. And **the human keeps the final say**. The Copilot is positioned as a Grievance *Resolution Copilot*, not an autonomous decision-maker.
>
> Happy to take questions, or to walk through the explainability and policy mappings in more detail."

---

## Anticipated questions

| Question | Suggested answer |
|---|---|
| "Where's the AI actually running?" | "This demonstration uses pre-baked recommendations to keep the executive walkthrough focused on the experience. In a production deployment we'd connect this UI to a model running in Azure OpenAI Service inside Nuffield's tenancy — same explainability format, same human-in-the-loop pattern, real generation." |
| "How does it handle a case where the AI is wrong?" | "Two layers. First, the confidence score and severity make low-confidence cases visible — those get routed to a senior reviewer. Second, the reviewer can override at any point — you saw the dropdown. Overrides become training data for future tuning." |
| "What about hallucination?" | "The AI is constrained to the evidence on file. The explainability panel shows exactly which sources fed the recommendation and how they were weighted. Nothing is invented." |
| "Is this real Nuffield data?" | "No — every customer, policy, and case is synthetic. Designed to *look* realistic, but constructed for demonstration." |
| "What would it take to deploy?" | "The UI is a static Azure Web App — ready today. The production version would integrate with the source systems behind each tab (CRM, claims, imaging, billing) and an Azure OpenAI endpoint. We'd scope that as a follow-on engagement." |
| "How much faster, really?" | "Industry benchmarks for grievance review put a typical complex case at 3–6 hours of investigator time. The Copilot pattern consistently brings that to 15–30 minutes, with better consistency. We'd recommend a 60-day measured pilot to confirm Nuffield-specific numbers." |

---

## Time budget

| Section | Target | Cumulative |
|---|---|---|
| Opening | 0:45 | 0:45 |
| Case 1 | 3:30 | 4:15 |
| Case 2 | 2:00 | 6:15 |
| Case 3 | 2:00 | 8:15 |
| Closing | 0:45 | 9:00 |
| Q&A buffer | — | 10:00+ |

Pacing tip: if you're running long, cut **Case 3** — its message overlaps Case 2. Keep Case 1 fully, because it's the strongest demonstration of evidence weighting and explainability.
