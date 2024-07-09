import axios from "axios";

export const axiosCommon = axios.create({
  baseURL: "https://handmade-craft-store-server-side.vercel.app",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
