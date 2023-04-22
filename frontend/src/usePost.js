import { useState } from "react";
import axios from "axios";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  async function postData(payload) {
    setIsPending(true);
    try {
      const response = await axios.post(url, payload);
      setData(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsPending(false);
    }
  }

  return { data, isPending, isError, postData };
};
export default usePost;
