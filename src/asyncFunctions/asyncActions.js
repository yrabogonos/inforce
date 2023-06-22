import { setInitialState } from "../Redux/products_reducer";

export const fetchInitialState = () => {
    return dispatch => {
      fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => {
          dispatch(setInitialState(data));
          console.log('Data:', data)
        })
        .catch(error => {
          console.error('Error fetching initial state:', error);
        });
    };
  };