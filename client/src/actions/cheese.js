export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheeses => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = error => ({
  type: FETCH_CHEESE_ERROR,
  error
});

export const fetchCheeses = () => dispatch => {
  const url = 'https://cheese-list-fullstack.herokuapp.com/api/cheeses';

  dispatch(fetchCheeseRequest());

  return fetch(url).then(response => {
    if(!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(cheeses => {
    return dispatch(fetchCheeseSuccess(cheeses));
  }).catch(error =>
      dispatch(fetchCheeseError(error))
    );
};

export const postCheese = cheese => dispatch => {
  const url = 'https://cheese-list-fullstack.herokuapp.com/api/cheeses';

  dispatch(fetchCheeseRequest());

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json' },
    body: JSON.stringify({cheese})
  }).then(response => {
    if(!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(cheeses => {
    return dispatch(fetchCheeseSuccess(cheeses));
  }).catch(error =>
      dispatch(fetchCheeseError(error))
    );
};
