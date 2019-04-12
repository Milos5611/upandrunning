import {LOAD_FILES_FROM_TAG,LOAD_TAGS} from "../action";
import {TYPE_KEY} from "../../common/constant";

export const FILE_LIST = "fileList";
export const TAG_LIST = "tagList";

const initialState = {
    [FILE_LIST]: undefined,
    [TAG_LIST]: undefined,

};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action[TYPE_KEY]) {
        case LOAD_TAGS:
            newState = {
                ...state,
                [TAG_LIST]: action[TAG_LIST]
            };
            break;
        case LOAD_FILES_FROM_TAG:
            newState = {
                ...state,
                [FILE_LIST]: action[FILE_LIST]
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
