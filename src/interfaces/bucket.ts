
export interface IBucketPost {
    items: IBucketItem[]
    discount: number
}

interface IBucketItem {
    id: string,
    option: string
    modifier: string[],
    count: number
}