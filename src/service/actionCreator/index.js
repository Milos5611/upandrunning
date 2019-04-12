import {
    FILE_LIST,
    TAG_LIST
} from "../reducer";
import {
    LOAD_FILES_FROM_TAG,
    LOAD_TAGS
} from "../action";
import {TYPE_KEY} from "../../common/constant";

import rest from "../../common/rest";

export function loadListOfTags() {
    return async (dispatch) => {
        try {
            const tagList = await rest.doGet(`${window.com.upandrunning.API_URL}/tags`);
            dispatch(tagsReceivedSuccessfully(tagList));
        } catch (error) {
            throw new Error(error);
        }
    };
}

export function loadListOfFiles(page, tagName) {
    return async (dispatch) => {
        try {
            const fileList = await rest.doGet(`${window.com.upandrunning.API_URL}/files?page=${page}&tag=${tagName}`);
            dispatch(filesReceivedSuccessfully(fileList));
        } catch (error) {
            throw new Error(error);
        }
    };
}

function tagsReceivedSuccessfully(tagList) {
    return {
        [TYPE_KEY]: LOAD_TAGS,
        [TAG_LIST]: tagList
    };
}

function filesReceivedSuccessfully(fileList) {
    return {
        [TYPE_KEY]: LOAD_FILES_FROM_TAG,
        [FILE_LIST]: fileList
    };
}
