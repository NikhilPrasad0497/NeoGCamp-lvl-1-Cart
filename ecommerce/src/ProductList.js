import { createContext, useContext} from "react";

export const ProductList = createContext()
const product = [
    {
        id:"id001",
        name:"Apple",
        description: "Shimla Apple",
        img: "https://www.bigbasket.com/media/uploads/p/s/40033819_27-fresho-apple-shimla.jpg",
        qty: 0
    },
    {
        id:"id002",
        name:"Grapes",
        description: "Grapes - Sharad Seedless",
        img: "https://www.bigbasket.com/media/uploads/p/s/10000295_22-fresho-grapes-sharad-seedless.jpg",
        qty:0
    },
    {
        id:"id003",
        name:"Raisins",
        description: "Raisins/Ona Drakshi - Indian",
        img: "https://www.bigbasket.com/media/uploads/p/s/40021404_10-bb-popular-raisinskishmish-indian.jpg",
        qty:0
    },
    {
        id:"id004",
        name:"Grape Fruit",
        description: "Grape Fruit - Indian",
        img: "https://www.bigbasket.com/media/uploads/p/s/30005030_9-fresho-grape-fruit-indian.jpg",
        qty:0
    }
]

export function ProductListProvider({children}){
    return (
        <ProductList.Provider value={{product}}>
            {children}
        </ProductList.Provider>
    )
}

export function useProductList(){
    return useContext(ProductList)
}