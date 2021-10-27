const bestSellersState = {bestSellers:[{id:1,name:"Ultra warm booster",img:"pictures/polar-brown.jpg",price:"49.99",category:"jackets",gender:"male"},{id:2,name:"warm booster",img:"pictures/polar-black.jpg",price:"49.99",category:"boots",gender:"male"}]}

export const bestSellersReducer = (state = bestSellersState,action)=>{
    switch(action.type){
        default: return state
    }
}