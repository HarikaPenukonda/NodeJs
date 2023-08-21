const PizzaShop  = require("./pizza-shop")
const DrinkMachine = require("./drink-machine")

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on("order",(size,topping)=>{
    console.log(`order-recieved!, Baking a ${size} pizza with ${topping}`)
    drinkMachine.serveDrink(size)
})

pizzaShop.order("large","pineapple")
pizzaShop.displayOrderNumber()

pizzaShop.order("small","mushroom")
pizzaShop.displayOrderNumber()