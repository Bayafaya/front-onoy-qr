import axios from "axios"


export const getAllFoods = async () => {
    return  await axios.get("https://j7fs17an5h.execute-api.eu-north-1.amazonaws.com/demo_onoy/admin/get_all_items?user_id=adil&info=limited")
}