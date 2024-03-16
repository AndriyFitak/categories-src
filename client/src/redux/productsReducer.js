import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Product 1", price: 100, color: "Red", brand: "Brand 1", category: "Phone" },
    { id: 2, name: "Product 2", price: 200, color: "Blue", brand: "Brand 2", category: "Laptop" },
    { id: 3, name: "Product 3", price: 150, color: "Green", brand: "Brand 3", category: "Tablet" },
    { id: 4, name: "Product 4", price: 180, color: "Black", brand: "Brand 3", category: "Computer" },
    { id: 5, name: "Product 5", price: 220, color: "White", brand: "Brand 4", category: "Phone" },
    { id: 6, name: "Product 6", price: 300, color: "Gray", brand: "Brand 5", category: "Laptop" },
    { id: 7, name: "Product 7", price: 120, color: "Yellow", brand: "Brand 6", category: "Tablet" },
    { id: 8, name: "Product 8", price: 250, color: "Orange", brand: "Brand 7", category: "Phone" },
    { id: 9, name: "Product 9", price: 180, color: "Purple", brand: "Brand 8", category: "Laptop" },
    { id: 10, name: "Product 10", price: 200, color: "Cyan", brand: "Brand 9", category: "Computer" },
    { id: 11, name: "Product 11", price: 150, color: "Magenta", brand: "Brand 10", category: "Phone" },
    { id: 12, name: "Product 12", price: 170, color: "Brown", brand: "Brand 11", category: "Laptop" },
    { id: 13, name: "Product 47", price: 220, color: "Pink", brand: "Brand 12", category: "Tablet" },
    { id: 14, name: "Product 48", price: 300, color: "Teal", brand: "Brand 13", category: "Computer" },
    { id: 15, name: "Product 49", price: 280, color: "Lime", brand: "Brand 14", category: "Phone" },
    { id: 16, name: "Product 50", price: 350, color: "Indigo", brand: "Brand 15", category: "Laptop" },
    { id: 17, name: "Product 51", price: 400, color: "Crimson", brand: "Brand 16", category: "Tablet" },
    { id: 18, name: "Product 52", price: 180, color: "Turquoise", brand: "Brand 17", category: "Computer" },
    { id: 19, name: "Product 53", price: 200, color: "Maroon", brand: "Brand 18", category: "Phone" },
    { id: 20, name: "Product 54", price: 220, color: "Azure", brand: "Brand 19", category: "Laptop" },
    { id: 21, name: "Product 55", price: 250, color: "Lavender", brand: "Brand 20", category: "Tablet" },
    { id: 22, name: "Product 56", price: 180, color: "Coral", brand: "Brand 21", category: "Computer" },
    { id: 23, name: "Product 57", price: 200, color: "Olive", brand: "Brand 22", category: "Phone" },
    { id: 24, name: "Product 58", price: 220, color: "Sky Blue", brand: "Brand 23", category: "Laptop" },
    { id: 25, name: "Product 59", price: 170, color: "Beige", brand: "Brand 24", category: "Tablet" },
    { id: 26, name: "Product 60", price: 150, color: "Salmon", brand: "Brand 25", category: "Computer" },
    { id: 27, name: "Product 61", price: 300, color: "Gold", brand: "Brand 26", category: "Phone" },
    { id: 28, name: "Product 62", price: 280, color: "Silver", brand: "Brand 27", category: "Laptop" },
    { id: 29, name: "Product 63", price: 350, color: "Bronze", brand: "Brand 28", category: "Tablet" },
    { id: 30, name: "Product 64", price: 180, color: "Platinum", brand: "Brand 29", category: "Computer" },
    { id: 31, name: "Product 65", price: 200, color: "Rose Gold", brand: "Brand 30", category: "Phone" },
    { id: 32, name: "Product 66", price: 220, color: "Diamond Black", brand: "Brand 31", category: "Laptop" },
    { id: 33, name: "Product 67", price: 250, color: "Sapphire Blue", brand: "Brand 32", category: "Tablet" },
    { id: 34, name: "Product 68", price: 180, color: "Emerald Green", brand: "Brand 33", category: "Computer" },
    { id: 35, name: "Product 69", price: 200, color: "Ruby Red", brand: "Brand 34", category: "Phone" },
    { id: 36, name: "Product 70", price: 220, color: "Amber Yellow", brand: "Brand 35", category: "Laptop" },
    { id: 37, name: "Product 71", price: 170, color: "Topaz Blue", brand: "Brand 36", category: "Tablet" },
    { id: 38, name: "Product 72", price: 150, color: "Pearl White", brand: "Brand 37", category: "Computer" },
    { id: 39, name: "Product 73", price: 300, color: "Obsidian Black", brand: "Brand 38", category: "Phone" },
    { id: 40, name: "Product 74", price: 280, color: "Opal Blue", brand: "Brand 39", category: "Laptop" },
    { id: 41, name: "Product 75", price: 350, color: "Granite Gray", brand: "Brand 40", category: "Tablet" },
    { id: 42, name: "Product 76", price: 180, color: "Sandstone Beige", brand: "Brand 41", category: "Computer" },
    { id: 43, name: "Product 77", price: 200, color: "Graphite Black", brand: "Brand 42", category: "Phone" },
    { id: 44, name: "Product 78", price: 220, color: "Titanium Silver", brand: "Brand 43", category: "Laptop" },
    { id: 45, name: "Product 79", price: 170, color: "Carbon Fiber", brand: "Brand 44", category: "Tablet" },
    { id: 46, name: "Product 80", price: 150, color: "Plastic White", brand: "Brand 45", category: "Computer" },
  ],
  basket: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket: (state,action) =>{
        state.basket.push(action.payload)
    },
    removeFromBasket: (state,action) => {
      state.basket = state.basket.filter(product => product.id !== action.payload.id)
    }
  },
});
export const { addToBasket , removeFromBasket } = productSlice.actions;
export default productSlice.reducer;
