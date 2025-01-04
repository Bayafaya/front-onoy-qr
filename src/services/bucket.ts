import { IBucketPost } from "../interfaces/bucket";
import axiosInstance from "../utils/axiosInstance";

type Bucket = {
  body?: IBucketPost;
  client_id?: string;
};

type ConfirmBucket = {
  body?: { [key: string]: number }[];
  client_id?: string;
};

type deleteBucket = {
  body?: {
    item: string;
  };
  client_id?: string;
};

export const toBucket = async ({ body, client_id }: Bucket) => {
  return await axiosInstance.put(`/client/bucket/add`, body, {
    params: {
      client_id,
    },
  });
};

export const getBucketAndOrder = async ({ client_id }: Bucket) => {
  return await axiosInstance.get(`/client/order/get-my`, {
    params: {
      client_id,
    },
  });
};
export const getBucket = async ({ client_id }: Bucket) => {
  return await axiosInstance.get(
    `/client/bucket/get-my`,
    {
      params: {
        client_id,
      },
    }
  );
};
export const getOrder = async ({ client_id }: Bucket) => {
  return await axiosInstance.get(
    `/client/order/get-my-confirm`,
    {
      params: {
        client_id,
      },
    }
  );
};

export const confirmBucket = async ({ body, client_id }: ConfirmBucket) => {
  return await axiosInstance.put(
    `/client/bucket/confirm`,
    body,
    {
      params: {
        client_id,
      },
    }
  );
};

export const countOfBucket = async ({ client_id }: Bucket) => {
  return await axiosInstance.get(
    `/client/bucket/count`,
    {
      params: {
        client_id,
      },
    }
  );
};

export const deleteBucket = async ({ client_id, body }: deleteBucket) => {
  return await axiosInstance.put(
    `/client/bucket/delete`,
    body,
    {
      params: {
        client_id,
      },
    }
  );
};
