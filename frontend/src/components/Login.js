import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  async function postData(payload) {
    setIsError(false);
    try {
      setIsPending(true);
      const response = await axios.post(url, payload);
      setData(response["data"]);
      await localStorage.setItem("userInfo", JSON.stringify(response["data"]));

      navigate("/videos");
    } catch (error) {
      setIsError(error);
    } finally {
      setIsPending(false);
    }
  }

  return { data, isPending, isError, postData };
};
export default Login;
