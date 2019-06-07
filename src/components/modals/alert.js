import React from 'react';
import $ from 'jquery';

const AlertModal = (props) => {

    function closeAlertBox ()  {

      $('#alertBox').hide();

    }

    return (
      <div id="alertBox" className="alertBox">
        <div className="alertBox-content">
          <span className="alertClose">&times;</span>
          <div>
            {(typeof props.infoMessage !== 'undefined' ?
                (
                  <div className="alert alert-primary" role="alert">
                    {props.infoMessage.status_message}
                  </div>
                ):"")}  
          </div>
          <button 
            type="button" 
            onClick={()=>{closeAlertBox()}} 
            className="closeAlerBoxButton btn btn-primary "
          >
            Ok
          </button>
        </div>
      </div>
    );
}

export default AlertModal;