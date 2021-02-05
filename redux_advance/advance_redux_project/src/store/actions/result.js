import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
    //const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        /*
        a thunk middleware hozzáadaásával tudunk asyncron kódot hozzáadni a redux kódunkhoz
        thunk az index.js-ben található
        */
        setTimeout(() => {
            /* getState segítségével az előző állpottal tudunk dolgozni */
            /* lehetőség szerint ne tegyünk logikát ebbe a részbeß */
            /* const oldCounter = getState().ctr.counter;
            console.log(oldCounter) */
            dispatch(saveResult(result));
        }, 2000);
    };
};
export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};