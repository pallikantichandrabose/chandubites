import { createSlice, configureStore } from '@reduxjs/toolkit';

// Product Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
      veg : [
      { name: "Potato", price: 100, image: "potato.jpeg" },
      { name: "Tomato", price: 80, image: "tomato.jpeg" },
      { name: "Carrot", price: 50, image: "carrot.jpeg" },
      { name: "Beetroot", price: 120, image: "beetroot.jpeg" },
      { name: "Cucumber", price: 65, image: "cucu.jpeg" },
      { name: "Radish", price: 45, image: "radish.jpeg" },
      { name: "Brinjal", price: 150, image: "brinjal.jpeg" },
      { name: "Pumpkin", price: 85, image: "pumpkin.jpeg" },
      { name: "Cabbage", price: 35, image: "cabbage.jpeg" },
      { name: "Capsicum", price: 170, image: "cap.jpeg" },
      { name: "Beans", price: 70, image: "beans.jpeg" },
      { name: "Spinach", price: 90, image: "spanish.jpeg" },
      { name: "Paneer", price: 90, image: "panner.jpeg" },
      { name: "Onion", price: 60, image: "onion.jpeg" },
      { name: "Garlic", price: 200, image: "garlic.jpeg" },
      { name: "Ginger", price: 150, image: "ginger.jpeg" },
      { name: "Broccoli", price: 180, image: "bro.jpeg" },
      { name: "Cauliflower", price: 100, image: "cauli.jpeg" },
      { name: "Bitter Gourd", price: 55, image: "bitter.jpeg" },
      { name: "Bottle Gourd", price: 50, image: "bottle.jpeg" },
      { name: "Lettuce", price: 120, image: "lettuce.jpeg" },
      { name: "Sweet Corn", price: 90, image: "sweetcorn.jpeg" },
      { name: "Green Peas", price: 130, image: "greenpeas.jpeg" },
      { name: "Spring Onion", price: 75, image: "spring.jpeg" },
      { name: "Zucchini", price: 160, image: "zucchini.jpeg" },
      { name: "Mushroom", price: 190, image: "mush.jpeg" },
      { name: "Drumstick", price: 85, image: "drum.jpeg" },
      { name: "Fenugreek Leaves", price: 60, image: "fenu.jpeg" },
      { name: "Coriander Leaves", price: 40, image: "cori.jpeg" },
      { name: "Mint Leaves", price: 50, image: "mint.jpeg" },
      { name: "Turnip", price: 70, image: "turnip.jpeg" },
      { name: "Yam", price: 90, image: "yam.jpeg" },
      { name: "Celery", price: 130, image: "celeri.jpeg" },
      { name: "Okra", price: 80, image: "okra.jpeg" },
      { name: "Chilli", price: 95, image: "greenchilli.jpeg" },
      { name: "Redchilli", price: 85, image: "redchilli.jpeg" },
      { name: "Asparagus", price: 175, image: "asparagus.jpeg" },
      { name: "Squash", price: 110, image: "squash.jpeg" },
      { name: "Radicchio", price: 140, image: "radicchio.jpeg" },
    ],
    
    nonVeg : [
      { name: "Fish", price: 300, image: "fish.jpeg" },
      { name: "Chicken", price: 120, image: "chicken.jpeg" },
      { name: "Mutton", price: 200, image: "mutton.jpeg" },
      { name: "Crabs", price: 560, image: "crabs.jpeg" },
      { name: "Prawns", price: 500, image: "prawns.jpeg" },
      { name: "Goat Curry", price: 350, image: "goat.jpeg" },
      { name: "Kababs", price: 230, image: "kababs.jpeg" },
      { name: "Egg Fry", price: 290, image: "egg.jpeg" },
      { name: "Chicken Manchuria", price: 550, image: "manchuria.jpeg" },
      { name: "Liver Fry", price: 200, image: "liver.jpeg" },
      { name: "Fried Fish", price: 400, image: "friedfish.jpg" },
      { name: "Butter Chicken", price: 450, image: "butterchicken.jpeg" },
      { name: "Tandoori Chicken", price: 600, image: "tandoori.jpeg" },
      { name: "Mutton Biryani", price: 700, image: "mutton biryani.jpeg" },
      { name: "Chicken Biryani", price: 350, image: "chickenbiryani.jpeg" },
      { name: "Prawn Curry", price: 500, image: "prawn curry.jpeg" },
      { name: "Crab Masala", price: 650, image: "crabmasala.jpeg" },
      { name: "Fish Curry", price: 320, image: "fishcurry.jpeg" },
      { name: "Mutton Korma", price: 550, image: "muttonkorma.jpeg" },
      { name: "Chicken 65", price: 400, image: "chicken65.jpeg" },
      { name: "Paya Soup", price: 350, image: "payasoup.jpeg" },
      { name: "Mutton Chops", price: 450, image: "muttonchops.jpeg" },
      { name: "Chicken Curry", price: 320, image: "chickencurry.jpeg" },
      { name: "Egg Curry", price: 250, image: "eggcurry.jpeg" },
      { name: "Beef Steak", price: 800, image: "beef.jpeg" },
      { name: "Gongura Mutton", price: 400, image: "gongura.jpeg" },
      { name: "Chicken Pakora", price: 300, image: "chickenpakora.jpg" },
      { name: "Mutton Rogan Josh", price: 650, image: "muttonjosh.jpeg" },
      { name: "Shrimp Tempura", price: 600, image: "tempura.jpeg" },
      { name: "Lobster Thermidor", price: 1200, image: "lobaster.jpeg" },
      { name: "Fish Tikka", price: 480, image: "fishtikka.jpeg" },
      { name: "Tandoori Prawns", price: 700, image: "tandooriprawns.jpeg" },
      { name: "Goat Kebab", price: 400, image: "goatkebab.jpeg" },
      { name: "Grilled Chicken", price: 500, image: "grilledchicken.jpeg" },
      { name: "Chicken Nuggets", price: 300, image: "chickennuggets.jpeg" },
      { name: "Baked Salmon", price: 900, image: "bakedsalmon.jpeg" },
      { name: "Duck Roast", price: 850, image: "duckroast.jpeg" },
      { name: "Crab Roast", price: 700, image: "crabroast.jpeg" },
      { name: "BBQ Chicken", price: 450, image: "bbq.jpeg" },
      { name: "Chicken Drumsticks", price: 380, image: "chickendrumstick.jpeg" },
      { name: "Mutton Keema", price: 600, image: "mutton keema.jpeg" },
     
    ],
   Sweets : [
    { name: "Badusha", price: 80, image: "badusha.jpeg" },
    { name: "Palacova", price: 100, image: "palacova.jpeg" },
    { name: "Mysore Pak", price: 90, image: "mysore.jpeg" },
    { name: "Laddu", price: 75, image: "laddu.jpeg" },
    { name: "Jalebi", price: 85, image: "jilebi.jpeg" },
    { name: "Halwa", price: 95, image: "halwa.jpeg" },
    { name: "Rasgulla", price: 70, image: "rasgulla.jpeg" },
    { name: "Gulab Jamun", price: 80, image: "gulab jamun.jpeg" },
    { name: "Soan Papdi", price: 65, image: "soan.jpeg" },
    { name: "Kaju Katli", price: 120, image: "kaju.jpeg" },
    { name: "Peda", price: 75, image: "peda.jpeg" },
    { name: "Malpua", price: 90, image: "malpua.jpeg" },
    { name: "Cham Cham", price: 85, image: "cham.jpeg" },
    { name: "Kalakand", price: 100, image: "kalkand.jpeg" },
    { name: "Sandesh", price: 95, image: "sandesh.jpeg" },
    { name: "Modak", price: 110, image: "modak.jpeg" },
    { name: "Puran Poli", price: 130, image: "poli.jpeg" },
    { name: "Milk Cake", price: 115, image: "milk.jpeg" },
    { name: "Coconut Barfi", price: 90, image: "barfi.jpeg" },
    { name: "Besan Laddu", price: 85, image: "laddu.jpeg" },
    { name: "Motichoor Laddu", price: 95, image: "motichur.jpeg" },
    { name: "Dry Fruit Halwa", price: 120, image: "dryfruit.jpeg" },
    { name: "Anjeer Barfi", price: 150, image: "anjeer.jpeg" },
    { name: "Khoya Barfi", price: 100, image: "khoya.jpeg" },
    { name: "Chhena Poda", price: 130, image: "chenna.jpeg" },
    { name: "Rabri", price: 140, image: "rabri.jpeg" },
    { name: "Ghevar", price: 160, image: "ghevar.jpeg" },
    { name: "Double Ka Meetha", price: 90, image: "double.jpeg" },
    { name: "Shahi Tukda", price: 100, image: "shahi.jpeg" },
    { name: "Kheer", price: 80, image: "kheer.jpeg" },
    { name: "Payasam", price: 90, image: "payasam.jpeg" },
    { name: "Phirni", price: 85, image: "phirni.jpeg" },
    { name: "Basundi", price: 110, image: "basundi.jpeg" },
    { name: "Balushahi", price: 95, image: "balu.jpeg" },
    { name: "Nankhatai", price: 75, image: "nan.jpeg" },
    { name: "Til Laddu", price: 70, image: "till.jpeg" },
    { name: "Gur Rewri", price: 80, image: "gur.jpeg" },
    { name: "Pista Barfi", price: 125, image: "pista.jpeg" },
    { name: "Rose Kalakand", price: 130, image: "rosekal.jpeg" },
    { name: "Chocolate Barfi", price: 140, image: "chocobarfi.jpeg" },
    { name: "Fruit Halwa", price: 150, image: "fruit.jpeg" },
    { name: "Carrot Halwa", price: 100, image: "carrothalwa.jpeg" },
    { name: "Chilakalu", price: 95, image: "chilakalu.jpeg" },
    { name: "Milk Mysore Pak", price: 120, image: "milkmysore.jpeg" },
    { name: "Ice Halwa", price: 140, image: "ice halwa.jpeg" },
   
   ]
  },

  reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decreament: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(item => item.name !== action.payload.name);
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    clearCart: () => []
  }
});

// Purchase Slice
const purchaseSlice = createSlice({
  name: 'purchasedetails',
  initialState: [],
  reducers: {
    addPurchaseDetails: (state, action) => {
      state.push({ ...action.payload });
    }
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("username") ? true : false,
    user: localStorage.getItem("username") || "",
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      localStorage.removeItem("username");
    }
  }
});

// Store Configuration
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchasedetails: purchaseSlice.reducer,
    auth: authSlice.reducer 
  }
});

// Export Actions
export const { addPurchaseDetails } = purchaseSlice.actions;
export const { addToCart, increament, decreament, remove, clearCart } = cartSlice.actions;
export const { login, logout } = authSlice.actions; 

export default store;
