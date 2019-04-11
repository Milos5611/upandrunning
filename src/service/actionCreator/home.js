import {

} from "../action/actions";
import {TYPE_KEY} from "../../common/constant";
import rest from "../../common/rest";

export function getUserProfileData() {
    return async (dispatch, getState) => {
        try {

        } catch (error) {
            throw new Error(error);
        }
    };
}

function dataSavedSuccessfully(error) {
    return {
        [TYPE_KEY]: USER_DATA_UPDATED,
        [ERROR]: error
    };
}
