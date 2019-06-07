/*

Store actions using redux thunk to update state to save in 
Redux store
*/

import axios from 'axios';
import Config from '../../config';
import * as moviesActionTypes from './moviesActionTypes';
import * as notificationActionTypes from './notificationActionTypes';



const getTopRatedMovies = (  ) => {

    return ( dispatch ) => {
        
        axios.get(`/movie/top_rated?${Config.apiKeyParams}&page=1`)
        .then(response=>{              
            dispatch({type:moviesActionTypes.GET_MOVIES_LIST, payload:response.data.results})
        }).catch(error=>{

            console.log(error);
        });
               
    }

}


const showMovieDetails = (id) => {

    
    return ( dispatch ) => {


           
        axios.get(`/movie/${id}?${Config.apiKeyParams}&page=1`)
        .then(response=>{
            
                dispatch({type:moviesActionTypes.GET_MOVIE_DETAILS, payload:response.data})
        }).catch(error=>{

            console.log(error);
        });

    }

}

const deleteMovieRating = (id) => {

    
    return ( dispatch ) => {

        axios.get(`authentication/guest_session/new?api_key=${Config.apiKey}`)
        .then(response=>{

           return  axios.delete(`/movie/${id}/rating?api_key=${Config.apiKey}&guest_session_id=${response.data.guest_session_id}`)
        })                   
        .then(response=>{
               
                if ( response.data["status_code"] === 13 ) {
                    
                    response.data["status_message"] = "Rating deleted successfully";
                }
                response.data["id"] = id;
                dispatch({type:notificationActionTypes.DELETE_MOVIE_RATING_NOTIFICATION, payload:response.data})
        }).catch(error=>{

                const obj = {
                            status_message:""
                }
                dispatch({type:notificationActionTypes.ERROR_NOTIFICATION,obj })
        });

    }

}

export default {
                    getTopRatedMovies,
                    showMovieDetails,
                    deleteMovieRating
                };