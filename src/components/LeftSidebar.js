import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function LeftSidebar(props){
    return (
        <nav className="col-sm-2 d-none d-md-block sidebar border-right">
              <div className="sidebar">
                <h6 className="left-sidebar-button sidebar-heading d-flex justify-content-between align-items-left mt-4 mb-1 text-muted" 
                onClick={props.homeClick}>
                  <span >Home</span>
                </h6>
                <h6 className=" sidebar-heading d-flex justify-content-between align-items-left mt-4 mb-1 text-muted">
                  <span>Public</span>
                </h6>
                <h6 className="left-sidebar-button sidebar-heading d-flex justify-content-between align-items-center pl-0.5 my-2"
                onClick={props.mainClick}>
                  <span><i className="fas fa-globe-asia">  Stack Overflow</i></span>
                </h6>
                <h6 className="left-sidebar-button sidebar-heading d-flex justify-content-between align-items-center pl-3 my-2"
                onClick={props.tagsClick}>              
                  <span>Tags</span>
                </h6>
                <h6 className="left-sidebar-button sidebar-heading d-flex justify-content-between align-items-center pl-3 my-2"
                onClick={props.userClick}>
                  <span>users</span>
                </h6>
                <h6 className="left-sidebar-button sidebar-heading d-flex justify-content-between align-items-center pl-3 my-2"
                onClick={props.jobsClick}>
                  <span>Jobs</span>
                </h6>
              </div>
            </nav>

    )
}

export default LeftSidebar;