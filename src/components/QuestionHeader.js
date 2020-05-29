import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function QuestionHeader(props) {
    return (
        <div className="main-header border-bottom mb-3">
            <div className="row justify-content-between">
                <div className="col-5 ">
                    <h3>What is Virtual DOM?</h3>
                </div>
                <div className="col-3 ">
                    <button className="btn btn-primary align-right" onClick={props.clickAsk}>Ask Question</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Asked 6 years, 3 months ago
                    Active 11 days ago
                      Viewed 38k times</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionHeader;