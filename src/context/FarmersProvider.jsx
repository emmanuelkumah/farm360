import { createContext, useContext, useReducer } from "react";
import { farmersData, trackedActivities } from "../data/dummyData";

const FarmersContext = createContext();

const ActivitiesContext = createContext();

// const farmContext = createContext(null);

const farmersReducer = (data, action) => {
  switch (action.type) {
    case "ADD_FARMER":
      return {
        ...data,
        farmers: [...data.farmers, action.farmer],
      };
    case "DELETE_FARMER":
      return {
        ...data,
        farmers: data.farmers.filter((farmer) => farmer.id !== action.id),
      };
    case "UPDATE_FARMER":
      return {
        ...data,
        farmers: data.farmers.map((farmer) => {
          return farmer.id === action.payload.farmerId
            ? action.payload.updateFarmer
            : farmer;
        }),
      };

    default:
      return data;
  }
};

const activitiesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PrePlantingActivity":
      return {
        ...state,
        prePlanting: [...state.prePlanting, action.payload],
      };
    case "Add_PlantingActivity":
      return {
        ...state,
        planting: [...state.planting, action.payload],
      };

    case "Add_WeedControlActivity":
      return {
        ...state,
        weedControl: [...state.weedControl, action.payload],
      };
    case "Add_FertilizerActivity":
      return {
        ...state,
        fertilizerApplication: [...state.fertilizerApplication, action.payload],
      };
    case "Add_HarvestingActivity":
      return {
        ...state,
        harvesting: [...state.harvesting, action.payload],
      };
    case "Add_StorageActivity":
      return {
        ...state,
        storage: [...state.storage, action.payload],
      };
    case "Add_SalesActivity":
      return {
        ...state,
        sales: [...state.sales, action.payload],
      };
    case "Add_ShipmentActivity":
      return {
        ...state,
        shipment: [...state.shipment, action.payload],
      };
    case "Add_PestControlActivity":
      return {
        ...state,
        pestControl: [...state.pestControl, action.payload],
      };
      break;

    default:
      break;
  }
};
const FarmersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(farmersReducer, farmersData);
  const [activitiesState, dispatchActivity] = useReducer(
    activitiesReducer,
    trackedActivities
  );

  return (
    <>
      <FarmersContext.Provider value={{ state, dispatch }}>
        <ActivitiesContext.Provider
          value={{ activitiesState, dispatchActivity }}
        >
          {children}
        </ActivitiesContext.Provider>
      </FarmersContext.Provider>
    </>
  );
};

export default FarmersProvider;

export const useFarmersContext = () => useContext(FarmersContext);

export const useActivitiesContext = () => useContext(ActivitiesContext);
