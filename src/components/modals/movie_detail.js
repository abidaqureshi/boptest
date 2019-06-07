import React from 'react';
import $ from 'jquery';

const MovieDetailModal = (props) => {

  function closeMovieDetails ()  {

    $('#movieDetails').modal('hide');

  }
    
    let innerHTML = "";
    if ( typeof props.movieDetails !== 'undefined' ) {

        const {movieDetails} = props; 
        innerHTML = ( 
          <div className="container">
            <div className="row">
              <p className="h3">                                 
                {movieDetails.title}
              </p>
            </div>
            <div className="row">
                          
              <div className="col-sm">
                <img 
                  src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`} 
                  alt={movieDetails.title} 
                /> 
              </div>
              <div className="col-sm">
                <div>
                  <span>
                      Popularity:  
                  </span>
                  <span>
                    {(movieDetails.popularity? parseInt(movieDetails.popularity,10):0)}
                  </span>
                </div>
                              
              </div>
              <div>
                <div className="container">
                  <p className="h1">
                    Overview
                  </p>
                  <p>
                    {movieDetails.overview}                                            
                  </p>
                </div>
              </div>
            </div>
          </div>
      );
    }


    return (
      <div
        className="modal fade" 
        id="movieDetails" 
        tabIndex="-2" 
        role="dialog" 
        aria-labelledby="movieDetailModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="movieDetailModalLabel">Movie detail</h5>
              <button 
                type="button" 
                className="close" 
                onClick={()=>closeMovieDetails()} 
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {innerHTML}
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={()=>closeMovieDetails()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )

}

export default MovieDetailModal;