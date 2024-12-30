import axios from "axios"


export const getAllFoods = async () => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/item/get_all`,
        { params: { user_id: "us", info: "limited" } }
    )
}
export const getFoodByCategory = async (category: string) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/item/get-by-category?`,
        { params: { user_id: "us", info: "limited", category } }
    )
}

export const getFoodById = async (id: string) => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/item/get_single`,
        { params: { user_id: "us", pk: id } }
    )
}