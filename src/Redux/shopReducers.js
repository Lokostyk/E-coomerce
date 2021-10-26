const bestSellersState = {bestSellers:[{id:1,name:"Ultra warm booster",img:"pictures/polar-brown.jpg",price:"49.99",category:"jackets"},{id:2,name:"warm booster",img:"pictures/polar-black.jpg",price:"49.99",category:"boots"}]}

export const bestSellersReducer = (state = bestSellersState,action)=>{
    switch(action.type){
        default: return state
    }
}