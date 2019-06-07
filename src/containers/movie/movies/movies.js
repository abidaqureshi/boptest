import React from 'react';
import moment from 'moment';
import AlertModal from '../../../components/modals/alert';
import MovieDetailModal from '../../../components/modals/movie_detail';

/*
Movies stateless component
*/

const Movies = ( props ) => {

              
      let movies = [];
     
      if ( Object.keys(props.movies).length > 0 ) {
          movies = [...props.movies];
      }
      
      function formatDate (dateString) {

          const formattedString = moment(dateString).format('MMMM Do YYYY');
          return formattedString;

      }

     

      return (
              
        <div className="second">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-1 col-sm-5 text-white">
                <div className="heading">
                  <h2>Top Rated Movies</h2>
                </div>
              </div>
              <div className="col-sm-4 hidden-sm" />
              <div className="col-sm-2">
                <div className="search-container">
                  <div className="search text-center">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>  
                        
            <div className="row">
              {
                  movies.map(movie=>{
                    
                    return (
                      <div className="col-sm-4 thr-pic moviesList" key={movie.id}>
                        <div className="box bg-box">
                          <div className="row">
                            <div className="col-sm-4 ">
                                
                              <img 
                                onClick={()=>props.openMovieDetails(movie.id)} 
                                className="w-100 img-pos movieTitleLink" 
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                alt={movie.title} 
                              /> 
                                                             
                            </div>
                            <div className="col-sm-8 ">
                              <div className="row">
                                <div className="col-sm-8 des">
                                  
                                  <h3 
                                    id={`movieTitle_${movie.id}`} 
                                    onClick={()=>props.openMovieDetails(movie.id)} 
                                    className="title text-white des movieTitleLink"
                                  >
                                    {movie.title}
                                  </h3> 
                                     
                                  <small className="clr">
                                    {formatDate(movie.release_date)}
                                  </small>
                                  <p className="description clr">
                                    {`${movie.overview.substr(0,100)} ...`}
                                  </p>
                                  <div>
                                    <span>
                                      <button 
                                        type="button" 
                                        id={`movieDetailButton_${movie.id}`} 
                                        onClick={()=>props.deleteRating(movie.id)}
                                        className="movieTitleLink"
                                      >
                                          Delete rating
                                      </button>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-sm-3">
                                  <span className="green">
                                    {parseInt(movie.popularity,10)}
                                  </span>
                                  <div className="mg-top loader" id={`loader_${movie.id}`}>
                                    <div className="spinner-border text-light" role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                    )
                  })
              }                            
            </div>
          </div>          
          <div className="container">
            <AlertModal infoMessage={props.notification} />
          </div>
          <div className="container">
            <MovieDetailModal               
              movieDetails={props.movieDetails} 
            />  
          </div>
        </div>                 
        )
}

export default Movies;