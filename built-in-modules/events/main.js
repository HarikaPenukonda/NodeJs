const PizzaShop  = require("./pizza-shop")

const pizzaShop = new PizzaShop()

pizzaShop.on("order",(size,topping)=>{
    console.log(`order-recieved!, Baking a ${size} pizza with ${topping}`)
})

pizzaShop.order("large","pineapple")
pizzaShop.displayOrderNumber()

pizzaShop.order("small","mushroom")
pizzaShop.displayOrderNumber()