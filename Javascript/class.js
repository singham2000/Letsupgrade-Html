class FoodItem {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

const pizza = new FoodItem('Pizza', 120, 1200);
console.log("name", pizza.name);
console.log("price", pizza.price);
console.log("calories", pizza.calories);