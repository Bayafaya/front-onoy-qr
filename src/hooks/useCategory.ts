import { useEffect, useState } from "react";
import { getCategory } from "../services/Category";
import { ICategory } from "../interfaces/category";


export const useCategory = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [category, setCategory] = useState<ICategory[]>([]);

    const fetchCategory = async () => {
        try {
            setIsLoading(true)
            const response = await getCategory()
            setCategory(response.data.items)            
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchCategory()
    }, []);


    return { category, setCategory, fetchCategory, isLoading, setIsLoading }
};

export default useCategory;