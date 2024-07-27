export const dummyData = {
  users: [],
  traceability: [],
  farmers: [],
  farms: [],
};

export const farmersData = {
  farmers: [
    {
      id: 1,
      firstName: "John ",
      lastName: "Doe",
      gender: "male",
      dateOfBirth: "Fri Jul 26 2024",
      contact: "244123123",
      homeAddress: "Accra Darkuman",
      gpsAddress: "GS-00245-123",
      farmerType: "Farmer",
      cropGrown: "Soya",
      group: "Group 1",
      region: "Upper East",
      district: "Savlanga",
      community: "Danso",

      farms: [
        {
          farmId: 101,
          farmName: "John's Soya ",
          crop: "Soya",
          area: 10,
          community: "Danso",
          // crop: ["Cattle", "Sheep"],
        },
        {
          farmId: 102,
          farmName: "John's Groundnut",
          crop: "Groundnut",
          area: 30,
          community: "Kasand",
          // livestock: [],
        },
      ],
    },
    {
      id: 1,
      firstName: "Emma ",
      lastName: "Yaw",
      gender: "male",
      dateOfBirth: "Fri Jul 26 2024",
      contact: "244123123",
      homeAddress: "Accra Darkuman",
      gpsAddress: "GS-00245-123",
      farmerType: "Farmer",
      cropGrown: "Groundnut",
      group: "Group 1",
      region: "Upper East",
      district: "Savlanga",
      community: "Kasena",

      farms: [
        {
          farmId: 101,
          farmName: "Emma's Soya ",
          crop: "Soya",
          area: 100,
          community: "Asoni",
          //livestock: ["Cattle", "Sheep"],
        },
        {
          farmId: 102,
          farmName: "Emma's Groundnut",
          crop: "Groundnut",
          area: 50,
          community: "Damba",
          // livestock: [],
        },
      ],
    },
  ],
};
export const regions = [
  {
    regionId: 1,
    name: "Ahafo",
  },
  {
    regionId: 2,
    name: "Ashanti",
  },
  {
    regionId: 3,
    name: "Bono East",
  },
  {
    regionId: 4,
    name: "Central",
  },
  {
    regionId: 5,
    name: "Eastern",
  },
  {
    regionId: 6,
    name: "Greater Accra",
  },
  {
    regionId: 7,
    name: "Northern",
  },
  {
    regionId: 8,
    name: "North East",
  },
  {
    regionId: 9,
    name: "Oti",
  },
  {
    regionId: 10,
    name: "Savannah",
  },
  {
    regionId: 11,
    name: "Upper East",
  },
  {
    regionId: 12,
    name: "Upper West",
  },
  {
    regionId: 13,
    name: "Volta",
  },
  {
    regionId: 14,
    name: "Western North",
  },
  {
    regionId: 15,
    name: "Western",
  },
  {
    regionId: 16,
    name: "Bono",
  },
];

export const districts = [
  {
    regionId: 1,
    listDistrict: [
      "Asunafo North Municipal",
      "Asutifi North District",
      "Tano South Municipal",
      "Asutifi South District",
      "Asunafo South District",
      "Tano North Municipal",
    ],
  },
  {
    regionId: 2,
    listDistrict: [
      " Kumasi Metropolitan",
      "Ahafo Ano North Municipal",
      "Asante Akim Central Municipal",
      "Asante Akim South Municipal",
      "Asokore Mampong Municipal",
      "Asokwa Municipal",
      "Atwima Nwabiagya Municipal",
      "Bekwai Municipal",
      "Ejisu Municipal",
      "Ejura Sekyredumasi Municipal",
      "Juaben Municipal",
      "Kwabre East Municipal",
      "Kwadaso Municipal",
      "Mampong Municipal",
      "Offinso Municipal",
      "Obuasi Municipal",
      "Oforikrom Municipal",
      "Old Tafo Municipal",
      "Suame Municipal",
      "Adansi Asokwa ",
      "Adansi North ",
      "Adansi South ",
      "Afigya Kwabre North ",
      "Afigya Kwabre South ",
      "Ahafo Ano South East",
      "Ahafo Ano South West",
      "Akrofuom",
      "Amansie Central",
      "Amansie South",
      "Amansie West",
      "Asante Akim North",
      "Atwima Kwanwoma",
      "Atwima Mponua",
      "Atwima Nwabiagya North",
      "Bosome Freho",
      "Bosomtwe",
      "Obuasi East",
      "Offinso North",
      "Sekyere Afram Plains",
      "Sekyere Central ",
      "Sekyere East",
      "Sekyere Kumaw",
      "Sekyere South",
    ],
  },
];
