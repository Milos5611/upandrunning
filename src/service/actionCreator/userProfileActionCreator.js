import {
    ADDRESS,
    BILLING_ADDRESS,
    BILLING_STATE,
    BILLING_ZIP_CODE,
    DATE_OF_BIRTH,
    EMAIL,
    ERROR,
    FIRST_NAME,
    LAST_NAME,
    PASSWORD,
    PHONE,
    ROLE,
    STATE,
    ZIP_CODE
} from "../reducer/userProfile";
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
    UPDATE_USER_ZIP_CODE,
    USER_DATA_UPDATED
} from "../action/actions";
import {beginLoading, endLoading} from "./loadingSpinnerActionCreator";
import {TYPE_KEY} from "../../common/constant";
import rest from "../../common/rest";

export function updateUserData() {
    return async (dispatch, getState) => {
        const userId = getState().login.userId;
        const userProfile = getState().userProfile;
        try {
            dispatch(beginLoading());
            await rest.doPatch(
                `${window.com.fowler.API_URL}/users/${userId}`,
                JSON.stringify(userProfile),
                {Authorization: `Bearer ${getState().login.token}`}
            );
            dispatch(dataSavedSuccessfully("Change saved successfully."));
        } catch (error) {
            dispatch(dataSavedSuccessfully("Please check your input and try again."));
            throw new Error(error);
        } finally {
            dispatch(endLoading());
        }
    };
}

export function getUserProfileData() {
    return async (dispatch, getState) => {
        try {
            dispatch(beginLoading());
            const user = await rest.doGet(
                `${window.com.fowler.API_URL}/users/${getState().login.userId}`,
                {Authorization: `Bearer ${getState().login.token}`}
            );
            dispatch(receivedUserDataSuccessfully(user));
        } catch (error) {
            throw new Error(error);
        } finally {
            dispatch(endLoading());
        }
    };
}

function dataSavedSuccessfully(error) {
    return {
        [TYPE_KEY]: USER_DATA_UPDATED,
        [ERROR]: error
    };
}

export function receivedUserDataSuccessfully(data) {
    return {
        [TYPE_KEY]: GET_USER_DATA,
        [FIRST_NAME]: data.firstName,
        [LAST_NAME]: data.lastName,
        [EMAIL]: data.email,
        [PHONE]: data.phone,
        [ADDRESS]: data.address,
        [DATE_OF_BIRTH]: data.dateOfBirth,
        [ZIP_CODE]: data.zipCode,
        [STATE]: data.state,
        [ROLE]: data.role,
        [BILLING_ZIP_CODE]: data.billingZipCode,
        [BILLING_STATE]: data.billingState,
        [BILLING_ADDRESS]: data.billingAddress,
    };
}

export function updateUserProfileState(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_STATE,
        [STATE]: value
    };
}

export function updateUserProfileAddress(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_ADDRESS,
        [ADDRESS]: value
    };
}

export function updateUserProfileDob(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_DOB,
        [DATE_OF_BIRTH]: value
    };
}

export function updateUserProfileFirstName(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_FIRST_NAME,
        [FIRST_NAME]: value
    };
}

export function updateUserProfileLastName(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_LAST_NAME,
        [LAST_NAME]: value
    };
}

export function updateUserProfileZip(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_ZIP_CODE,
        [ZIP_CODE]: value
    };
}

export function updateUserProfilePhone(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_PHONE,
        [PHONE]: value
    };
}

export function updateUserProfilePassword(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_PASSWORD,
        [PASSWORD]: value
    };
}

export function updateUserProfileBillingState(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_BILLING_STATE,
        [BILLING_STATE]: value
    };
}

export function updateUserProfileBillingZipCode(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_BILLING_ZIP_CODE,
        [BILLING_ZIP_CODE]: value
    };
}

export function updateUserProfileBillingAddress(value) {
    return {
        [TYPE_KEY]: UPDATE_USER_BILLING_ADDRESS,
        [BILLING_ADDRESS]: value
    };
}
