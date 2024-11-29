import axios from "axios"



export const getCategory = async () => {
    return await axios.get("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/admin/item/get-category",
        { params: { user_id: "us" } }
    )
}
