export const initialState = {
    basket: [
        {id: "124878638723632233",
        title: "Rolex watch",
        price: 12622.22,
        rating: 5,
        image: "https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-cover-m126333-0010_1601ac_003_portrait.jpg?imwidth=420",
 },   
        {id: "124878638723632233",
        title: "Rolex watch",
        price: 12622.22,
        rating: 5,
        image: "https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-cover-m126333-0010_1601ac_003_portrait.jpg?imwidth=420",
 },   

],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer (state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
        // Logic for adding to basket.

            return {...state,
            basket: [...state.basket, action.item] 
        };
        case 'REMOVE_FROM_BASKET':
        // Logic for removing to basket.

        // Cloned basket
        let  newBasket = [...state.basket];

        // if this product exist, finds an index(number), then do this.

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if (index >= 0) {
            // item exists in basket, remove it
            newBasket.splice(index, 1);
        } else {
            console.warn (
                `cant remove product (id: ${action.id}) as its not in the basket`
            );
        }
        // setting the state of basket to newBasket
            return { ...state, basket: newBasket, };
        default:
        return state;
    }
}

export default reducer;