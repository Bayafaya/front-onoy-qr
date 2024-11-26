import { IFoodOrderResponse } from "./food";

export interface IOrder {
    payment_method: string;
    created_by: string;
    created_date: string;
    table_id: string;
    payment_status: string;
    qr_code_id: string;
    special_instructions: string;
    order_status: string;
    edited_by: string;
    total_bill: number;
    client_items: IClientItems;
    tip_amount: number;
    sk: string;
    edited_date: string;
    pk: string;
    type: string;
}

export interface IClientItems {
    client: {
        _id: string;
        avatar: string;
        color: string;
    }
    bucket: {
        items: IFoodOrderResponse[];
        total_original_cost: number;
        total_discount_cost: number;
    }
    confirmed: IConfirmedItems[]
}

export interface IConfirmedItems {
    client: IClientItems["client"];
    total: {
        total_original_cost: number;
        total_discount_cost: number;
    }
    confirmed: {
        items: IFoodOrderResponse[];
    }
}