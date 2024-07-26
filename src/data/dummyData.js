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
          farmName: "Doe's Soya ",
          crop: "Soya",
          area: 100,
          community: "Danso",
          //livestock: ["Cattle", "Sheep"],
        },
        {
          farmId: 102,
          farmName: "Doe's Groundnut",
          crop: "Groundnut",
          area: 50,
          community: "Damba",
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
          community: "Danso",
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

export const dummyFarms = [
  {
    id: 1,
    name: "farm1",
    owner: "farmer 1",
    size: "20",
    region: "region 1",
    district: "district 1",
    community: "community 1",
    address: "1234",
  },
  {
    id: 2,
    name: "farm 2",
    owner: "farmer 2",
    size: "10",
    region: "region 1",
    district: "district 1",
    community: "community 1",
    address: "1234",
  },
];
