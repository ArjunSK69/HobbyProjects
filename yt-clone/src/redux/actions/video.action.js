import request from "../../api"
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

export const getPopularVideos = () => async (dispatch, getState) => {
    try{
       dispatch({
        type: HOME_VIDEOS_REQUEST,

       }) 
       const { data } = await request("/videos",{
        params:{
            part:"snippet,contentDetails,statistics",
            chart:"mostPopular",
            regionCode:"IN",
            maxResults: 20,
            pageToken: getState().homeVideos.nextPageToken,
        },
       })

       dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
            category: 'All'
        },
       })
    }catch(error){
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
            console.log('Response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log('Request data:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error message:', error.message);
            dispatch({
                type: HOME_VIDEOS_FAIL,
                payload: error.message
            })
        }
    }
} 


export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try{
       dispatch({
        type: HOME_VIDEOS_REQUEST,

       }) 
       const { data } = await request("/search",{
        params:{
            part:"snippet",
            maxResults: 20,
            pageToken: getState().homeVideos.nextPageToken,
            q: keyword,
            type: 'video'
        },
       })

       dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
            category: keyword
        },
       })
    }catch(error){
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
            console.log('Response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log('Request data:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error message:', error.message);
            dispatch({
                type: HOME_VIDEOS_FAIL,
                payload: error.message
            })
        }
    }
} 