// Practical curriculum: using negotiable instruments in daily life, tied to UCC Article 3/4
// with cross-references to Black's Law Dictionary terms and federal law.
// Black's definitions are paraphrased (Black's Law Dictionary, 11th ed. 2019).

window.UCC_LESSONS = [
  {
    id: "foundations",
    title: "Foundations: What the UCC Is and Isn't",
    minutes: 8,
    summary: "Where the rules for checks and notes come from, and why 'the UCC' is really 50 state laws.",
    dailyLife: "Before you rely on any rule about a check or a loan note, you need to know which law actually governs it: your state's version of the UCC, plus a handful of federal statutes for banks.",
    sections: [
      {
        heading: "The UCC is a model code enacted by states",
        body: `The Uniform Commercial Code is drafted by the Uniform Law Commission and the American Law Institute. It has <strong>no legal force on its own</strong>. Each state legislature enacts its own version (with local tweaks), so the law that governs your check is, e.g., <em>Texas Business &amp; Commerce Code ch. 3</em> or <em>N.Y. U.C.C. Law art. 3</em>. Every state, D.C., and the territories have adopted Articles 3 and 4 in substantially uniform form.`
      },
      {
        heading: "The articles that touch your daily life",
        body: `<ul>
<li><strong>Article 1</strong> – definitions and general rules (good faith, course of dealing).</li>
<li><strong>Article 2</strong> – sales of goods (buying a car, appliances).</li>
<li><strong>Article 3</strong> – <strong>negotiable instruments</strong>: checks, promissory notes, cashier's checks, money orders, CDs.</li>
<li><strong>Article 4</strong> – bank deposits &amp; collections: your relationship with your checking-account bank.</li>
<li><strong>Article 4A</strong> – wire transfers (business-to-business; consumer wires often fall under federal Reg E instead).</li>
<li><strong>Article 9</strong> – secured transactions: car loans, liens on personal property.</li>
</ul>`
      },
      {
        heading: "Where federal law takes over",
        body: `The UCC governs <em>who owes what</em> on an instrument. Federal law layers on rules for banks: how fast deposited funds must be available (Expedited Funds Availability Act / Reg CC), how checks are imaged and truncated (Check 21 Act), consumer credit disclosures on loan notes (Truth in Lending Act), and crimes such as check forgery and bank fraud. When state UCC and federal law conflict, federal law preempts (U.S. Const. art. VI, cl. 2).`
      }
    ],
    keyTakeaways: [
      "Look up YOUR state's enactment of UCC Articles 3 and 4 — the numbering is nearly identical everywhere.",
      "Article 3 = the paper (checks, notes). Article 4 = your bank account. Federal law = bank timing rules and crimes.",
      "Nothing in the UCC creates money or lets a private person 'issue' payment that a creditor must accept."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 1-103", note: "Purposes of the UCC; supplementary principles of law and equity still apply." },
        { cite: "§ 1-201", note: "General definitions used across all articles." },
        { cite: "§ 3-102", note: "Scope of Article 3: negotiable instruments, not money or securities." },
        { cite: "§ 4-102", note: "Article 4 governs bank deposits and collections; Article 4 prevails over Article 3 on conflicts." }
      ],
      blacks: [
        { term: "Uniform Commercial Code", def: "A model code of commercial law adopted (with variations) by every U.S. state, governing sales, leases, negotiable instruments, bank deposits, secured transactions, and related matters." },
        { term: "Commercial paper", def: "Negotiable instruments — chiefly drafts, checks, notes, and certificates of deposit — used in commerce as substitutes for money or as credit devices." },
        { term: "Preemption", def: "The principle, derived from the Supremacy Clause, that federal law displaces conflicting state law." }
      ],
      federal: [
        { cite: "12 U.S.C. §§ 4001–4010", name: "Expedited Funds Availability Act", note: "Deadlines for when banks must make deposited funds available; implemented by Regulation CC, 12 C.F.R. pt. 229." },
        { cite: "12 U.S.C. §§ 5001–5018", name: "Check Clearing for the 21st Century Act (Check 21)", note: "Authorizes substitute checks and electronic check imaging." },
        { cite: "15 U.S.C. §§ 1601–1667f", name: "Truth in Lending Act", note: "Disclosure rules for consumer credit, including many promissory notes; Regulation Z, 12 C.F.R. pt. 1026." },
        { cite: "U.S. Const. art. VI, cl. 2", name: "Supremacy Clause", note: "Basis for federal preemption of conflicting state UCC provisions." }
      ]
    }
  },

  {
    id: "what-is-negotiable",
    title: "What Makes Something a Negotiable Instrument",
    minutes: 12,
    summary: "The seven requirements of § 3-104, and why an IOU on a napkin usually isn't one.",
    dailyLife: "You'll meet negotiable instruments as checks, cashier's checks, money orders, the promissory note you sign for a car or personal loan, and the note you might write when lending money to a friend. Knowing the requirements tells you which documents carry special legal power — and which are just contracts.",
    sections: [
      {
        heading: "Notes vs. drafts",
        body: `<p>Every negotiable instrument is one of two things:</p>
<ul>
<li><strong>Note</strong> – a <em>promise</em> to pay. Two parties: the <strong>maker</strong> (who promises) and the <strong>payee</strong>. Example: your auto-loan note, a personal loan note, a certificate of deposit.</li>
<li><strong>Draft</strong> – an <em>order</em> to someone else to pay. Three parties: the <strong>drawer</strong> (who orders), the <strong>drawee</strong> (who is told to pay — usually a bank), and the <strong>payee</strong>. A <strong>check</strong> is simply a draft drawn on a bank and payable on demand.</li>
</ul>`
      },
      {
        heading: "The § 3-104 checklist",
        body: `To be negotiable, a writing must contain:
<ol>
<li>An <strong>unconditional</strong> promise or order to pay — no "if the roof passes inspection" (§ 3-106).</li>
<li>A <strong>fixed amount of money</strong> — interest can be stated or variable by formula, but the principal must be fixed (§ 3-104(a), § 3-112).</li>
<li>Payable <strong>to bearer or to order</strong> — "Pay to the order of Jane Doe" or "Pay to bearer / cash" (§ 3-109). <em>Exception:</em> a check is negotiable even if it just says "Pay to Jane Doe" (§ 3-104(c)).</li>
<li>Payable <strong>on demand or at a definite time</strong> (§ 3-108).</li>
<li><strong>No other undertaking</strong> beyond payment, except permitted extras like collateral clauses, confession of judgment, or waiver of protections (§ 3-104(a)(3)).</li>
<li>A <strong>writing</strong> — the definition of "instrument" requires a written promise or order (§ 3-103, § 3-104).</li>
<li><strong>Signed</strong> by the maker or drawer (§ 3-401, § 3-103; a signature can be any symbol adopted with intent to authenticate).</li>
</ol>`
      },
      {
        heading: "Why negotiability matters to you",
        body: `A negotiable instrument can be <strong>transferred</strong> so that the new holder may get <em>better</em> rights than the person who gave it (the holder-in-due-course rule, Lesson 5). That's great when you're the one being paid — it's why a cashier's check is nearly as good as cash. It's dangerous when you're the one who <em>signed</em>: if the note you signed to a contractor is sold to a finance company, you may not be able to raise "the work was defective" against the new owner. (Consumer protections limit this — see the FTC Holder Rule in the cross-references.)`
      },
      {
        heading: "Common documents that are NOT negotiable instruments",
        body: `<ul>
<li>A text message saying "I'll pay you back $500" (not a signed writing in the traditional sense; conditional/informal).</li>
<li>An IOU that says "I owe you $500" without a promise to pay (an acknowledgement of debt is not a promise — § 3-103 cmt.).</li>
<li>A promise to pay "when I sell my house" (not a definite time).</li>
<li>A check with the words "non-negotiable" written across it (§ 3-104(d) — except that a check remains an instrument even if so marked).</li>
<li>Debit/credit card transactions, wire transfers, Venmo/Zelle payments (governed by contract, Reg E, and Article 4A — not Article 3).</li>
</ul>`
      }
    ],
    keyTakeaways: [
      "Note = promise (maker → payee). Draft/check = order (drawer → drawee bank → payee).",
      "Seven requirements: writing, signed, unconditional, fixed amount of money, to order or bearer, on demand or definite time, no other undertaking.",
      "Negotiability is a super-power for whoever ends up holding the paper — so be careful what you sign."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-104", note: "Definition of negotiable instrument; note vs. draft; check; cashier's check; teller's check; traveler's check; CD." },
        { cite: "§ 3-103", note: "Definitions: maker, drawer, drawee, order, promise, good faith, ordinary care." },
        { cite: "§ 3-106", note: "Unconditional promise or order." },
        { cite: "§ 3-108", note: "Payable on demand or at a definite time." },
        { cite: "§ 3-109", note: "Payable to bearer or to order." },
        { cite: "§ 3-112", note: "Interest — may be variable if determinable from the instrument or outside source." }
      ],
      blacks: [
        { term: "Negotiable instrument", def: "A written, signed, unconditional promise or order to pay a fixed sum of money, payable on demand or at a definite time, to order or bearer." },
        { term: "Promissory note", def: "An unconditional written promise, signed by the maker, to pay a fixed sum to a specified person or bearer on demand or at a definite time." },
        { term: "Draft (bill of exchange)", def: "An unconditional written order by one person (drawer) directing another (drawee) to pay a fixed sum to a third person (payee) or bearer." },
        { term: "Check", def: "A draft drawn on a bank and payable on demand." },
        { term: "Bearer", def: "One in possession of an instrument that is payable to bearer or indorsed in blank." }
      ],
      federal: [
        { cite: "16 C.F.R. § 433.2", name: "FTC 'Holder Rule'", note: "Consumer credit contracts arranged by sellers must contain a notice preserving the consumer's claims and defenses against any holder — blunting holder-in-due-course status against consumers." },
        { cite: "15 U.S.C. § 7001", name: "E-SIGN Act", note: "Electronic signatures and records are generally valid, but § 7003(a)(3) excludes UCC Articles 3, 4, 4A and 9 from E-SIGN's coverage — so paper checks and notes remain governed by state law (some states now permit electronic notes via UETA § 16 / 'transferable records')." }
      ]
    }
  },

  {
    id: "writing-checks",
    title: "Writing a Check the Right Way",
    minutes: 10,
    summary: "Each field on a check has a legal meaning. Filling it in carefully protects you from alteration and disputes.",
    dailyLife: "Rent, the plumber, your kid's school fees, a gift to a relative. Paper checks are still one of the most common negotiable instruments an individual signs.",
    sections: [
      {
        heading: "Anatomy of a check",
        body: `<ul>
<li><strong>Date</strong> – A check is payable on demand regardless of date, but a bank may refuse to pay a <em>postdated</em> check before its date only if you notified it (§ 4-401(c)). A check more than <strong>6 months old</strong> is "stale" — the bank <em>may</em> still pay it in good faith, but isn't required to (§ 4-404).</li>
<li><strong>Payee line</strong> – "Pay to the order of ___". Writing "Cash" makes it a <strong>bearer</strong> instrument: anyone who possesses it can cash it, including a thief (§ 3-109(a)(3), § 3-201(b)).</li>
<li><strong>Numeric amount box and written amount</strong> – If they conflict, <strong>words control numbers</strong> (§ 3-114). Fill the written line completely and draw a line through the leftover space to prevent alteration.</li>
<li><strong>Memo line</strong> – Legally insignificant to negotiability, but useful evidence of what the payment was for; some courts treat "paid in full" on the memo as an accord and satisfaction if the creditor cashes it (§ 3-311 — see Lesson 8).</li>
<li><strong>Signature</strong> – Your signature is what makes you liable as drawer (§ 3-401, § 3-414). No signature = no liability, but see forgery rules.</li>
<li><strong>MICR line</strong> – Routing and account numbers read by machines; under § 4-209 the bank that encodes it warrants its accuracy.</li>
</ul>`
      },
      {
        heading: "Your liability as drawer",
        body: `When you sign a check you promise that if the bank dishonors it (bounces it), you will pay the holder (§ 3-414(b)). If the check bounces, you're liable to the payee for the amount plus, in most states, statutory bad-check penalties and possibly criminal exposure if you knew there were insufficient funds. Your own bank may also charge you an NSF fee under your account agreement.`
      },
      {
        heading: "Practical protections",
        body: `<ul>
<li>Never sign a blank check. Under § 3-115 and § 3-407, an <em>incomplete</em> instrument later completed by someone else can be enforced as completed against you if it reaches a holder in due course or a bank that pays in good faith.</li>
<li>Use a gel pen; some inks can be washed off ("check washing").</li>
<li>Write the payee's full name — not "Cash" — unless you're handing it to a teller yourself.</li>
<li>Record the check in a register; § 4-406 requires you to review statements and report problems promptly (Lesson 9).</li>
</ul>`
      }
    ],
    keyTakeaways: [
      "Words control numbers when amounts conflict (§ 3-114).",
      "A check to 'Cash' is bearer paper — treat it like currency.",
      "A postdated check can be paid early unless you notify your bank; a check older than 6 months may be refused (§ 4-401(c), § 4-404).",
      "Your signature = your promise to pay if the check bounces (§ 3-414)."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-114", note: "Contradictory terms: handwritten > typed > printed; words > numbers." },
        { cite: "§ 3-115", note: "Incomplete instruments." },
        { cite: "§ 3-401", note: "A person is not liable on an instrument unless they signed it." },
        { cite: "§ 3-414", note: "Obligation of drawer." },
        { cite: "§ 4-401", note: "When bank may charge customer's account; postdated checks." },
        { cite: "§ 4-404", note: "Bank not obliged to pay a check more than six months old." }
      ],
      blacks: [
        { term: "Drawer", def: "The person who signs or is identified in a draft as the person ordering payment." },
        { term: "Drawee", def: "The person (usually a bank) ordered in a draft to make payment." },
        { term: "Payee", def: "The person to whom an instrument is made payable." },
        { term: "Postdated check", def: "A check bearing a date later than the date it was written; under the UCC it is still payable on demand unless the drawer gives the bank timely notice." },
        { term: "Stale check", def: "A check presented an unreasonable time — under the UCC, more than six months — after its date." }
      ],
      federal: [
        { cite: "18 U.S.C. § 1344", name: "Bank fraud", note: "Federal crime to knowingly execute a scheme to defraud a financial institution — including knowingly writing checks on closed or insufficient accounts as part of a scheme." },
        { cite: "12 C.F.R. § 229.10–.13", name: "Regulation CC funds availability", note: "How soon the payee's bank must make your check's funds available (e.g., next business day for the first $275 as of 2025, adjusted for inflation)." }
      ]
    }
  },

  {
    id: "endorsing",
    title: "Receiving and Endorsing Checks Safely",
    minutes: 12,
    summary: "How you sign the back of a check determines who can cash it and what liability you take on.",
    dailyLife: "Paychecks, refund checks, insurance checks, birthday checks from grandma, mobile deposits. Every one of them asks you to indorse — and how you do it matters.",
    sections: [
      {
        heading: "Types of indorsements",
        body: `<table class="mini">
<tr><th>Type</th><th>What you write</th><th>Effect</th><th>Cite</th></tr>
<tr><td><strong>Blank</strong></td><td>Just your signature</td><td>Converts the check to <em>bearer paper</em>. Anyone who finds it can cash it. Never do this until you're at the teller window.</td><td>§ 3-205(b)</td></tr>
<tr><td><strong>Special</strong></td><td>"Pay to Maria Lopez" + your signature</td><td>Only Maria (or her indorsee) can negotiate it further.</td><td>§ 3-205(a)</td></tr>
<tr><td><strong>Restrictive</strong></td><td>"For deposit only to acct #1234" + signature</td><td>A bank that handles it must apply it consistently with the restriction or face conversion liability.</td><td>§ 3-206(c)</td></tr>
<tr><td><strong>Qualified</strong></td><td>"Without recourse" + signature</td><td>You transfer the check but disclaim indorser liability if it bounces (you still give transfer warranties).</td><td>§ 3-415(b)</td></tr>
<tr><td><strong>Anomalous</strong></td><td>Signature of someone who isn't a holder (a co-signer/guarantor)</td><td>Signals accommodation party status.</td><td>§ 3-205(d)</td></tr>
</table>`
      },
      {
        heading: "The indorser's contract",
        body: `When you indorse a check and hand it to someone else, you promise to pay it if it's dishonored and you get timely notice (§ 3-415(a)). If you deposit your paycheck and it later bounces, the bank charges the amount back to you — that's your indorser liability plus your Article 4 deposit contract (§ 4-214). You also make <strong>transfer warranties</strong> (§ 3-416): that you're entitled to enforce it, signatures are authentic, it hasn't been altered, no defenses exist against you, and you know of no insolvency.`
      },
      {
        heading: "Mobile deposit and Check 21",
        body: `When you photograph a check, your bank creates an electronic image. Under the Check 21 Act, a properly created <strong>substitute check</strong> is the legal equivalent of the original (12 U.S.C. § 5003). Most banks require you to write "For mobile deposit only" under your signature; Reg CC § 229.34(f) makes the depositary bank liable if the original paper check is later deposited elsewhere and you didn't restrictively indorse it as required. Destroy or securely store the paper after deposit.`
      },
      {
        heading: "Third-party checks and 'signing over' a check",
        body: `You can transfer a check to someone else by special indorsement ("Pay to Sam Lee") plus signature. Sam becomes a holder. But many banks refuse third-party checks as a fraud-prevention policy — a bank's refusal isn't a UCC violation because a bank has no duty to accept any particular deposit. If Sam takes the check and it bounces, Sam can come after <em>you</em> as indorser (§ 3-415) and the original drawer (§ 3-414).`
      }
    ],
    keyTakeaways: [
      "Blank indorsement = bearer paper. Sign only at the point of deposit.",
      "'For deposit only' + account number is the safest indorsement (§ 3-206).",
      "Indorsing makes you secondarily liable if the check bounces (§ 3-415) and gives transfer warranties (§ 3-416).",
      "'Without recourse' disclaims indorser liability but not warranties."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-204", note: "Indorsement defined." },
        { cite: "§ 3-205", note: "Special, blank, and anomalous indorsements." },
        { cite: "§ 3-206", note: "Restrictive indorsements." },
        { cite: "§ 3-415", note: "Obligation of indorser." },
        { cite: "§ 3-416", note: "Transfer warranties." },
        { cite: "§ 4-214", note: "Bank's right of charge-back when a deposited item is returned." }
      ],
      blacks: [
        { term: "Indorsement", def: "A signature (other than as maker, drawer, or acceptor) placed on an instrument to negotiate it, restrict payment, or incur indorser liability." },
        { term: "Blank indorsement", def: "An indorsement consisting only of the indorser's signature, making the instrument payable to bearer." },
        { term: "Restrictive indorsement", def: "An indorsement that limits how the instrument may be paid or applied, such as 'for deposit only.'" },
        { term: "Without recourse", def: "A qualified indorsement by which the indorser disclaims liability to pay if the instrument is dishonored." },
        { term: "Holder", def: "A person in possession of an instrument payable to bearer or identified as the person to whom it is payable." }
      ],
      federal: [
        { cite: "12 U.S.C. § 5003", name: "Check 21 — legal equivalence of substitute checks", note: "A substitute check meeting the statutory requirements is the legal equivalent of the original for all purposes." },
        { cite: "12 U.S.C. § 5006", name: "Check 21 — expedited recredit for consumers", note: "Consumers may claim recredit if a substitute check was improperly charged." },
        { cite: "12 C.F.R. § 229.34(f)", name: "Reg CC remote deposit capture indemnity", note: "Bank that accepts a mobile deposit indemnifies a bank that later takes the paper original — unless the paper bore a restrictive indorsement like 'for mobile deposit only.'" }
      ]
    }
  },

  {
    id: "hdc",
    title: "Holder in Due Course: Why It Matters When You Pay and When You Sign",
    minutes: 14,
    summary: "The rule that lets a good-faith purchaser of a check or note collect even when the original deal went bad.",
    dailyLife: "You sign a note to a solar installer; the installer sells the note to a finance company; the panels never work. Can you refuse to pay the finance company? The HDC doctrine answers that — and federal consumer law changes the answer for many consumer deals.",
    sections: [
      {
        heading: "The requirements (§ 3-302)",
        body: `A holder in due course is a <strong>holder</strong> who takes the instrument:
<ol>
<li><strong>For value</strong> (§ 3-303) — a promise to pay in the future isn't value until performed; a gift recipient is not an HDC.</li>
<li>In <strong>good faith</strong> — honesty in fact AND observance of reasonable commercial standards of fair dealing (§ 3-103(a)(6)).</li>
<li><strong>Without notice</strong> that it is overdue, dishonored, altered, bears an unauthorized signature, or is subject to a claim or defense.</li>
<li>The instrument shows no apparent forgery, alteration, or irregularity that calls its authenticity into question.</li>
</ol>`
      },
      {
        heading: "What an HDC gets (§ 3-305)",
        body: `An HDC takes free of <strong>personal defenses</strong> (breach of contract, failure of consideration, fraud in the inducement, unconscionability, most payment disputes) and free of <strong>claims of ownership</strong> (§ 3-306). An HDC is still subject to <strong>real defenses</strong>:
<ul>
<li>Infancy (minority)</li>
<li>Duress, lack of legal capacity, or illegality that makes the obligation void under other law</li>
<li>Fraud in the factum ("fraud in the essence": signer had no reasonable opportunity to learn the document's character)</li>
<li>Discharge in insolvency (bankruptcy)</li>
<li>Also: forgery of the obligor's own signature (§ 3-401), material alteration as to the altered amount (§ 3-407), and the statute of limitations.</li>
</ul>`
      },
      {
        heading: "The shelter rule (§ 3-203(b))",
        body: `A transferee gets the rights of the transferor. So if an HDC gives the note to their child as a gift, the child (not an HDC — no value) still enjoys HDC rights "through the shelter" of the parent — unless the transferee was a party to fraud on the instrument.`
      },
      {
        heading: "How federal consumer law flips the default",
        body: `Because HDC status was used to strip consumers of defenses, the FTC's <strong>Holder Rule</strong> (16 C.F.R. pt. 433) requires consumer credit contracts arranged with a seller to include a bold notice: <em>"Any holder of this consumer credit contract is subject to all claims and defenses which the debtor could assert against the seller…"</em> Recovery is capped at what the consumer paid. A note containing that notice can't produce a true HDC because the holder has notice of the defenses. Also, § 3-106(d) provides that a note bearing such a required notice is still negotiable but no holder can be an HDC. Result: in most financed consumer purchases, you <em>keep</em> your defenses against the finance company.`
      },
      {
        heading: "When YOU are the one paid",
        body: `Taking a check for value, in good faith, without notice makes you an HDC — that's why a cashier's check from a stranger is safer than a personal check <em>only if it's genuine</em>. HDC status doesn't protect you from a counterfeit cashier's check: there is no real drawer/bank obligation on a fake, and your bank will charge back the provisional credit when the fake is discovered (§ 4-214). See the scams lesson.`
      }
    ],
    keyTakeaways: [
      "HDC = holder + value + good faith + no notice (§ 3-302).",
      "HDC beats personal defenses (bad workmanship, non-delivery) but not real defenses (forgery, infancy, duress, bankruptcy, fraud in the factum).",
      "For consumer purchases financed through the seller, the FTC Holder Rule preserves your defenses against whoever buys the note.",
      "Being an HDC does not make a counterfeit check real."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-302", note: "Holder in due course requirements." },
        { cite: "§ 3-303", note: "Value and consideration." },
        { cite: "§ 3-305", note: "Defenses and claims in recoupment; real vs. personal defenses." },
        { cite: "§ 3-306", note: "Claims to an instrument — HDC takes free of them." },
        { cite: "§ 3-203", note: "Transfer of instrument; shelter rule." },
        { cite: "§ 3-106(d)", note: "Instruments bearing an FTC-required notice: negotiable but no HDC possible." }
      ],
      blacks: [
        { term: "Holder in due course", def: "A holder who takes a negotiable instrument for value, in good faith, and without notice of defenses, claims, dishonor, or that it is overdue — and who therefore takes free of most defenses." },
        { term: "Real defense", def: "A defense good even against a holder in due course (e.g., infancy, duress, illegality, fraud in the factum, discharge in bankruptcy)." },
        { term: "Personal defense", def: "A defense arising from the underlying transaction (e.g., breach of contract, failure of consideration) that cannot be asserted against a holder in due course." },
        { term: "Shelter rule", def: "The doctrine that a transferee acquires whatever rights the transferor had, including HDC rights." },
        { term: "Fraud in the factum", def: "Fraud that induces a person to sign without a reasonable opportunity to understand the essential nature of the document." }
      ],
      federal: [
        { cite: "16 C.F.R. §§ 433.1–433.3", name: "FTC Trade Regulation Rule — Preservation of Consumers' Claims and Defenses (Holder Rule)", note: "Requires the holder notice in consumer credit contracts; failure to include it is an unfair trade practice under 15 U.S.C. § 45." },
        { cite: "15 U.S.C. § 1641", name: "TILA — liability of assignees", note: "Assignees of consumer credit obligations are liable for disclosure violations apparent on the face of the documents." },
        { cite: "11 U.S.C. § 524", name: "Bankruptcy discharge", note: "A discharged debt cannot be collected even by an HDC (a 'real defense')." }
      ]
    }
  },

  {
    id: "lending",
    title: "Lending or Borrowing Money: Promissory Notes",
    minutes: 14,
    summary: "How to document a personal loan so it's enforceable, and what to watch for when you sign one.",
    dailyLife: "Lending $5,000 to a sibling, seller-financing a used car, borrowing from a friend for a deposit, or signing a note for a bank loan. A well-drafted note protects both sides.",
    sections: [
      {
        heading: "Elements of an enforceable note",
        body: `<ul>
<li>Date and place.</li>
<li>"For value received, I, [Maker], <strong>promise to pay to the order of</strong> [Payee] the sum of $X…" — the "order" language makes it negotiable.</li>
<li>Interest rate (fixed or by formula) and how it's calculated. Check your state's <strong>usury</strong> cap — private lenders usually face stricter limits than banks.</li>
<li>Payment schedule and maturity date — or "on demand."</li>
<li>Late fees, acceleration clause ("if any payment is more than 15 days late, the entire balance becomes due").</li>
<li>Collateral description if secured (then Article 9 attaches — file a UCC-1 to perfect against third parties, § 9-310; for a car, note the lien on the title under state motor-vehicle law).</li>
<li>Signature of the maker(s). Co-makers are jointly and severally liable (§ 3-116).</li>
</ul>`
      },
      {
        heading: "Demand notes and the statute of limitations",
        body: `A demand note is payable whenever the holder asks. Under § 3-118(b), an action on a demand note must be brought within <strong>6 years after demand</strong>; and if no demand is made, the claim is barred if no payment of principal or interest occurred for a continuous 10 years. A note payable at a definite time must be sued on within 6 years after the due date (§ 3-118(a)). Check your state — a few modify these periods.`
      },
      {
        heading: "Co-signing: the accommodation party trap",
        body: `A co-signer who signs to lend credit to the borrower is an <strong>accommodation party</strong> (§ 3-419). You are liable in the capacity you signed (as co-maker: fully, immediately, without the lender first pursuing the borrower — § 3-419(b)). You <em>do</em> have a right of reimbursement from the borrower, but if they couldn't pay the bank, they probably can't pay you. The FTC Credit Practices Rule requires lenders to give consumer co-signers a warning notice (16 C.F.R. § 444.3). If you must co-sign, write "collection guaranteed" rather than "payment guaranteed" — under § 3-419(d) that forces the lender to exhaust remedies against the borrower first.`
      },
      {
        heading: "Consumer protections on notes you sign",
        body: `If you borrow from a lender in the business of lending, the Truth in Lending Act requires disclosure of the APR, finance charge, amount financed, and total of payments (Reg Z). Loan flipping, confessions of judgment (banned in consumer credit by 16 C.F.R. § 444.2), and wage assignments are restricted. If a bank or servicer transfers your note, RESPA/TILA require notice of the new owner for mortgage loans (15 U.S.C. § 1641(g)).`
      },
      {
        heading: "Collecting on a note you hold",
        body: `To enforce, you must be a <strong>person entitled to enforce</strong> (§ 3-301): the holder, a non-holder with holder's rights, or someone who lost the note (§ 3-309). Keep the <em>original</em>. Send a written demand, then sue in small claims or civil court. Report imputed interest on interest-free family loans above the IRS gift threshold (26 U.S.C. § 7872). If the borrower pays in full, mark the note "Paid" and return it — a maker who pays without retrieving the note risks a later holder demanding payment (§ 3-602, § 3-501(b)(2)).`
      }
    ],
    keyTakeaways: [
      "Use 'promise to pay to the order of' to make a note negotiable; state a fixed principal and a definite time or 'on demand.'",
      "Co-signers are fully liable as accommodation parties (§ 3-419); 'collection guaranteed' limits that.",
      "Statute of limitations: 6 years from due date or demand (§ 3-118).",
      "Keep the original note; when paid, get it back marked 'Paid.'"
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-104(e)", note: "Note defined." },
        { cite: "§ 3-116", note: "Joint and several liability of co-makers." },
        { cite: "§ 3-118", note: "Statute of limitations for notes and drafts." },
        { cite: "§ 3-301", note: "Person entitled to enforce." },
        { cite: "§ 3-309", note: "Enforcement of lost, destroyed, or stolen instrument." },
        { cite: "§ 3-412", note: "Obligation of maker (issuer of note)." },
        { cite: "§ 3-419", note: "Accommodation parties; guarantees of payment vs. collection." },
        { cite: "§ 3-602", note: "Payment discharges the obligation to the extent paid." },
        { cite: "§ 9-310 / § 9-609", note: "Perfection by filing; secured party's right to take collateral after default." }
      ],
      blacks: [
        { term: "Maker", def: "The person who signs a promissory note and thereby promises to pay it." },
        { term: "Accommodation party", def: "One who signs an instrument to lend his or her name and credit to another party, without receiving direct benefit." },
        { term: "Surety / Guarantor", def: "One who undertakes to pay if the principal debtor does not; a guarantor of collection is liable only after the creditor pursues the principal." },
        { term: "Acceleration clause", def: "A loan provision making the entire balance due upon a specified event such as default." },
        { term: "Usury", def: "Charging interest in excess of the maximum rate permitted by law." },
        { term: "Demand note", def: "A note payable whenever the holder demands payment." }
      ],
      federal: [
        { cite: "16 C.F.R. § 444.3", name: "FTC Credit Practices Rule — cosigner notice", note: "Lenders must give consumer cosigners a written notice explaining their liability." },
        { cite: "16 C.F.R. § 444.2", name: "FTC Credit Practices Rule — prohibited provisions", note: "Bans confessions of judgment, waivers of exemption, wage assignments, and household-goods security interests in consumer credit." },
        { cite: "15 U.S.C. § 1638; 12 C.F.R. pt. 1026", name: "TILA / Reg Z closed-end credit disclosures", note: "APR, finance charge, amount financed, total of payments." },
        { cite: "26 U.S.C. § 7872", name: "Below-market loans", note: "Tax treatment of interest-free or low-interest family loans (imputed interest)." },
        { cite: "15 U.S.C. § 1641(g)", name: "TILA — notice of new creditor", note: "Mortgage borrowers must be notified within 30 days when the loan is sold or transferred." }
      ]
    }
  },

  {
    id: "cashiers-money-orders",
    title: "Cashier's Checks, Certified Checks, Money Orders & Traveler's Checks",
    minutes: 10,
    summary: "When each is the right tool, how they differ legally, and what to do when one is lost.",
    dailyLife: "Closing on a house, buying a used car from a stranger, paying a security deposit, sending money to someone without a bank account.",
    sections: [
      {
        heading: "Compare the instruments",
        body: `<table class="mini">
<tr><th>Instrument</th><th>Who's liable</th><th>Why it's trusted</th><th>UCC</th></tr>
<tr><td><strong>Cashier's check</strong></td><td>Bank is both drawer and drawee — primarily liable</td><td>The bank's own credit; can't bounce for insufficient funds</td><td>§ 3-104(g), § 3-412</td></tr>
<tr><td><strong>Teller's check</strong></td><td>Drawn by one bank on another bank</td><td>Bank credit</td><td>§ 3-104(h)</td></tr>
<tr><td><strong>Certified check</strong></td><td>Your personal check that the bank has <em>accepted</em>; bank is primarily liable, you're discharged</td><td>Bank has set aside the funds</td><td>§ 3-409(d), § 3-414(c)</td></tr>
<tr><td><strong>Money order</strong></td><td>Issuer (USPS, Western Union, bank) as drawer; usually treated as a draft/check</td><td>Prepaid; capped (USPS: $1,000 domestic)</td><td>§ 3-104(f) cmt. 4</td></tr>
<tr><td><strong>Traveler's check</strong></td><td>Issuer; requires countersignature</td><td>Prepaid, refundable if lost</td><td>§ 3-104(i), § 3-106(c)</td></tr>
</table>`
      },
      {
        heading: "Stopping payment — mostly you can't",
        body: `Because a cashier's or certified check is the bank's own obligation, the <em>purchaser</em> generally has <strong>no right to stop payment</strong> (§ 4-403 applies to items drawn on the customer's account, not the bank's). A bank that wrongfully refuses to pay its own cashier's check owes the holder the amount plus expenses, interest, and possibly consequential damages (§ 3-411). Exception: the bank may refuse if it has its own defense or a valid claim by a third party is asserted under § 3-602/§ 3-305.`
      },
      {
        heading: "Lost, destroyed, or stolen cashier's check",
        body: `Under § 3-312, the remitter or payee can sign a <strong>declaration of loss</strong>. The bank must pay the claimant the amount when the claim becomes enforceable — the later of 90 days after the check's date or 90 days after the declaration. If a holder presents the check before then, the bank pays the holder and the claimant is out of luck unless the holder wasn't entitled. Practically: keep the receipt, report loss immediately, expect a ~90-day wait (some banks accept an indemnity bond to pay faster).`
      },
      {
        heading: "Counterfeit cashier's checks",
        body: `A fake cashier's check has no bank obligation behind it. Your bank must give you provisional credit under Reg CC (often next business day for cashier's checks deposited in person, § 229.10(c)) — but "available" ≠ "final." When the fake is returned, the bank charges your account back (§ 4-214) and you owe any shortfall. Verify by calling the issuing bank at a number <em>you</em> look up, never one printed on the check.`
      }
    ],
    keyTakeaways: [
      "Cashier's and certified checks are bank obligations — near-cash, but you can't stop payment on them.",
      "Lost cashier's check: file a declaration of loss; the bank pays after 90 days (§ 3-312).",
      "'Funds available' under Reg CC is not the same as 'check cleared.' Verify large official checks with the issuing bank directly."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-104(f)–(i)", note: "Definitions: check, cashier's check, teller's check, traveler's check." },
        { cite: "§ 3-411", note: "Refusal to pay cashier's, teller's, or certified checks — damages." },
        { cite: "§ 3-312", note: "Lost, destroyed, or stolen cashier's, teller's, or certified checks." },
        { cite: "§ 3-409", note: "Acceptance; certification of a check." },
        { cite: "§ 3-413", note: "Obligation of acceptor." },
        { cite: "§ 4-403", note: "Stop payment — only for items drawn on the customer's own account." }
      ],
      blacks: [
        { term: "Cashier's check", def: "A check drawn by a bank on itself, signed by an authorized officer, and payable to a third party named by the customer." },
        { term: "Certified check", def: "A depositor's check that the drawee bank has accepted, thereby guaranteeing sufficient funds and becoming primarily liable." },
        { term: "Money order", def: "A negotiable draft issued by a bank, post office, or other issuer for a prepaid amount, payable to a named payee." },
        { term: "Remitter", def: "One who purchases an instrument from its issuer payable to a third party." },
        { term: "Acceptance", def: "A drawee's signed engagement to honor a draft as presented." }
      ],
      federal: [
        { cite: "12 C.F.R. § 229.10(c)", name: "Reg CC next-day availability", note: "Cashier's, certified, teller's checks, U.S. Treasury checks, and postal money orders deposited in person to the payee's account generally must be available next business day." },
        { cite: "18 U.S.C. § 513", name: "Counterfeit securities of organizations", note: "Making or possessing counterfeit checks and money orders of an organization is a federal felony." },
        { cite: "18 U.S.C. § 500", name: "Postal money orders", note: "Forging or altering postal money orders." },
        { cite: "31 U.S.C. § 5313; 31 C.F.R. § 1010.311", name: "Bank Secrecy Act currency reporting", note: "Banks file a CTR for cash transactions over $10,000 — buying a cashier's check with that much cash triggers it; structuring to avoid it is a crime (31 U.S.C. § 5324)." }
      ]
    }
  },

  {
    id: "disputes",
    title: "Bounced Checks, Stop Payments, and 'Paid in Full'",
    minutes: 12,
    summary: "What happens when a check is dishonored, how to stop payment, and the accord-and-satisfaction trap.",
    dailyLife: "The contractor never showed up but you already mailed the check. Your tenant's rent check bounced. A creditor sent you a bill you dispute and you want to send a smaller check marked 'final payment.'",
    sections: [
      {
        heading: "Stop-payment orders (§ 4-403)",
        body: `You may stop payment on any check drawn on your account by notifying your bank in time to give it a <em>reasonable opportunity to act</em>. An oral stop is good for 14 days; a written one for 6 months, renewable. Banks charge a fee. Stopping payment does <strong>not</strong> erase your underlying debt — the payee (or an HDC!) can still sue you on the check or the contract (§ 3-414). It just puts the dispute back in your hands rather than the bank's. If the bank pays over a valid stop order, it's liable for your loss, but you must prove the loss (§ 4-403(c)).`
      },
      {
        heading: "When a check you received bounces",
        body: `<ol>
<li>The check is <strong>dishonored</strong> when the bank returns it unpaid (§ 3-502).</li>
<li>Give <strong>notice of dishonor</strong> to any indorsers within 30 days (§ 3-503) — otherwise you lose your claim against them (but not against the drawer of a check).</li>
<li>Demand payment from the drawer in writing. Most states have bad-check statutes awarding treble damages or a fixed penalty after a written demand and waiting period (e.g., Cal. Civ. Code § 1719).</li>
<li>Sue in small claims if needed. You may sue on the instrument (§ 3-414) or the underlying obligation — the debt was only <em>suspended</em>, not paid, when you took the check (§ 3-310(b)).</li>
</ol>`
      },
      {
        heading: "Wrongful dishonor by YOUR bank (§ 4-402)",
        body: `If your bank bounces a check when you had sufficient funds, it is liable for damages proximately caused — including consequential damages like an arrest for a bad check or a lost deal. Banks may set an order of posting (largest-first ordering has produced class actions and CFPB scrutiny). Under § 4-401(a) a bank may pay an item creating an overdraft only if it's otherwise properly payable.`
      },
      {
        heading: "The 'paid in full' check — accord and satisfaction (§ 3-311)",
        body: `If you owe a <em>genuinely disputed</em> or unliquidated amount and you tender a check with a <strong>conspicuous</strong> statement that it's in full satisfaction, and the creditor cashes it, the debt is discharged — <em>unless</em> (a) the creditor is an organization that told you to send disputed payments to a designated office and you didn't, or (b) the creditor refunds the payment within 90 days. Conversely, if you're the creditor: don't cash a "payment in full" check on a disputed debt unless you're willing to accept it. Crossing out the notation doesn't help (§ 1-308 reservation of rights doesn't apply to § 3-311).`
      }
    ],
    keyTakeaways: [
      "Stop payment quickly; written orders last 6 months (§ 4-403). It doesn't cancel the debt.",
      "A bounced check suspends — doesn't extinguish — the underlying debt (§ 3-310). Send written demand to unlock state penalty statutes.",
      "Wrongful dishonor makes your bank liable for real damages (§ 4-402).",
      "Cashing a 'paid in full' check on a disputed debt can discharge it (§ 3-311)."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 4-403", note: "Customer's right to stop payment." },
        { cite: "§ 4-402", note: "Bank's liability for wrongful dishonor." },
        { cite: "§ 3-310", note: "Effect of instrument on underlying obligation (suspension)." },
        { cite: "§ 3-311", note: "Accord and satisfaction by use of instrument." },
        { cite: "§ 3-501 – 3-503", note: "Presentment, dishonor, notice of dishonor." },
        { cite: "§ 3-414", note: "Drawer's liability on dishonor." }
      ],
      blacks: [
        { term: "Dishonor", def: "A refusal to pay or accept an instrument when it is duly presented." },
        { term: "Stop-payment order", def: "A customer's instruction to a bank not to pay a specified check." },
        { term: "Accord and satisfaction", def: "An agreement to accept a different performance in discharge of an existing obligation, and the performance of that agreement." },
        { term: "Wrongful dishonor", def: "A bank's improper refusal to pay a properly payable item drawn on a customer's account." },
        { term: "Presentment", def: "A demand for payment or acceptance made by a person entitled to enforce an instrument." }
      ],
      federal: [
        { cite: "15 U.S.C. § 1692e", name: "Fair Debt Collection Practices Act", note: "Third-party collectors chasing a bounced check may not use false or misleading representations, including threats of arrest that aren't legally available." },
        { cite: "12 C.F.R. § 229.33", name: "Reg CC — notice of nonpayment", note: "Paying bank must give expedited notice of nonpayment on returned checks of $5,000+." },
        { cite: "12 C.F.R. pt. 1005 (Reg E)", name: "Electronic check conversion", note: "When a merchant converts your paper check to an electronic ACH debit, Reg E — not Article 4 — governs error resolution." }
      ]
    }
  },

  {
    id: "forgery-alteration",
    title: "Forgery, Alteration & Who Bears the Loss",
    minutes: 15,
    summary: "The UCC's loss-allocation rules for stolen checks, forged signatures, and changed amounts — and your duty to check your statements.",
    dailyLife: "Someone stole checks from your mailbox, washed the payee name, and cashed them. Your bookkeeper wrote checks to herself. A check you wrote for $50 came back as $500.",
    sections: [
      {
        heading: "Forged drawer signature: bank's loss (usually)",
        body: `A forged signature is <em>not</em> your signature (§ 3-401, § 3-403). A check bearing your forged signature is not <strong>properly payable</strong>, so your bank must recredit your account (§ 4-401(a)). The bank bears the loss because it is presumed to know its customer's signature (<em>Price v. Neal</em> rule, codified in § 3-418 and § 3-417(a)(3)). Exceptions shift the loss back to you: your negligence substantially contributed (§ 3-406), or you failed to report after receiving statements (§ 4-406).`
      },
      {
        heading: "Forged indorsement: depositary bank's loss (usually)",
        body: `If a thief steals a check payable to you and forges your indorsement, the check is not properly payable by the drawer's bank, and the thief's bank breached its <strong>presentment warranty</strong> (§ 3-417, § 4-208) that it was entitled to enforce. The loss flows back to the bank that took the check from the thief. You (the payee) can also sue that bank for <strong>conversion</strong> (§ 3-420) — but only if you or your agent had possession of the check first. Exceptions: § 3-404 (impostor/fictitious payee) and § 3-405 (employee fraud) validate the forged indorsement when the drawer was in the best position to prevent the fraud.`
      },
      {
        heading: "Alteration: raised amounts and washed payees (§ 3-407)",
        body: `A fraudulent, material alteration discharges the obligor — but a payor bank or HDC may enforce the instrument according to its <em>original</em> terms. So if your $50 check is raised to $500, the bank may charge you $50, not $500 (§ 4-401(d)(1)). If you left blanks and someone completed it, the bank may pay as completed (§ 4-401(d)(2)). Your negligence (leaving gaps, using erasable ink) can shift the whole loss to you under § 3-406 — comparative negligence applies.`
      },
      {
        heading: "Your duty: review statements and report (§ 4-406)",
        body: `Once your bank makes statements (or images) available, you must exercise <strong>reasonable promptness</strong> to spot unauthorized signatures or alterations and notify the bank. Consequences:
<ul>
<li>If you're slow and the bank proves loss from the delay, you're precluded from claiming.</li>
<li>Same-wrongdoer rule: after a <strong>30-day</strong> reasonable period from the first bad statement, you bear later forgeries by the same person.</li>
<li>Absolute cutoff: <strong>1 year</strong> after the statement is available, you're barred regardless of bank negligence (§ 4-406(f)). Many account agreements shorten this to 30–60 days — courts generally uphold reasonable shortening under § 4-103.</li>
</ul>
Forged <em>indorsements</em> are not covered by the 1-year rule but by the 3-year statute of limitations in § 4-111.`
      },
      {
        heading: "Practical response checklist",
        body: `<ol>
<li>Report to your bank in writing immediately (keep proof).</li>
<li>Sign the bank's affidavit of forgery/unauthorized transaction.</li>
<li>File a police report (banks often require it; mail theft is a federal crime — 18 U.S.C. § 1708).</li>
<li>Close the account if checks were stolen.</li>
<li>Escalate to the CFPB (consumerfinance.gov/complaint) or OCC if the bank stalls.</li>
</ol>`
      }
    ],
    keyTakeaways: [
      "Forged drawer signature → bank's loss (§ 4-401, § 3-418). Forged indorsement → the bank that took it from the thief (§ 3-417, § 4-208).",
      "Alteration: bank can charge you only the original amount (§ 3-407, § 4-401(d)).",
      "Your negligence (§ 3-406) or slow statement review (§ 4-406) shifts loss to you — 30 days for repeat forgeries, 1 year absolute.",
      "Impostor, fictitious-payee, and employee-fraud rules put the loss on the check writer who was in the best position to prevent it (§§ 3-404, 3-405)."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-401", note: "Signature required for liability." },
        { cite: "§ 3-403", note: "Unauthorized signature — ineffective except as signature of the forger; ratification." },
        { cite: "§ 3-404", note: "Impostors; fictitious payees." },
        { cite: "§ 3-405", note: "Employer's responsibility for fraudulent indorsement by employee." },
        { cite: "§ 3-406", note: "Negligence contributing to forgery or alteration; comparative negligence." },
        { cite: "§ 3-407", note: "Alteration." },
        { cite: "§ 3-417 / § 4-208", note: "Presentment warranties." },
        { cite: "§ 3-418", note: "Payment or acceptance by mistake." },
        { cite: "§ 3-420", note: "Conversion of instrument." },
        { cite: "§ 4-401", note: "Properly payable; alteration and completion." },
        { cite: "§ 4-406", note: "Customer's duty to discover and report unauthorized signature or alteration." },
        { cite: "§ 4-111", note: "Three-year statute of limitations for Article 4 claims." }
      ],
      blacks: [
        { term: "Forgery", def: "The act of fraudulently making or altering a writing so that it appears to be the genuine act of another." },
        { term: "Material alteration", def: "A change in an instrument that modifies the obligation of a party — e.g., changing the amount, date, or payee." },
        { term: "Properly payable", def: "An item authorized by the customer and consistent with the deposit agreement, which a bank may therefore charge to the account." },
        { term: "Conversion", def: "The wrongful exercise of dominion over another's personal property — including a check paid on a forged indorsement." },
        { term: "Fictitious payee", def: "A named payee who the drawer or signer does not intend to have any interest in the instrument." },
        { term: "Price v. Neal doctrine", def: "The rule that a drawee who pays a draft bearing a forged drawer's signature cannot recover from a good-faith presenter." }
      ],
      federal: [
        { cite: "18 U.S.C. § 1708", name: "Mail theft", note: "Stealing mail — including checks from a mailbox — is a federal felony." },
        { cite: "18 U.S.C. § 510", name: "Forging endorsements on Treasury checks", note: "Forging an indorsement on a U.S. Treasury check (tax refund, Social Security)." },
        { cite: "18 U.S.C. § 513", name: "Counterfeit or forged securities", note: "Forged and altered checks are 'securities' under this statute." },
        { cite: "31 U.S.C. § 3712; 31 C.F.R. pt. 240", name: "Treasury check reclamation", note: "Federal rules for U.S. Treasury checks paid on forged indorsements — the Treasury can reclaim from the presenting bank." },
        { cite: "12 U.S.C. § 5536 (CFPA)", name: "Unfair, deceptive, or abusive acts", note: "CFPB authority over bank handling of consumer complaints; consumer complaint portal." }
      ]
    }
  },

  {
    id: "scams",
    title: "Check Scams: How Provisional Credit Gets Used Against You",
    minutes: 10,
    summary: "Overpayment, fake-check, mystery-shopper, and 'refund' scams all exploit the gap between funds availability and final payment.",
    dailyLife: "You sell a couch online; the buyer 'accidentally' sends a cashier's check for $2,000 too much and asks you to wire back the difference. A 'new employer' sends a check to buy equipment. A 'sweepstakes' check arrives with instructions to pay taxes.",
    sections: [
      {
        heading: "The mechanism",
        body: `Reg CC forces your bank to make deposited funds <em>available</em> quickly (next day for official checks, two business days for most local checks). But the check hasn't <strong>finally settled</strong> — the paying bank can still return it as counterfeit, forged, or drawn on a closed account, sometimes weeks later. When it does, your bank exercises its right of <strong>charge-back</strong> (§ 4-214) and you owe the money. Anything you wired away is gone; wire transfers are essentially irrevocable once accepted by the beneficiary's bank (§ 4A-211).`
      },
      {
        heading: "Why the law doesn't save you",
        body: `<ul>
<li>You indorsed the check, so you warranted it was genuine (§ 3-416, § 4-207 transfer warranties) — you're liable to your bank even though you were fooled.</li>
<li>The scammer isn't a real drawer, so there's no one solvent to sue under § 3-414.</li>
<li>Your bank had no duty to detect the fraud before giving you provisional credit; availability is a federal deadline, not a guarantee (12 C.F.R. § 229.10 cmt.).</li>
<li>Bank of America, Chase, etc. account agreements repeat this: "you are responsible for deposited items that are returned."</li>
</ul>`
      },
      {
        heading: "Red flags",
        body: `<ul>
<li>Any request to send part of a payment back or forward it to a third party.</li>
<li>Payment larger than the agreed price.</li>
<li>Pressure to act before the check "clears" — or reassurance that "the bank said it cleared."</li>
<li>Checks from a company that doesn't match the person you're dealing with.</li>
<li>Requests to pay by gift card, crypto, or wire.</li>
</ul>`
      },
      {
        heading: "What to do",
        body: `Ask your bank when the item will be <em>finally paid</em>, not when funds are available — and understand even that isn't a guarantee for forged items. Wait at least 2–3 weeks for out-of-area checks before sending anything back. Report scams to the FTC (reportfraud.ftc.gov), the U.S. Postal Inspection Service if mailed, and the FBI's IC3 for online fraud.`
      }
    ],
    keyTakeaways: [
      "'Funds available' is a federal timing rule; 'finally paid' is when the risk ends.",
      "Your bank can charge back a returned deposit at any time (§ 4-214); you bear the loss as indorser/warrantor.",
      "Never send money back or forward from a check you just received.",
      "Wires are irrevocable — Article 4A, not Article 3."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 4-214", note: "Right of charge-back or refund when a deposited item is not finally paid." },
        { cite: "§ 4-215", note: "When an item is finally paid." },
        { cite: "§ 4-207", note: "Transfer warranties in bank collection." },
        { cite: "§ 4A-211", note: "Cancellation of payment orders — generally not after acceptance." }
      ],
      blacks: [
        { term: "Provisional credit", def: "A tentative credit to a depositor's account for a deposited item, subject to reversal if the item is not finally paid." },
        { term: "Final payment", def: "The point at which the payor bank becomes accountable for an item and can no longer return it (generally by its midnight deadline)." },
        { term: "Charge-back", def: "A bank's reversal of a provisional credit when the deposited item is returned unpaid." },
        { term: "Midnight deadline", def: "Midnight on the banking day following the banking day on which a bank receives an item — the deadline for a payor bank to return it." }
      ],
      federal: [
        { cite: "12 C.F.R. § 229.10–.13", name: "Reg CC availability schedules and exceptions", note: "Next-day and two-day availability; exception holds for new accounts, large deposits, repeated overdrafts, and reasonable cause to doubt collectibility." },
        { cite: "12 C.F.R. § 229.30–.31", name: "Reg CC expeditious return", note: "Paying bank return deadlines — but forged items may be returned later under warranty claims." },
        { cite: "18 U.S.C. § 1343", name: "Wire fraud", note: "Federal crime covering most online and phone check scams." },
        { cite: "15 U.S.C. § 1693 (EFTA/Reg E)", name: "Electronic Fund Transfer Act", note: "Protects consumers for unauthorized electronic debits — but NOT for wires the consumer authorized under a scam." }
      ]
    }
  },

  {
    id: "discharge",
    title: "Paying Off, Cancelling, and Being Released",
    minutes: 8,
    summary: "How obligations on checks and notes end — and how not to get sued twice.",
    dailyLife: "Paying off a car loan, settling a debt with a relative, tearing up a note, or a lender agreeing to release a co-signer.",
    sections: [
      {
        heading: "Ways an obligation is discharged (§ 3-601)",
        body: `<ul>
<li><strong>Payment</strong> to a person entitled to enforce (§ 3-602). Paying the wrong person — e.g., the original lender after the note was sold, without notice — <em>does</em> discharge you under the 2002 amendments if you hadn't received notice of transfer (§ 3-602(b), adopted in many states).</li>
<li><strong>Tender of payment</strong> refused (§ 3-603) — stops interest and discharges indorsers.</li>
<li><strong>Cancellation or renunciation</strong> (§ 3-604) — the holder intentionally destroys the note, strikes a signature, or signs a written release.</li>
<li><strong>Accord and satisfaction</strong> (§ 3-311).</li>
<li><strong>Alteration</strong> by the holder (§ 3-407).</li>
<li><strong>Impairment of collateral or extension</strong> that harms a co-signer (§ 3-605 — a co-signer can be discharged if the lender releases collateral or extends time without consent, to the extent of the loss).</li>
</ul>`
      },
      {
        heading: "Discharge vs. HDC",
        body: `A discharge is a <strong>personal defense</strong>: it isn't effective against a later HDC who lacks notice (§ 3-601(b)). That's why you must <em>get the paper back</em> when you pay a note — an outstanding original could reach someone who can enforce it again. For a mortgage, insist on a recorded satisfaction/release of lien.`
      },
      {
        heading: "Releasing a co-signer",
        body: `A lender can release an accommodation party by a signed writing (§ 3-604). Federal student loans and many auto lenders have formal "cosigner release" programs after a set number of on-time payments. Get it in writing; verbal assurances aren't enforceable against an HDC.`
      }
    ],
    keyTakeaways: [
      "Payment to the person entitled to enforce discharges you (§ 3-602) — keep proof and retrieve the original note.",
      "Discharge is a personal defense: worthless against a later HDC without notice (§ 3-601(b)).",
      "Co-signers get discharged if the lender impairs collateral or extends time without consent, to the extent they're harmed (§ 3-605)."
    ],
    crossRefs: {
      ucc: [
        { cite: "§ 3-601", note: "Discharge and its effect." },
        { cite: "§ 3-602", note: "Payment." },
        { cite: "§ 3-603", note: "Tender of payment." },
        { cite: "§ 3-604", note: "Discharge by cancellation or renunciation." },
        { cite: "§ 3-605", note: "Discharge of secondary obligors (indorsers, accommodation parties)." }
      ],
      blacks: [
        { term: "Discharge", def: "The release of a party from an obligation, e.g., by payment, cancellation, or agreement." },
        { term: "Tender", def: "An unconditional offer of payment of the amount due." },
        { term: "Renunciation", def: "A holder's voluntary, written relinquishment of rights against a party to an instrument." },
        { term: "Satisfaction of mortgage", def: "A recorded document acknowledging that the mortgage debt has been paid and the lien released." }
      ],
      federal: [
        { cite: "12 C.F.R. § 1024.35–.36 (Reg X)", name: "RESPA servicing rules", note: "Error resolution and information requests to mortgage servicers, including payoff statements." },
        { cite: "15 U.S.C. § 1681s-2", name: "FCRA furnisher duties", note: "Lenders must report a paid or released obligation accurately to credit bureaus." }
      ]
    }
  }
];
