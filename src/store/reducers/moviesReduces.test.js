import Reducer from './moviesReducer';
import * as moviesActionTypes from '../actions/moviesActionTypes';

describe ('movies reducer', ()=>{

    it("Should return initial state of movie reducer",()=>{

        expect(Reducer(undefined,{})).toEqual({
          movies:[], 
          movie_details:{},
          notification:{} 
        });
    });

    it("Should receive movies objects upon GET_MOVIES_LIST action",()=>{

        expect(Reducer({
                          movies:[], 
                          movie_details:{},
                          notification:{}
                        },
                        {
                          type:moviesActionTypes.GET_MOVIES_LIST,
                          payload:[{
                                   id:33
                                  },{
                                   id:21
                                  }  
                          ]
                        })).toEqual({
                        movies:[{
                                  id:33
                                },{
                                  id:21
                                }
                        ], 
                        movie_details:{},
                        notification:{} 
        });
    });

});