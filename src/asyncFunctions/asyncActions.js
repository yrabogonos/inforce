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

export const postData = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log('Object added successfully:', responseData);
    } catch (error) {
      console.error('Error adding object:', error);
    }
  };