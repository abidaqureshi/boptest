import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieDetailModal from './movie_detail';

configure({adapter:new Adapter()});

describe('<MovieDetailModal/>',()=>{

  let wrapper;
  beforeEach(()=>{

    wrapper = shallow(<MovieDetailModal movieDetails />)

  })
  
  it("Should render movie detail popup if movieDetails props exist", ()=>{

      expect ( wrapper.find('.container')).toHaveLength(2);  
  })

});
