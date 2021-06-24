import express from "express"

const itemsRouter = express.Router()

const cartItems = [
    {
        id: 1,
        product: "yarn",
        price: 10,
        quantity: 5

    },
    {
        id: 2,
        product: "red bull",
        price: 10,
        quantity: 3
    },{
        id: 3,
        product: "milk",
        price: 3,
        quanitity: 14
    }
]

itemsRouter.get("/cart-items", (req,res)=> {
    let filtered = cartItems
    const {maxPrice, prefix, pageSize}= req.query
    if(maxPrice){
filtered= filtered.filter((item) =>{
    return item.price < parseFloat(maxPrice as string)
})
    }
    res.json(filtered)
})

export default itemsRouter