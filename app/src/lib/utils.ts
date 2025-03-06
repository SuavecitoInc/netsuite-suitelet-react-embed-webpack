import { endpoint } from './const';

export const fetchAPI = async <P, T>(payload: P) => {
  console.log('ENDPOINT', endpoint);
  console.log('PAYLOAD', payload);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...payload }),
  });
  const data = (await response.json()) as T;

  return data;
};
