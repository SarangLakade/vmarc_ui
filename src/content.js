const boardDirector = [
  {
    name: "Mr Vikas Garg",
    img: require("./img/BOD1.png"),
    position: "Managing Director",
    description:
      "Having experience of more than 2 decades in the field of electric cables & wire industry. Responsible for overlooking the technical operations, strategy and marketing plans of the company. He holds a degree of Masters of Business Administration (MBA) in Marketing.",
  },
  {
    name: "Mr. Deepak Prabhakar Tikle",
    img: require("./img/BOD2.jpg"),
    position: "Executive Director",
    description:
      "He is a proactive leader with 32 years of experience in Profit Centre Operations, Sales & Marketing, Plant Management, Business Development, and Channel Management & Team Management. He holds B.E. (Electronic & Telecommunication) and MBA in Marketing Degree from University of Pune.",
  },
  {
    name: "Mr. Raj Kumar Pandey",
    img: require("./img/BOD3.jpeg"),
    position: "Independent Director",
    description:
      "He is a Company Secretary (CS) by Profession. He is having experience of more than 12 years in the corporates. He was associated with Patanjali Food & Herbal Park Private Limited for around 10 years in leadership roles in establishing the Mega Food Park, Scheme of ministry of Food Processing Industries.",
  },
  {
    name: "Mr. Ranjeet Kumar Tibrewal ",
    img: require("./img/BOD4.jpg"),
    position: "Independent Director",
    description:
      "He is a practicing Chartered Accountant with a vast experience of 19 years in the field of business and finance, auditing, taxation, financial and general management which also include financial reporting, consulting, corporate finance, or accounting systems and processes.",
  },
  {
    name: "Mrs. Meenakshi Garg",
    img: require("./img/BOD5.png"),
    position: "Non-Executive Director",
    description:
      "Associated with the company for last 10 years. Holds Bachelor of commerce degree from Delhi University and has an experience of more than a decade in the Industry of Wires and Cables.",
  },
];

const AuditCommittee = [
  {
    name: "Mr Ranjeet Kumar Tiberwal",
    position: "Independent Director",
    designation: "Chairman",
  },
  {
    name: "Mr. R K Pandey",
    position: "Independent Director",
    designation: "Member",
  },
  {
    name: "Mr. Vikas Garg",
    position: "Managing Director",
    designation: "Member",
  },
];
const NominationCommittee = [
  {
    name: "Mr. R K Pandey",
    position: "Independent Director",
    designation: "Member",
  },
  {
    name: "Mr Ranjeet Kumar Tiberwal",
    position: "Independent Director",
    designation: "Member",
  },
  {
    name: "Mrs. Meenakshi Garg",
    position: "Non Executive Director",
    designation: "Member",
  },
];
const StakeholderCommittee = [
  {
    name: "Mrs. Meenakshi Garg",
    position: "Non Executive Director",
    designation: "Member",
  },
  {
    name: "Mr. R K Pandey",
    position: "Independent Director",
    designation: "Member",
  },
  {
    name: "Mr. Vikas Garg",
    position: "Managing Director",
    designation: "Member",
  },
];
const SocialCommittee = [
  {
    name: "Mr. Deepak Prabhakar Tikle",
    position: "Executive Director",
    designation: "Chairman",
  },
  {
    name: "Mr. Vikas Garg",
    position: "Managing Director",
    designation: "Member",
  },
  {
    name: "Mr. R K Pandey",
    position: "Independent Director",
    designation: "Member",
  },
];

const Event = [
  {
    title: "Name Change of the company",
    link: "/vmarc/Details-of-Business/name-change.pdf",
  },
  {
    title: "Credit Ratings.",
    link: "/vmarc/Details-of-Business/credit_ratings.pdf",
  },
  {
    title: "Disclosure of Policy for determination of materiality of events",
    link: "/vmarc/Details-of-Business/Policy_for_Determination_of_Materiality.pdf",
  },
  {
    title: "Disclosure of KMP for the purpose of determining the materiality",
    link: "/vmarc/Details-of-Business/Authorization_of_KMP.pdf",
  },
];

const RegulationEvents = {
  title: "2021-2022",
  content: [
    {
      name: "Appointment of Internal Auditor",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B1.pdf",
    },
    {
      name: "Appointment of Secretarial Auditor",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B2.pdf",
    },
    {
      name: "Intimation of Board Meeting",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B3.pdf",
    },
    {
      name: "Outcome of Board Meeting",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B4.pdf",
    },
    {
      name: "Appointment of Cost Auditor",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B5.pdf",
    },
    {
      name: "Annual Report",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B6.pdf",
    },
    {
      name: "Scrutiniser Report",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B7.pdf",
    },
    {
      name: "Notice of the 8th AGM",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B10.pdf",
    },
    {
      name: "Proceeding of the AGM",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B8.pdf",
    },
    {
      name: "Voting Results",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B9.pdf",
    },
    {
      name: "Financial Results",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B13.pdf",
    },
    {
      name: "Intimation of Board Meeting",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B11.pdf",
    },
    {
      name: "Compliance Certificate",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B12.pdf",
    },
    {
      name: "Resignation of Director",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B14.pdf",
    },
    {
      name: "Appointment of Director",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B16.pdf",
    },
    {
      name: "Reconstitution of Audit Committee and CSR Committee",
      link: "/vmarc/Details-of-Business/Events_disclosed_under_Regulation_30/2021-22/B17.pdf",
    },
  ],
};

const StatementofDeviation = {
  title: "2021-2022",
  content: [
    {
      name: "HY1",
      link: "/vmarc/Details-of-Business/Statement_of_deviation_or_Variation/2021-22/C1.pdf",
    },
    {
      name: "HY2",
      link: "/vmarc/Details-of-Business/Statement_of_deviation_or_Variation/2021-22/C2.pdf",
    },
  ],
};
const StatementofDeviation2 = {
  title: "2022-2023",
  content: [
    {
      name: "HY1",
      link: "/vmarc/Details-of-Business/Statement_of_deviation_or_Variation/2022-23/C3.pdf",
    },
  ],
};

const AnualReturn = {
  year: "2020-2021",
  pdf: [
    {
      link: "/vmarc/Details-of-Business/Annual_Return_as_provided_under_Section_92/2020-21/C4.pdf",
    },
  ],
};

const AnualReturn2 = {
  year: "2021-2022",
  pdf: [
    {
      link: "/vmarc/Details-of-Business/Annual_Return_as_provided_under_Section_92/2021-22/C5.pdf",
    },
  ],
};

const AnualReturn3 = {
  year: "2022-2023",
  pdf: [
    {
      link: "/vmarc/Details-of-Business/Annual_Return_as_provided_under_Section_92/2022-23/C6-23.pdf",
    },
  ],
};

const FinancialTableData = [
  {
    year: "2023-2024",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2023-24/Financial_Results_30.09.2023.pdf",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2023-24/hy-24a.pdf",
      },
    ],
    HY2: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2023-24/fr-24b.pdf",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2023-24/Board_Meeting-23-24.pdf",
      },
    ],
    annual: [],
  },
  {
    year: "2022-2023",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2022-23/A5_Financial_Results_HY_1_2022-23.pdf",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2022-23/A6_Intimation_under_Regulation_29.pdf",
      },
    ],
    HY2: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2022-23/Financial_Results_HY2_2022-23.pdf",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2022-23/Board_Meeting_HY2_2022-23.pdf",
      },
    ],
    annual: [
      {
        name: "Annual Report",
        link: "/vmarc/Financial-Information/2022-23/annual-23.pdf",
      },
    ],
  },
  {
    year: "2021-2022",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2021-22/A1_Financial_Results_HY1_2021-22.pdf",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2021-22/A2_Intimation_of_Board_Meeting_HY1_2021-22.pdf",
      },
    ],
    HY2: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2021-22/A1_Financial_Results_HY1_2021-22.pdf",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2021-22/A4_Intimation_of_Board_Meeting_HY2_2021-22.pdf",
      },
    ],
    annual: [
      {
        name: "Annual Report",
        link: "/vmarc/Financial-Information/2021-22/C7.pdf",
      },
    ],
  },
  {
    year: "2020-2021",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2020-21/aR-2021",
      },
      {
        name: "Board Meeting",
        link: "/vmarc/Financial-Information/2020-21/BM22.pdf",
      },
    ],
    HY2: [],
    annual: [
      {
        name: "Annual Report",
        link: "/vmarc/Financial-Information/2021-2022/C6.pdf",
      },
    ],
  },
  {
    year: "2019-2020",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2019-20/Balance-Sheet-19-20.pdf",
      },
    ],
    HY2: [],
    annual: [],
  },
  {
    year: "2018-2019",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2018-19/Balance-Sheet-18-19.pdf",
      },
    ],
    HY2: [],
    annual: [],
  },
  {
    year: "2017-2018",
    HY1: [
      {
        name: "Financial Results",
        link: "/vmarc/Financial-Information/2017-18/Balance-Sheet-17-18.pdf",
      },
    ],
    HY2: [],
    annual: [],
  },
];

const ShareholdingData = [
  {
    year: "2023-2024",
    HY1: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2023-24/23-24.pdf",
      },
    ],
    HY2: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2023-24/SHP_31.03.2024.pdf",
      },
    ],
  },
  {
    year: "2022-2023",
    HY1: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2022-23/A9_Shareholding_Pattern_as_on_30.09.2022.pdf",
      },
    ],
    HY2: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2022-23/Shareholding_Pattern_HFY2_2022-23.pdf",
      },
    ],
  },
  {
    year: "2021-2022",
    HY1: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2021-22/A7_Shareholding_Pattern_as_on_31.03.2022.pdf",
      },
    ],
    HY2: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2021-22/A8_SHP_as_on_30.09.2021.pdf",
      },
    ],
  },
  {
    year: "2020-2021",
    HY1: [
      {
        name: "Shareholding Pattern",
        link: "/vmarc/Shareholding-Pattern/2020-21/20-21.pdf",
      },
    ],
    HY2: [],
    // annual: [],
  },
];

export {
  boardDirector,
  Event,
  AuditCommittee,
  NominationCommittee,
  StakeholderCommittee,
  SocialCommittee,
  RegulationEvents,
  StatementofDeviation,
  StatementofDeviation2,
  AnualReturn,
  AnualReturn2,
  AnualReturn3,
  FinancialTableData,
  ShareholdingData,
};
