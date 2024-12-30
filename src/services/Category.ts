import axios from "axios"



export const getCategory = async () => {
    return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/item/get-category`,
        { params: { user_id: "us" } }
    )
}
