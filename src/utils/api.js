const baseUrl = 'http://localhost:3001';

//
export const checkResponse = res => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getHeaders = token => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };
  return headers;
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`).then(checkResponse);
};

export const getCurrentUser = token => {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      ...getHeaders(token),
    },
  }).then(checkResponse);
};

export const deleteItemById = (id, token) => {
  return fetch(`http://localhost:3001/items/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const addItem = ({ name, weather, imageUrl }, token) => {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      ...getHeaders(token),
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkResponse);
};

export const updateUser = (FormData, token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      ...getHeaders(token),
    },
    body: JSON.stringify(FormData),
  }).then(checkResponse);
};

export const likeCard = (itemId, isLiked, token) => {
  const method = isLiked ? 'DELETE' : 'PUT';
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: method,
    headers: {
      ...getHeaders(token),
    },
  }).then(checkResponse);
};
