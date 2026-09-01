// Section 2: What you were taught vs. how money actually works.
// Sources are mainstream: Federal Reserve, Bank of England, U.S. Code, Treasury, FDIC.

window.MONEY_CONTRASTS = [
  {
    id: "what-money-is",
    taught: "Money is the paper bills and coins in your wallet. Banks store it in a vault for you.",
    reality: `Physical currency is a small slice of the money supply. As of 2025, currency in circulation is roughly $2.3 trillion, while M2 (currency + checking + savings + small time deposits + retail money funds) is about $21–22 trillion. <strong>Most money is bank deposits</strong> — numbers on a bank's ledger that are the bank's <em>liability</em> (a debt the bank owes you), not cash sitting in a vault with your name on it.`,
    whyItMatters: "When you 'have $5,000 in the bank,' you are legally an unsecured creditor of the bank (up to the FDIC insurance limit, where the government steps in). A check is your written order telling that debtor to pay part of what it owes you to someone else.",
    sources: [
      { name: "Federal Reserve H.6 Money Stock Measures", url: "https://www.federalreserve.gov/releases/h6/current/default.htm" },
      { name: "Fed FAQ: How much U.S. currency is in circulation?", url: "https://www.federalreserve.gov/faqs/currency_12773.htm" },
      { name: "FDIC: Deposit insurance basics", url: "https://www.fdic.gov/resources/deposit-insurance/" }
    ],
    law: [
      { cite: "12 U.S.C. § 1821(a)", note: "Standard maximum deposit insurance amount: $250,000 per depositor, per insured bank, per ownership category." }
    ]
  },
  {
    id: "banks-lend-deposits",
    taught: "Banks take in deposits from savers and lend that same money out to borrowers.",
    reality: `In the modern system, commercial banks <strong>create deposits when they lend</strong>. When a bank approves a $20,000 car loan, it credits $20,000 to the borrower's account — new deposit money that did not exist before — and books the loan (the borrower's promissory note) as an asset. The Bank of England's 2014 paper "Money creation in the modern economy" and Fed educational materials describe this. Lending is constrained by capital requirements, liquidity rules, profitability, and demand for loans — not by a pile of pre-existing deposits. Since March 2020 the Federal Reserve has set reserve requirements at 0%.`,
    whyItMatters: "Your signed promissory note is what a bank turns into money on its balance sheet. That is why banks care so much about the note being a valid, negotiable instrument — they can hold it, sell it, or pledge it. It is also why the UCC's rules about who can enforce a note matter to everyday borrowers.",
    sources: [
      { name: "Bank of England, 'Money creation in the modern economy' (Q1 2014 Quarterly Bulletin)", url: "https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy" },
      { name: "Federal Reserve: Reserve Requirements (0% since March 26, 2020)", url: "https://www.federalreserve.gov/monetarypolicy/reservereq.htm" },
      { name: "St. Louis Fed: 'Teaching the Linkage Between Banks and the Fed'", url: "https://www.stlouisfed.org/education" }
    ],
    law: [
      { cite: "12 U.S.C. § 461", note: "Reserve requirements — statutory authority the Fed used to set the ratio to zero." },
      { cite: "12 U.S.C. § 1831o / 12 C.F.R. pt. 217", note: "Capital adequacy rules that actually constrain bank lending." }
    ]
  },
  {
    id: "checks-are-money",
    taught: "A check is money — a 'paper version' of the cash in your account.",
    reality: `A check is <strong>not money</strong>. It is a negotiable <em>order</em> (a draft) directing your bank to pay from your deposit. UCC § 3-310 says that taking a check only <em>suspends</em> the underlying debt until the check is paid or dishonored. Nobody is required to accept a check; a merchant can insist on cash or card. The UCC explicitly excludes "money" from the definition of instrument (§ 3-102(a)).`,
    whyItMatters: "Because a check is an order, not payment, the rules about dishonor, stop payment, holder in due course and forgery exist. If a check were money, none of Article 3 would be necessary.",
    sources: [
      { name: "Cornell LII: UCC § 3-310 Effect of Instrument on Obligation", url: "https://www.law.cornell.edu/ucc/3/3-310" },
      { name: "Cornell LII: UCC § 1-201(b)(24) 'Money' definition", url: "https://www.law.cornell.edu/ucc/1/1-201" }
    ],
    law: [
      { cite: "UCC § 1-201(b)(24)", note: "'Money' means a medium of exchange currently authorized or adopted by a domestic or foreign government." },
      { cite: "UCC § 3-102(a)", note: "Article 3 does not apply to money." }
    ]
  },
  {
    id: "legal-tender",
    taught: "Everyone must accept cash — 'legal tender for all debts, public and private' — and dollars are backed by gold.",
    reality: `31 U.S.C. § 5103 makes U.S. coins and currency (including Federal Reserve notes) legal tender for <em>debts</em>. But no federal law forces a private business to accept cash for a <em>sale</em> that hasn't yet become a debt — a store can refuse $100 bills or go cashless (a few states and cities require cash acceptance). Legal-tender status mainly means a creditor who refuses a valid cash tender can't later claim default or collect further interest. The dollar has had no gold backing since 1971 (Nixon ended convertibility) and no domestic gold redeemability since 1933–34. Federal Reserve notes are liabilities of the Federal Reserve, backed by the Fed's assets (mostly Treasury and agency securities) and by law are "obligations of the United States."`,
    whyItMatters: "Understanding that money is fiat and credit-based — not a warehouse receipt for gold — is the key to understanding why negotiable instruments, deposits, and central-bank notes are all forms of transferable IOUs with different issuers and different legal protections.",
    sources: [
      { name: "Federal Reserve FAQ: Is it legal for a business to refuse cash?", url: "https://www.federalreserve.gov/faqs/currency_12772.htm" },
      { name: "U.S. Treasury: Legal Tender Status", url: "https://home.treasury.gov/policy-issues/coins-and-currency" },
      { name: "Federal Reserve: 'How is the Federal Reserve note backed?'", url: "https://www.federalreserve.gov/faqs/currency_12770.htm" }
    ],
    law: [
      { cite: "31 U.S.C. § 5103", note: "Legal tender: U.S. coins and currency (including Federal Reserve notes) are legal tender for all debts, public charges, taxes, and dues." },
      { cite: "12 U.S.C. § 411", note: "Federal Reserve notes are obligations of the United States, redeemable in lawful money (i.e., other Federal Reserve notes or coin) at the Treasury or any Federal Reserve Bank." },
      { cite: "31 U.S.C. § 5118", note: "Gold clauses in obligations are unenforceable unless issued after Oct. 27, 1977 — the end of gold-based payment obligations." }
    ]
  },
  {
    id: "who-creates-money",
    taught: "The government prints all the money.",
    reality: `Three layers create money: (1) the <strong>U.S. Mint</strong> strikes coins and the <strong>Bureau of Engraving and Printing</strong> prints notes — but notes only enter circulation when a Federal Reserve Bank issues them against collateral; (2) the <strong>Federal Reserve</strong> creates reserves (bank deposits at the Fed) when it buys securities or lends to banks; (3) <strong>commercial banks</strong> create the vast majority of the money the public uses when they make loans. Congress has delegated this structure through the Federal Reserve Act and banking laws. Private individuals cannot create legal tender; producing a document that purports to be currency or a "bond" drawn on the Treasury is a crime.`,
    whyItMatters: "This is where a lot of internet misinformation lives. The law lets you create a negotiable instrument (a promise or order to pay) — but that instrument is only worth what its obligor can and will pay. It never becomes money, and no creditor is obligated to accept it.",
    sources: [
      { name: "Federal Reserve: 'Who owns the Federal Reserve?' / structure", url: "https://www.federalreserve.gov/faqs/about_14986.htm" },
      { name: "Bureau of Engraving and Printing: How money is made", url: "https://www.bep.gov/" },
      { name: "Fed Education: 'The Fed Explained' (11th ed.)", url: "https://www.federalreserve.gov/aboutthefed/the-fed-explained.htm" }
    ],
    law: [
      { cite: "U.S. Const. art. I, § 8, cl. 5", note: "Congress has power to coin money and regulate its value." },
      { cite: "12 U.S.C. § 412", note: "Collateral Federal Reserve Banks must pledge for notes issued." },
      { cite: "18 U.S.C. §§ 471–474, 514", note: "Counterfeiting currency and 'fictitious obligations' purporting to be issued under U.S. authority are federal crimes." }
    ]
  },
  {
    id: "credit-is-debt",
    taught: "Debt is bad; you should avoid credit and just save.",
    reality: `In a credit-money system, nearly every dollar is simultaneously someone's asset and someone else's liability. Your checking balance is the bank's debt to you; the bank's reserves are the Fed's debt to the bank; Federal Reserve notes are the Fed's liability; Treasury securities are the government's debt. Personal debt can be harmful when it is high-cost and unproductive (payday loans, revolving card balances), but the instruments themselves — notes, drafts, deposits — are the plumbing that lets value move. Financial literacy means knowing the <em>terms</em> (APR, HDC risk, co-signer liability, statute of limitations), not avoiding paper.`,
    whyItMatters: "The UCC exists so that these IOUs are reliable and transferable. Learning it lets you read your own loan documents, protect yourself when paid by check, and spot when someone is misusing 'commercial law' language to sell you a fantasy.",
    sources: [
      { name: "CFPB: Understanding loan options", url: "https://www.consumerfinance.gov/consumer-tools/" },
      { name: "Federal Reserve Bank of Chicago, 'Modern Money Mechanics' (historical, 1961–1994)", url: "https://fraser.stlouisfed.org/title/modern-money-mechanics-6194" }
    ],
    law: [
      { cite: "15 U.S.C. § 1601 et seq.", note: "Truth in Lending — the disclosure regime that makes credit terms comparable." }
    ]
  },
  {
    id: "signature-value",
    taught: "(Rarely taught at all) Your signature on a loan document is just paperwork.",
    reality: `Your signature on a promissory note creates a <strong>negotiable, sellable asset</strong> for the lender (UCC § 3-412: the maker is unconditionally obligated to pay). Mortgages are pooled into securities; auto and student loans are securitized; credit-card receivables are sold. The lender's ability to resell your promise is priced into your interest rate. Conversely, when you <em>receive</em> a check, you hold a claim against the drawer's bank deposit that you can, in turn, transfer.`,
    whyItMatters: "Read what you sign. Ask whether the note is negotiable, whether it contains the FTC Holder notice, who will service it, and what happens if it's sold. These are the real, lawful ways the UCC affects your wallet.",
    sources: [
      { name: "SEC: Asset-backed securities overview", url: "https://www.sec.gov/securities-topics/asset-backed-securities" },
      { name: "Cornell LII: UCC § 3-412", url: "https://www.law.cornell.edu/ucc/3/3-412" }
    ],
    law: [
      { cite: "UCC § 3-412", note: "Obligation of the issuer of a note." },
      { cite: "UCC § 9-109(a)(3)", note: "Article 9 applies to sales of promissory notes." }
    ]
  }
];

// Myth vs. fact: claims commonly circulated online that misuse UCC / commercial-law language.
window.MONEY_MYTHS = [
  {
    myth: "You can pay a bill by writing 'Accepted for Value' on it and returning it, or by drafting your own 'bill of exchange' on the Treasury.",
    fact: "There is no Treasury account in your name to draw on. Documents purporting to be drawn on the United States are 'fictitious obligations' under 18 U.S.C. § 514, and courts uniformly reject A4V arguments (e.g., <em>United States v. Anderson</em>, 353 F.3d 490 (6th Cir. 2003)). A creditor is never obligated to accept your privately issued paper as payment; UCC § 3-310 only suspends a debt when an instrument is actually taken by the creditor — and even then, only until it is dishonored.",
    cites: ["18 U.S.C. § 514", "UCC § 3-310", "UCC § 3-104"]
  },
  {
    myth: "Writing 'without prejudice, UCC 1-308' next to your signature lets you sign a contract without being bound.",
    fact: "UCC § 1-308 (formerly § 1-207) preserves rights when a party <em>performs</em> under a contract while disputing it — e.g., accepting a partial payment while reserving a claim for the balance. It does not let you disclaim the obligations you're signing, and it does not apply to non-UCC matters like traffic tickets or tax. Courts have repeatedly called this use frivolous.",
    cites: ["UCC § 1-308", "UCC § 3-311(a) cmt. (§ 1-308 does not override accord and satisfaction)"]
  },
  {
    myth: "Your birth certificate is a bond, and there is a secret 'strawman' account worth millions you can access.",
    fact: "No such account exists. Birth certificates are vital records issued by state health departments (not securities); the 'strawman'/'redemption' theory has been rejected in every court that addressed it and has led to federal fraud convictions. The FBI and Treasury both publish warnings about it.",
    cites: ["FBI Public Warning on 'Redemption'/'Strawman' schemes", "Treasury OIG advisory on fictitious 'Treasury Direct' accounts"]
  },
  {
    myth: "Because Federal Reserve notes aren't 'lawful money,' debts denominated in dollars are void, or you can demand payment in gold.",
    fact: "Federal Reserve notes are legal tender under 31 U.S.C. § 5103 and 'obligations of the United States' under 12 U.S.C. § 411. Gold clauses in obligations issued before 1977 are unenforceable (31 U.S.C. § 5118(d)). The Supreme Court upheld paper money as legal tender in the <em>Legal Tender Cases</em> (<em>Juilliard v. Greenman</em>, 110 U.S. 421 (1884)).",
    cites: ["31 U.S.C. § 5103", "12 U.S.C. § 411", "31 U.S.C. § 5118"]
  },
  {
    myth: "If a bank 'created the money' for your loan out of nothing, you don't have to repay it.",
    fact: "Courts reject this 'vapor money' theory. That banks create deposits when lending is accurate economics, but it has no bearing on the enforceability of your note — the bank gave you value (a deposit you spent) and you promised to repay. See, e.g., <em>Demmler v. Bank One</em>, 2006 WL 640499 (S.D. Ohio 2006), and dozens of similar rulings.",
    cites: ["UCC § 3-303 (value)", "UCC § 3-412 (obligation of maker)"]
  },
  {
    myth: "A 'notice of dishonor' or 'default judgment' you mail to a company becomes binding if they don't answer in 30 days.",
    fact: "Silence is not acceptance in contract law, and only a court can enter judgment. Notice of dishonor under UCC § 3-503 is something the <em>holder</em> of a dishonored instrument sends to indorsers — it doesn't create an obligation in the recipient. Self-issued 'judgments' are void and have been prosecuted as mail fraud or filing false liens.",
    cites: ["UCC § 3-503", "18 U.S.C. § 1341 (mail fraud)"]
  }
];

// Legitimate, lawful ways individuals use negotiable instruments — summary cards for the money section.
window.MONEY_LAWFUL_USES = [
  { title: "Pay by check when you want a paper trail and the option to stop payment", cite: "§ 4-403" },
  { title: "Use a cashier's check for large purchases where the seller needs certainty", cite: "§ 3-411, § 3-412" },
  { title: "Document a family loan with a negotiable promissory note", cite: "§ 3-104, § 3-118" },
  { title: "Restrictively indorse checks to prevent theft", cite: "§ 3-206" },
  { title: "Send a conspicuous 'payment in full' check to settle a genuinely disputed bill", cite: "§ 3-311" },
  { title: "Sell or assign a note you hold (e.g., seller-financed sale) to a buyer of notes", cite: "§ 3-203, § 9-109" },
  { title: "Insist on the FTC Holder notice in seller-arranged financing to keep your defenses", cite: "16 C.F.R. § 433.2" },
  { title: "Review bank statements within 30 days to keep forgery-loss protection", cite: "§ 4-406" }
];
