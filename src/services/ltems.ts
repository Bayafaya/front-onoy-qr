import axios from "axios"


export const getAllFoods = async () => {
    return await axios.get("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/admin/item/get_all",
        { params: { user_id: "us", info: "limited" } }
    )
}
export const getFoodByCategory = async (category: string) => {
    return await axios.get("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/admin/item/get-by-category?",
        { params: { user_id: "us", info: "limited", category } }
    )
}

export const getFoodById = async (id: string) => {
    return await axios.get("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/admin/item/get_single",
        { params: { user_id: "us", pk: id } }
    )
}