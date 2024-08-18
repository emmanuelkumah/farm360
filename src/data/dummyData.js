import { FaMercury } from "react-icons/fa";
import { FarmerDetails } from "../components";

export const dummyData = {
  users: [],
  traceability: [],
  farmers: [],
  farms: [],
};

export let farmersData = [
  {
    id: "1",
    firstName: "John ",
    lastName: "Doe",
    gender: "Male",
    picture: "",
    dateOfBirth: "Jul 16 1987",
    contact: "244123123",
    address: "Accra Darkuman",
    gps: "GS-00245-123",
    type: "Farmer",
    group: "Foana Tale",
    region: "Upper East",
    district: "Savlanga",
    community: "Danba",
  },
  {
    id: "2",
    firstName: "Emma ",
    lastName: "Kumah",
    gender: "Male",
    picture: "",

    dateOfBirth: "August 26 2000",
    contact: "244123123",
    address: "Accra Darkuman",
    gps: "GS-00245-123",
    type: "Farmer",
    group: "Talensi",
    region: "Upper East",
    district: "Savlanga",
    community: "Kasena",
  },
];

export let farmsData = [
  {
    id: "1",
    owner: "Emmanuel",
    name: "Anigye farms",
    crop: "Soya",
    size: "20",
    gps: "GS-0259012",
    region: "UpperEast",
    district: "Asoni",
    community: "Kasena",
  },
  {
    id: "2",
    owner: "Victor",
    name: "Vic farms",
    crop: "Groundnut",
    size: "10",
    gps: "GS-0243-122-12",
    region: "Upper East",
    district: "Asontaba",
    community: "Grubi",
  },
];
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
  {
    regionId: 3,
    listDistrict: [
      "Atebubu Amantin Municipal",
      "Kintampo North Municipal",
      "Nkoranza South Municipal",
      "Techiman Municipal",
      "Sene West District",
      "Pru East District",
      "Nkoranza North District",
      "Kintampo South District",
      "Techiman North District",
      "Sene East District",
      "Pru West District",
    ],
  },
  {
    regionId: 4,
    listDistrict: [
      "Cape Coast Metropolitan",
      "Agona West Municipal",
      "Assin Fosu Municipal",
      "Awutu Senya East Municipal",
      "Effutu Municipal",
      "Komenda-Edina-Eguafo-Abrim Municipal",
      "Mfantsiman Municipal",
      "Upper Denkyira East Municipal",
      "Abura/ Asebu/ Kwamankese District",
      "Agona East District",
      "Ajumako/Enyan/Esiam District",
      "Asikuma-Odoben-Brakwa-Breman District",
      "Assin North District",
      "Assin South District",
      "Awutu Senya District",
      "Ekumfi District",
      "Gomoa Central District",
      "Gomoa East District",
      "Gomoa West District",
      "Hemang Lower Denkyira District",
      "Twifu Ati Morkwa District",
      "Upper Denkyira West District",
    ],
  },
  {
    regionId: 5,
    listDistrict: [
      "Abuakwa North Municipal",
      "Abuakwa South Municipal",
      "Akwapim North Municipal",
      "Birim Central Municipal",
      "Kwaebibirem Municipal",
      "Kwahu West Municipal",
      "Lower Manya Krobo Municipal",
      "New Juaben North Municipal",
      "New Juaben South Municipal",
      "Nsawam Adoagyiri Municipal",
      "Suhum Municipal",
      "West Akim Municipal",
      "Yilo Krobo Municipal",
      "Achiase District",
      "Akuapem South District",
      "Akyemansa District",
      "Asene-Manso-Akroso District",
      "Asuogyaman District",
      "Atiwa East District",
      "Atiwa West District",
      "Ayensuano District",
      "Birim North District",
      "Birim South District",
      "Denkyembuor District",
      "Fanteakwa North District",
      "Fanteakwa South District",
      "Kwahu Afram Plains North District",
      "Kwahu Afram Plains South District",
      "Kwahu East District",
      "Kwahu South District",
      "Okere District",
      "Upper Manya Krobo District",
      "Upper West Akim District",
    ],
  },
  {
    regionId: 6,
    listDistrict: [
      "Accra Metropolitan",
      "Tema Metropolitan",
      "Ablekuma Central Municipal",
      "Ablekuma North Municipal",
      "Ablekuma West Municipal",
      "Adenta Municipal",
      "Ashaiman Municipal",
      "Ayawaso Central Municipal",
      "Ayawaso East Municipal",
      "Ayawaso North Municipal",
      "Ayawaso West Municipal",
      "Ga  South Municipal",
      "Ga Central Municipal",
      "Ga East Municipal",
      "Ga North Municipal",
      "Ga West Municipal",
      "Korle Klottey Municipal",
      "Kpone Katamanso Municipal",
      "Krowor Municipal",
      "La Dade-Kotopon Municipal",
      "La-Nkwantanang Municipal",
      "Ledzokuku Municipal",
      "Okaikwei North Municipal",
      "Tema West Municipal",
      "Weija-Gbawe Municipal",
      "Ada East District",
      "Ada West District",
      "Ningo-Prampram District",
      "Shai-Osudoku District",
    ],
  },
  {
    regionId: 7,
    listDistrict: [
      "Tamale Metropolitan",
      "Gushegu Municipal",
      "Nanumba North Municipal",
      "Sagnerigu Municipal",
      "Savelugu Municipal",
      "Yendi Municipal",
      "Karaga District",
      "Kpandai District",
      "Kumbungu District",
      "Mion District",
      "Nanton District",
      "Nanumba South District",
      "Saboba District",
      "Tatale Sanguli District",
      "Tolon District",
      "Zabzugu District",
    ],
  },
  {
    regionId: 8,
    listDistrict: [
      "East Mamprusi Municipal",
      "West Mamprusi Municipal",
      "Bunkpurugu Nakpanduri District",
      "Chereponi District",
      "Mamprugu Moagduri District",
      "Yunyoo Nasuan District",
    ],
  },
  {
    regionId: 9,
    listDistrict: [
      "KRACHI  EAST MUNICIPAL",
      "NKWANTA SOUTH MUNICIPAL",
      "BIAKOYE DISTRICT",
      "JASIKAN DISTRICT",
      "KADJEBI DISTRICT",
      "KRACHI NCHUMURU DISTRICT",
      "KRACHI WEST DISTRICT",
      "NKWANTA NORTH DISTRICT",
      "GUAN DISTRICT",
    ],
  },
  {
    regionId: 10,
    listDistrict: [
      "Bole District",
      "East Gonja Municipal",
      "West Gonja District",
      "Sawla Tuna Kalba District",
      "Central  Gonja District",
      "North Gonja District",
      "North East Gonja Distric",
    ],
  },
  {
    regionId: 11,
    listDistrict: [
      "BAWKU MUNICIPAL",
      "BOLGATANGA MUNICIPAL",
      "KASSENA NANKANA EAST MUNICIPAL",
      "BAWKU WEST DISTRICT",
      "BINDURI DISTRICT",
      "BOLGATANGA EAST DISTRICT",
      "BONGO DISTRICT",
      "BUILSA NORTH DISTRICT",
      "BUILSA SOUTH DISTRICT",
      "GARU DISTRICT",
      "KASSENA NANKANA WEST DISTRICT",
      "NABDAM DISTRICT",
      "PUSIGA DISTRICT",
      "TALENSI DISTRICT",
      "TEMPANE DISTRICT",
    ],
  },
  {
    regionId: 12,
    listDistrict: [
      "WA MUNICIPAL",
      "JIRAPA MUNICIPAL",
      "LAWRA MUNICIPAL",
      "SISSALA EAST MUNICIPAL",
      "DAFIAMA BUSSIE ISSA DISTRICT",
      "LAMBUSSIE DISTRICT",
      "NANDOM DISTRICT",
      "NADOWLI/KALEO DISTRICT",
      "SISSALA WEST DISTRICT",
      "WA EAST DISTRICT",
      "WA WEST DISTRICT",
    ],
  },
  {
    regionId: 13,
    listDistrict: [
      "ADAKLU DISTRICT",
      "AFADZATO SOUTH DISTRICT",
      "AGOTIME-ZIOPE DISTRICT",
      "AKATSI NORTH DISTRICT",
      "AKATSI SOUTH DISTRICT",
      "ANLOGA DISTRICT",
      "CENTRAL TONGU DISTRICT",
      "HO MUNICIPAL",
      "HO WEST DISTRICT",
      "HOHOE MUNICIPAL",
      "KETA MUNICIPAL",
      "KETU NORTH MUNICIPAL",
      "KETU SOUTH MUNICIPAL",
      "KPANDO MUNICIPAL",
      "NORTH DAYI DISTRICT",
      "NORTH TONGU DISTRICT",
      "SOUTH DAYI DISTRICT",
      "SOUTH TONGU DISTRICT",
    ],
  },
  {
    regionId: 14,
    listDistrict: [
      "AOWIN MUNICIPAL",
      "BIBIANI ANHWIASO BEKWAI MUNICIPAL",
      "SEFWI WIAWSO MUNICIPAL",
      "BIA EAST DISTRICT",
      "BIA WEST DISTRICT",
      "BODI DISTRICT",
      "JUABOSO DISTRICT",
      "SEFWI AKONTOMBRA DISTRICT",
      "SUAMAN DISTRICT",
    ],
  },
  {
    regionId: 15,
    listDistrict: [
      "AHANTA WEST MUNICIPAL",
      "AMENFI CENTRAL DISTRICT",
      "WASSA AMENFI EAST MUNICIPAL",
      "AMENFI WEST MUNICIPAL",
      "EFFIA KWESIMINTSIM MUNICIPAL",
      "ELLEMBELLE DISTRICT",
      "JOMORO MUNICIPAL",
      "MPOHOR DISTRICT",
      "NZEMA EAST MUNICIPAL",
      "PRESTEA HUNI-VALLEY MUNICIPAL",
      "SEKONDI-TAKORADI METROPOLITAN",
      "SHAMA DISTRICT",
      "TARKWA NUSAEM MUNICIPAL",
      "WASSA EAST DISTRICT",
    ],
  },
  {
    regionId: 16,
    listDistrict: [
      "Berekum East Municipal",
      "Dormaa Central Municipal",
      "Jaman South Municipal",
      "Sunyani Municipal",
      "Wenchi Municipal",
      "Tain District",
      "Jaman North District",
      "Sunyani West District",
      "Dormaa East District",
      "Banda District",
      "Dormaa West District",
      "Berekum West District",
    ],
  },
];

export const groups = [
  {
    id: 1,
    name: "Talensi -Fong",
  },
  {
    id: 2,
    name: "Songtaba",
  },
  {
    id: 3,
    name: "Ting-Nya",
  },
  {
    id: 4,
    name: "La-Annobi",
  },
  {
    id: 5,
    name: "Tisuntaba",
  },
  {
    id: 6,
    name: "Tilangbai",
  },
  {
    id: 7,
    name: "Kpanmenga",
  },
  {
    id: 8,
    name: "Sugrunyanyali",
  },
  {
    id: 9,
    name: "Mamprusi Fongu",
  },
  {
    id: 10,
    name: "Sungtaaba",
  },
];

export const crops = ["Soya", "Groundnut"];

export const trackedActivities = {
  prePlanting: [],
  planting: [],
  weedControl: [],
  fertilizerApplication: [],
  harvesting: [],
  storage: [],
  sales: [],
  shipment: [],
  pestControl: [],
};

export let plantingActivitiesData = [];

export let prePlantingActivitiesData = [];
export let fertActivitiesData = [];
export let weedControlActivitiesData = [];
export let harvestingActivitiesData = [];
export let salesActivitiesData = [];

export const createFarmer = (newFarmer) => {
  farmersData = [...farmersData, newFarmer];
  console.log(farmersData);
  return farmersData;
};
export const updateFarmerDetails = (data) => {
  farmersData = farmersData.map((farmer) => {
    return farmer.id === data.id ? data : farmer;
  });
};
export const deleteFarmer = (id) => {
  farmersData = farmersData.filter((farmer) => farmer.id !== id);
};

//farms actions
export const createFarm = (firstFarm, secondFarm) => {
  if (secondFarm.name !== null) {
    farmsData = [...farmsData, firstFarm, secondFarm];
  } else {
    farmsData = [...farmsData, firstFarm];
  }
};

export const deleteFarm = (id) => {
  farmsData = farmsData.filter((farm) => farm.id !== id);
  console.log(farmsData);
};

export const updateFarmDetails = (data) => {
  farmsData = farmsData.map((farm) => {
    return farm.id === data.id ? data : farm;
  });
};

//activities

export const createPlantingActivities = (data) => {
  plantingActivitiesData = [...plantingActivitiesData, data];
};

export const createPrePlantingActivities = (data) => {
  prePlantingActivitiesData = [...prePlantingActivitiesData, data];
};

export const createFertilizerActivities = (data) => {
  fertActivitiesData = [...fertActivitiesData, data];
};

export const createWeedControlActivities = (data) => {
  weedControlActivitiesData = [...weedControlActivitiesData, data];
};

export const createHarvestingActivities = (data) => {
  harvestingActivitiesData = [...harvestingActivitiesData, data];
};

export const createSalesActivities = (data) => {
  salesActivitiesData = [...salesActivitiesData, data];
};
