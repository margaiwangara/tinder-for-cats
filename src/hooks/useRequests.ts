import { apiRequest } from '@services/request';
import { __DATA_COUNT__ } from '@src/constants';

export function useRequests() {
  const fetchCats = async () => {
    const response = await apiRequest('get', '/images/search', null, {
      params: {
        limit: __DATA_COUNT__,
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
