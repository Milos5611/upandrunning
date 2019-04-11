import {} from "../action/actions";
import {TYPE_KEY} from "../../common/constant";

export const FIRST_NAME = "firstName";
export const LAST_NAME = "lastName";

const initialState = {
    [FIRST_NAME]: "",
    [LAST_NAME]: "",

};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action[TYPE_KEY]) {
        case UPDATE_USER_STATE:
            newState = {
                ...state,
                [STATE]: action[STATE]
            };
            break;
        default:
            newState = {
                ...state
            };
            break;
    }

    return newState;
}
