//External Modules
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsPending(false);
        }
      }
      fetchData();
    }, [url]);

  return { data, isPending, error };
}
export default useFetch;