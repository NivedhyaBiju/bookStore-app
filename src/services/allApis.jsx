import { base_url } from "./baseurl";
import { commonRequest } from "./commonStructure";

// add book - (title, cover image, author, publishedIn, preface)
export const addBookApi = async(bodyData) => {
    return await commonRequest('POST', `${base_url}/books`, bodyData)
}

// access book
export const accessBookApi = async(id='') => {
    const url = id? `${base_url}/books/${id}` : `${base_url}/books`;
    return await commonRequest ('GET', url, {});
}

// delete book
export const deleteBookApi = async(id) => {
    return await commonRequest('DELETE', `${base_url}/books/${id}`, {});
}
