import axiosInstance from "../utils/axiosInstance";

export const getCategory = async () => {
  return await axiosInstance.get(`/client/item/get-category`);
};
