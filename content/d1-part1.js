(window.CISSP_LESSONS = window.CISSP_LESSONS || []).push(
{
  "id": "1.1",
  "domain": 1,
  "title": "Professional Ethics",
  "objective": "1.1 Understand, adhere to, and promote professional ethics",
  "minutes": 8,
  "intro": "Welcome to your first lesson. Before the exam tests a single firewall rule, it tests your character. Let's walk through the ISC2 Code of Ethics, why the order of its canons matters, and how your own organization's code fits alongside it.",
  "concepts": [
    {
      "id": "1.1a",
      "title": "The Code of Ethics preamble",
      "script": [
        "Every certified professional agrees to the ISC2 Code of Ethics. It opens with a short preamble, and the preamble sets the tone for everything else.",
        "Here is the core idea. The safety and welfare of society and the common good, duty to our principals, and duty to each other require that we adhere, and be seen to adhere, to the highest ethical standards. Notice those words: be seen to adhere. It is not enough to behave well in private. Your conduct has to look ethical to the people who trust you.",
        "The preamble also says that strict adherence to the code is a condition of certification. Break it, and you can lose your credential.",
        "Think of the preamble like the oath a doctor takes. Nobody checks every decision a doctor makes, but the public trusts the profession because everyone in it made the same promise. Your certification works the same way. A memory hook: be good, and be seen to be good."
      ],
      "card": {
        "front": "According to the ISC2 Code of Ethics preamble, what is a condition of certification?",
        "back": "Strict adherence to the Code of Ethics. Members must adhere, and be seen to adhere, to the highest ethical standards."
      },
      "check": {
        "q": "A CISSP behaves dishonestly in a public setting, but breaks no law. What does the Code of Ethics preamble imply?",
        "options": [
          "Adherence is a condition of certification, so the credential is at risk",
          "The code only applies during working hours",
          "Only criminal convictions can affect certification",
          "Only the member's employer can decide consequences"
        ],
        "why": "The preamble makes strict adherence a condition of certification, and members must be seen to adhere. It isn't limited to work or to crimes."
      }
    },
    {
      "id": "1.1b",
      "title": "The four canons, in order",
      "script": [
        "The heart of the code is four canons. Learn them in order, because the order is tested.",
        "Canon one. Protect society, the common good, necessary public trust and confidence, and the infrastructure. Canon two. Act honorably, honestly, justly, responsibly, and legally. Canon three. Provide diligent and competent service to principals. Principals means your employer or your clients. Canon four. Advance and protect the profession.",
        "Here is a mnemonic. Society, Honor, Principals, Profession. Picture a circle that narrows as you go. First the whole world, then your own integrity, then the people who pay you, then your peers.",
        "A real example. Your client asks you to hide a breach that exposes customer data. Canon three says serve your client. Canon one says protect society. Canon one wins, because society comes first."
      ],
      "card": {
        "front": "List the four ISC2 canons in order.",
        "back": "1. Protect society, the common good, public trust, and the infrastructure. 2. Act honorably, honestly, justly, responsibly, and legally. 3. Provide diligent and competent service to principals. 4. Advance and protect the profession."
      },
      "check": {
        "q": "Which ISC2 canon comes THIRD in order?",
        "options": [
          "Provide diligent and competent service to principals",
          "Advance and protect the profession",
          "Act honorably, honestly, justly, responsibly, and legally",
          "Protect society, the common good, and the infrastructure"
        ],
        "why": "The order is society, honor, principals, profession. Service to principals is third."
      }
    },
    {
      "id": "1.1c",
      "title": "Resolving conflicts between canons",
      "script": [
        "Sometimes the canons pull you in different directions. The rule is simple. Conflicts are resolved in the order the canons appear. A higher canon beats a lower one.",
        "So protecting society beats serving your employer. Acting legally and honestly beats loyalty to a client. And your duty to principals beats promoting the profession.",
        "On the exam, watch for questions where the tempting answer is to keep the client happy or keep things quiet. Ask yourself which canon each answer serves, then pick the one that serves the highest canon.",
        "There is also a detail about complaints. ISC2 only acts on complaints from someone who has standing, meaning someone affected. Anyone in the public can complain about canons one and two. Only principals, meaning an employer or client with a working relationship with the member, can complain about canon three. And other professionals who are certified or licensed and follow a professional code can complain about canon four. Memory hook: the higher the canon, the wider the circle of people who can complain."
      ],
      "card": {
        "front": "When two ISC2 canons conflict, how is the conflict resolved?",
        "back": "By the order of the canons. The earlier canon takes priority, so protecting society comes before serving principals."
      },
      "check": {
        "q": "Your employer asks you to mislead a regulator. Which canon outweighs your duty to your employer?",
        "options": [
          "Act honorably, honestly, justly, responsibly, and legally",
          "Advance and protect the profession",
          "Provide diligent and competent service to principals",
          "Duty to the employer outweighs the other canons"
        ],
        "why": "Canon two, acting honestly and legally, ranks above canon three, service to principals. Earlier canons win conflicts."
      }
    },
    {
      "id": "1.1d",
      "title": "Organizational codes of ethics",
      "script": [
        "Besides the ISC2 code, most companies publish their own code of ethics. The exam expects you to understand how the two fit together.",
        "An organizational code applies to everyone who works there, not just security staff. It usually covers conflicts of interest, gifts, acceptable use, and how to report wrongdoing. Senior management should approve it, communicate it, and model it. If leaders ignore the code, nobody else will follow it.",
        "As a security professional, you follow both codes. When the company code is silent, the ISC2 code still guides you. And you are expected to promote ethical behavior, not just obey it. That means awareness training, leading by example, and supporting safe ways to report problems.",
        "Example. A vendor offers you an expensive gift right before a contract decision. The company code likely forbids it, and canon two, act honorably, says decline it. Think like a manager: ethics protects the organization's reputation, which is an asset just like data."
      ],
      "card": {
        "front": "Who should approve and model an organization's code of ethics?",
        "back": "Senior management. They approve it, communicate it, and lead by example, so it applies to all employees."
      },
      "check": {
        "q": "What MOST determines whether an organization's code of ethics actually changes behavior?",
        "options": [
          "Senior management visibly approving and modeling it",
          "Publishing it on the intranet",
          "Having legal counsel draft it",
          "Adding it to an appendix of the employee handbook"
        ],
        "why": "People follow what leaders do. Approval, communication and modeling by senior management give the code real authority."
      }
    }
  ],
  "recap": "Let's recap. The ISC2 preamble says you must adhere, and be seen to adhere, to the highest ethical standards, and that adherence is a condition of certification. The four canons, in order, are: protect society, act honorably, serve principals diligently, and advance the profession. Remember Society, Honor, Principals, Profession. When canons conflict, the earlier one wins. Your organization's own code applies to everyone, is approved and modeled by senior management, and you are expected to follow it and promote it.",
  "keys": [
    "Canons in order: Society > Honor > Principals > Profession",
    "Conflicts resolved by canon order; earlier canon wins",
    "Adherence is a condition of certification; be seen to adhere",
    "Complaints need standing: public (1, 2), principals (3), professionals (4)",
    "Org code of ethics: applies to all staff, approved and modeled by senior mgmt"
  ],
  "quiz": [
    {
      "q": "A client asks you to delay reporting a vulnerability that endangers a city's water system so the client can avoid bad press. What should guide your decision?",
      "options": [
        "Protecting society and the infrastructure takes priority over duty to the client",
        "Providing diligent service to principals, since the client pays you",
        "Advancing the profession by publishing full exploit details immediately",
        "Following the client's instructions as long as they are technically legal"
      ],
      "why": "Canon one, protect society and the infrastructure, is the highest canon and wins over canon three, service to principals."
    },
    {
      "q": "To meet a contract deadline, your manager asks you to sign a security assessment report for work you did not perform. What should you do?",
      "options": [
        "Decline, because signing would be dishonest",
        "Sign it, since serving your principal is a canon",
        "Sign it but keep a private note of your concerns",
        "Ask a colleague to sign it instead"
      ],
      "why": "Canon two, act honorably and honestly, ranks above service to principals. Signing a false report, or getting someone else to, is dishonest."
    },
    {
      "q": "A certified professional learns that a CISSP at another firm is falsely claiming credentials they don't hold, damaging the profession's reputation. Who has standing to complain under canon four?",
      "options": [
        "Another certified or licensed professional who follows a professional code",
        "Any member of the public",
        "Only that CISSP's employer",
        "Only ISC2 board members"
      ],
      "why": "Complaints under canon four, advance and protect the profession, may be brought by other professionals who are certified or licensed and subscribe to a code of ethics."
    },
    {
      "q": "A CISO must choose between a company instruction to stay quiet and disclosing a flaw that threatens public safety. What should guide the decision?",
      "options": [
        "The first ISC2 canon: protecting society, the common good and the infrastructure",
        "The company's instruction, because the employer is the principal",
        "Whichever approach protects the company's share price",
        "Legal counsel's preference, regardless of public impact"
      ],
      "why": "When duties conflict, the ISC2 canons are applied in order, and protecting society comes first."
    }
  ]
},
{
  "id": "1.2",
  "domain": 1,
  "title": "Core Security Concepts",
  "objective": "1.2 Understand and apply security concepts",
  "minutes": 9,
  "intro": "Every question on this exam ties back to a handful of goals. In this lesson you'll learn the CIA triad, its opposite, and the extra properties of authenticity and non-repudiation. You'll also see the difference between identifying, authenticating, authorizing, and holding people accountable.",
  "concepts": [
    {
      "id": "1.2a",
      "title": "The CIA triad",
      "script": [
        "Security rests on three goals, called the C I A triad. Confidentiality, integrity, and availability.",
        "Confidentiality means only authorized people can see information. Encryption and access controls protect it. Integrity means information is accurate and has not been changed without authorization. Hashing and digital signatures protect it. Availability means systems and data are there when authorized users need them. Backups, redundancy, and disaster recovery protect it.",
        "A handy example is your bank account. Confidentiality: strangers can't see your balance. Integrity: nobody can quietly change your balance. Availability: you can log in at two in the morning and check it.",
        "Think like a manager. The three goals often trade off. Locking data down tightly can hurt availability. The right balance depends on what the business values most. A hospital may put availability of patient records first, while a defense contractor may put confidentiality first."
      ],
      "card": {
        "front": "Name the three goals of the CIA triad and one control for each.",
        "back": "Confidentiality, protected by encryption. Integrity, protected by hashing or digital signatures. Availability, protected by backups and redundancy."
      },
      "check": {
        "q": "A hospital's records system is unreachable during a ransomware attack, but no data was stolen or changed. Which goal was affected?",
        "options": [
          "Availability",
          "Confidentiality",
          "Integrity",
          "Authenticity"
        ],
        "why": "Authorized users couldn't reach the data when they needed it. That's a loss of availability."
      }
    },
    {
      "id": "1.2b",
      "title": "DAD: the attacker's triad",
      "script": [
        "Flip the C I A triad over and you get D A D. Disclosure, alteration, and destruction. This is what attackers try to achieve.",
        "Disclosure is the opposite of confidentiality. Someone sees data they shouldn't, like a stolen customer list posted online. Alteration is the opposite of integrity. Someone changes data, like a fraudster editing invoice bank details. Destruction is the opposite of availability. Data or systems are destroyed or made unusable, like ransomware encrypting your servers or a denial of service attack.",
        "A memory hook: DAD breaks what CIA builds. If you can name which part of DAD a threat causes, you can name which part of CIA you need to protect.",
        "On the exam, a scenario might describe an attack without naming the goal. Ask yourself: was data seen, changed, or made unavailable? That tells you whether confidentiality, integrity, or availability was violated."
      ],
      "card": {
        "front": "What does DAD stand for, and which CIA goal does each part oppose?",
        "back": "Disclosure opposes confidentiality, alteration opposes integrity, and destruction opposes availability."
      },
      "check": {
        "q": "An employee emails a customer list to a personal account and it later appears online. Which part of DAD is this?",
        "options": [
          "Disclosure",
          "Alteration",
          "Destruction",
          "Denial"
        ],
        "why": "Data was seen by unauthorized people. Disclosure is the opposite of confidentiality."
      }
    },
    {
      "id": "1.2c",
      "title": "Authenticity and non-repudiation",
      "script": [
        "The 2024 exam outline lists two more properties beside C I A. Authenticity and non-repudiation.",
        "Authenticity means something is genuine. The message really came from who it claims, and the data is the real data. Non-repudiation means someone cannot later deny an action they took. If you signed a contract, you can't claim you never signed it.",
        "The classic tool for both is the digital signature. The sender signs with their private key. Anyone can verify with the sender's public key. Because only the sender holds that private key, the signature proves origin, and the sender can't deny it. A digital signature also proves integrity, since any change breaks the signature.",
        "Here is a trap. Symmetric encryption and shared secret codes cannot give non-repudiation, because both parties share the same key. Either one could have created the message. Memory hook: non-repudiation needs a key that only one person holds."
      ],
      "card": {
        "front": "Which technology provides non-repudiation, and why can't symmetric keys provide it?",
        "back": "Digital signatures, made with the sender's private key. Symmetric keys are shared, so either party could have created the message."
      },
      "check": {
        "q": "Two partners protect messages with a keyed hash using a shared secret key. What can this NOT provide?",
        "options": [
          "Non-repudiation",
          "Integrity",
          "Detection of tampering",
          "Assurance the message came from one of the two partners"
        ],
        "why": "Both partners hold the same key, so either could have created the message. Only a private-key digital signature gives non-repudiation."
      }
    },
    {
      "id": "1.2d",
      "title": "Identification, authentication, authorization, accountability",
      "script": [
        "Access control follows four steps, in order. Identification, authentication, authorization, and accountability.",
        "Identification is claiming who you are, like typing your username. Authentication is proving that claim, like entering your password or tapping your fingerprint. Authorization is deciding what you're allowed to do once you're proven. Accountability is tracing actions back to you, usually through audit logs.",
        "Picture boarding a flight. You say your name, that's identification. You show your passport, that's authentication. Your boarding pass says seat 14C in economy, that's authorization. And the airline records that you boarded, that's accountability.",
        "Here is the key exam point. Accountability depends on unique identification. If three admins share one account, the logs can't tell who did what. That's why shared accounts break accountability, and why managers insist on individual accounts."
      ],
      "card": {
        "front": "Why do shared accounts break accountability?",
        "back": "Accountability requires unique identification. With a shared account, logged actions cannot be traced to a specific individual."
      },
      "check": {
        "q": "After a user logs in, the system checks whether that user may open the payroll folder. Which step is this?",
        "options": [
          "Authorization",
          "Authentication",
          "Identification",
          "Accountability"
        ],
        "why": "Logging in proved identity. Deciding what the proven user may access is authorization."
      }
    }
  ],
  "recap": "Here is your recap. The CIA triad is confidentiality, integrity, and availability. Its opposite, DAD, is disclosure, alteration, and destruction. Authenticity means something is genuine, and non-repudiation means you can't deny an action. Digital signatures, made with a private key, give integrity, authenticity, and non-repudiation, which symmetric keys cannot. Access control flows from identification, to authentication, to authorization, to accountability, and accountability requires unique user identities.",
  "keys": [
    "CIA: Confidentiality, Integrity, Availability; DAD = Disclosure, Alteration, Destruction",
    "Digital signature (sender's private key) = integrity + authenticity + non-repudiation",
    "Symmetric crypto cannot provide non-repudiation (shared key)",
    "Order: Identification > Authentication > Authorization > Accountability",
    "Accountability requires unique IDs and audit logs; no shared accounts"
  ],
  "quiz": [
    {
      "q": "An attacker changes the payee bank account on pending invoices. Which security goal was MOST directly violated?",
      "options": [
        "Integrity",
        "Confidentiality",
        "Availability",
        "Non-repudiation"
      ],
      "why": "Unauthorized modification of data is alteration, which violates integrity."
    },
    {
      "q": "A bank needs proof that a customer approved a wire transfer, so the customer can't later deny it. What should be used?",
      "options": [
        "A digital signature using the customer's private key",
        "AES encryption with a key shared with the bank",
        "A hash of the transfer request",
        "TLS between the customer and the bank"
      ],
      "why": "Only a signature made with a key one party alone holds provides non-repudiation. Hashes, shared keys and TLS can't tie the action to one person."
    },
    {
      "q": "Three database administrators share one admin account. What should the security manager recommend?",
      "options": [
        "Issue individual accounts with logging so actions can be traced to a person",
        "Change the shared password every month",
        "Restrict the shared account to business hours",
        "Store the shared password in an encrypted vault"
      ],
      "why": "Accountability requires unique identification. The other options still leave actions untraceable to an individual."
    },
    {
      "q": "A hospital is deciding how tightly to lock down emergency access to patient records. What is the BEST approach?",
      "options": [
        "Balance controls to the business priority, keeping records available for care while protecting confidentiality",
        "Maximize confidentiality even if patient care is delayed",
        "Remove access controls in the emergency department",
        "Let the IT team pick whichever setting is easiest to manage"
      ],
      "why": "The CIA goals trade off. The right balance is set by business and mission priorities, and in a hospital availability for care is critical."
    }
  ]
},
{
  "id": "1.3",
  "domain": 1,
  "title": "Security Governance Principles",
  "objective": "1.3 Evaluate and apply security governance principles",
  "minutes": 11,
  "intro": "This lesson is where you start to think like a manager. Governance is how leadership steers security so it serves the business. We'll cover alignment with business goals, organizational changes, who is responsible for what, the major control frameworks, and the famous pair, due care and due diligence.",
  "concepts": [
    {
      "id": "1.3a",
      "title": "Aligning security with the business",
      "script": [
        "Security exists to support the business, not the other way around. The exam wants you to align security with the organization's strategy, goals, mission, and objectives.",
        "The mission is why the organization exists. Strategy is the long-term plan to achieve it. Goals and objectives are the measurable steps. Security plans follow the same shape. A strategic plan covers about three to five years, a tactical plan covers about a year, and operational plans cover the day-to-day.",
        "Example. An online retailer's mission depends on a website that never goes down during the holidays. A security program that blocks every new feature for months is misaligned. A program that protects checkout availability and customer data while enabling growth is aligned.",
        "Memory hook: security is a business enabler, not a brake. On the exam, when an answer says to do what best supports business objectives, it's usually beating the answer that is purely technical."
      ],
      "card": {
        "front": "What should a security program be aligned with?",
        "back": "The organization's mission, strategy, goals, and objectives. Security supports and enables the business."
      },
      "check": {
        "q": "A new security control would delay a key product launch by six months. What should the security manager do FIRST?",
        "options": [
          "Assess the risk against business objectives and present options to leadership",
          "Enforce the control regardless of business impact",
          "Drop the control to avoid friction with the business",
          "Ask the auditors to mandate the control"
        ],
        "why": "Security supports business goals. The manager frames the risk and options so leadership can make an informed decision."
      }
    },
    {
      "id": "1.3b",
      "title": "Organizational processes and changes",
      "script": [
        "Big organizational events create big security risks. The outline names acquisitions, mergers, divestitures, and governance committees.",
        "In an acquisition or merger, you inherit another company's networks, people, and weaknesses. Do security due diligence before the deal closes. Assess their risks, their compliance status, and their past breaches. Don't connect their network to yours until you know what you're connecting.",
        "In a divestiture, part of the company is sold or spun off. The risk flips. Now you must make sure data, accounts, and access leave cleanly. Revoke access, separate systems, and protect intellectual property that isn't part of the sale.",
        "Governance committees, sometimes called a security steering committee, bring together senior leaders from across the business to set direction and approve priorities. Example: a board-level committee reviews cyber risk each quarter. Think like a manager: security decisions should be made with business leaders in the room, not in isolation."
      ],
      "card": {
        "front": "What is the main security concern in a divestiture?",
        "back": "Making sure data, systems, and access are cleanly separated, so departing staff and systems lose access and retained data stays protected."
      },
      "check": {
        "q": "A business unit is being sold. What is the MOST important security action at separation?",
        "options": [
          "Revoke access and separate data that isn't part of the sale",
          "Give the buyer full network access to speed the transition",
          "Keep shared admin accounts until the buyer is ready",
          "Wait a year before changing any access"
        ],
        "why": "In a divestiture, data and access must leave cleanly so retained data stays protected."
      }
    },
    {
      "id": "1.3c",
      "title": "Roles and responsibilities",
      "script": [
        "Here is one of the most tested facts in the whole exam. Senior management is ultimately responsible for security. They can delegate tasks, but never the responsibility.",
        "Below them, the chief information security officer, or C I S O, runs the security program and advises leadership. The data owner is usually a senior business manager who decides how data is classified and who may access it. The data custodian, often I T, carries out the owner's decisions day to day: backups, patching, and applying access controls. Users follow the policy. Auditors independently check that controls work.",
        "A memory hook: owners decide, custodians do. The owner says this payroll data is confidential and only H R may read it. The custodian configures the permissions and backs it up.",
        "On the exam, if a question asks who is ultimately accountable after a breach, the answer is senior management, not the security team."
      ],
      "card": {
        "front": "Who holds ultimate responsibility for an organization's security?",
        "back": "Senior management. They can delegate tasks but not the ultimate responsibility."
      },
      "check": {
        "q": "Who decides how the company's HR payroll data is classified?",
        "options": [
          "The data owner, typically the senior HR business leader",
          "The data custodian in IT",
          "The database administrator",
          "The help desk manager"
        ],
        "why": "Owners decide classification and access. Custodians implement those decisions."
      }
    },
    {
      "id": "1.3d",
      "title": "Control frameworks",
      "script": [
        "Frameworks give you a proven structure instead of starting from scratch. Know what each one is for.",
        "I S O 27001 defines an information security management system and is the standard organizations get certified against. I S O 27002 is the companion code of practice with detailed control guidance. The NIST Cybersecurity Framework, version 2 point 0, has six functions: Govern, Identify, Protect, Detect, Respond, Recover. Govern was added in version 2. NIST special publication 800-53 is a big catalog of security and privacy controls, used heavily in US government. COBIT is an I T governance framework from ISACA that aligns I T with business goals. SABSA is an enterprise security architecture framework that starts from business requirements.",
        "Some are industry or government specific. P C I D S S is the payment card industry standard for anyone handling card data. FedRAMP authorizes cloud services for US federal agencies.",
        "Memory hook for the NIST functions: Govern sits in the middle of the wheel, and around it run Identify, Protect, Detect, Respond, Recover. Govern sets strategy, roles, policy and supply chain risk for everything else."
      ],
      "card": {
        "front": "What are the six functions of NIST CSF 2.0?",
        "back": "Govern, Identify, Protect, Detect, Respond, Recover. Govern is new in version 2.0."
      },
      "check": {
        "q": "Which NIST CSF 2.0 function was added in version 2.0 and covers strategy, roles, policy and supply chain risk?",
        "options": [
          "Govern",
          "Identify",
          "Protect",
          "Recover"
        ],
        "why": "CSF 2.0, released in 2024, added Govern to the original five functions."
      }
    },
    {
      "id": "1.3e",
      "title": "Due care and due diligence",
      "script": [
        "These two terms trip up many candidates. Let's make them stick.",
        "Due diligence is the research and planning. It's investigating risks, assessing vendors, and understanding what you should do. Due care is acting on it. It's actually implementing reasonable controls and doing what a prudent person would do.",
        "A memory hook: diligence is detecting, care is doing. Or think: due diligence is thinking before you act, due care is acting responsibly.",
        "Example. Before signing with a cloud provider, you review their audit reports and security practices. That's due diligence. After you discover a critical vulnerability, you patch it. That's due care.",
        "Why does this matter? Courts use the prudent person rule. If an organization fails to exercise due care and a breach occurs, it may be found negligent. Senior managers can be held liable. Think like a manager: due care and due diligence are your legal shield."
      ],
      "card": {
        "front": "What is the difference between due diligence and due care?",
        "back": "Due diligence is researching and planning, knowing what should be done. Due care is acting on it, implementing reasonable controls as a prudent person would."
      },
      "check": {
        "q": "A penetration test finds an unpatched critical server, and the company patches it within a week. This BEST shows:",
        "options": [
          "Due care",
          "Due diligence",
          "Risk avoidance",
          "Risk transference"
        ],
        "why": "Acting on known risk by implementing a reasonable fix is due care. Finding the issue was due diligence."
      }
    }
  ],
  "recap": "Recap time. Security must align with the organization's mission, strategy, goals, and objectives. Acquisitions require security due diligence before connecting networks, and divestitures require clean separation of data and access. Senior management holds ultimate responsibility. Owners decide, custodians do. Know your frameworks: ISO 27001 for certification, NIST CSF 2.0 with Govern, Identify, Protect, Detect, Respond, Recover, NIST 800-53 for control catalogs, COBIT for IT governance, SABSA for architecture, PCI DSS for card data, and FedRAMP for federal cloud. Due diligence is researching, due care is doing.",
  "keys": [
    "Senior mgmt = ultimate responsibility (cannot be delegated)",
    "Owner decides classification/access; custodian implements (backups, controls)",
    "Plans: strategic ~3-5 yr, tactical ~1 yr, operational = day-to-day",
    "NIST CSF 2.0: Govern, Identify, Protect, Detect, Respond, Recover",
    "ISO 27001 = certifiable ISMS; 27002 = control guidance; COBIT = IT governance; SABSA = architecture",
    "Due diligence = research/plan; due care = act/implement (prudent person rule)"
  ],
  "quiz": [
    {
      "q": "After a major breach, regulators ask who is ultimately accountable for the organization's security. Who is it?",
      "options": [
        "Senior management",
        "The chief information security officer",
        "The data custodian",
        "The security operations team"
      ],
      "why": "Senior management holds ultimate responsibility. They can delegate tasks but not accountability."
    },
    {
      "q": "Your company plans to acquire a competitor. What should the security team do FIRST?",
      "options": [
        "Assess the target's security risks as part of due diligence",
        "Connect the two networks to begin integration",
        "Migrate the target's users into your directory",
        "Replace the target's security tools with yours"
      ],
      "why": "Assess the target before the deal closes and before any integration. Connecting first imports unknown risk."
    },
    {
      "q": "Before signing a contract, an organization reviews a cloud vendor's SOC 2 Type II report and security questionnaire. This BEST demonstrates:",
      "options": [
        "Due diligence",
        "Due care",
        "Risk transference",
        "Separation of duties"
      ],
      "why": "Researching and investigating before acting is due diligence. Implementing controls afterward would be due care."
    },
    {
      "q": "A multinational wants an internationally recognized certification showing customers it runs a managed information security program. What should it pursue?",
      "options": [
        "ISO/IEC 27001 certification",
        "Adoption of ISO/IEC 27002 control guidance",
        "Implementation of NIST SP 800-53",
        "Alignment with COBIT"
      ],
      "why": "ISO 27001 defines the certifiable ISMS requirements. The others are guidance or catalogs, not certifications of an ISMS."
    }
  ]
},
{
  "id": "1.4",
  "domain": 1,
  "title": "Legal, Regulatory, and Compliance",
  "objective": "1.4 Understand legal, regulatory, and compliance issues that pertain to information security in a holistic context",
  "minutes": 12,
  "intro": "Security doesn't happen in a legal vacuum. In this lesson you'll learn how cybercrime and breaches create legal duties, the four kinds of intellectual property, import and export controls, data crossing borders, and the major privacy laws you'll see on the exam.",
  "concepts": [
    {
      "id": "1.4a",
      "title": "Cybercrime, breaches, and compliance requirements",
      "script": [
        "When data is breached, the law often tells you what you must do next. Many laws require breach notification, telling affected people and regulators within a set time.",
        "Requirements come from several places. Laws and regulations are set by governments, and breaking them brings fines or criminal penalties. Contractual requirements come from agreements you sign, like P C I D S S, which merchants must follow through their agreements with their bank and the card brands, not because a national law requires it. Industry standards are expected best practices in your sector.",
        "Cybercrime is also complicated by jurisdiction. An attacker in one country can hit a victim in another, routing through servers in a third. That makes investigation and prosecution hard, and international cooperation essential.",
        "Memory hook: laws punish, contracts penalize, standards guide. Think like a manager: compliance is the minimum, not the goal. Being compliant doesn't mean being secure, but being non-compliant is a business risk all on its own."
      ],
      "card": {
        "front": "Is PCI DSS a law?",
        "back": "No. PCI DSS is a contractual industry standard enforced by the payment card brands through merchant agreements, not a government law."
      },
      "check": {
        "q": "A merchant fails its PCI DSS assessment. What type of requirement was missed?",
        "options": [
          "A contractual industry standard",
          "A federal criminal statute",
          "An international treaty",
          "A GDPR obligation"
        ],
        "why": "PCI DSS is enforced through merchant agreements with banks and the card brands. It isn't a government law."
      }
    },
    {
      "id": "1.4b",
      "title": "Intellectual property",
      "script": [
        "There are four types of intellectual property. Copyright, patent, trademark, and trade secret.",
        "Copyright protects original creative expression, like software code, books, and music. It's automatic once the work is created, and it protects the expression, not the idea. Patents protect inventions. You must apply, the invention must be new, useful, and non-obvious, and in the US a utility patent generally lasts twenty years from filing. In exchange, the invention becomes public. Trademarks protect brand names, logos, and slogans that identify a company. They can last indefinitely if they stay in use and are renewed.",
        "Trade secrets protect valuable confidential information, like the Coca-Cola formula. There's no registration. Protection lasts as long as you keep it secret, using non-disclosure agreements and access controls. If it leaks, protection can be lost.",
        "Memory hook: copyright for creations, patents for inventions, trademarks for brands, trade secrets for secrets. And software licensing, such as end-user license agreements, governs how others may use your copyrighted code."
      ],
      "card": {
        "front": "Which type of intellectual property has no registration and lasts as long as it remains confidential?",
        "back": "A trade secret. It is protected through NDAs and security controls, and protection can be lost if it is disclosed."
      },
      "check": {
        "q": "A developer writes original source code for a new app. Which protection applies automatically, without registration?",
        "options": [
          "Copyright",
          "Patent",
          "Trademark",
          "Utility model"
        ],
        "why": "Copyright protects original expression from the moment it is created. Patents and trademarks require applications."
      }
    },
    {
      "id": "1.4c",
      "title": "Import, export, and transborder data flow",
      "script": [
        "Some technology is treated like a weapon. Export controls restrict sending certain technology and encryption to other countries.",
        "In the US, I T A R, the International Traffic in Arms Regulations, covers defense articles and services. E A R, the Export Administration Regulations, covers dual-use items, things with both commercial and military uses, including many encryption products. Internationally, the Wassenaar Arrangement is an agreement among many countries to control exports of conventional arms and dual-use goods. Import controls exist too. Some countries restrict bringing encryption in.",
        "Transborder data flow is about personal data crossing borders. Many privacy laws restrict sending personal data to countries without adequate protection. Data localization or sovereignty laws may require certain data to stay inside a country.",
        "Example. A US engineer ships a laptop with controlled defense designs to a foreign office. That could be an I T A R violation. Think like a manager: before choosing a cloud region, ask where the data will physically live."
      ],
      "card": {
        "front": "Which US regulation controls the export of defense articles, and which controls dual-use items like encryption?",
        "back": "ITAR controls defense articles and services. EAR controls dual-use items, including many encryption products."
      },
      "check": {
        "q": "Before moving customer personal data to a cloud region in another country, what should be checked FIRST?",
        "options": [
          "Whether transborder transfer and data localization laws allow it",
          "Which region has the lowest price",
          "Whether the provider supports TLS",
          "Whether the region has the newest hardware"
        ],
        "why": "Privacy and sovereignty laws may restrict where personal data can go. That legal question comes before cost or technical features."
      }
    },
    {
      "id": "1.4d",
      "title": "Privacy laws: GDPR and beyond",
      "script": [
        "The big one is the European Union's General Data Protection Regulation, or G D P R. It protects the personal data of people in the E U, and it can apply to companies anywhere that offer goods or services to them or monitor their behavior.",
        "Know the roles. The data controller decides why and how personal data is processed. The data processor processes it on the controller's behalf, like a cloud payroll provider. Know the deadline. A controller must notify the supervisory authority of a qualifying personal data breach within seventy-two hours of becoming aware of it. A processor that suffers a breach must tell the controller without undue delay. For the most serious violations, fines can reach four percent of global annual turnover or twenty million euros, whichever is higher.",
        "Other laws to recognize. In California, the C C P A, amended by the C P R A, gives consumers rights to know, delete, and opt out of the sale or sharing of their data. China's P I P L, the Personal Information Protection Law, has strict cross-border rules. South Africa's POPIA, the Protection of Personal Information Act, governs personal information there.",
        "Memory hook: G D P R, seventy-two hours, think three days."
      ],
      "card": {
        "front": "Under GDPR, how quickly must a controller notify the supervisory authority of a personal data breach?",
        "back": "Within 72 hours of becoming aware of it, where feasible."
      },
      "check": {
        "q": "What is the maximum GDPR fine for the most serious violations?",
        "options": [
          "20 million euros or 4 percent of global annual turnover, whichever is higher",
          "10 million euros or 2 percent of turnover, whichever is lower",
          "A fixed 1 million euros per incident",
          "4 percent of revenue earned inside the EU only"
        ],
        "why": "For the most serious infringements, GDPR allows up to 20 million euros or 4 percent of worldwide annual turnover, whichever is higher."
      }
    }
  ],
  "recap": "Let's review. Requirements come from laws, contracts, and industry standards, and PCI DSS is contractual, not a law. The four kinds of intellectual property are copyright for creations, patents for inventions, trademarks for brands, and trade secrets that last as long as they stay secret. ITAR controls defense articles, EAR controls dual-use items like encryption, and Wassenaar coordinates exports internationally. Transborder data flow laws limit where personal data can go. Under GDPR, controllers decide, processors act on their behalf, and breaches go to the regulator within seventy-two hours. Also recognize CCPA and CPRA, PIPL, and POPIA.",
  "keys": [
    "IP: copyright (expression, automatic), patent (invention, ~20 yrs, public), trademark (brand, renewable), trade secret (no registration, NDAs)",
    "ITAR = defense articles; EAR = dual-use incl. encryption; Wassenaar = multinational export controls",
    "GDPR: controller decides, processor acts for controller; 72-hr breach notice to authority",
    "GDPR max fine: greater of 4% global turnover or EUR 20M",
    "CCPA/CPRA (California), PIPL (China), POPIA (South Africa)",
    "PCI DSS = contractual standard, not law"
  ],
  "quiz": [
    {
      "q": "A company uses a cloud provider to run payroll for its EU employees. Under GDPR, the cloud provider is BEST described as the:",
      "options": [
        "Data processor",
        "Data controller",
        "Data subject",
        "Supervisory authority"
      ],
      "why": "The processor handles personal data on behalf of the controller, which decides the purposes and means of processing."
    },
    {
      "q": "A firm wants to protect a proprietary manufacturing process indefinitely without disclosing how it works. Which protection is MOST appropriate?",
      "options": [
        "Trade secret",
        "Patent",
        "Copyright",
        "Trademark"
      ],
      "why": "A patent requires public disclosure and expires. A trade secret can last indefinitely as long as it stays confidential."
    },
    {
      "q": "On Monday, your payroll processor tells you it suffered a breach of your EU employees' personal data. As the controller, what must you do?",
      "options": [
        "Notify the supervisory authority within 72 hours of becoming aware, where feasible",
        "Wait for the processor to notify the supervisory authority",
        "Notify the authority only if more than 500 people are affected",
        "Notify the authority within 30 days"
      ],
      "why": "Under GDPR the controller notifies the supervisory authority within 72 hours of becoming aware. The processor's duty is to tell the controller without undue delay."
    },
    {
      "q": "A US software company wants to sell a product containing strong commercial encryption overseas. Which regulation is MOST likely to apply?",
      "options": [
        "Export Administration Regulations (EAR)",
        "International Traffic in Arms Regulations (ITAR)",
        "Payment Card Industry Data Security Standard",
        "California Consumer Privacy Act"
      ],
      "why": "Commercial encryption is generally a dual-use item controlled under EAR. ITAR covers defense articles and services."
    }
  ]
},
{
  "id": "1.5",
  "domain": 1,
  "title": "Investigation Types",
  "objective": "1.5 Understand requirements for investigation types",
  "minutes": 7,
  "intro": "Not every investigation is the same. The type of investigation sets the rules, the stakes, and the standard of proof. Let's go through administrative, criminal, civil, regulatory, and industry standards investigations.",
  "concepts": [
    {
      "id": "1.5a",
      "title": "Administrative investigations",
      "script": [
        "An administrative investigation is internal. It looks at whether someone broke company policy, or at operational problems like a system outage.",
        "Think of an employee who installed unapproved software, or a manager accused of misusing their access. The organization runs the investigation itself, and the outcome is usually something like retraining, discipline, or termination.",
        "The standard of proof is the lowest, because no court is deciding guilt. The organization just needs enough evidence to support its decision under its own policies.",
        "Here's the trap. Administrative investigations can turn into criminal ones. If you find evidence of a crime, like fraud or theft, the case can escalate. So even internal investigations should handle evidence carefully, keep a chain of custody, and involve legal counsel early. Memory hook: treat every investigation as if it might end up in court."
      ],
      "card": {
        "front": "What is an administrative investigation?",
        "back": "An internal investigation of policy violations or operational issues. It has the lowest standard of proof but may escalate to criminal."
      },
      "check": {
        "q": "An employee broke the acceptable use policy. Who usually runs the investigation?",
        "options": [
          "The organization itself, as an administrative investigation",
          "Law enforcement",
          "A government regulator",
          "A civil court"
        ],
        "why": "Policy violations are handled internally as administrative investigations, unless evidence of a crime appears."
      }
    },
    {
      "id": "1.5b",
      "title": "Criminal and civil investigations",
      "script": [
        "Criminal investigations involve breaking the law. Law enforcement and prosecutors handle them, and the penalties can include prison. Because liberty is at stake, the standard of proof is the highest: beyond a reasonable doubt.",
        "Civil investigations are disputes between parties, like one company suing another for breach of contract or stealing intellectual property. The penalties are usually money. The standard of proof is lower: the preponderance of the evidence. That simply means more likely than not, over fifty percent.",
        "Here's a memory hook. Criminal costs your freedom, so you need to be almost certain. Civil costs your wallet, so you only need to tip the scale.",
        "A real-world pattern. The same act can trigger both. An insider steals trade secrets. Prosecutors may pursue a criminal case, and the company may file a civil suit for damages. Think like a manager: decide early whether to involve law enforcement, because once you do, you may lose control of the investigation's pace and publicity."
      ],
      "card": {
        "front": "What is the standard of proof for criminal versus civil cases?",
        "back": "Criminal: beyond a reasonable doubt. Civil: preponderance of the evidence, meaning more likely than not."
      },
      "check": {
        "q": "In a civil case, what does the preponderance of the evidence mean?",
        "options": [
          "The claim is more likely true than not",
          "The claim is proven beyond a reasonable doubt",
          "The claim is proven with absolute certainty",
          "There is probable cause to believe the claim"
        ],
        "why": "Preponderance means just over fifty percent likely. It is lower than the criminal standard of beyond a reasonable doubt."
      }
    },
    {
      "id": "1.5c",
      "title": "Regulatory and industry standards investigations",
      "script": [
        "Regulatory investigations are run by government agencies checking whether an organization followed the rules. A data protection authority investigating a G D P R breach is a good example. Penalties can include fines and sanctions. The standard of proof depends on the regulation and the agency.",
        "Industry standards investigations check compliance with a standard the organization agreed to follow, rather than a law. The classic example is P C I D S S. After a card data breach, the card brands may require a forensic investigation by an approved investigator. Consequences can include fines from the card brands, higher transaction fees, or losing the ability to accept cards.",
        "A memory hook: regulators enforce laws, industries enforce agreements.",
        "Think like a manager. Cooperate fully with regulators, keep records ready, and know which agencies and standards apply to your business before anything goes wrong."
      ],
      "card": {
        "front": "What kind of investigation follows a payment card breach where the card brands require a forensic review?",
        "back": "An industry standards investigation, such as for PCI DSS compliance."
      },
      "check": {
        "q": "A national data protection authority investigates how a company handled a breach. Which investigation type is this?",
        "options": [
          "Regulatory",
          "Industry standards",
          "Civil",
          "Administrative"
        ],
        "why": "Government agencies enforcing laws and regulations run regulatory investigations."
      }
    }
  ],
  "recap": "Here's the recap. Administrative investigations are internal, cover policy violations or operational issues, and have the lowest standard of proof, but they can escalate. Criminal investigations involve law enforcement, can lead to prison, and require proof beyond a reasonable doubt. Civil cases are disputes between parties, usually about money, and need only a preponderance of the evidence, meaning more likely than not. Regulatory investigations are run by government agencies, and industry standards investigations, like PCI DSS, enforce agreements. Always handle evidence carefully in case a case escalates.",
  "keys": [
    "Administrative: internal, policy/operational, lowest burden, can escalate",
    "Criminal: law enforcement, prison possible, beyond a reasonable doubt",
    "Civil: party vs party, money damages, preponderance of evidence (>50%)",
    "Regulatory: government agency, fines/sanctions",
    "Industry standards: e.g., PCI DSS, contractual consequences"
  ],
  "quiz": [
    {
      "q": "A company sues a former partner for using its software in violation of a license. What standard of proof applies?",
      "options": [
        "Preponderance of the evidence",
        "Beyond a reasonable doubt",
        "Probable cause",
        "Absolute certainty"
      ],
      "why": "This is a civil case. The claim only has to be more likely true than not."
    },
    {
      "q": "During an internal investigation into email misuse, the investigator finds evidence of embezzlement. What should the investigator do FIRST?",
      "options": [
        "Preserve the evidence with chain of custody and involve legal counsel",
        "Confront the employee immediately",
        "Delete the evidence to protect the company's reputation",
        "Close the administrative case as resolved"
      ],
      "why": "The case may become criminal. Preserving evidence properly and involving counsel protects its admissibility."
    },
    {
      "q": "An insider steals source code. Prosecutors file charges, and the company also sues for damages. Which statement is TRUE?",
      "options": [
        "The lawsuit needs a preponderance of evidence, while the criminal case needs proof beyond a reasonable doubt",
        "Both cases use the same standard of proof",
        "The company must wait for the criminal case to end before suing",
        "The lawsuit requires proof beyond a reasonable doubt"
      ],
      "why": "The same act can lead to both cases. Criminal cases need the highest standard; civil cases only need more likely than not."
    },
    {
      "q": "After a breach of cardholder data, the card brands require a forensic review of the merchant. This is BEST categorized as which type of investigation?",
      "options": [
        "Industry standards",
        "Criminal",
        "Civil",
        "Administrative"
      ],
      "why": "PCI DSS is an industry standard enforced through agreements with banks and the card brands, so this is an industry standards investigation."
    }
  ]
},
{
  "id": "1.6",
  "domain": 1,
  "title": "Policies, Standards, Procedures, Guidelines",
  "objective": "1.6 Develop, document, and implement security policy, standards, procedures, and guidelines",
  "minutes": 8,
  "intro": "Security documents form a hierarchy. Policies set direction, and everything else supports them. In this lesson you'll learn which documents are mandatory, which are optional, and who approves them.",
  "concepts": [
    {
      "id": "1.6a",
      "title": "Policies: the top of the pyramid",
      "script": [
        "A policy is a high-level statement of management's intent. It says what must happen and why, not how. Policies are mandatory.",
        "The top-level security policy, sometimes called the organizational or program policy, is approved by senior management. That approval gives it authority. Below it you may have issue-specific policies, like an acceptable use policy or a remote work policy, and system-specific policies for individual systems.",
        "Good policies are short, stable, and technology neutral. A policy might say all sensitive data must be encrypted in transit. It won't say use T L S 1 point 3, because technology changes faster than policy should.",
        "A memory hook: policy is the why and the what, from the top. Think like a manager. If a security effort lacks senior management support, the fix is usually a management-approved policy, not a new tool."
      ],
      "card": {
        "front": "Who approves the organization's top-level security policy, and is it mandatory?",
        "back": "Senior management approves it, and yes, policies are mandatory."
      },
      "check": {
        "q": "Which statement belongs in a policy rather than a standard?",
        "options": [
          "Sensitive data must be encrypted in transit",
          "Use TLS 1.3 with the approved cipher suites",
          "Disable SSLv3 on every web server",
          "Configure the load balancer with certificate profile B"
        ],
        "why": "Policies state management intent and stay technology neutral. Naming protocols and settings belongs in standards or baselines."
      }
    },
    {
      "id": "1.6b",
      "title": "Standards and baselines",
      "script": [
        "Standards are mandatory, specific requirements that support a policy. They name specific technologies, methods, or configurations to use across the organization.",
        "So if the policy says sensitive data must be encrypted in transit, the standard says use T L S version 1 point 2 or higher, with approved cipher suites. Standards create consistency. Everyone does it the same way.",
        "Baselines are the minimum level of security a system must meet. They're usually written as specific configuration settings. A Windows server baseline might require the firewall on, guest accounts disabled, and logging enabled. Baselines are mandatory, and they're often based on outside sources like the C I S Benchmarks from the Center for Internet Security.",
        "Memory hook: standards say which, baselines say the minimum. Both are mandatory. On the exam, if a document says use this specific product or setting everywhere, it's a standard or baseline."
      ],
      "card": {
        "front": "What is the difference between a standard and a baseline?",
        "back": "A standard mandates specific technologies or methods. A baseline is the mandatory minimum security configuration for a system."
      },
      "check": {
        "q": "A team adopts CIS Benchmark settings as the minimum configuration for all web servers. This is a:",
        "options": [
          "Baseline",
          "Guideline",
          "Policy",
          "Procedure"
        ],
        "why": "A baseline is the mandatory minimum security configuration, often taken from CIS Benchmarks."
      }
    },
    {
      "id": "1.6c",
      "title": "Procedures and guidelines",
      "script": [
        "Procedures are mandatory step-by-step instructions. They describe exactly how to perform a task to comply with policies and standards.",
        "Example: the procedure for onboarding a new employee lists every step. Create the account, assign the role, issue the badge, schedule security training. Procedures make tasks repeatable and support audits, because anyone can follow them and get the same result.",
        "Guidelines are recommendations. They're optional advice, the helpful best practices. A guideline might suggest using a passphrase made of four random words. Guidelines give flexibility where a strict rule would get in the way.",
        "Here's the big exam point. Of the five documents, only guidelines are not mandatory. A memory hook: guidelines are like guide rails on a mountain road. They help you, but nobody makes you lean on them. Everything else, policies, standards, baselines, and procedures, you must follow."
      ],
      "card": {
        "front": "Which of policies, standards, baselines, procedures, and guidelines is NOT mandatory?",
        "back": "Guidelines. They are recommendations; the others are mandatory."
      },
      "check": {
        "q": "A document lists numbered steps for restoring a server from backup. What is it?",
        "options": [
          "Procedure",
          "Guideline",
          "Standard",
          "Policy"
        ],
        "why": "Step-by-step, mandatory instructions for doing a task are procedures."
      }
    }
  ],
  "recap": "Recap. Policies are high-level, mandatory statements of management intent, approved by senior management, and they stay technology neutral. Standards are mandatory, specific technologies or methods that support the policy. Baselines are the mandatory minimum configuration for systems, often from CIS Benchmarks. Procedures are mandatory step-by-step instructions. Guidelines are recommendations and the only optional document. Remember, policy is the why, standards are the which, baselines are the minimum, procedures are the how, and guidelines are the helpful hints.",
  "keys": [
    "Policy: high-level, mandatory, senior mgmt approved, tech-neutral",
    "Standard: mandatory specific tech/methods (e.g., TLS 1.2+)",
    "Baseline: mandatory minimum config (e.g., CIS Benchmarks)",
    "Procedure: mandatory step-by-step how-to",
    "Guideline: recommended, NOT mandatory"
  ],
  "quiz": [
    {
      "q": "A document states that all laptops must use full-disk encryption with AES-256 using the company's approved product. What type of document is this?",
      "options": [
        "Standard",
        "Policy",
        "Guideline",
        "Procedure"
      ],
      "why": "It mandates a specific technology for consistent use, so it's a standard. A policy would state intent without naming a product."
    },
    {
      "q": "The security team suggests passphrases of four random words, but allows any other password that meets the requirements. What is this?",
      "options": [
        "Guideline",
        "Standard",
        "Baseline",
        "Policy"
      ],
      "why": "It's a recommendation, not a requirement. Guidelines are the only optional security documents."
    },
    {
      "q": "A new security program is struggling because departments ignore security requirements. What is the BEST first step?",
      "options": [
        "Obtain a security policy approved and supported by senior management",
        "Buy a new security monitoring tool",
        "Write detailed procedures for every department",
        "Publish optional guidelines on the intranet"
      ],
      "why": "A policy approved by senior management gives the program authority. Tools and procedures without management backing will still be ignored."
    },
    {
      "q": "Which security document should need to change LEAST often as technology evolves?",
      "options": [
        "Policy",
        "Standard",
        "Baseline",
        "Procedure"
      ],
      "why": "Policies state intent and stay technology neutral. Standards, baselines and procedures name specific technologies and steps, so they change more often."
    }
  ]
}
);
