import { useEffect, useState } from "react";
import { getOrder } from "../services/bucket";
import { IOrder } from "../interfaces/order";


export const useConfirmed = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IOrder>({} as IOrder);

    const fetchConfirmed = async () => {
        setIsLoading(true);
        const access = localStorage.getItem("access");
        const client_id = localStorage.getItem("client_id");
        try {
            const response = await getOrder({ qr_code_id: access || "", client_id: client_id || "" });
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchConfirmed()
    }, [])

    return { data, setData, isLoading, setIsLoading, fetchConfirmed }
}


export default useConfirmed;