const initialState = {
    nameProp: '',
    address: '',
    city: '',
    stateName: '',
    zip: 0, 
    image_url: '',
    mortgage: 0,
    rent: 0,
};

const UPDATE_HOUSE = 'UPDATE HOUSE';
// const UPDATE_NAME = 'UPDATE NAME';
// const UPDATE_ADDRESS = 'UPDATE ADDRESS';
// const UPDATE_CITY = 'UPDATE CITY';
// const UPDATE_STATE = 'UPDATE STATE';
// const UPDATE_ZIP = 'UPDATE ZIP';
const UPDATE_IMAGE_URL = 'UPDATE IMAGE_URL';
const UPDATE_MORTGAGE = 'UPDATE MORTGAGE';
const UPDATE_RENT = 'UPDATE RENT';

function reducer (state = initialState, action){
    switch (action.type){
        case UPDATE_HOUSE:
            return Object.assign({}, state, {house: action.payload})
        // case UPDATE_NAME:
        //     return Object.assign({}, state, {name: action.payload})
        // case UPDATE_ADDRESS:
        //     return Object.assign({}, state, {address: action.payload})
        // case UPDATE_CITY:
        //     return Object.assign({}, state, {city: action.payload})
        // case UPDATE_STATE:
        //     return Object.assign({}, state, {stateName: action.payload})
        // case UPDATE_ZIP:
        //     return Object.assign({}, state, {zip: action.payload})
        // case UPDATE_IMAGE_URL:
            // return Object.assign({}, state, {image_url: action.payload})
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload})
        case UPDATE_RENT:
            return Object.assign({}, state, {rent: action.payload})
        default: return state;
    }
}
export function updateHouse ( nam, adr, cty, sta, zip ){
    return {
        type: UPDATE_HOUSE,
        payload: {
            nameProp: nam,
            address: adr,
            city: cty,
            stateName: sta,
            zip: zip
        }
    }
}
// export function updateName ( name ){
//     return {
//         type: UPDATE_NAME,
//         payload: name
//     }
// }
// export function updateAddress ( address ){
//     return {
//         type: UPDATE_ADDRESS,
//         payload: address
//     }
// }
// export function updateCity ( city ){
//     return {
//         type: UPDATE_CITY,
//         payload: city
//     }
// }
// export function updateState ( stateName ){
//     return {
//         type: UPDATE_STATE,
//         payload: stateName
//     }
// }
// export function updateZip ( zip ){
//     return {
//         type: UPDATE_ZIP,
//         payload: zip
//     }
// }
export function updateImageUrl ( image_url ){
    return {
        type: UPDATE_IMAGE_URL,
        payload: image_url
    }
}
export function updateMortgage ( mortgage ){
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateRent ( rent ){
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export default reducer;