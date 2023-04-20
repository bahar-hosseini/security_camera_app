import { useState } from "react";
import axios from "axios";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  async function postData(payload) {
    setIsPending(true);
    try {
      const response = await axios.post(url, payload);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsPending(false);
    }
  }

  return { data, isPending, error, postData };
};
export default usePost;
