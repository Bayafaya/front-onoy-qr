import axiosInstance from "../utils/axiosInstance";


export const getFoodByCategory = async (category: string) => {
  return await axiosInstance.get(`/client/item/get-by-category`, {
    params: { info: "limited", category },
  });
};

export const getFoodById = async (id: string) => {
  return await axiosInstance.get(`/client/item/get-single`, {
    params: { pk: id },
  });
};
