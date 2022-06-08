import { ASCENDENTE, DESCENDENTE } from "../../constantes/sort";
import {
  FETCH_DOGS,
  FILTER_TEMPERAMENT,
  SEARCH_DOGS,
  SORT,
  SORT_WEIGHT,
} from "../actions";

const initialState = {
  dogs: [],
  filteredDogs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload,
      };
    case SEARCH_DOGS:
      return {
        ...state,
        filteredDogs: action.payload,
      };
    case SORT:
      let orderedDogs = [...state.dogs];

      orderedDogs = orderedDogs.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredDogs: orderedDogs,
      };
    case SORT_WEIGHT:
      let orderedWeight = [...state.dogs];

      orderedWeight = orderedWeight.sort((a, b) => {
        if (a.weight < b.weight) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.weight > b.weight) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredDogs: orderedWeight,
      };
    case FILTER_TEMPERAMENT:
      return {
        ...state,

        filteredDogs: action.payload,
      };

    default:
      return state;
  }
}
