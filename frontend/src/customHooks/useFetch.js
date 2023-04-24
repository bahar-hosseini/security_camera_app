//External Modules
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, config) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url, config);
        setData(response.data);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsPending(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isPending, isError };
};
export default useFetch;
