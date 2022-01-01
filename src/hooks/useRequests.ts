import { apiRequest } from '@services/request';

export function useRequests() {
  const fetchCats = async () => {
    const response = await apiRequest('get', '/images/search', null, {
      params: {
        limit: 50,
      },
      headers: {
        'x-api-key': process.env.API_KEY,
      },
    });

    return response;
  };

  return {
    fetchCats,
  };
}
