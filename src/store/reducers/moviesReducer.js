import _ from 'lodash';
import * as moviesActionTypes from '../actions/moviesActionTypes';
import * as notificationActionTypes from '../actions/notificationActionTypes';


const initalState = {

                        movies:[], 
                        movie_details:{},
                        notification:{}                      

}

const reducer = (state = initalState, action ) => {


        switch(action.type) {


            case moviesActionTypes.GET_MOVIES_LIST:
            return {
                        ...state,
                        movies:[
                                    ...action.payload
                        ]
            }  

            case moviesActionTypes.GET_MOVIE_DETAILS:
            return {
                        ...state,
                        movie_details:{
                                    ...action.payload
                        }
            }
            
            case notificationActionTypes.DELETE_MOVIE_RATING_NOTIFICATION: {
                const movieList = [...state.movies];  
                const movieObjectKey = _.findKey(movieList,{id:action.payload.id})
                movieList[movieObjectKey].popularity = 0;
                return {
                            ...state,
                            movies:[...movieList],
                            notification:{
                                            ...action.payload
                            }
                }
            }

            case notificationActionTypes.ERROR_NOTIFICATION:                    
            return {
                        ...state,
                        notification:{
                                        ...action.payload
                        }
            }
                        
            default:
            return state;    
        }
}

export default reducer;