import reqwest from "reqwest";

const ACCEPT_KEY = "Accept";
const CONTENT_TYPE_KEY = "Content-Type";
const CROSS_ORIGIN_KEY = "crossOrigin";
const HEADERS_KEY = "headers";
const METHOD_KEY = "method";
const TYPE_KEY = "dataType";

const APPLICATION_JSON = "application/json";
const JSON_VALUE = "json";
const GET = "GET";
const POST = "POST";

class Rest {

    doGet(url, header) {
        const requestOptions = {
            url,
            [TYPE_KEY]: JSON_VALUE,
            [METHOD_KEY]: GET,
            [CROSS_ORIGIN_KEY]: process.env.NODE_ENV !== "production",
            [HEADERS_KEY]: {
                [ACCEPT_KEY]: APPLICATION_JSON,
                [CONTENT_TYPE_KEY]: APPLICATION_JSON,
                ...header
            }
        };
        return reqwest(requestOptions);
    }

    doPost(url, data, header) {
        const requestOptions = {
            url,
            [TYPE_KEY]: JSON_VALUE,
            [METHOD_KEY]: POST,
            [CROSS_ORIGIN_KEY]: process.env.NODE_ENV !== "production",
            [HEADERS_KEY]: {
                [ACCEPT_KEY]: APPLICATION_JSON,
                [CONTENT_TYPE_KEY]: APPLICATION_JSON,
                ...header
            },
            data
        };
        return reqwest(requestOptions);
    }
}

export default new Rest();
