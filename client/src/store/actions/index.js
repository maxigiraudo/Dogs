import axios from "axios";
// import { bindActionCreators } from "redux";
export const FETCH_DOGS = "FETCH_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const SORT = "SORT";
export const SORT_WEIGHT = "SORT_WEIGHT";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const FETCH_TEMPERAMENTS = "FETCH_TEMPERAMENTS";

export function fetchDogs() {
  return function (dispatch) {
    axios
      .get("https://dogs-api-back-end.herokuapp.com/api/dogs")
      .then((dogs) => {
        const data = dogs.data.map((dog) => {
          let temperament = dog.temperament;
          if (!temperament && dog.temperaments) {
            temperament = dog.temperaments.map((temp) => {
              return temp.name;
            });
          }
          return {
            ...dog,
            temperament,
          };
        });
        dispatch({
          type: FETCH_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchTemperaments() {
  return function (dispatch) {
    axios
      .get("https://dogs-api-back-end.herokuapp.com/api/temperaments")
      .then((temperaments) => {
        dispatch({
          type: FETCH_TEMPERAMENTS,
          payload: temperaments.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function searchDogs(search) {
  return function (dispatch) {
    axios
      .get("https://dogs-api-back-end.herokuapp.com/api/dogs?name=" + search)
      .then((dogs) => {
        const data = dogs.data.map((dog) => {
          let temperament = dog.temperament;
          if (!temperament && dog.temperaments) {
            temperament = dog.temperaments.map((temp) => {
              return temp.name;
            });
          }
          return {
            ...dog,
            temperament,
          };
        });
        dispatch({
          type: SEARCH_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function sort_weight(order) {
  return {
    type: SORT_WEIGHT,
    payload: order,
  };
}

export function filterxTemperaments(temperament) {
  return {
    type: FILTER_TEMPERAMENT,
    payload: temperament,
  };
}
