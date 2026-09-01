// Part 3: Debt — what it is legally, public vs. private debt, and what the "government is
// responsible for all debt" claim actually rests on. Primary sources linked.

window.DEBT_SECTIONS = [
  {
    id: "what-debt-is",
    title: "What 'debt' means in law",
    body: `<p>A <strong>debt</strong> is a legal obligation of one person (the <em>debtor</em>/obligor) to pay a sum of money to another (the <em>creditor</em>/obligee). It arises from contract (a loan, a lease, a credit card agreement), from a negotiable instrument (a note or check you signed), from a judgment, or by statute (taxes, child support).</p>
<p>Two features define it:</p>
<ul>
<li><strong>It is personal to the parties.</strong> Only the person who incurred it — or someone who lawfully assumed or guaranteed it — owes it. UCC § 3-401: "A person is not liable on an instrument unless the person signed the instrument" (or an agent did).</li>
<li><strong>It is an asset to the creditor.</strong> Your debt is the lender's receivable. It can be sold, pledged, or securitized (UCC Article 9 covers sales of promissory notes and accounts, § 9-109(a)(3)). A debt buyer steps into the original creditor's shoes (§ 3-203, § 9-404) — subject to your defenses unless it becomes a holder in due course.</li>
</ul>
<p>Black's Law Dictionary (11th ed., paraphrased) defines <em>debt</em> as a liability on a claim, a specific sum of money due by agreement or otherwise, and <em>obligation</em> as a legal or moral duty to do or not do something — including the legal duty to pay money.</p>`,
    cites: [
      { cite: "UCC § 3-401", url: "https://www.law.cornell.edu/ucc/3/3-401", note: "Signature required for liability on an instrument." },
      { cite: "UCC § 9-109(a)(3)", url: "https://www.law.cornell.edu/ucc/9/9-109", note: "Article 9 applies to sales of accounts, chattel paper, payment intangibles, and promissory notes." },
      { cite: "11 U.S.C. § 101(12)", url: "https://www.law.cornell.edu/uscode/text/11/101", note: "Bankruptcy Code: 'debt' means liability on a claim." },
      { cite: "15 U.S.C. § 1692a(5)", url: "https://www.law.cornell.edu/uscode/text/15/1692a", note: "FDCPA: 'debt' means a consumer's obligation to pay money arising from a transaction primarily for personal, family, or household purposes." }
    ]
  },
  {
    id: "public-debt",
    title: "The debt the government IS responsible for: the public debt",
    body: `<p>The United States is responsible for <strong>its own</strong> obligations — Treasury bills, notes and bonds, savings bonds, and other liabilities Congress authorizes. This is the <em>public debt</em>, currently over $36 trillion.</p>
<ul>
<li><strong>Fourteenth Amendment, § 4:</strong> "The validity of the public debt of the United States, authorized by law … shall not be questioned." This protects <em>federal</em> obligations. It says nothing about private debts.</li>
<li><strong>31 U.S.C. § 3101</strong> sets the statutory debt limit; <strong>31 U.S.C. § 3102–3105</strong> authorize Treasury to issue bonds, notes and bills.</li>
<li><strong>Federal Reserve notes</strong> (paper currency) are "obligations of the United States" under <strong>12 U.S.C. § 411</strong>. That means the government stands behind the <em>currency</em> — the $20 bill in your pocket is a liability of the Fed backed by federal law. It does not make the government the obligor on the loan you used the $20 bills to pay.</li>
</ul>
<p><strong>Key distinction:</strong> "The government is responsible for the public debt and for its currency" ≠ "the government is responsible for every debt." The first is law; the second appears nowhere in the U.S. Code.</p>`,
    cites: [
      { cite: "U.S. Const. amend. XIV, § 4", url: "https://constitution.congress.gov/constitution/amendment-14/", note: "Validity of the public debt shall not be questioned." },
      { cite: "31 U.S.C. § 3101", url: "https://www.law.cornell.edu/uscode/text/31/3101", note: "Public debt limit." },
      { cite: "31 U.S.C. § 3102", url: "https://www.law.cornell.edu/uscode/text/31/3102", note: "Authority to issue Treasury bonds." },
      { cite: "12 U.S.C. § 411", url: "https://www.law.cornell.edu/uscode/text/12/411", note: "Federal Reserve notes are obligations of the United States, receivable for all taxes, customs, and public dues; redeemable in lawful money on demand." },
      { cite: "TreasuryDirect — Debt to the Penny", url: "https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny", note: "Official daily public-debt figure." }
    ]
  },
  {
    id: "hjr-192",
    title: "HJR-192 (1933) and 31 U.S.C. § 5118: what it actually did",
    body: `<p>The claim that "in 1933 the government took responsibility for all debts" points to <strong>House Joint Resolution 192</strong>, enacted June 5, 1933 (48 Stat. 112), now codified at <strong>31 U.S.C. § 5118(d)</strong>.</p>
<p><strong>The context:</strong> Many contracts had "gold clauses" requiring payment in gold coin or its equivalent. When the U.S. left the domestic gold standard in 1933 and the dollar was devalued, honoring those clauses would have increased every such debt by ~69%.</p>
<p><strong>What HJR-192 said</strong> (paraphrased from the enacted text):</p>
<ol>
<li>Gold clauses are "against public policy" and no such provision may be contained in any future obligation.</li>
<li>Every obligation, whether or not it contains a gold clause, "shall be <em>discharged upon payment, dollar for dollar</em>, in any coin or currency which at the time of payment is legal tender for public and private debts."</li>
</ol>
<p><strong>Plain meaning:</strong> Debtors may pay their debts in ordinary legal-tender dollars, and creditors must accept them <em>dollar for dollar</em>. The debtor still has to <em>pay</em>. Nothing in the resolution transfers any private obligation to the United States, creates accounts for citizens, or authorizes anyone to draw on the Treasury.</p>
<p>The Supreme Court upheld the resolution in the <em>Gold Clause Cases</em> — <em>Norman v. Baltimore &amp; Ohio R.R.</em>, 294 U.S. 240 (1935) (private contracts) and <em>Perry v. United States</em>, 294 U.S. 330 (1935) (government bonds). Both cases concern <em>what medium</em> a debt is paid in, not <em>who</em> pays it.</p>
<p>In 1977 Congress amended the law to allow gold clauses again in obligations issued after October 27, 1977 (Pub. L. 95-147). Today's § 5118(d)(2) still reads that an obligation containing a gold clause "is discharged on payment (dollar for dollar) in United States coin or currency that is legal tender at the time of payment" — i.e., the debtor discharges it <em>by paying</em>.</p>`,
    cites: [
      { cite: "H.J. Res. 192, 73d Cong., 48 Stat. 112 (June 5, 1933)", url: "https://www.govinfo.gov/content/pkg/STATUTE-48/pdf/STATUTE-48-Pg112.pdf", note: "Original enacted text (Statutes at Large)." },
      { cite: "31 U.S.C. § 5118", url: "https://www.law.cornell.edu/uscode/text/31/5118", note: "Current codification: gold clauses; legal tender discharge." },
      { cite: "Norman v. Baltimore & Ohio R.R., 294 U.S. 240 (1935)", url: "https://supreme.justia.com/cases/federal/us/294/240/", note: "Gold clauses in private contracts unenforceable." },
      { cite: "Perry v. United States, 294 U.S. 330 (1935)", url: "https://supreme.justia.com/cases/federal/us/294/330/", note: "Government bonds; no damages because plaintiff showed no loss in purchasing power." },
      { cite: "Pub. L. 95-147, § 4(c) (1977)", url: "https://www.govinfo.gov/content/pkg/STATUTE-91/pdf/STATUTE-91-Pg1227.pdf", note: "Re-permitted gold clauses in new obligations." }
    ]
  },
  {
    id: "legal-tender-and-discharge",
    title: "How a debt is actually discharged",
    body: `<p>"Discharge" is the legal term for the end of an obligation. Under the UCC and general law, a debt is discharged by:</p>
<ul>
<li><strong>Payment</strong> in money to the person entitled to enforce (UCC § 3-602). Legal tender (31 U.S.C. § 5103) must be accepted <em>for debts</em>; a creditor who refuses a valid tender can't collect further interest or claim default for non-payment (UCC § 3-603).</li>
<li><strong>Accord and satisfaction</strong> — a negotiated substitute performance (UCC § 3-311; common law).</li>
<li><strong>Cancellation or release</strong> by the creditor in a signed writing (UCC § 3-604).</li>
<li><strong>Bankruptcy discharge</strong> — a federal court order under 11 U.S.C. § 524 that permanently enjoins collection of most pre-petition debts. This is the only mechanism by which law extinguishes private debt without payment — and it is granted only by a court, after filing, disclosure, and (in Chapter 13) years of plan payments.</li>
<li><strong>Statute of limitations</strong> — time-barred debts remain owed but become unenforceable in court (UCC § 3-118; state statutes). Collectors may still ask; they may not sue or threaten to (15 U.S.C. § 1692e).</li>
<li><strong>Setoff / recoupment</strong> when the parties owe each other.</li>
</ul>
<p>Not on the list: mailing the creditor a "bill of exchange," "bonded promissory note," or "discharge instrument" drawn on the Treasury or on yourself. Those are not payment because the creditor has not received money, and they cannot be negotiable instruments drawn on a drawee (the Treasury) that has no account for you and never agreed to pay.</p>`,
    cites: [
      { cite: "UCC § 3-601 – 3-605", url: "https://www.law.cornell.edu/ucc/3/part_6", note: "Discharge and payment." },
      { cite: "31 U.S.C. § 5103", url: "https://www.law.cornell.edu/uscode/text/31/5103", note: "Legal tender." },
      { cite: "11 U.S.C. § 524", url: "https://www.law.cornell.edu/uscode/text/11/524", note: "Effect of bankruptcy discharge." },
      { cite: "11 U.S.C. § 727; § 1328", url: "https://www.law.cornell.edu/uscode/text/11/727", note: "Chapter 7 and Chapter 13 discharge." },
      { cite: "15 U.S.C. § 1692e", url: "https://www.law.cornell.edu/uscode/text/15/1692e", note: "FDCPA: false or misleading representations, including suing on time-barred debt." }
    ]
  },
  {
    id: "courts",
    title: "How courts have treated the 'government pays all debts' theory",
    body: `<p>Federal and state courts have addressed variations of this argument — "HJR-192 discharged all debt," "the Treasury holds a secret account for me," "I can issue a bill of exchange on the United States," "my signature creates the credit so the bank owes me" — many hundreds of times. The result is uniform:</p>
<ul>
<li><em>United States v. Anderson</em>, 353 F.3d 490 (6th Cir. 2003) — affirming convictions for presenting fictitious "sight drafts" on the Treasury to pay debts; 18 U.S.C. § 514.</li>
<li><em>Bryant v. Washington Mutual Bank</em>, 524 F. Supp. 2d 753 (W.D. Va. 2007) — dismissing "vapor money"/"redemption" claims as "utterly frivolous" and explaining the history of the theory.</li>
<li><em>McLaughlin v. CitiMortgage</em>, 726 F. Supp. 2d 201 (D. Conn. 2010) — rejecting the argument that a "bonded promissory note" discharged a mortgage.</li>
<li><em>United States v. Getzschman</em>, 81 F. App'x 619 (8th Cir. 2003) — "bills of exchange" drawn on the Treasury are fictitious obligations.</li>
<li>IRS Notice 2010-33 lists "the government has a secret account for each citizen / HJR 192 discharged all debts" among frivolous positions subject to a $5,000 penalty (26 U.S.C. § 6702).</li>
</ul>
<p>Beyond losing, people who act on these theories face: default judgments and foreclosure on the real debt, filing-fee sanctions, IRS frivolous-return penalties, and federal prosecution for fictitious obligations (18 U.S.C. § 514, up to 25 years), mail fraud (§ 1341), and bank fraud (§ 1344). The FBI has published warnings on the "Redemption / Strawman / Bond Fraud" scheme.</p>
<p><strong>Why include this in a training app?</strong> Because the same words — <em>discharge</em>, <em>obligation</em>, <em>holder</em>, <em>bill of exchange</em>, <em>accepted</em> — mean specific things in the UCC, and knowing the real definitions is the best protection against being sold a fake one.</p>`,
    cites: [
      { cite: "18 U.S.C. § 514", url: "https://www.law.cornell.edu/uscode/text/18/514", note: "Fictitious obligations purporting to be issued under U.S. authority." },
      { cite: "United States v. Anderson, 353 F.3d 490 (6th Cir. 2003)", url: "https://casetext.com/case/us-v-anderson-166", note: "Sight drafts on the Treasury." },
      { cite: "Bryant v. Washington Mutual Bank, 524 F. Supp. 2d 753 (W.D. Va. 2007)", url: "https://casetext.com/case/bryant-v-washington-mut-bank", note: "History and rejection of the redemption theory." },
      { cite: "IRS Notice 2010-33", url: "https://www.irs.gov/pub/irs-drop/n-10-33.pdf", note: "Frivolous positions list." },
      { cite: "FBI — Sovereign Citizens / Redemption scheme", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/sovereign-citizens", note: "Public warning." }
    ]
  },
  {
    id: "what-you-can-do",
    title: "What the law actually gives you against a debt",
    body: `<p>Real, enforceable rights individuals have when dealing with debt:</p>
<ul>
<li><strong>Validation.</strong> Within 30 days of a collector's first contact you can demand validation; collection must pause until they respond (15 U.S.C. § 1692g; Reg F, 12 C.F.R. § 1006.34).</li>
<li><strong>Proof of standing.</strong> A plaintiff suing on a note must be a person entitled to enforce it (UCC § 3-301) — the original or a proven chain of transfer/lost-note affidavit (§ 3-309). Debt buyers frequently can't prove this; courts dismiss such suits.</li>
<li><strong>Your defenses travel with the paper</strong> in seller-arranged consumer credit (FTC Holder Rule, 16 C.F.R. § 433.2).</li>
<li><strong>Statute of limitations</strong> as an affirmative defense (UCC § 3-118; state law).</li>
<li><strong>Accurate credit reporting</strong> and dispute rights (15 U.S.C. § 1681i).</li>
<li><strong>Negotiated settlement</strong>, documented as accord and satisfaction (UCC § 3-311) with a written release (§ 3-604).</li>
<li><strong>Bankruptcy</strong> when the debt is genuinely unpayable (11 U.S.C.).</li>
<li><strong>Exemptions</strong> protecting wages, homestead, retirement accounts from judgment creditors (state law; 15 U.S.C. § 1673 caps wage garnishment at 25% of disposable earnings for most debts).</li>
</ul>`,
    cites: [
      { cite: "15 U.S.C. § 1692g", url: "https://www.law.cornell.edu/uscode/text/15/1692g", note: "Validation of debts." },
      { cite: "12 C.F.R. pt. 1006 (Reg F)", url: "https://www.ecfr.gov/current/title-12/chapter-X/part-1006", note: "CFPB debt-collection rule." },
      { cite: "UCC § 3-301, § 3-309", url: "https://www.law.cornell.edu/ucc/3/3-301", note: "Person entitled to enforce; lost instruments." },
      { cite: "15 U.S.C. § 1673", url: "https://www.law.cornell.edu/uscode/text/15/1673", note: "Restriction on garnishment." },
      { cite: "15 U.S.C. § 1681i", url: "https://www.law.cornell.edu/uscode/text/15/1681i", note: "FCRA dispute procedure." }
    ]
  }
];

window.DEBT_GLOSSARY = [
  { term: "Debt", def: "A sum of money owed by one party to another under a legal obligation." },
  { term: "Obligation", def: "A legal duty to do or refrain from doing something; in finance, the duty to pay." },
  { term: "Obligor / Obligee", def: "The party who owes the duty / the party to whom it is owed." },
  { term: "Public debt", def: "Money owed by a government to its bondholders and other creditors." },
  { term: "Legal tender", def: "Money that a creditor is legally required to accept in satisfaction of a debt denominated in that currency." },
  { term: "Gold clause", def: "A contract term requiring payment in gold or its value; unenforceable in obligations issued 1933–1977." },
  { term: "Discharge", def: "The termination of an obligation, by payment, agreement, operation of law, or court order." },
  { term: "Fictitious obligation", def: "A document falsely purporting to be a financial instrument issued under the authority of the United States, a state, or an organization (18 U.S.C. § 514)." },
  { term: "Redemption / strawman theory", def: "A debunked theory that the government created a secret account for each citizen at birth that can be used to pay debts." },
  { term: "Person entitled to enforce", def: "The holder of an instrument, a non-holder with holder's rights, or a person who lost the instrument — the only ones who can sue on it (UCC § 3-301)." }
];
