import React from 'react';
import '../bootstrap-4.5.0-dist/css/bootstrap.min.css';
import '../fontawesome-free-5.13.0-web/css/all.css';
import '../mycss.css';

function Question() {
    return (
        <div>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td className="question-votes-panel">
                            <div className="text-center">
                                <button className="vote btn" type="button" onclick="upvote()" id="up-q">
                                    <i className="fa fa-caret-up fa-3x"></i>
                                </button>
                                <div className="vote-count" style={{ fontSize: "20px" }} id="votes-q" status="clicked">135</div>
                                <button className="vote btn" type="button" onclick="downvote()" id="down-q">
                                    <i className="fa fa-caret-down fa-3x"></i>
                                </button>
                                <button className="vote btn" type="button" onclick="bookmark()" id="bookmark-b">
                                    <i className="fa fa-bookmark fa-1x"></i>
                                </button>
                                <span style={{ fontSize: "14px" }} id="bookmark">12</span>
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
                                <a href="#" className="post-links mr-2">share</a>
                                <a href="#" className="post-links mr-2">improve this question</a>
                                <a href="#" className="post-links mr-2">follow</a>
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
                                        <div className="post-comments">
                                            <td>I believe Virtual DOM is talking about nodes that are not in the normal DOM. – Derek</td>
                                        </div>
                                    </tr>
                                    <tr className="border-bottom">
                                        <td>8</td>
                                        <div className="post-comments">
                                            <td>I agree with the above sentiments with regard to moderation. Moreover, I believe this is a very valid and useful question. "Virtual DOM" is often referenced, but rarely defined. – btiernay Apr 25 '15 at 21:38 </td>
                                        </div>
                                    </tr>
                                    <tr className="border-bottom">
                                        <td>2</td>
                                        <div className="post-comments">
                                            <td>I could not understand this with my limited web experience until reading the scotch.io tutorial to get started. They've done a great job. – Rachael Sep 10 '15 at 3:52</td>
                                        </div>
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