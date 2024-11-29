import { useEffect, useState } from "react";
import { getCategory } from "../services/Category";


export const useCategory = () => {
    const [category, setCategory] = useState<string[]>([]);

    const fetchCategory = async () => {
        const response = await getCategory()
        setCategory(response.data.items)
    }


    useEffect(() => {
        fetchCategory()
    }, []);


    return { category, setCategory, fetchCategory }
};

export default useCategory;