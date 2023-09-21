import fruits1 from "/bananna.jpg";
import fruits2 from "/apple.jpg";
import fruits3 from "/orange.jpg";
import fruits4 from "/green-grape.jpg";
import fruits5 from "/mango.jpg";
import fruits6 from "/pineapple.jpg";

import vegetables1 from "/potato.jpg";
import vegetables2 from "/tomato.jpg";
import vegetables3 from "/capsicum.jpg";
import vegetables4 from "/bhendi.jpg";
import vegetables5 from "/coriander.jpg";
import vegetables6 from "/green_chilli.jpg";



import dairy1 from "/butter.jpg";
import dairy2 from "/yougut.jpg";
import dairy3 from "/panner.jpg";
import dairy4 from "/cheese.jpg";
import dairy5 from "/amul-milk.jpg"; 
import dairy6 from "/amul-cream.jpg";

import condiments1 from "/haldi.jpg";
import condiments2 from "/soya_sauce.jpg";
import condiments3 from "/salt.jpg";
import condiments4 from "/masala_1.jpg";
import condiments5 from "/chatmasala.jpg"; 
import condiments6 from "/ketchup.jpg";

import biscuit1 from "/oreo.jpg";
import biscuit2 from "/goodday.jpg";
import biscuit3 from "/hide-seek.jpg";
import biscuit4 from "/nutrichoice.jpg";
import biscuit5 from "/marie.jpg";

import bakery1 from "/brown_bread.jpg";
import bakery2 from "/muffin.jpg";
import bakery3 from "/butter_cookies.jpg";
import bakery4 from "/chocolate_cookies.jpg";

import clean1 from "/tide.jpg";
import clean2 from "/surf.jpg";
import clean3 from "/baby_cleanser.jpg";
import clean4 from "/dishwash.jpg";
import clean5 from "/lizol.jpg"; 
import clean6 from "/harpic.jpg";

import drinks1 from "/real.jpg";
import drinks2 from "/tropicana.jpg";
import drinks3 from "/paper boat.jpg";
import drinks4 from "/natural.jpg";
import drinks5 from "/slice.jpg"; 
import drinks6 from "/maza.jpg";

// This class will Make Meal objects
class Meal {
    constructor(id, name, img, price,description) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description
        this.price = price;
    }
}

export const fakeMeals = {

  fruits: [
        new Meal(0, 'Banana', fruits1, 30,''),
        new Meal(1, 'Apple', fruits2, 70,''),
        new Meal(2, 'Orange', fruits3, 50,''),
        new Meal(3, 'Green Grape', fruits4, 40 ,''),
        new Meal(4, 'Mango', fruits5, 70,''),
        new Meal(5, 'Pineapple', fruits6, 100,'')
    ],

    vegetables: [
        new Meal(6, 'potato', vegetables1, 15, ''),
        new Meal(7, 'Tomato', vegetables2, 40,''),
        new Meal(8, 'Capsicum', vegetables3, 35 ,''),
        new Meal(9, 'Bhendi', vegetables4, 22,''),
        new Meal(10, 'Fresh Coriander', vegetables5, 12,''),
        new Meal(11, 'Green Chilli', vegetables6, 10,'')
    ],

 
    dairy: [
        new Meal(12, 'Amul Butter', dairy1, 9 ,''),
        new Meal(13, 'Yogurt', dairy2, 10 ,''),
        new Meal(14, 'Panner', dairy3, 6 ,''),
        new Meal(15, 'Amul Cheese', dairy4, 80 ,''),
        new Meal(16, 'Amul Milk', dairy5, 28 ,''),
        new Meal(17, 'Amul Cream', dairy6, 40 ,'')
],

biscuits: [
    new Meal(18, 'Oreo', biscuit1, 20,''),
    new Meal(19, 'Good Day', biscuit2, 10,''),
    new Meal(20, 'Hide & Seek', biscuit3, 30,''),
    new Meal(21, 'Nutrichoice', biscuit4, 20,''),
    new Meal(22, 'Marie', biscuit5, 10,''),
    new Meal(23, 'Marie', biscuit5, 10,''),
],

condiments: [
    new Meal(24, 'Haldi', condiments1, 20,''),
    new Meal(25, 'Soya Sauce', condiments2, 109,''),
    new Meal(26, 'Tata Salt', condiments3, 69,''),
    new Meal(27, 'Combo Masala', condiments4, 89,''),
    new Meal(28, 'Catch Masala', condiments5, 129,''),
    new Meal(29, 'Salt', condiments6, 99,'')

],
bakery: [
    new Meal(30, 'Brown Bread', bakery1, 99,''),
    new Meal(31, 'Muffins', bakery2, 109,''),
    new Meal(32, 'Butter Cookies', bakery3, 60 ,''),
    new Meal(33, 'Chocolate Cookies', bakery4, 199 ,''),
],

clean:[
    new Meal(34, 'Tide', clean1, 9.99,''),
    new Meal(35, 'Surf', clean2, 10.99 ,''),
    new Meal(36, 'Baby Cleanser', clean3, 6.99 ,''),
    new Meal(37, 'Dishwash', clean4, 8.99 ,''),
    new Meal(38, 'Lizol', clean5, 12.99 ,''),
    new Meal(39, 'Harpic', clean6, 9.99 , '')
],

drinks:[
    new Meal(40, 'Real', drinks1, 9.99,''),
    new Meal(41, 'Tropicana', drinks2, 10.99 ,''),
    new Meal(42, 'Paper Boat', drinks3, 6.99 ,''),
    new Meal(43, 'Natural', drinks4, 8.99 ,''),
    new Meal(44, 'Slice', drinks5, 12.99 ,''),
    new Meal(45, 'Maza', drinks6, 9.99 , ''),
],

}





// Combining all meals into a single array for effortless searching
export const allMeals = fakeMeals.fruits.concat(fakeMeals.vegetables, fakeMeals.dairy,fakeMeals.biscuits,fakeMeals.condiments,fakeMeals.clean,fakeMeals.bakery,fakeMeals.drinks);




// Set Backup on Local Storage Function //
export const localStorageHandler = (action, key, target) => {
    // Set to LocalStorage
    if (action === 'set') {
        localStorage.setItem('redOnion_' + key, JSON.stringify(target))
    }
    // Get from LocalStorage
    else if (action === 'get') {
        return JSON.parse(localStorage.getItem('redOnion_' + key))
    }
    // Remove From LocalStorage
    else if (action === 'remove') {
        localStorage.removeItem('redOnion_' + key)
    }
}