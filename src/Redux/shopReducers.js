const bestSellersState = {bestSellers:[{id:1,name:"Ultra warm booster",colors:["black","brown"],imgs:["/pictures/polar-black.jpg","/pictures/polar-brown.jpg"],price:"49.99",category:"jackets",gender:"male"}]}

export const bestSellersReducer = (state = bestSellersState,action)=>{
    switch(action.type){
        default: return state
    }
}