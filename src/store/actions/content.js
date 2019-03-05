import * as actionTypes from './actionTypes';
import * as config from './../../config';
import axios from 'axios';

export const setContent = (content) => {
    return {
        type: actionTypes.SET_CONTENT,
        content: content,
    };
}

export const getContentById = (ContentType, contentId) => {
    return dispatch => {
        axios
            .get(config.backEndDomain+'/'+ContentType+'/'+contentId)
            .then(res => {
                console.log(res);
                dispatch(setContent(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    };
}