import { useEffect, useState } from "react";
import { getBucket } from "../services/bucket";
import { IOrder } from "../interfaces/order";


export const useMyBucket = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IOrder>({} as IOrder);

    const fetchBucket = async () => {
        setIsLoading(true);
        const access = localStorage.getItem("access");
        const client_id = localStorage.getItem("client_id");
        try {
            const response = await getBucket({ qr_code_id: access || "", client_id: client_id || "" });
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchBucket()
    }, [])

    return { data, setData, isLoading, setIsLoading, fetchBucket }
}


export default useMyBucket;