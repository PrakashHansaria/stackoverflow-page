import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function Question(props) {

    return (
        <div>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td className="question-votes-panel">
                            <div className="text-center">
                                <button className="vote btn" type="button" onClick={props.onClickUp} id="up-q">
                                    <i className="fa fa-caret-up fa-3x"></i>
                                </button>
                                <div className="vote-count" style={{ fontSize: "20px" }}>{props.votes}</div>
                                <button className="vote btn" type="button" onClick={props.onClickDown} id="down-q">
                                    <i className="fa fa-caret-down fa-3x"></i>
                                </button>
                                <button className="vote btn" type="button" onClick={props.onClickBookmark}>
                                    <i className="fa fa-bookmark fa-1x"></i>
                                </button><br></br>
                                <span style={{ fontSize: "13px" }} >{props.bookmark}</span>
                                <button className="vote btn mt-2" type="button">
                                    <i className="fa fa-history fa-1x"></i>
                                </button>
                            </div>
                        </td>
                        <td className="question-main">
                            <div className="question">
                                <p>
                                    Recently, I looked at Facebook's React framework. It uses a concept called "the Virtual DOM," which I didn't really understand.
                           </p>
                                <p>
                                    What is the Virtual DOM? What are the advantages?
                           </p>
                            </div>
                            <div className="tags">
                                <p>
                                    <span className="post-tags badge badge-info mr-1 p-1">
                                        javascript
                            </span>
                                    <span className="post-tags badge badge-info p-1" >
                                        reactjs
                            </span>
                                </p>
                            </div>
                            <div className="post-options mt-4">
                                <a href={() => false} className="post-links mr-2">share</a>
                                <a href={() => false} className="post-links mr-2">improve this question</a>
                                <a href={() => false} className="post-links mr-2">follow</a>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="question-comments">
                            <table className="post-comments table border-bottom">
                                <tbody>
                                    <tr className="border-bottom border-top">
                                        <td>1</td>
                                            <td className="post-comments">I believe Virtual DOM is talking about nodes that are not in the normal DOM. – Derek</td>
                                    </tr>
                                    <tr className="border-bottom">
                                        <td>8</td>
                                        <td className="post-comments">I agree with the above sentiments with regard to moderation. Moreover, I believe this is a very valid and useful question. "Virtual DOM" is often referenced, but rarely defined. – btiernay Apr 25 '15 at 21:38 </td>
                                    </tr>
                                    <tr className="border-bottom">
                                        <td>2</td>
                                        <td className="post-comments">I could not understand this with my limited web experience until reading the scotch.io tutorial to get started. They've done a great job. – Rachael Sep 10 '15 at 3:52</td>
                                    </tr>
                                </tbody>
                            </table>
                            <span className="post-links">add a comment</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Question;