import {
    GET_USER_DATA,
    UPDATE_USER_ADDRESS,
    UPDATE_USER_BILLING_ADDRESS,
    UPDATE_USER_BILLING_STATE,
    UPDATE_USER_BILLING_ZIP_CODE,
    UPDATE_USER_DOB,
    UPDATE_USER_FIRST_NAME,
    UPDATE_USER_LAST_NAME,
    UPDATE_USER_PASSWORD,
    UPDATE_USER_PHONE,
    UPDATE_USER_STATE,
    UPDATE_USER_ZIP_CODE, USER_DATA_UPDATED
} from "../action/actions";
import {TYPE_KEY} from "../../common/constant";

export const FIRST_NAME = "firstName";
export const LAST_NAME = "lastName";
export const EMAIL = "email";
export const ERROR = "error";
export const PHONE = "phone";
export const PASSWORD = "password";
export const ROLE = "role";
export const ADDRESS = "address";
export const STATE = "state";
export const ZIP_CODE = "zipCode";
export const DATE_OF_BIRTH = "dateOfBirth";
export const BILLING_STATE = "billingState";
export const BILLING_ADDRESS = "billingAddress";
export const BILLING_ZIP_CODE = "billingZipCode";

const initialState = {
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [EMAIL]: "",
    [PHONE]: "",
    [PASSWORD]: "",
    [ROLE]: "",
    [ADDRESS]: "",
    [STATE]: undefined,
    [ZIP_CODE]: "",
    [BILLING_STATE]: "",
    [BILLING_ADDRESS]: "",
    [BILLING_ZIP_CODE]: "",
    [ERROR]: "",
};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action[TYPE_KEY]) {
        case GET_USER_DATA:
            newState = {
                ...state,
                [FIRST_NAME]: action[FIRST_NAME],
                [LAST_NAME]: action[LAST_NAME],
                [EMAIL]: action[EMAIL],
                [PHONE]: action[PHONE],
                [PASSWORD]: action[PASSWORD],
                [ROLE]: action[ROLE],
                [DATE_OF_BIRTH]: action[DATE_OF_BIRTH],
                [ZIP_CODE]: action[ZIP_CODE],
                [STATE]: action[STATE],
                [ADDRESS]: action[ADDRESS],
                [BILLING_STATE]: action[BILLING_STATE],
                [BILLING_ADDRESS]: action[BILLING_ADDRESS],
                [BILLING_ZIP_CODE]: action[BILLING_ZIP_CODE]
            };
            break;
        case UPDATE_USER_STATE:
            newState = {
                ...state,
                [STATE]: action[STATE]
            };
            break;
        case UPDATE_USER_ADDRESS:
            newState = {
                ...state,
                [ADDRESS]: action[ADDRESS]
            };
            break;
        case UPDATE_USER_ZIP_CODE:
            newState = {
                ...state,
                [ZIP_CODE]: action[ZIP_CODE]
            };
            break;
        case UPDATE_USER_LAST_NAME:
            newState = {
                ...state,
                [LAST_NAME]: action[LAST_NAME]
            };
            break;
        case UPDATE_USER_FIRST_NAME:
            newState = {
                ...state,
                [FIRST_NAME]: action[FIRST_NAME]
            };
            break;
        case UPDATE_USER_DOB:
            newState = {
                ...state,
                [DATE_OF_BIRTH]: action[DATE_OF_BIRTH]
            };
            break;
        case UPDATE_USER_PHONE:
            newState = {
                ...state,
                [PHONE]: action[PHONE]
            };
            break;
        case UPDATE_USER_PASSWORD:
            newState = {
                ...state,
                [PASSWORD]: action[PASSWORD]
            };
            break;
        case UPDATE_USER_BILLING_STATE:
            newState = {
                ...state,
                [BILLING_STATE]: action[BILLING_STATE]
            };
            break;
        case UPDATE_USER_BILLING_ADDRESS:
            newState = {
                ...state,
                [BILLING_ADDRESS]: action[BILLING_ADDRESS]
            };
            break;
        case UPDATE_USER_BILLING_ZIP_CODE:
            newState = {
                ...state,
                [BILLING_ZIP_CODE]: action[BILLING_ZIP_CODE]
            };
            break;
        case USER_DATA_UPDATED:
            newState = {
                ...state,
                [ERROR]: action[ERROR]
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
