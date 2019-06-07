import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlertModal from './alert';


configure({adapter:new Adapter()});

describe('<AlertModal />', ()=> {

    let wrapper;
    beforeEach (()=>{

        wrapper = shallow(<AlertModal infoMessage />);
    });

    it('should render alert when Infomessage is available', ()=>{
          
          expect(wrapper.find(".alert-primary")).toHaveLength(1);
    });  
});