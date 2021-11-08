const bestSellersState = 
{bestSellers:
    [{id:1,name:"Ultra Warm Booster",colors:["black","brown"],imgs:["/pictures/polar-black.jpg","/pictures/polar-brown.jpg"],price:"49.99",category:"jackets",gender:"male"},
    {id:2,name:"Big T Shirt",colors:["yellow","black","blue"],imgs:["/pictures/t-shirt-black.webp","/picturest-shirt-yellow.webp","/pictures/t-shirt-blue.jpg"],price:"44.99",category:"t-shirts",gender:"male"},
    {id:3,name:"Boomer Trousers",colors:["black","brown","pink"],imgs:["/pictures/trousers-black.png","/pictures/trousers-green.png","/pictures/trousers-pink.png"],price:"39.99",category:"trousers",gender:"male"},
    {id:4,name:"Best Boots",colors:["black","grey","blue"],imgs:["/pictures/boots-black.jpg","/pictures/boots-grey.jpg","/pictures/boots-blue.jpg"],price:"39.99",category:"boots",gender:"male"},
    {id:5,name:"Just Walkers",colors:["brown","grey","black"],imgs:["/pictures/boots2-brown.jpg","/pictures/boots2-grey.jpg","/pictures/boots2-black.jpg"],price:"29.99",category:"boots",gender:"male"},
    {id:6,name:"Alfa Male Shirt",colors:["red","black","grey"],imgs:["/pictures/t-shirt2-red.jpg","/pictures/t-shirt2-black.jpg","/pictures/t-shirt2-grey.jpg"],price:"24.99",category:"t-shirts",gender:"male"},
    {id:7,name:"Bright Jacket",colors:["turquoise","purple","pink"],imgs:["/pictures/jacket2-blue.jpg","/pictures/jacket2-purple.jpg","/pictures/jacket2-pink.jpg"],price:"59.99",category:"jackets",gender:"female"},
    {id:8,name:"Turbo Fast Joggers",colors:["black","brown","pink"],imgs:["/pictures/trousers2-black.jpg","/pictures/trousers2-green.jpg","/pictures/trousers2-pink.jpg"],price:"32.49",category:"trousers",gender:"male"}]}

export const bestSellersReducer = (state = bestSellersState,action)=>{
    switch(action.type){
        default: return state
    }
}