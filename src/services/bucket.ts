import axios from "axios"
import { IBucketPost } from "../interfaces/bucket";

type Bucket = {
    qr_code_id: string;
    body?: IBucketPost;
    client_id?: string
}

export const toBucket = async ({ qr_code_id, body, client_id }: Bucket) => {
    return await axios.put("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/client/bucket/add",
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
    return await axios.get("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/client/order/get-my",
        {
            params: {
                qr_code_id,
                client_id
            }
        }
    )
}