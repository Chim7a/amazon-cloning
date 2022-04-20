export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer (state, action) {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            //TO UPDATE THE USER WHEN THEY LOG IN AND OUT...
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
        // Logic for adding to basket...

            return {...state,
            basket: [...state.basket, action.item] 
        };
        case 'REMOVE_FROM_BASKET':
        // Logic for removing to basket...

        // Cloned basket...
        let  newBasket = [...state.basket];

        // if this product exist, finds an index(number), then do this...

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if (index >= 0) {
            // item exists in basket, remove it...
            newBasket.splice(index, 1);
        } else {
            console.warn (
                `cant remove product ${action.id} as its not in the basket`
            );
        }
        // setting the state of basket to newBasket...
            return { ...state, basket: newBasket };
        default:
        return state;
    }
}

export default reducer;