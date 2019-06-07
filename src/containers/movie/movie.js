import React, { Component } from 'react';
import {connect} from  'react-redux';
import $ from 'jquery';
import _ from 'lodash';
import 'bootstrap';
import actionCreators from '../../store/actions/actions';
import Movies from './movies/movies';

/*
Movie statefull component
*/

class Movie extends Component{

    
    componentDidMount () {

        this.props.getTopRatedMovies();
      
    }

    componentDidUpdate (prevProps ) {     

        if ( prevProps.movieDetails.id !== this.props.movieDetails.id) {
          
          $('.loader').hide();
          $('#movieDetails').modal('show');

        }else if (this.props.notification && Object.keys(this.props.notification).length > 0) {
          
          const movieId = this.props.notification.id;
          const key = _.findKey(this.props.movies,{id:movieId});
          if(this.props.movies[key].popularity === 0) {
             
            $('.loader').hide();
            $('#alertBox').show();
          }
          

        }
    }

    openMovieDetails = id => {
           

      if ( this.props.movieDetails["id"] && this.props.movieDetails["id"] === id) {

        $('#movieDetails').modal('show'); 

      }else {

        $(`#loader_${id}`).show();
        this.props.showMovieDetails(id); 
      }
       
       
    }

  
    deleteMovieRating =  id  => {
      
      if (this.props.notifcation &&  this.props.notifcation.id === id ) {

        $('#alertBox').show();

      }else {

        $(`#loader_${id}`).show();   
        this.props.deleteMovieRating(id);
      }
      
      
    }
   

    render() {
      
      
      return (
      
        <Movies  
          movies={this.props.movies} 
          openAlert={()=>this.showNotificationBox()} 
          deleteRating={(id)=>this.deleteMovieRating(id)} 
          openMovieDetails={(id)=>this.openMovieDetails(id)} 
          movieDetails={this.props.movieDetails}  
          notification={this.props.notification} 
        />
      )
    }

    

}

const mapStateToProps = state => {

    return {

      movies: state.imdb.movies,
      movieDetails: state.imdb.movie_details,
      notification: state.imdb.notification
    }

};

const mapDispatchToProps = dispatch => {

    return {

        getTopRatedMovies: () => dispatch(actionCreators.getTopRatedMovies()),
        showMovieDetails: (id) => dispatch(actionCreators.showMovieDetails(id)),
        deleteMovieRating: (id) => dispatch(actionCreators.deleteMovieRating(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Movie);