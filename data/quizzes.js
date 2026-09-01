// Scenario quizzes keyed by lesson id. Each question: scenario, choices, answer index, explanation, cite.
window.UCC_QUIZZES = {
  foundations: [
    {
      q: "Your cousin says 'the UCC is federal law, so the same rule applies everywhere.' What's the most accurate response?",
      choices: [
        "Correct — Congress enacted the UCC in 1952.",
        "The UCC is a model code; each state enacted its own version, though Articles 3 and 4 are nearly uniform.",
        "The UCC only applies to businesses, not individuals.",
        "The UCC was replaced by federal banking regulations."
      ],
      answer: 1,
      explain: "The UCC is drafted by the ULC and ALI and enacted state by state. Federal statutes (Reg CC, Check 21, TILA) layer on top and preempt conflicting state rules.",
      cite: "UCC § 1-103; U.S. Const. art. VI"
    },
    {
      q: "Which article governs your relationship with the bank where you keep your checking account?",
      choices: ["Article 2", "Article 3", "Article 4", "Article 9"],
      answer: 2,
      explain: "Article 4 covers bank deposits and collections — properly payable items, stop payments, wrongful dishonor, and your duty to review statements.",
      cite: "UCC § 4-102"
    }
  ],
  "what-is-negotiable": [
    {
      q: "Your friend texts: 'I owe you $500, will pay soon.' Is this a negotiable instrument?",
      choices: [
        "Yes — it's signed electronically and states an amount.",
        "No — it's an acknowledgement of debt without an unconditional promise to pay at a definite time or on demand, and isn't a signed writing in the Article 3 sense.",
        "Yes, if you print it out.",
        "No, because texts can never create any legal obligation."
      ],
      answer: 1,
      explain: "'I owe you' is not a promise to pay; 'soon' is not a definite time; and E-SIGN excludes Article 3 from electronic-signature coverage. It may still be evidence of a debt under contract law.",
      cite: "UCC § 3-104(a), § 3-103; 15 U.S.C. § 7003(a)(3)"
    },
    {
      q: "A note says: 'I promise to pay Ana Ruiz $2,000 on June 1, 2026, provided the roof passes inspection.' Negotiable?",
      choices: ["Yes", "No — the promise is conditional", "Yes, but only after inspection", "No — it lacks interest"],
      answer: 1,
      explain: "An express condition to payment destroys negotiability. It's still an enforceable contract, but no one can become a holder in due course of it.",
      cite: "UCC § 3-106(a)"
    },
    {
      q: "A check reads 'Pay to Jordan Kim' (no 'order of'). Is it negotiable?",
      choices: [
        "No — it must say 'to the order of'",
        "Yes — checks are exempt from the order/bearer requirement",
        "Only if Jordan indorses it",
        "No — it's a note, not a draft"
      ],
      answer: 1,
      explain: "§ 3-104(c) makes an exception: an order that meets all other requirements and is a check is a negotiable instrument even without words of negotiability.",
      cite: "UCC § 3-104(c)"
    },
    {
      q: "You sign a $15,000 note to a home-improvement contractor who arranges the financing. Which is TRUE?",
      choices: [
        "If the contractor sells the note, you lose all defenses against the buyer.",
        "The note must contain the FTC Holder notice, so any buyer of the note remains subject to your defenses (up to what you've paid).",
        "Notes for home improvements can't be sold.",
        "Only the contractor can ever enforce the note."
      ],
      answer: 1,
      explain: "The FTC Holder Rule requires the notice in seller-arranged consumer credit; § 3-106(d) then prevents any holder from achieving HDC status.",
      cite: "16 C.F.R. § 433.2; UCC § 3-106(d)"
    }
  ],
  "writing-checks": [
    {
      q: "You write a rent check: numerals say '$1,250.00' but the words say 'One thousand two hundred and 00/100.' What may the bank pay?",
      choices: ["$1,250", "$1,200", "Nothing — the check is void", "Whichever the landlord prefers"],
      answer: 1,
      explain: "Words control figures when they conflict.",
      cite: "UCC § 3-114"
    },
    {
      q: "You postdate a check to the 15th and hand it over on the 1st. The payee deposits it on the 2nd and it clears, overdrawing you. Can you make the bank reverse it?",
      choices: [
        "Yes — banks can never pay before the date",
        "Only if you had given the bank notice of the postdating describing the check with reasonable certainty",
        "Yes, automatically, because postdating is a stop-payment order",
        "No, never"
      ],
      answer: 1,
      explain: "A postdated check is payable on demand; the bank may pay it early unless you gave notice under § 4-401(c) (which works like a stop-payment order and may carry a fee).",
      cite: "UCC § 4-401(c)"
    },
    {
      q: "You find an uncashed check you wrote 8 months ago. Which is correct?",
      choices: [
        "It is void and the bank must refuse it",
        "The bank isn't required to pay it, but may do so in good faith and charge your account",
        "It becomes a bearer instrument",
        "The payee can no longer sue you"
      ],
      answer: 1,
      explain: "A check more than 6 months old is stale; the bank has discretion. The payee's claim on the check runs 3 years from dishonor or 10 years from issue, whichever first (§ 3-118(c)).",
      cite: "UCC § 4-404; § 3-118(c)"
    },
    {
      q: "Why is writing a check payable to 'Cash' risky?",
      choices: [
        "Banks won't accept it",
        "It is bearer paper — whoever possesses it can negotiate it, so a thief can cash it",
        "It's taxed differently",
        "It becomes non-negotiable"
      ],
      answer: 1,
      explain: "An instrument payable to 'cash' or not to an identified person is payable to bearer; negotiation requires only delivery.",
      cite: "UCC § 3-109(a)(3), § 3-201(b)"
    }
  ],
  endorsing: [
    {
      q: "You sign the back of your paycheck at home, then lose it on the bus. Someone cashes it. What happened legally?",
      choices: [
        "Your blank indorsement made it bearer paper; the finder became a holder and could negotiate it",
        "Nothing — only you can cash it",
        "The bank must reimburse you automatically",
        "The check was void once lost"
      ],
      answer: 0,
      explain: "A blank indorsement converts order paper to bearer paper. A finder/thief in possession of bearer paper is a 'holder' and a bank paying in good faith is generally protected.",
      cite: "UCC § 3-205(b), § 3-201"
    },
    {
      q: "Which indorsement gives you the most protection when depositing a check?",
      choices: [
        "Signature only",
        "'For deposit only to account #____' plus signature",
        "'Pay to bearer' plus signature",
        "No indorsement — banks don't need one"
      ],
      answer: 1,
      explain: "A restrictive indorsement obligates banks handling the item to apply it consistently with the restriction; a bank that doesn't may be liable for conversion.",
      cite: "UCC § 3-206(c)"
    },
    {
      q: "You indorse a client's check over to your supplier. The check bounces. Who can the supplier pursue?",
      choices: [
        "Only the client (drawer)",
        "Only you",
        "The client as drawer AND you as indorser (if you get timely notice of dishonor)",
        "Nobody — the supplier assumed the risk"
      ],
      answer: 2,
      explain: "Indorsers are secondarily liable upon dishonor and notice; the drawer is liable on dishonor without notice being required for a check.",
      cite: "UCC § 3-414(b), § 3-415(a), § 3-503"
    },
    {
      q: "You mobile-deposit a check without writing 'for mobile deposit only,' then accidentally deposit the paper original at another bank. Who bears the double-deposit loss under Reg CC?",
      choices: [
        "The drawer",
        "The second bank always",
        "Your mobile-deposit bank indemnifies the second bank — unless the check bore the restrictive indorsement, in which case the second bank bears it (and you're liable to whichever bank is out the money)",
        "The Federal Reserve"
      ],
      answer: 2,
      explain: "Reg CC § 229.34(f) creates a remote-deposit-capture indemnity with an exception for restrictively indorsed items. Either way, you're liable for the duplicate deposit under your account agreement and § 4-207 warranties.",
      cite: "12 C.F.R. § 229.34(f); UCC § 4-207"
    }
  ],
  hdc: [
    {
      q: "You buy a used car from a dealer and sign a note the dealer immediately sells to a finance company. The car is a lemon. Can you refuse to pay the finance company?",
      choices: [
        "No — the finance company is an HDC and takes free of your defenses",
        "Yes — the FTC Holder notice in the note preserves your claims and defenses against any holder, up to amounts paid",
        "Only if you sue the dealer first",
        "Yes — finance companies can never be HDCs"
      ],
      answer: 1,
      explain: "Seller-arranged consumer credit must include the Holder notice; § 3-106(d) then bars HDC status. Without the notice (a rule violation), courts still often deny HDC status.",
      cite: "16 C.F.R. § 433.2; UCC § 3-106(d), § 3-305"
    },
    {
      q: "Which is a REAL defense good even against an HDC?",
      choices: [
        "The goods were never delivered",
        "The maker was 16 when she signed",
        "The seller lied about the car's mileage",
        "The maker already paid the original payee"
      ],
      answer: 1,
      explain: "Infancy is a real defense under § 3-305(a)(1). Non-delivery, fraud in the inducement, and prior payment (discharge) are personal defenses cut off by an HDC without notice.",
      cite: "UCC § 3-305(a)(1), § 3-601(b)"
    },
    {
      q: "Grandma, an HDC, gives you a $5,000 note as a birthday gift. Are you subject to the maker's personal defenses?",
      choices: [
        "Yes — you gave no value so you're not an HDC",
        "No — the shelter rule gives you Grandma's HDC rights",
        "Yes — gifts void the instrument",
        "Only if the maker consents"
      ],
      answer: 1,
      explain: "A transferee acquires the transferor's rights, including HDC status, unless the transferee engaged in fraud or illegality affecting the instrument.",
      cite: "UCC § 3-203(b)"
    },
    {
      q: "A stranger pays you for a laptop with a cashier's check. You're a good-faith holder for value. Two weeks later the bank says it's counterfeit and charges back your account. Does HDC status save you?",
      choices: [
        "Yes — HDCs always get paid",
        "No — a counterfeit has no genuine drawer/bank obligation to enforce; HDC status doesn't create one, and you're liable to your bank on charge-back",
        "Yes, the issuing bank must pay",
        "No, but the Fed reimburses you"
      ],
      answer: 1,
      explain: "HDC status protects against defenses of real parties; a forged bank signature means the bank never became liable (§ 3-401, § 3-403). Your bank's charge-back right is § 4-214.",
      cite: "UCC § 3-401, § 3-403, § 4-214"
    }
  ],
  lending: [
    {
      q: "You lend your brother $8,000 and he signs: 'I promise to pay to the order of Sam Lee $8,000 on demand, with 4% interest.' In 2035 you've never demanded payment and he made no payments since 2024. Can you still sue?",
      choices: [
        "Yes — demand notes never expire",
        "No — if no demand is made and no principal or interest is paid for a continuous 10 years, the claim is barred",
        "Yes, for 6 more years",
        "No — family loans aren't enforceable"
      ],
      answer: 1,
      explain: "§ 3-118(b): 6 years after demand, or barred if neither demand nor payment occurs for 10 continuous years. Make a written demand periodically or get payments.",
      cite: "UCC § 3-118(b)"
    },
    {
      q: "You co-sign your niece's car loan as co-maker. She misses payments. The lender comes straight to you without suing her. Is that allowed?",
      choices: [
        "No — they must exhaust remedies against her first",
        "Yes — an accommodation maker is liable in the capacity signed, and the lender needn't pursue the borrower first",
        "Only after 90 days",
        "No — co-signers are only liable for half"
      ],
      answer: 1,
      explain: "§ 3-419(b). Only a 'collection guaranteed' signature (§ 3-419(d)) forces the lender to exhaust remedies first. The FTC cosigner notice warns of exactly this.",
      cite: "UCC § 3-419; 16 C.F.R. § 444.3"
    },
    {
      q: "You pay off a note in full but don't get the original back. Later a stranger presents the note and demands payment. Your best legal position?",
      choices: [
        "You're fully protected — you paid",
        "Discharge by payment is a personal defense; if the stranger is an HDC without notice of your payment, you may have to pay again and pursue the original payee",
        "The stranger must prove you didn't pay",
        "Notes can't be transferred after payment"
      ],
      answer: 1,
      explain: "§ 3-601(b): discharge is ineffective against an HDC without notice. Always retrieve and mark the original 'Paid.'",
      cite: "UCC § 3-601(b), § 3-602, § 3-501(b)(2)"
    },
    {
      q: "A lender wants your note to include a 'confession of judgment' clause for a personal loan. Legal?",
      choices: [
        "Yes — permitted by UCC § 3-104(a)(3)",
        "The UCC permits it in the note, but the FTC Credit Practices Rule bans confessions of judgment in consumer credit by covered lenders",
        "Always illegal everywhere",
        "Only for loans over $50,000"
      ],
      answer: 1,
      explain: "UCC allows the term without destroying negotiability, but federal consumer-credit rules prohibit lenders from using it (and many states ban it too).",
      cite: "UCC § 3-104(a)(3)(ii); 16 C.F.R. § 444.2(a)(1)"
    }
  ],
  "cashiers-money-orders": [
    {
      q: "You bought a $12,000 cashier's check to buy a boat, then the seller vanished with it before delivering. You call the bank to stop payment. Result?",
      choices: [
        "Bank must stop payment within 24 hours",
        "Generally no — a cashier's check is the bank's own obligation; the purchaser has no § 4-403 stop-payment right. Your remedy is a declaration of loss (90-day process) if it's lost/stolen, or a claim against the seller",
        "Bank stops it if you pay a fee",
        "The check is void once you report fraud"
      ],
      answer: 1,
      explain: "§ 4-403 covers items drawn on the customer's account. A bank that wrongfully refuses its own cashier's check owes damages under § 3-411. § 3-312 governs lost/stolen official checks.",
      cite: "UCC § 3-411, § 3-312, § 4-403"
    },
    {
      q: "Your landlord requires a certified check. What does certification do?",
      choices: [
        "Makes the tenant primarily liable",
        "The bank accepts the check, becomes primarily liable, and the drawer is discharged",
        "Nothing legally — it's just a stamp",
        "Converts the check to a note"
      ],
      answer: 1,
      explain: "Certification is acceptance by the drawee bank (§ 3-409(d)). The drawer is discharged (§ 3-414(c)); the bank is liable as acceptor (§ 3-413).",
      cite: "UCC § 3-409(d), § 3-413, § 3-414(c)"
    },
    {
      q: "You want to pay $11,000 in cash for a cashier's check. The teller asks for ID and fills out a form. Why?",
      choices: [
        "Cash purchases of cashier's checks are illegal",
        "Cash transactions over $10,000 trigger a Currency Transaction Report under the Bank Secrecy Act — legal, but reported. Splitting it into two $5,500 purchases to avoid the report is a crime (structuring)",
        "The bank suspects counterfeit bills",
        "IRS requires all cashier's checks be reported"
      ],
      answer: 1,
      explain: "CTR at >$10,000 (31 C.F.R. § 1010.311); structuring is criminal under 31 U.S.C. § 5324. Purchases of $3,000–$10,000 in cash also require the bank to record the purchaser's identity (31 C.F.R. § 1010.415).",
      cite: "31 U.S.C. § 5313, § 5324; 31 C.F.R. § 1010.311, § 1010.415"
    }
  ],
  disputes: [
    {
      q: "You mail a $3,000 check to a roofer who never shows. You call the bank to stop payment. Is the debt gone?",
      choices: [
        "Yes — stopping payment cancels the obligation",
        "No — the stop order only prevents the bank from paying; the roofer (or an HDC who took the check) can still sue on the check or the contract, and you'd raise your defenses",
        "Yes, if the roofer was at fault",
        "No, and the bank will still pay after 14 days"
      ],
      answer: 1,
      explain: "§ 4-403 governs the bank; § 3-414 liability to the holder remains. Written stop orders last 6 months.",
      cite: "UCC § 4-403, § 3-414"
    },
    {
      q: "You dispute a $900 landscaping invoice and mail a $500 check marked conspicuously 'Payment in full for all landscaping services.' The company cashes it. Result?",
      choices: [
        "You still owe $400",
        "The debt is discharged by accord and satisfaction — unless the company refunds the $500 within 90 days or had told you to send disputed payments to a designated office",
        "The company can cross out the notation and keep the $500 as partial payment",
        "The check is void"
      ],
      answer: 1,
      explain: "§ 3-311 requires a good-faith tender, a bona fide dispute, and a conspicuous statement. § 1-308 reservation does not defeat it.",
      cite: "UCC § 3-311"
    },
    {
      q: "Your bank bounces your mortgage payment even though you had $6,000 in the account. You incur a late fee and a credit hit. Can you recover?",
      choices: [
        "No — banks are immune",
        "Yes — wrongful dishonor makes the bank liable for damages proximately caused, potentially including consequential damages",
        "Only the NSF fee",
        "Only if you close the account"
      ],
      answer: 1,
      explain: "§ 4-402(b). Document the loss; consequential damages must be proved.",
      cite: "UCC § 4-402"
    },
    {
      q: "A tenant's rent check bounces. What's the FIRST step that preserves your remedies?",
      choices: [
        "File a police report",
        "Send written notice of dishonor/demand to the drawer (and any indorsers within 30 days), which also starts most state bad-check penalty clocks",
        "Wait 6 months",
        "Deposit it again every day"
      ],
      answer: 1,
      explain: "Notice to indorsers within 30 days preserves § 3-415 claims; a written demand is typically required before statutory bad-check damages accrue.",
      cite: "UCC § 3-503; state bad-check statutes"
    }
  ],
  "forgery-alteration": [
    {
      q: "Checks stolen from your mailbox were washed, made payable to a stranger, and paid by your bank. You notice on your next statement and report within a week. Who bears the loss?",
      choices: [
        "You — you should have used a locked mailbox",
        "Your bank must recredit you: the altered items weren't properly payable, and you reported promptly. (The bank then pursues the depositary bank on presentment warranties.)",
        "The Postal Service",
        "The payee's bank, but you must sue them directly"
      ],
      answer: 1,
      explain: "§ 4-401(a) properly payable; § 4-401(d) limits charge to original tenor; § 4-406 satisfied by prompt report. Unless the bank proves your negligence substantially contributed (§ 3-406).",
      cite: "UCC § 4-401, § 4-406, § 3-407, § 3-406, § 4-208"
    },
    {
      q: "Your bookkeeper forged your signature on 15 checks over 8 months. Your statements showed them all; you never looked. You report after month 8. What can you recover?",
      choices: [
        "All 15 checks",
        "Likely only the checks in roughly the first 30 days after the first bad statement became available; later same-wrongdoer forgeries are your loss (unless you prove bank negligence, then comparative allocation)",
        "None — forgery is always the customer's risk",
        "Only checks over $1,000"
      ],
      answer: 1,
      explain: "§ 4-406(d)(2) same-wrongdoer rule with a 30-day reasonable period; § 4-406(e) comparative negligence if the bank failed to use ordinary care.",
      cite: "UCC § 4-406(d)–(e)"
    },
    {
      q: "Your employee, who handles payables, creates a fake vendor and has you sign checks to it, then indorses and deposits them. Whose loss?",
      choices: [
        "The bank's — the indorsement was forged",
        "Yours (the employer's) — § 3-405 makes a fraudulent indorsement by an employee with responsibility for instruments effective, unless the bank failed to exercise ordinary care",
        "The fake vendor's",
        "Split 50/50 automatically"
      ],
      answer: 1,
      explain: "The employer is in the best position to prevent employee check fraud. § 3-404 similarly covers impostors and fictitious payees.",
      cite: "UCC § 3-405, § 3-404"
    },
    {
      q: "A check payable to you was stolen from your desk, forged, and cashed at Bank X. Your remedy?",
      choices: [
        "Sue the drawer for a new check",
        "Sue Bank X (or the depositary bank) for conversion — you had possession, so you have standing under § 3-420",
        "You have no remedy",
        "Ask your own bank to recredit you"
      ],
      answer: 1,
      explain: "A payee who received delivery may sue the bank that paid on a forged indorsement for conversion. A payee who never received the check must instead pursue the drawer on the underlying obligation.",
      cite: "UCC § 3-420"
    }
  ],
  scams: [
    {
      q: "You sell a bike online for $400. Buyer sends a $2,400 cashier's check, says 'oops,' and asks you to Zelle back $2,000 once 'the funds show as available.' They do show available the next day. Safe?",
      choices: [
        "Yes — available funds means it cleared",
        "No — availability is a Reg CC deadline, not final payment; the counterfeit will be returned and your bank will charge back the full $2,400",
        "Yes, if it's a cashier's check",
        "Only if the buyer is in your state"
      ],
      answer: 1,
      explain: "Classic overpayment scam. § 4-214 charge-back; § 4-207 warranties; wire/Zelle payments are irrevocable once accepted.",
      cite: "UCC § 4-214, § 4-207; 12 C.F.R. § 229.10"
    },
    {
      q: "Your bank teller says the deposited check 'has cleared.' Legally, what protects you?",
      choices: [
        "A teller's statement makes the bank liable if it later reverses",
        "Very little — banks rarely know final payment status; only 'finally paid' by the payor bank (§ 4-215) ends return risk, and forged/counterfeit items can be reclaimed even later via warranty claims",
        "Reg CC guarantees the funds after 2 days",
        "The FDIC insures the deposit"
      ],
      answer: 1,
      explain: "Some courts have found estoppel where a bank affirmatively misrepresented 'cleared,' but don't count on it. Ask for the final payment status in writing and wait.",
      cite: "UCC § 4-215, § 4-214"
    }
  ],
  discharge: [
    {
      q: "Your mortgage was sold but you never got notice. You keep paying the old servicer for 3 months. The new owner demands those payments. Who wins?",
      choices: [
        "New owner — you must track who holds your note",
        "You — payment to the former holder discharges you if you hadn't received adequate notice of the transfer (under the 2002 § 3-602(b) amendment, adopted in many states) and federal law requires notice within 30 days",
        "New owner, but you can sue the old servicer",
        "Neither — the loan is void"
      ],
      answer: 1,
      explain: "§ 3-602(b) (states that adopted it) plus TILA § 1641(g) and RESPA servicing-transfer notices. Check your state's version.",
      cite: "UCC § 3-602(b); 15 U.S.C. § 1641(g); 12 U.S.C. § 2605"
    },
    {
      q: "The lender released the car securing a loan you co-signed without asking you; the borrower then defaulted. Your position?",
      choices: [
        "Still fully liable",
        "Discharged to the extent the impairment of collateral caused you loss",
        "Fully discharged automatically",
        "Liable only for interest"
      ],
      answer: 1,
      explain: "§ 3-605 discharges secondary obligors when the holder impairs collateral, to the extent of the impairment — unless you consented or waived (many notes contain waivers).",
      cite: "UCC § 3-605"
    }
  ]
};

// Flashcards (term → definition, with cite). Combined from lessons for spaced practice.
window.UCC_FLASHCARDS = [
  { front: "Holder in due course", back: "Holder who takes for value, in good faith, without notice of defects — takes free of personal defenses.", cite: "§ 3-302" },
  { front: "Blank indorsement", back: "Signature alone; converts order paper to bearer paper.", cite: "§ 3-205(b)" },
  { front: "Restrictive indorsement", back: "'For deposit only' — banks must apply consistently with the restriction.", cite: "§ 3-206" },
  { front: "Words vs. figures", back: "Words control when the written and numeric amounts conflict.", cite: "§ 3-114" },
  { front: "Stale check", back: "More than 6 months old; bank may but need not pay.", cite: "§ 4-404" },
  { front: "Stop-payment order", back: "Oral: 14 days. Written: 6 months, renewable. Does not cancel the underlying debt.", cite: "§ 4-403" },
  { front: "Properly payable", back: "Authorized by the customer and in accordance with the account agreement.", cite: "§ 4-401" },
  { front: "Customer's duty to examine statements", back: "Report promptly; 30-day same-wrongdoer rule; 1-year absolute bar.", cite: "§ 4-406" },
  { front: "Accommodation party", back: "Signs to lend credit to another; liable in the capacity signed; has recourse against the accommodated party.", cite: "§ 3-419" },
  { front: "Real defenses", back: "Infancy, duress/incapacity/illegality (void), fraud in the factum, bankruptcy discharge — good against an HDC.", cite: "§ 3-305(a)(1)" },
  { front: "Shelter rule", back: "Transferee gets transferor's rights, including HDC status.", cite: "§ 3-203(b)" },
  { front: "Accord and satisfaction by check", back: "Conspicuous 'payment in full' on a disputed debt, cashed = discharge (90-day refund exception).", cite: "§ 3-311" },
  { front: "Alteration", back: "Fraudulent material change discharges obligor; payor bank/HDC may enforce per original terms.", cite: "§ 3-407" },
  { front: "Impostor / fictitious payee rule", back: "Forged indorsement is effective when the drawer was duped by an impostor or named a fictitious payee.", cite: "§ 3-404" },
  { front: "Employee fraud rule", back: "Employer bears the loss for fraudulent indorsements by employees entrusted with instruments.", cite: "§ 3-405" },
  { front: "Charge-back", back: "Bank may reverse provisional credit if the deposited item is not finally paid.", cite: "§ 4-214" },
  { front: "Cashier's check", back: "Bank is drawer and drawee — bank's own primary obligation; purchaser can't stop payment.", cite: "§ 3-104(g), § 3-411" },
  { front: "Declaration of loss", back: "Claim for lost cashier's/teller's/certified check; enforceable 90 days after the later of the check date or declaration.", cite: "§ 3-312" },
  { front: "Statute of limitations — note", back: "6 years after due date; demand note: 6 years after demand, or 10 years of inactivity.", cite: "§ 3-118" },
  { front: "Statute of limitations — unaccepted draft/check", back: "3 years after dishonor or 10 years after issue, whichever is earlier.", cite: "§ 3-118(c)" },
  { front: "Transfer warranties", back: "Entitled to enforce; signatures authentic; no alteration; no defenses; no knowledge of insolvency.", cite: "§ 3-416" },
  { front: "Presentment warranties", back: "Presenter is entitled to enforce; no alteration; no knowledge the drawer's signature is unauthorized.", cite: "§ 3-417" },
  { front: "Wrongful dishonor", back: "Bank liable for damages proximately caused by dishonoring a properly payable item.", cite: "§ 4-402" },
  { front: "FTC Holder Rule", back: "Consumer credit contracts must preserve the consumer's claims and defenses against any holder.", cite: "16 C.F.R. § 433.2" },
  { front: "Legal tender", back: "U.S. coins and currency are legal tender for debts; no law forces businesses to accept cash for sales.", cite: "31 U.S.C. § 5103" },
  { front: "Check 21 substitute check", back: "A paper reproduction of an imaged check that is the legal equivalent of the original.", cite: "12 U.S.C. § 5003" },
  { front: "Reg CC next-day availability", back: "Cashier's, certified, Treasury checks and postal money orders deposited in person: next business day.", cite: "12 C.F.R. § 229.10" },
  { front: "Fraud in the factum", back: "Signer deceived about the very nature of the document — a real defense.", cite: "§ 3-305(a)(1)(iii)" }
];
