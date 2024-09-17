//Array destructure
/*
const arr = ["🍉","🍎","🍓","🍒","🍌"];

// without destructure

const watermelon = arr[0];
const apple = arr[1];
const strawberry = arr[2];
const cherry = arr[3];
const banana = arr[4];
//console.log(watermelon,apple,strawberry,cherry,banana);

// with destructring

//syntax:- const [variablename] = arrayname;

const [water,app,straw,cher,ban,orange="🍊"] = arr;
console.log(water,app,straw,cher,ban,orange);
*/

/*
//Object Destructure

let obj = {
    names: "John",
    age:30,
    address:{
        city:"chennai",
        state:"TamilNadu"
    }
}

// without destructure
console.log(obj.names);
console.log(obj.age);
console.log(obj.address.city)
console.log(obj.address.state);

// with destructring

//syntax:-  const {keyname} = objectname;

const {names,age,address:{city,state},phone=9876543210} = obj;
console.log(names,age,city,state,phone);
*/

/*
//Array of object Destructring
const shop = [
    {
        item:"brownrice",
        price: 100,
        category:"grains"
    },
    {
        item:"apple",
        price: 50,
        category:"fruits"
    },
    {
        item:"tomato",
        price: 10,
        category:"vegetable"
    }
]

// without destructure
console.log(shop);
console.log(shop[0].item,shop[0].price,shop[0].category);
console.log(shop[1].item,shop[1].price,shop[1].category);
console.log(shop[2].item,shop[2].price,shop[2].category);


// with destructring
// const [{keyname}]= array of objectname
const [{item,price,category}]= shop;
console.log(item,price,category);
*/

/*
//Object of Array Destructring
let obj = {
    names: "John",
    age:30,
    address:["chennai","TamilNadu","India"]
}

// with destructring
const {names,age,address:[city,state,country]} = obj
console.log(names,age,city,state,country);
*/

// Object Shorthand Property

//! without shorthand property

/*
const order = {
    id:1,
    pizza:"farmhouse"
}
console.log(order.id,order.pizza);
*/

//! using shorthand property
/*
const id = 2;
const pizza = "Margerita";
const order = {
    id,
    pizza
}
console.log(order);
*/

//! spread Operator

/*
const arr = ["guvi","geek","fsd"]
//console.log(...arr);

const arr1 = ["bob","sathya","alice"]
const arr2 = ["leo","smith"]
const arr3 = [...arr1,...arr2,...arr]
console.log(arr3);
*/

//! rest parameter
/*
function test (...c){
    let even =[]
    for(var i=0;i<c.length;i++){
        if(c[i]%2===0){
            even.push(c[i])
        }
    }
    return even
}
console.log(test(12,13,14,15,16));
*/
