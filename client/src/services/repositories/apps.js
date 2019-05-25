import api from '@/services/api';

export default {

  fetchAll()
  {
    return api
      .get("http://localhost:30000/api/applications")
      .then((response) => {
        return response.data;
      });
  },
};
