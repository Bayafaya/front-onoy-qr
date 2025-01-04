import { useEffect, useState } from "react";
import { IOrder } from "../interfaces/order";
import { getBucketAndOrder } from "../services/bucket";


export const useOrder = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IOrder>({} as IOrder);

    const fetchOrder = async () => {
        setIsLoading(true);
        const client_id = localStorage.getItem("client_id");
        try {
            const response = await getBucketAndOrder({ client_id: client_id || "" });
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchOrder()
    }, [])

    return { data, setData, isLoading, setIsLoading, fetchOrder }
}


export default useOrder;