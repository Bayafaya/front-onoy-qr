import axios from "axios"
import { IBucketPost } from "../interfaces/bucket";

type Bucket = {
    qr_code_id: string;
    body?: IBucketPost;
    client_id?: string
}

type ConfirmBucket = {
    qr_code_id: string;
    body?: { [key: string]: number }[];
    client_id?: string
}

type deleteBucket = {
    qr_code_id: string;
    body?: {
        item: string;
    }
    client_id?: string
}

export const toBucket = async ({ qr_code_id, body, client_id }: Bucket) => {
    return await axios.put(`${import.meta.env.VITE_BACKEND_URL}/client/bucket/add`,
        body,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}

export const getBucketAndOrder = async ({ qr_code_id, client_id }: Bucket) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/client/order/get-my`,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}
export const getBucket = async ({ qr_code_id, client_id }: Bucket) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/client/bucket/get-my`,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}
export const getOrder = async ({ qr_code_id, client_id }: Bucket) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/client/order/get-my-confirm`,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}


export const confirmBucket = async ({ qr_code_id, body, client_id }: ConfirmBucket) => {
    return await axios.put(`${import.meta.env.VITE_BACKEND_URL}/client/bucket/confirm`,
        body,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}

export const countOfBucket = async ({ qr_code_id, client_id }: Bucket) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/client/bucket/count`,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}

export const deleteBucket = async ({ qr_code_id, client_id, body }: deleteBucket) => {
    return await axios.put(`${import.meta.env.VITE_BACKEND_URL}/client/bucket/delete`,
        body,
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}



